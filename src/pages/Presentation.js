import React, { useState, useEffect, useRef } from "react";
import Page from "../layouts/Page/Page";
import Container from "../layouts/Container/Container";
import YouTubeVideo from "../components/youtube/Youtube";
import CardS from "../components/cardsMini/CardS";
import CardM from "../components/cardsMedium/cardsM";
import imgMain1 from "../assets/imgMain1.png";
import imgMain2 from "../assets/imgMain2.png";
import imgMain3 from "../assets/imgMain3.png";
import imgMain4 from "../assets/imgMain4.png";
import imgMain5 from "../assets/imgMain5.png";
import imgMain6 from "../assets/imgMain6.png";
import imgMain7 from "../assets/imgMain7.png";
import imgMain8 from "../assets/imgMain8.png";
import imgMain9 from "../assets/imgMain9.png";
import imgMain10 from "../assets/imgMain10.png";
import imgMain11 from "../assets/imgMain11.png";
import imgMain12 from "../assets/imgMain12.png";
import imgMain13 from "../assets/imgMain13.png";
import imgDivider1 from "../assets/imgDivider1.png";
import imgDivider2 from "../assets/imgDivider2.png";
import imgDivider3 from "../assets/imgDivider3.png";
import imgDivider4 from "../assets/imgDivider4.png";
import imgDivider5 from "../assets/imgDivider5.png";

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
      setProductList(products);
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
      navigate(`/${Path.SIGNIN}`, { replace: true });
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
      navigate(`/${Path.SIGNIN}`, { replace: true });
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

    console.log("===== donationProduct: ", donationProduct);
    const variants = donationProduct.variants;
    let minPrice = parseFloat(variants[0].price.amount);
    let maxPrice = parseFloat(variants[variants.length - 1].price.amount);
    console.log(minPrice, maxPrice)
    for(const variant of variants) {
      const vPrice = parseFloat(variant.price.amount)
      if(minPrice > vPrice) {
        minPrice = vPrice;
      }

      if(maxPrice < vPrice) {
        maxPrice = vPrice;
      }
    }
    console.log(minPrice, maxPrice)

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
    if (!selVariant) {
      showNotifyMessage({
        type: Notify.Type.INFO,
        message: "You can't donate at this time. Please try later.",
      });
      return;
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
      <section className="w-full py-14 flex flex-col xl:flex-row items-center justify-center px-5 xl:px-0">
        <Container>
          <div className="w-full flex flex-col xl:flex-row px-5 gap-5 xl:gap-0 lg:px-0 justify-between items-center xl:items-start">
            <YouTubeVideo />
            <div className="flex flex-col gap-5">
              <h1 className="text-white font-bold text-3xl text-center xl:text-left">
                Commandes
              </h1>
              <div className="hidden sm:flex gap-4 flex-wrap justify-center xl:justify-between">
                <CardS>
                  <h3 className="text-base font-semibold text-white-50">
                    Montant total{" "}
                  </h3>
                  <span className="text-3xl font-extrabold text-white">
                    {nFormatter(project?.amount, 2)}{" "}
                  </span>
                  {/* <span className="text-xs font-normal text-white-400">
                    21% more than last month
                  </span> */}
                </CardS>
                <CardS>
                  <h3 className="text-base font-semibold text-white-50">
                    Participants{" "}
                  </h3>
                  <span className="text-3xl font-extrabold text-white">
                    {nFormatter(numberOfParticipant, 2)}{" "}
                  </span>
                  {/* <span className="text-xs font-normal text-white-400">
                    36% more than last month
                  </span> */}
                </CardS>
                <CardS>
                  <h3 className="text-base font-semibold text-white-50">
                    End date{" "}
                  </h3>
                  <span className="text-3xl font-extrabold text-white">
                    {counter > 0 ? getFormatTimeRemaining(counter) : "---"}{" "}
                  </span>
                  {/* <span className="text-xs font-normal text-white-400">
                    opacity: 0.6;
                  </span> */}
                </CardS>
              </div>
              <div className="flex w-full justify-center sm:hidden">
                <div className="stats bg-mainCard border-mainCard text-white">
                  <div className="stat place-items-start w-28 px-1.5">
                    <div className="stat-title text-xs">Total of amount </div>
                    <div className="flex items-end">
                      <div className="stat-value text-xl text-center">
                        {nFormatter(project?.amount, 2)}{" "}
                      </div>
                      {/* <div className="stat-desc text-success mb-0.5">
                        ↗︎ 21%
                      </div> */}
                    </div>
                  </div>

                  <div className="stat place-items-start w-28 px-1.5">
                    <div className="stat-title text-center text-xs">Users</div>
                    <div className="flex items-end">
                      <div className="stat-value text-xl text-center">
                        {nFormatter(numberOfParticipant, 2)}
                      </div>
                      {/* <div className="stat-desc text-success mb-0.5">
                        ↗︎ 36%
                      </div> */}
                    </div>
                  </div>

                  <div className="stat place-items-start w-28 px-1.5">
                    <div className="stat-title text-center text-xs">
                      Tasks done
                    </div>
                    <div className="flex items-end">
                      <div className="stat-value text-xl text-center">
                        {counter > 0 ? getFormatTimeRemaining(counter) : "---"}{" "}
                      </div>
                      {/* <div className="stat-desc text-success mb-0.5">
                        ↘︎ 24%
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center w-full my-8 justify-between">
                <div
                  className="tooltip tooltip-open tooltip-primary"
                  data-tip="18%"
                >
                  <progress
                    className="progress progress-primary w-64 xl:w-489"
                    value={18}
                    max="100"
                  ></progress>
                </div>
                <span className="text-white text-xl font-semibold">
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
      <section className="w-full flex flex-col items-center justify-center px-5 lg:px-0">
        <div className="w-full max-w-7xl mb-16 border-b-2 border-divider" />
        <Container>
          <div className="flex flex-col-reverse xl:flex-row w-full gap-28 justify-between pb-14">
            <div className="flex flex-col items-start gap-4">
              <h1 className="text-white text-3xl font-bold mb-5">
                Description du projet
              </h1>
              <p className="text-left text-lg font-normal">Salut les potes,</p>
              <p>
                Comme vous l'avez vu depuis mes vidéos cet été au bord de la
                piscine et dans le labyrinthe, j'aime de plus en plus tourner
                des concepts IRL, et j'ai l'impression que ça vous plaît aussi,
                donc ça me fait super plaisir ! Mais aujourd'hui, je suis super
                chaud pour vous parler d'un projet qui me tient énormément à
                cœur et que je travaille avec les équipes depuis longtemps.
              </p>
              <img src={imgMain1} className="w-full" />
              <p>
                Imaginez : une vidéo Minecraft IRL, avec un scénario à couper le
                souffle, des costumes qui déchirent, des décors qui déchirent
                encore plus, et bien sûr, des accessoires pour donner vie à
                Minecraft dans la vraie vie. Oui, mec, on va carrément passer de
                l'autre côté de l'écran !
              </p>
              <p>
                Je préfère garder une part de mystère pour rendre cette
                expérience encore plus spéciale. À mesure que la campagne
                progresse et que nous collectons les fonds nécessaires, nous
                pourrons dévoiler progressivement les détails excitants, les
                scénarios épiques et les surprises à venir.
              </p>
              <img src={imgMain2} className="w-full" />
              <p>
                En tout cas je veux que cette vidéo soit le point fort de ma
                chaîne, la vidéo la plus marquante, la plus incroyable et la
                plus ambitieuse que j'ai jamais réalisée. Mais soyons honnêtes,
                les potes, ça ne se fera pas sans vous.
              </p>
              <p>
                Mon but, c'est d'en faire une aventure épique, qui reflète le
                monde incroyable de Minecraft. Pour que ça devienne réalité,
                j'ai besoin de votre soutien et de votre passion.
              </p>
              <p>
                Il nous faut un budget pour les fringues, les décors, les bonnes
                caméras, et même pour faire venir des YouTubeurs de la team.
                Plus on est de fous, plus on va tout défoncer !
              </p>
              <p>
                C'est pour ça que je vous fais appel. Vous avez toujours été là,
                me soutenant, partageant vos idées et pensées dans les
                commentaires. Maintenant, j'ai vraiment besoin de vous pour que
                ce rêve se réalise. Ensemble, on peut créer quelque chose de
                super cool, une vidéo qui va exploser les compteurs et secouer
                le monde du gaming français.
              </p>
              <p>
                Votre soutien, c'est pas juste une contribution financière,
                c'est un signe de confiance !
              </p>
              <div className="w-full my-4 relative">
                <img src={imgDivider1} className="w-full h-[96px] rounded-lg" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <h1 className="text-white font-bold text-lg xl:text-2xl">
                    Comment nous aider
                  </h1>
                </div>
              </div>
              <p>
                Donc, voilà le plan les amis : pour réunir les fonds
                nécessaires, on a décidé de monter une boutique Shopify avec
                différents lots super cools. En gros, on ouvre une boutique de
                merchandising éphémère, mais contrairement à ce qui se fait
                d’habitude nous on vous promet de tout réinvestir dans la
                réalisation notre vidéo Minecraft IRL avec le seul objectif de
                vous faire kiffer !
              </p>
              <img src={imgMain3} className="w-full" />
              <p>
                C'est comme si on vous donnait la possibilité de contribuer en
                achetant des trucs vraiment stylés tout en sachant que chaque
                centime investi revient à soutenir notre projet. On vous prépare
                des lots sympas, comme des t-shirts, des sweats, des accessoires
                Minecraft exclusifs, et bien plus encore. Vous choisissez le lot
                qui vous fait kiffer, et en le prenant, vous faites partie
                intégrante de cette aventure.
              </p>
              <img src={imgMain4} className="w-full" />
              <p>
                Alors, rejoignez-nous dans cette aventure Minecraft IRL ! Vos
                contributions nous permettent de réaliser notre rêve, tout en
                vous offrant des récompenses vraiment stylées. On compte sur
                vous pour rendre cette vidéo épique !
              </p>
              <div className="w-full my-4 relative">
                <img src={imgDivider2} className="w-full h-[96px] rounded-lg" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <h1 className="text-white font-bold text-lg xl:text-2xl">
                    Pourquoi faire appel à vous  ?
                  </h1>
                </div>
              </div>
              <img src={imgMain5} className="w-full" />
              <p>
                Vous vous dites peut-être, "Pourquoi ils demandent pas à une
                grosse marque de les financer ?". Eh bien, laissez-moi vous
                expliquer. Dans le gaming, les budgets sont souvent pas énormes,
                et les marques qu'on a contactées n'ont pas vraiment capté
                l'essence de notre concept génial. Pour résumer personne n’a
                pris au serieux ce qu’on voulait faire et on a failli abandonner
                plusieurs fois l’idée.
              </p>
              <img src={imgMain6} className="w-full" />
              <p>
                On aurait pu essayer de négocier avec elles, mais ça aurait
                signifié lâcher certaines de nos idées originales. Et on veut
                pas sacrifier notre créativité pour plaire à des sponsors. Ce
                projet, c'est avant tout pour nous et pour vous, alors on veut
                qu'il reflète notre passion à fond.
              </p>
              <p>
                C'est pourquoi on se tourne vers vous, la vraie team, ceux qui
                comprennent ce qu'on veut faire. Avec votre soutien, on peut
                rendre cette aventure Minecraft IRL aussi géniale qu'on
                l'imagine.
              </p>
              <div className="w-full my-4 relative">
                <img src={imgDivider3} className="w-full h-[96px] rounded-lg" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <h1 className="text-white font-bold text-lg xl:text-2xl">
                    Comment sont répartis les fonds ?
                  </h1>
                </div>
              </div>
              <p>Répartition des fonds</p>
              <p>
                D'accord, les gars, c'est important que vous sachiez comment vos
                contributions vont être utilisées pour faire de ce projet
                Minecraft IRL une réalité. Voici comment nous allons répartir
                les fonds :
              </p>
              <p>
                35% pour les récompenses pour ceux qui participent : On veut
                vraiment vous remercier pour votre soutien, alors on a prévu des
                récompenses cool comme des t-shirts, des sweats, et d'autres
                goodies Minecraft exclusifs. De plus, une partie de cet argent
                sera réservée pour gérer l'envoi des colis et pour le service
                client en cas de problème. On veut que tout se passe comme sur
                des roulettes pour vous !
              </p>
              <p>
                7% pour le prestataire de paiement et le site Shopify : Pour que
                tout soit transparent et sécurisé, on utilise une plateforme de
                crowdfunding et un prestataire de paiement. Ces 5% couvrent les
                frais de transaction, de gestion, et de maintenance du site,
                pour que tout se déroule sans accroc.
              </p>
              <p>
                20% de TVA qui va directement dans les poches de l'État : Oui,
                on sait que c'est un peu dur à avaler, mais la TVA est
                incontournable. On peut récupérer une petite partie de cette
                taxe, mais une grande partie part directement dans les caisses
                de l'État. C'est comme ça que ça fonctionne, malheureusement.
              </p>
              <p>
                38% pour la production de la vidéo : Voilà où les choses
                deviennent vraiment excitantes ! Presque quarante pourcent de
                vos contributions seront investies dans la production de la
                vidéo Minecraft IRL de vos rêves. Cela couvrira les coûts liés
                aux costumes incroyables, aux décors époustouflants, aux
                équipements de tournage de qualité, et même pour faire venir des
                invités mystères. Cette part sera essentielle pour donner vie à
                notre vision et créer une vidéo inoubliable.
              </p>
              <img src={imgMain7} className="w-full" />
              <div className="w-full my-4 relative">
                <img src={imgDivider4} className="w-full h-[96px] rounded-lg" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <h1 className="text-white font-bold text-lg xl:text-2xl">
                    Et s’il reste des sous ?
                  </h1>
                </div>
              </div>
              <p>
                Ah, et j'ai presque oublié de mentionner un truc super
                important, les potes ! Si, par miracle, il reste des fonds après
                le tournage de la vidéo Minecraft IRL, soyez assurés que tout
                sera réutilisé pour le bien de la communauté. On ne gaspillera
                pas un seul lingot d'or !
              </p>
              <img src={imgMain8} className="w-full" />
              <p>
                Si on a la chance de disposer de fonds supplémentaires, on
                envisage de les investir dans un deuxième concept tout aussi
                génial. On veut continuer à vous surprendre avec des aventures
                incroyables et des vidéos toujours plus folles. Vos idées et vos
                suggestions seront également les bienvenues pour façonner le
                prochain projet.
              </p>
              <img src={imgMain9} className="w-full" />
              <p>
                Et si la première vidéo Minecraft IRL plaît autant qu'on
                l'espère (et on sait que ça sera le cas grâce à votre soutien),
                on pourrait également utiliser les fonds pour produire la suite
                de cette aventure épique. 
              </p>
              <p>
                Car après tout, on veut vous offrir une expérience inoubliable,
                et cela pourrait signifier que l'histoire continue dans le monde
                réel.
              </p>
              <img src={imgMain10} className="w-full" />
              <p>
                En résumé, votre contribution ne sera jamais gaspillée. Elle
                servira à alimenter notre créativité et à vous proposer encore
                plus de contenu Minecraft IRL passionnant et divertissant. On ne
                peut tout simplement pas attendre de vous montrer tout ce qu'on
                a en réserve, les amis !
              </p>
              <div className="w-full my-4 relative">
                <img src={imgDivider5} className="w-full h-[96px] rounded-lg" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <h1 className="text-white font-bold text-lg xl:text-2xl">
                    Toutes les manières de nous aider
                  </h1>
                </div>
              </div>
              <p>Lingot d'or Minecraft</p>
              <p>
                Jette un lingot d'or dans la cagnotte : Ça peut être un petit
                montant, un gros, ou même quelque chose entre les deux. Chaque
                centime nous rapproche de notre objectif de faire péter les
                compteurs avec cette vidéo.
              </p>
              <p>
                Fais péter le partage : Si t'as pas de thunes à claquer, no
                problemo ! Partage cette campagne avec tout le monde que tu
                connais. Plus on sera de joueurs dans ce jeu, mieux ce sera !
              </p>
              <img src={imgMain11} className="w-full" />
              <p>
                Peut-être que tu veux devenir un PNJ : Si tu vis pas trop loin
                de notre lieu de tournage et que t'as envie de te la jouer
                personnage non-joueur dans notre aventure, tiens-toi prêt pour
                les annonces de casting. Qui sait, tu pourrais être dans le game
                avec nous !
              </p>
              <img src={imgMain12} className="w-full" />
              <p>
                Hé les gars, si vous êtes arrivés jusque-là, vous êtes de vrais
                warriors et je vous envoie un grand merci du fond du cœur !
                Parce que l'objectif, c'est de rendre cette expérience
                inoubliable pour vous tous, on a gardé une surprise de taille :
                tous ceux qui participent auront la chance de plonger dans une
                loterie pleine de récompenses folles. On parle d'objets
                Minecraft cool, de fringues stylées, et on lâche même une
                PlayStation 5 pour faire sauter le game ! Alors, que la chance
                soit de votre côté et croisons les doigts pour que vous
                remportiez des cadeaux de folie !
              </p>
              <p>
                Finalement, cette aventure n'est pas seulement la mienne, mais
                la nôtre, car nous construisons quelque chose de vraiment énorme
                ensemble. Votre soutien, que ce soit par vos contributions, vos
                partages ou simplement votre présence, représente la pierre
                angulaire de ce projet.
              </p>
              <p>
                J'espère vraiment que cette vidéo deviendra une expérience
                inoubliable pour vous tous, un moment où la magie de Minecraft
                et la passion du gaming se rencontrent dans le monde réel. 
              </p>
              <p>
                Un grand merci à chacun d'entre vous pour votre incroyable
                soutien. En route vers cette incroyable aventure Minecraft IRL !
              </p>
              <img src={imgMain13} className="w-full" />
              <p>
                Imaginez toutes les possibilités ! Nous allons créer un monde
                Minecraft dans la vraie vie, avec des aventures passionnantes,
                des batailles épiques, et bien plus encore. Plus nous sommes
                nombreux, plus l'aventure sera palpitante. Vous aurez également
                un aperçu exclusif des coulisses du tournage, des bloopers
                amusants, et des récompenses spéciales pour nos généreux
                contributeurs.
              </p>
            </div>
            <aside className="flex flex-col items-center gap-9 mb-5">
              <h1 className="text-white-90 font-bold text-3xl text-left w-full">
                Produits
              </h1>
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
                        <h2 className="card-title font-semibold text-xl text-white-90">
                          {item.title}
                        </h2>
                        {/* <ul className="text-left mb-8 text-sm xl:text-base text-slate-800 font-normal">
                          {item.description.map((descItem, descIndex) => (
                            <li
                              className="desc-item opacity-50 text-white-90"
                              key={descIndex}
                            >
                              {descItem}
                            </li>
                          ))}
                        </ul> */}
                        <div
                          className="mt-3"
                          dangerouslySetInnerHTML={{
                            __html: item.descriptionHtml,
                          }}
                        ></div>
                        <div className="flex w-full justify-between items-center">
                          <div className="flex flex-col items-start">
                            <span className="text-white text-3xl font-extrabold">
                              {parseInt(item?.variants[0].price.amount)} €
                            </span>
                            {/* <span className="text-gray-400 text-sm font-normal">
                              {item.contributions} contributions
                            </span> */}
                          </div>
                          <button
                            className="btn btn-primary text-white mt-5"
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
                className="card flex flex-col p-6 font-semibold bg-mainCard"
              >
                <h1 className="text-xl text-white-90 mb-5">
                  Donne le montant que tu veux Montant à donner
                </h1>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className={`block w-full rounded-md bg-input py-4 px-7 text-input placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 mb-3 ${
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
