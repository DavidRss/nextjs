import React, { useState, useEffect, useRef } from "react";
import Page from "../layouts/Page/Page";
import Container from "../layouts/Container/Container";
import YouTubeVideo from "../components/youtube/Youtube";
import CardS from "../components/cardsMini/CardS";
import CardM from "../components/cardsMedium/cardsM";
import img1 from "../assets/image1.png";
import tree from "../assets/tree.png";

import CardsSlider from "../components/cardsSlider/CardsSlider";
import { useApp } from "../services/AppContext";
import {
  getCheckoutCustomAttributes,
  getFormatTimeRemaining,
  nFormatter,
  removeLineItemsFromCheckout,
} from "../utils/utils";
import { scrollToElement } from "../utils/ActionUtils";
import { shopifyService } from "../services/ShopifyService";
import { Notify, Order, Path } from "../constants/constants";
import { useNavigate } from "react-router-dom";

const Presentation = () => {
  const navigate = useNavigate();

  const {
    currentUser,
    setLoading,
    loadedProject,
    project,
    numberOfParticipant,
    showNotifyMessage,
    products,
    donationProduct,
    checkout,
    saveCheckout,
  } = useApp();

  const donationForm = useRef(null);
  const timer = useRef(null);

  const [productList, setProductList] = useState([]);
  const [counter, setCounter] = useState(0);
  const [price, changePrice] = useState(0);
  const [errorPrice, setErrorPrice] = useState(false);

  useEffect(() => {
    if (products.length > 0) {
      console.log("===== products: ", products);
      setProductList(products.slice(0, 3));
    }
  }, [products]);

  useEffect(() => {
    if (loadedProject && project) {
      const endSeconds = project.endOfDate.seconds;
      const curSeconds = parseInt(new Date().getTime() / 1000);
      if (endSeconds && endSeconds - curSeconds > 0) {
        setCounter(endSeconds - curSeconds);
      }
    }
  }, [loadedProject, project]);

  useEffect(() => {
    if (counter > 0) {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => setCounter(counter - 1), 1000);
    }

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [counter]);

  const handleClickProduct = async (productId) => {
    if (!currentUser) {
      navigate(Path.SIGNIN);
      return;
    }

    const product = productList.find((item) => item.id === productId);
    console.log("===== handleClickProduct: ", product);
    try {
      setLoading(true);

      let checkoutInfo = null;
      if (checkout) {
        checkoutInfo = await removeLineItemsFromCheckout(checkout);
      } else {
        checkoutInfo = await shopifyService.createCheckout();
      }

      checkoutInfo = await shopifyService.updateEmail(
        checkoutInfo.id,
        currentUser.email
      );

      const inputValue = getCheckoutCustomAttributes(
        currentUser,
        Order.Types.PRODUCT
      );

      checkoutInfo = await shopifyService.updateCheckoutAttributes(
        checkoutInfo.id,
        inputValue
      );

      const variants = product.variants;
      if (variants.length > 0) {
        const variant = variants[0];
        const lineItems = {
          variantId: variant.id,
          quantity: 1,
        };
        checkoutInfo = await shopifyService.addLineItems(
          checkoutInfo.id,
          lineItems
        );

        saveCheckout(checkoutInfo);
        console.log("===== checkoutInfo: ", checkoutInfo);

        window.open(checkoutInfo.webUrl);
      } else {
        showNotifyMessage({
          type: Notify.Type.ERROR,
          message: "This product is not available in a store.",
        });
      }
    } catch (err) {
      console.log("===== handleClickProduct error: ", err);
    }

    setLoading(false);
  };

  const handleChangePrice = (e) => {
    changePrice(e.target.value);
    if (e.target.value !== "") {
      setErrorPrice(false);
    }
  };

  const handleParticipate = async () => {
    console.log("===== donationProduct: ", donationProduct);
    if (!currentUser) {
      navigate(Path.SIGNIN);
      return;
    }

    if (!price) {
      setErrorPrice(true);
      return;
    }

    if (!donationProduct) {
      showNotifyMessage({
        type: Notify.Type.INFO,
        message: "You can't donate at this time. Please try later.",
      });
      return;
    }

    const variants = donationProduct.variants;
    const minPrice = parseFloat(variants[0].price.amount);
    const maxPrice = parseFloat(variants[variants.length - 1].price.amount);

    if (price < minPrice || price > maxPrice) {
      showNotifyMessage({
        type: Notify.Type.INFO,
        message: `You can donate the price between ${minPrice} and ${maxPrice} EUR`,
      });
      return;
    }

    const cPrice = Math.ceil(price);
    console.log("===== variants: ", variants);
    console.log("===== cPrice: ", cPrice);
    let selVariant = null;
    for (const item of variants) {
      if (parseInt(item.price.amount) === cPrice) {
        selVariant = item;
        break;
      }
    }
    console.log("===== selVariant: ", selVariant);
    if(!selVariant) {
      showNotifyMessage({
        type: Notify.Type.INFO,
        message: "You can't donate at this time. Please try later.",
      });
      return
    }

    setLoading(true);

    try {
      let checkoutInfo = null;
      if (checkout) {
        checkoutInfo = await removeLineItemsFromCheckout(checkout);
      } else {
        checkoutInfo = await shopifyService.createCheckout();
      }

      checkoutInfo = await shopifyService.updateEmail(
        checkoutInfo.id,
        currentUser.email
      );

      const inputValue = getCheckoutCustomAttributes(
        currentUser,
        Order.Types.DONATION
      );

      checkoutInfo = await shopifyService.updateCheckoutAttributes(
        checkoutInfo.id,
        inputValue
      );

      const lineItems = {
        variantId: selVariant.id,
        quantity: 1,
      };
      checkoutInfo = await shopifyService.addLineItems(
        checkoutInfo.id,
        lineItems
      );

      saveCheckout(checkoutInfo);
      console.log("===== checkoutInfo: ", checkoutInfo);

      window.open(checkoutInfo.webUrl);
    } catch (err) {
      console.log("===== donation processs error: ", err);
    }

    setLoading(false);
  };

  const handleOnParticipate = () => {
    scrollToElement(donationForm.current);
  };

  return (
    <Page handleOnParticipate={handleOnParticipate}>
      <section className="bg-white w-full py-14 flex flex-col xl:flex-row items-center justify-center px-5 xl:px-0">
        <Container>
          <div className="w-full flex flex-col xl:flex-row px-5 gap-5 xl:gap-0 lg:px-0 justify-between items-center xl:items-start">
            <YouTubeVideo />
            <div className="flex flex-col gap-5">
              <h1 className="text-gray-900 font-bold text-3xl text-center xl:text-left">
                {project?.title}
              </h1>
              <div className="hidden sm:flex gap-4 flex-wrap justify-center xl:justify-between">
                <CardS>
                  <h3 className="text-base font-semibold text-gray-500">
                    Total of amount{" "}
                  </h3>
                  <span className="text-3xl font-extrabold text-gray-900">
                    {nFormatter(project?.amount, 2)}{" "}
                  </span>
                  {/* <span className="text-xs font-normal text-gray-400">
                    21% more than last month
                  </span> */}
                </CardS>
                <CardS>
                  <h3 className="text-base font-semibold text-gray-500">
                    Number of participant{" "}
                  </h3>
                  <span className="text-3xl font-extrabold text-gray-900">
                    {nFormatter(numberOfParticipant, 2)}{" "}
                  </span>
                  {/* <span className="text-xs font-normal text-gray-400">
                    36% more than last month
                  </span> */}
                </CardS>
                <CardS>
                  <h3 className="text-base font-semibold text-gray-500">
                    End date{" "}
                  </h3>
                  <span className="text-3xl font-extrabold text-gray-900">
                    {counter > 0 ? getFormatTimeRemaining(counter) : "---"}{" "}
                  </span>
                  {/* <span className="text-xs font-normal text-gray-400">
                    opacity: 0.6;
                  </span> */}
                </CardS>
              </div>
              <div className="flex w-full justify-center sm:hidden">
                <div className="stats bg-white text-gray-900">
                  <div className="stat place-items-start w-28 px-1.5">
                    <div className="stat-title text-xs">Total Likes </div>
                    <div className="flex items-end">
                      <div className="stat-value text-xl text-center">
                        25.6K{" "}
                      </div>
                      <div className="stat-desc text-success mb-0.5">
                        ↗︎ 21%
                      </div>
                    </div>
                  </div>

                  <div className="stat place-items-start w-28 px-1.5">
                    <div className="stat-title text-center text-xs">Users</div>
                    <div className="flex items-end">
                      <div className="stat-value text-xl text-center">2.6M</div>
                      <div className="stat-desc text-success mb-0.5">
                        ↗︎ 36%
                      </div>
                    </div>
                  </div>

                  <div className="stat place-items-start w-28 px-1.5">
                    <div className="stat-title text-center text-xs">
                      Tasks done
                    </div>
                    <div className="flex items-end">
                      <div className="stat-value text-xl text-center">86%</div>
                      <div className="stat-desc text-success mb-0.5">
                        ↘︎ 24%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center w-full my-8 justify-between">
                <div
                  className="tooltip tooltip-open tooltip-accent"
                  data-tip="18%"
                >
                  <progress
                    className="progress progress-accent w-64 xl:w-489"
                    value={18}
                    max="100"
                  ></progress>
                </div>
                <span className="text-gray-900 text-xl font-semibold">
                  Niveau 0
                </span>
              </div>
              <button
                className="btn btn-primary text-white"
                onClick={handleOnParticipate}
              >
                Participer
              </button>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-white w-full flex flex-col items-center justify-center pt-20 px-5 lg:px-0">
        <Container>
          <div className="flex flex-col-reverse xl:flex-row w-full gap-28 justify-between pb-14">
            <div className="flex flex-col items-start gap-10">
              <div className="flex flex-col items-start">
                <h1 className="text-gray-900 text-3xl font-bold mb-5">
                  Description du projet
                </h1>
                <p className="text-left text-gray-900 text-lg font-normal">
                  {project?.description}
                </p>
              </div>
              <div className="flex flex-col text-left">
                <h1 className="text-gray-900 text-3xl font-bold mb-5">
                  A quoi va servir le financement?
                </h1>
                <p className="text-left text-gray-900 text-lg font-normal">
                  {" "}
                  En atteignant notre premier objectif de 7 000 euros pour ce
                  projet, nous serons en mesure de concrétiser une expérience
                  cinématographique immersive. Voici ce que nous pourrons
                  accomplir grâce à votre soutien : Location de costumes qui
                  plongeront nos acteurs et figurantsdans l'époque des cowboys
                  et des hors-la-loi.{" "}
                </p>{" "}
                <ul className="text-left text-gray-900 text-lg font-normal my-5 flex flex-col gap-4">
                  {" "}
                  <li className="list-item">
                    {" "}
                    Location de costumes qui plongeront nos acteurs et
                    figurantsdans l'époque des cowboys et des hors-la-loi.{" "}
                  </li>{" "}
                  <li className="list-item">
                    {" "}
                    Engager des figurants spécialisés dans les cascades et les
                    armes de cinéma, pour rendre chaque scène encore plus
                    spectaculaire.{" "}
                  </li>{" "}
                  <li className="list-item">
                    {" "}
                    Couvrir les frais de transport de toute l'équipe, assurant
                    ainsi que chacun puisse participer à cette aventure unique.{" "}
                  </li>{" "}
                  <li className="list-item">
                    {" "}
                    Rémunérer les riders talentueux qui participeront au
                    tournage, leur donnant l'opportunité de briller et de
                    repousser les limites du BMX.{" "}
                  </li>{" "}
                  <li className="list-item">
                    {" "}
                    Location de matériel photo et vidéo de haute qualité, pour
                    capturer chaque instant avec une précision exceptionnelle.{" "}
                  </li>{" "}
                  <li className="list-item">
                    {" "}
                    Création de modules en bois sur mesure, permettant aux
                    riders de réaliser des trikcs et d'élever le niveau des
                    performances.{" "}
                  </li>{" "}
                  <li className="list-item">
                    {" "}
                    Faire appel à un shaper professionnel pour concevoir des
                    modules en terre uniques, ajoutant une touche de créativité
                    à nos décors.{" "}
                  </li>{" "}
                </ul>{" "}
                <img className="mb-5" src={img1} alt="img1" />{" "}
                <p className="text-left text-gray-900 text-lg font-normal">
                  {" "}
                  Si notre objectif initial de 10 000 euros est dépassé, les
                  fonds supplémentaires seront utilisés pour soutenir la
                  production de notre boîte de production, Unicorn. Cela nous
                  permettra de développer de nouveaux projets vidéo audacieux,
                  repoussant les frontières de l'innovation artistique et de
                  l'expression créative. Chaque euro compte et contribue à la
                  réalisation de ce projet exceptionnel. Rejoignez-nous dans
                  cette aventure et ensemble, créons une expérience inoubliable
                  qui marquera les esprits et inspirera les passionnés de BMX du
                  monde entier.{" "}
                </p>
              </div>
              <div className="flex flex-col w-full text-left">
                <h1 className="text-gray-900 text-3xl font-bold mb-5">
                  Description du projet
                </h1>
                <div className="flex justify-center items-center w-full border border-gray-300 rounded-lg mb-5">
                  <img src={tree} alt="tree" />
                </div>
                <p className="text-left text-gray-900 text-lg font-normal">
                  Attention ! Les logos ne seront peut être pas identiques à
                  100% ! On travaille encore dessus !
                </p>
              </div>
            </div>
            <aside className="flex flex-col items-center gap-9 mb-5">
              <div className="block xl:hidden">
                <CardsSlider />
              </div>
              <div className="hidden xl:flex flex-col gap-9 w-full">
                {productList &&
                  productList.map((item, index) => (
                    <CardM key={index}>
                      <figure>
                        {item.images.length > 0 && (
                          <img src={item.images[0].src} alt="Shoes" />
                        )}
                      </figure>
                      <div className="py-4 px-5 xl:card-body">
                        <h2 className="card-title font-semibold text-xl text-gray-900">
                          {item.title}
                        </h2>
                        {/* <ul className="text-left mb-8 text-sm xl:text-base text-slate-800 font-normal">
                          {item.description.map((descItem, descIndex) => (
                            <li
                              className="desc-item opacity-50 text-gray-900"
                              key={descIndex}
                            >
                              {descItem}
                            </li>
                          ))}
                        </ul> */}
                        <div>{item.description}</div>
                        <div className="flex w-full justify-between items-center">
                          <div className="flex flex-col items-start">
                            <span className="text-primary text-3xl font-extrabold">
                              {item?.variants[0].price.amount} €
                            </span>
                            <span className="text-gray-400 text-sm font-normal">
                              {item.contributions} contributions
                            </span>
                          </div>
                          <button
                            className="btn btn-primary text-white"
                            onClick={() => {
                              handleClickProduct(item.id);
                            }}
                          >
                            Participer
                          </button>
                        </div>
                      </div>
                    </CardM>
                  ))}
              </div>
              <div
                ref={donationForm}
                className="flex flex-col p-6 font-semibold shadow-lg rounded-lg"
              >
                <h1 className="text-xl text-gray-900 mb-5">
                  Donne le montant que tu veux Montant à donner
                </h1>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className={`block w-full rounded-md bg-inputBg py-4 pl-7 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-3 ${
                    errorPrice ? "border border-red-800" : "border-0"
                  }`}
                  placeholder="Ex : 30"
                  value={price}
                  onChange={handleChangePrice}
                />
                <button
                  className="btn btn-primary text-white"
                  onClick={handleParticipate}
                >
                  Participer
                </button>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </Page>
  );
};

export default Presentation;
