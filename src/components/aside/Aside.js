import React, { forwardRef, useState } from "react";
import CardsSlider from "../cardsSlider/CardsSlider";
import { useApp } from "../../services/AppContext";
import { projectService } from "../../services/FirebaseService";

const Aside = forwardRef((props, ref) => {
  const {
    currentUser,
    setLoading,
    project,
    showNotifyMessage,
    showLoginDialog,
  } = useApp();

  const [price, changePrice] = useState(0);
  const [errorPrice, setErrorPrice] = useState(false);

  const handleChangePrice = (e) => {
    changePrice(e.target.value);
    if (e.target.value !== "") {
      setErrorPrice(false);
    }
  };

  const handleParticipate = () => {
    console.log("===== Presentation handleParticipate =====");
    if (!currentUser) {
      showLoginDialog(true);
      return;
    }

    if (!price) {
      setErrorPrice(true);
      return;
    }

    setLoading(true);

    projectService
      .participateUser(project.id, currentUser, price)
      .then((res) => {
        setLoading(false);
        console.log("===== handleParticipate: ", res);
      })
      .catch((err) => {
        setLoading(false);
        console.log("===== handleParticipate err: ", err.code);
        console.log("===== handleParticipate err: ", err.message);
        showNotifyMessage({
          type: "error",
          message: err.message,
        });
      });
  };

  return (
    <aside className="flex flex-col gap-9 w-full xl:w-fit items-center">
      <h1 className="text-gray-900 font-bold text-3xl text-left w-full">
        Contreparties
      </h1>
      <CardsSlider />
      <div
        ref={ref}
        className="flex flex-col p-6 font-semibold shadow-lg rounded-lg max-w-sm mb-12 xl:mb-0"
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
  );
});

export default Aside;
