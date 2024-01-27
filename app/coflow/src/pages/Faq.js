import React, { useState } from "react";
import Page from "../layouts/Page/Page";
import Container from "../layouts/Container/Container";
import Aside from "../components/aside/Aside";

function Faq() {
  const [selectedAccordion, setSelectedAccordion] = useState(null);

  const handleAccordionChange = (index) => {
    setSelectedAccordion(index);
  };

  return (
    <Page>
      <section className="w-full py-14 flex flex-col xl:flex-row items-center justify-center px-5 xl:px-0">
        <Container>
          <div className="w-full flex flex-col-reverse xl:flex-row gap-5 xl:gap-6 items-center xl:items-start">
            <div className="flex flex-col w-full h-fit">
              <h1 className="text-white font-bold text-3xl mb-8 text-left">
                FAQ
              </h1>
              <div className="mt-8 flex w-full flex-col rounded-xl first-letter:pt-7 gap-2">
                <div className="collapse collapse-arrow bg-mainCard">
                  <input
                    type="radio"
                    name="my-accordion-2"
                    onChange={() => handleAccordionChange(1)}
                    checked={selectedAccordion === 1}
                  />
                  <div
                    className={`${
                      selectedAccordion === 1 ? "text-main" : ""
                    } + collapse-title text-xl font-medium`}
                  >
                    Pourquoi faire appel à vous ?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Vous vous dites peut-être que ce projet, on aurait pu le financer autrement mais j’avais envie de vous inclure dans ce projet ! Ca fait longtemps que je veux lancer ma marque et je me suis dis que ca serait super si je pouvais utiliser les fonds récoltés pour vous faire kiffer, vous, mes abonnés ! J’avais envie en tant que communauté qu’on ait quelque chose qui nous unit, et quoi de mieux qu’un super concept Minecraft IRL ! Cette vidéo, je veux qu’elle nous représente, toute la communauté, et tout ce qu’on peut faire ensemble. C’est grâce à vous que cette vidéo va se faire et ça la rend encore plus spéciale ! Ensemble on peut aller vraiment loin et je sais que je peux vous faire confiance pour m’accompagner dans ce projet, alors merci !
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-mainCard">
                  <input
                    type="radio"
                    name="my-accordion-2"
                    onChange={() => handleAccordionChange(2)}
                    checked={selectedAccordion === 2}
                  />
                  <div
                    className={`${
                      selectedAccordion === 2 ? "text-main" : ""
                    } + collapse-title text-xl font-medium`}
                  >
                    Comment sont répartis les fonds récoltés ?
                  </div>
                  <div className="collapse-content">
                    <p>
                      La transparence c’est super important pour nous et on veut que vous sachiez comment l’argent récolté va être utilisé pour faire de ce projet Minecraft IRL une réalité. Voici comment nous allons répartir les fonds :<br />
                      37,5% pour payer le produit en soit : Plus d’un tiers de l’argent sert tout simplement à fabriquer les vêtements et rémunérer le fournisseur. Une partie de cet argent assure aussi la gestion de l’envoi des colis et le service client. On veut que tout se passe bien pour vous !<br />
                      5% pour le prestataire de paiement et le site Shopify : Pour que tout soit transparent, fiable et sécurisé, on a recours à un partenaire informatique et un prestataire de paiement. Ces 5% couvrent les frais de transaction, de gestion, et de maintenance du site, pour que tout se déroule sans accroc.<br />
                      20% de TVA récupérée par l'État : comme sur tout ce que vous achetez en France, il y a une part de TVA dans le prix, c’est une taxe incontournable. On peut récupérer une petite partie de cette taxe, mais une grande partie part dans les caisses de l'État.<br />
                      Et surtout, 37,5% pour la production de la vidéo : Voilà où les choses deviennent vraiment excitantes ! Presque quarante pourcent de vos contributions seront investis dans la production de notre super vidéo Minecraft IRL. Cela couvrira les coûts liés aux costumes, aux décors incroyables, aux équipements et aux équipes de tournage et de montage, et permettront même de faire venir des invités surprises. C’est la part la plus essentielle parce qu’elle nous permettra de donner vie à notre vision pour créer une vidéo incroyable.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-mainCard">
                  <input
                    type="radio"
                    name="my-accordion-2"
                    onChange={() => handleAccordionChange(3)}
                    checked={selectedAccordion === 3}
                  />
                  <div
                    className={`${
                      selectedAccordion === 3 ? "text-main" : ""
                    } + collapse-title text-xl font-medium`}
                  >
                    C’est quoi la loterie ?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Remercier la communauté c’est le plus important pour nous. C’est pourquoi on a créé une loterie pour vous faire kiffer ! On a mis le budget pour les lots avec une PlayStation 5, mais aussi pleins de lots Minecraft issus de la vidéo et de ma chaîne, mais on vous garde la surprise ;)<br />
                      Pour chaque achat sur le site (attention ça ne marche pas pour les dons libres) vous recevez un ticket d’entrée dans la loterie. <br />
                      Qu’est-ce que ça veut dire ? Ça veut dire que si vous achetez un tee-shirt, vous recevez un tee-shirt quali, vous soutenez le projet de vidéo et en plus vous gagnez peut-être une PS5 !
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-mainCard">
                  <input
                    type="radio"
                    name="my-accordion-2"
                    onChange={() => handleAccordionChange(4)}
                    checked={selectedAccordion === 4}
                  />
                  <div
                    className={`${
                      selectedAccordion === 4 ? "text-main" : ""
                    } + collapse-title text-xl font-medium`}
                  >
                    C’est quoi les récompenses ?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Vous avez peut-être remarqué qu’en plus du shop, il y a un système de points sur le site. Comme on sait qu’au fond vous êtes des gamers, on a mis en place des petites quêtes pour vous !<br />
                      Pour chaque quête que vous remplissez, vous gagnez des points. Vous gagnez aussi des points en dépensant sur le site : pour chaque euro dépensé, vous recevez 10 points.<br />
                      Au bout d’un certain nombre de points atteints, vous passez au niveau suivant et vous gagnez une récompense ! Il y a aussi un classement général et plus vous faites de quêtes, plus vous aurez de chance d’arriver à sa tête !
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-mainCard">
                  <input
                    type="radio"
                    name="my-accordion-2"
                    onChange={() => handleAccordionChange(5)}
                    checked={selectedAccordion === 5}
                  />
                  <div
                    className={`${
                      selectedAccordion === 5 ? "text-main" : ""
                    } + collapse-title text-xl font-medium`}
                  >
                    Quelle taille choisir ?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Pour vous aider à trouver la taille parfaite de votre armure diamant, on met à votre disposition un super guide des tailles juste ici !
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-mainCard">
                  <input
                    type="radio"
                    name="my-accordion-2"
                    onChange={() => handleAccordionChange(6)}
                    checked={selectedAccordion === 6}
                  />
                  <div
                    className={`${
                      selectedAccordion === 6 ? "text-main" : ""
                    } + collapse-title text-xl font-medium`}
                  >
                    D’où viennent nos produits ?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Nos produits sont imprimés en France, dans une usine près de Caen en Normandie. Notre fournisseur est reconnu pour la qualité de ses produits et travaille régulièrement avec des marques de merchandising comme celle d’Orelsan, de BigFlo et Oli ou encore avec des influenceurs. Reconnu pour sa fiabilité, notre imprimeur a choisi un fournisseur de textile proposant des vêtements durables et de qualité. Tous les produits sont en textile 100% bio ou recyclé. Notre fournisseur respecte les standards et certifications les plus strictes et contrôlées du marché pour assurer une production responsable et respectueuse de l’homme et de la planète. Les produits sont certifiés :<br />
                      Fair Wear Foundation: Toutes les usines partenaires du fournisseur sont régulièrement contrôlées, et auditées par la Fair Wear Foundation. Elle lutte pour que les entreprises et les usines dans le secteur du textile offrent de bonnes conditions de travail à leurs salariés.<br />
                      Global Organic Textile Standard (GOTS): Tous les produits en coton sont réalisés à partir de coton 100% biologique. Le coton bio est une fibre naturelle qui consomme bien moins d’eau que le coton traditionnel. Il est produit sans substances chimiques afin de respecter l’environnement mais aussi votre peau. Le label Global Organic Textile Standard (GOTS) garantit une production respectueuse de l’environnement et exige le respect d’un certain nombre de critères concernant la transformation, la fabrication, l’emballage, l’étiquetage, la vente et la distribution des textiles, à minimum 70% en fibres naturelles biologiques. Il garantit également le respect des conventions de l’Organisation Internationale du Travail et la qualité technique du textile.<br />
                      Oeko-Tex 100 : Le standard Oeko-Tex 100 protège la santé des consommateurs en contrôlant que la production du textile n’implique pas de produits chimiques dangereux pour la santé durant l’entièreté du processus de fabrication.<br />
                      PETA : La certification PETA certifie qu’aucun des produits, ou de leurs composants n’a été ou ne sera (jamais!) testé sur les animaux et que les produits sont composés de matières 100% véganes.<br />
                      Bref, on a cherché le mieux pour vous proposer des vêtements de bonne qualité, fabriqués dans des conditions éthique et respectueuses de l’environnement et des travailleurs, et tout ça au meilleur prix !
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-mainCard">
                  <input
                    type="radio"
                    name="my-accordion-2"
                    onChange={() => handleAccordionChange(7)}
                    checked={selectedAccordion === 7}
                  />
                  <div
                    className={`${
                      selectedAccordion === 7 ? "text-main" : ""
                    } + collapse-title text-xl font-medium`}
                  >
                    Quand est-ce que je recevrai ma commande ?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Quand vous commandez votre sweat ou votre tee-shirt, en fait c’est comme une précommande ! Vous recevrez une confirmation de commande, mais le produit n’arrivera pas tout de suite. C’est à la fin de la campagne que tous vos achats vous seront envoyés dans un délai maximum de 15 jours. On a trop hâte que vous les découvriez et de vous voir avec !
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-mainCard">
                  <input
                    type="radio"
                    name="my-accordion-2"
                    onChange={() => handleAccordionChange(8)}
                    checked={selectedAccordion === 8}
                  />
                  <div
                    className={`${
                      selectedAccordion === 8 ? "text-main" : ""
                    } + collapse-title text-xl font-medium`}
                  >
                    Que faire si je me suis trompé d’adresse ?
                  </div>
                  <div className="collapse-content">
                    <p>
                      En cas d’erreur lors de la saisie de l’adresse de livraison, il suffit de nous envoyer un petit mail à contact@briceshop.fr et on vous répondra au plus vite ! Attention, il n’est possible de modifier l’adresse de livraison qu’avant l’expédition du produit ! N’oubliez pas de préciser dans le mail votre nom, numéro de commande et l’adresse correcte où envoyer le produit dans le mail pour faciliter le changement.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-mainCard">
                  <input
                    type="radio"
                    name="my-accordion-2"
                    onChange={() => handleAccordionChange(9)}
                    checked={selectedAccordion === 9}
                  />
                  <div
                    className={`${
                      selectedAccordion === 9 ? "text-main" : ""
                    } + collapse-title text-xl font-medium`}
                  >
                    Comment renvoyer ma commande ? Quels sont les délais ?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Si par malheur, vous recevez le sweat ou le tee-shirt et qu’il ne vous va pas (ou qu’il ne vous plaît pas, mais ça, on n’y croit pas trop…) alors, il est possible de renvoyer la commande ! Nous acceptons uniquement les retours sous 14 jours à compter de la réception de la commande. Seuls les articles en l’état d’origine pourront faire l’objet d’un remboursement. Ils ne doivent être ni portés, ni lavés ou endommagés et accompagnés de leurs étiquettes et emballage d’origine. Les frais de retour seront déduits du remboursement. Il est important d’inclure le bon de retour dans le colis. Pour lancer la procédure de retour, écrivez-nous à contact@briceshop.fr.<br />
                      Si jamais la commande arrive avec un défaut ou qu’il y a une erreur sur le produit envoyé (promis on fait tout pour que ça n’arrive pas mais comme vous le savez, l’erreur est humaine !), nous prendrons en charge le retour du produit et en renverrons un autre, à nos frais. Encore une fois, vous devez nous écrire à contact@briceshop.frpour qu’un membre de notre team puisse vous assister dans la démarche. N’oubliez pas de nous communiquer votre numéro de commande et d’inclure des photos des défauts du produit pour qu’on puisse vous aider au mieux.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-mainCard">
                  <input
                    type="radio"
                    name="my-accordion-2"
                    onChange={() => handleAccordionChange(10)}
                    checked={selectedAccordion === 10}
                  />
                  <div
                    className={`${
                      selectedAccordion === 10 ? "text-main" : ""
                    } + collapse-title text-xl font-medium`}
                  >
                    Pourquoi mon paiement a été refusé ?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Si votre paiement est refusé, vous pouvez commencer par vérifier les éléments suivants:<br />
                      Les informations bancaires communiquées sont correctes,<br />
                      Le code de sécurité CVV à bien été renseigné,<br />
                      Le solde de votre compte est suffisant à régler l’achat,<br />
                      L’authentification n’as pas été refusée, si c’est le cas renseignez-vous auprès de votre banque,<br />
                      Votre connexion internet fonctionne. Un problème de connexion peut interférer avec le processus de paiement et déboucher sur un paiement refusé.<br />
                      Si malgré tout cela, les problèmes persistent, vous pouvez nous contacter à contact@briceshop.fr
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Aside />
          </div>
        </Container>
      </section>
    </Page>
  );
}

export default Faq;
