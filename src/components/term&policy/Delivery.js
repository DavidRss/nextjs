import React from "react";

function Delivery() {
  const scrollbarStyles = `
    ::-webkit-scrollbar {
      width: 92px;
      height: 11px;
      flex-shrink: 0;
      border-radius: 50px;
    }

    ::-webkit-scrollbar-thumb:vertical {
      background: #4A9F2E;
      border-radius: 50px;
    }

    ::-webkit-scrollbar-track:vertical {
      margin: 10px 0;
      background: #2E2E2E;
    }
  `;

  return (
    <>
      <style>{scrollbarStyles}</style>
      <dialog id="delivery" className="modal">
        <div className="modal-box bg-dialog text-white-90 w-full max-w-5xl">
          <h3 className="font-bold text-xl">Livraison & retour</h3>
          <div>
            <h2 className="my-2 text-lg font-semibold">LIVRAISON</h2>
            <p>Les colis sont reçus quinze à trente jours après votre commande. Le mode d'expédition standard est Colissimo, directement à votre domicile.</p>
            <p>Quel que soit le mode d'expédition choisi, nous vous fournirons dès que possible un lien qui vous permettra de suivre en ligne la livraison de votre colis.</p>
            <br />

            <h2 className="my-2 text-lg font-semibold">RETOURS</h2>
            <p>Pour demander un échange ou un remboursement, il vous suffit de nous envoyer un mail avec un mot expliquant votre demande à cette adresse contact@briceshop.fr</p>
            <br />

            <h2 className="my-2 text-lg font-semibold">PRODUIT ENDOMMAGÉ</h2>
            <p>Si un produit que vous avez commandé arrive endommagé ou cassé lors de la livraison, il n'est pas nécessaire de nous le renvoyer par la poste. Nous vous remercions de bien vouloir nous contacter par email à l'adresse suivante contact@briceshop.fr et accompagner votre message de photos de cet article. </p>
            <br />

            <p>À bientôt </p>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-primary text-white border-none hover:bg-primary">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Delivery;
