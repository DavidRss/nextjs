import React from "react";

function Policy() {
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
      <dialog id="politique" className="modal">
        <div className="modal-box bg-dialog text-white-90 w-full max-w-5xl">
          <h3 className="font-bold text-xl">Politique de confidentialité</h3>
          <br/>
          <div className="t-static-container">
            <p>briceshop.fr accorde une grande importance au respect de votre vie privée et nous avons à cœur de construire avec vous des relations fortes et durables. La protection de vos données personnelles est primordiale à nos yeux.</p>
            <p>C’est pourquoi, nous mettons à votre disposition notre Politique de protection des données afin de vous informer, de la façon la plus claire possible, des traitements de données personnelles que nous mettons en œuvre.</p>
            <br />

            <h2 className="my-2 text-lg font-semibold">1. Qui sommes-nous et que recouvre la présente Politique ?</h2>
            <p>La présente Politique de protection des données s’applique aux données personnelles que nous collectons lorsque vous utilisez notre site internet briceshop.fr (ci-après dénommé le « Site »).</p>
            <p>Nous expliquerons, ci-dessous, de quelle manière nous collectons, utilisons et partageons vos données personnelles, ainsi que les choix qui s’offrent à vous au sujet de vos données personnelles.</p>
            <br />

            <h2 className="my-2 text-lg font-semibold">2. Qui est le responsable du traitement de vos données personnelles ?</h2>
            <p>briceshop.fr, dont le siège social est situé au 75, rue de Lourmel – 75 015 Paris, est le responsable des traitements mis en œuvre sur son Site.</p>
            <br />

            <h2 className="my-2 text-lg font-semibold">3. Quelles sont les données personnelles que nous collectons lorsque vous utilisez notre Site ?</h2>
            <p>Nous recueillons vos données personnelles lorsque vous nous les communiquez directement ou lorsque vous utilisez notre Site.</p>
            <br />
            <h3 className="font-semibold">3.1. Les données personnelles que vous nous fournissez</h3>
            <p>Nous collectons vos données personnelles à l’occasion des différents contacts que vous pouvez avoir avec nous. Nous les collectons notamment lors de la création de votre compte sur notre Site ou lorsque vous passez commande.</p>
            <p>Les données personnelles que nous collectons sont les suivantes :</p>
            <div className="ml-10">
              <p>Informations relatives à votre compte : nous avons besoin d’informations basiques pour créer votre compte client. Nous collectons votre nom, prénom, adresse mail et votre mot de passe ;</p>
              <p>Données personnelles relatives aux transactions et à la facturation : si vous passez commande, nous collecterons votre nom, prénom, adresse de livraison et de facturation ainsi que vos coordonnées bancaires pour traiter votre paiement et finaliser la transaction ;</p>
              <p>Communications avec nous : vous pouvez également nous fournir des informations lorsque vous contactez notre service client, comme votre nom, adresse email et numéro de commande ;</p>
            </div>
            <br />

            <h3 className="font-semibold">3.2. Les données personnelles que nous collectons automatiquement</h3>
            <p>Nous collectons également certaines informations de manière automatique lorsque vous utilisez notre Site :</p>
            <div className="ml-10">
              <p>Données personnelles relatives à vos connexions : nous collectons toutes les données personnelles que les navigateurs, les appareils mobiles et les serveurs nous transmettent, comme le type de navigateur, l’adresse IP, les identifiants d’appareil unique, les choix de langue, la date et l’heure d’accès, le système d’exploitation et les informations de réseau mobile. Nous collectons ces informations de connexion lorsque vous utilisez nos Services ;</p>
              <p>Informations provenant des cookies et d’autres technologies : un cookie est un ensemble d’informations qu’un site enregistre sur l’ordinateur d’un visiteur et que le navigateur de ce visiteur fournit au site chaque fois que le visiteur revient. </p>
            </div>
            <br />

            <h2 className="my-2 text-lg font-semibold">4. Quelles sont les finalités pour lesquelles nous collectons vos données personnelles ?</h2>
            <p>briceshop.fr s’assure de traiter vos données personnelles sur un fondement adéquat et pour des finalités déterminées.</p>
            <br />
            <h3 className="font-semibold">4.1. Fondements sur lesquels nous collectons et traitons vos données</h3>
            <p>briceshop.fr s’assure de traiter vos données personnelles sur une base légale pertinente.</p>
            <p>Ainsi, les traitements que nous mettons en œuvre reposent sur :</p>
            <div className="ml-10">
              <p>L’exécution d’un engagement contractuel, par exemple : la création de votre compte client et le traitement de vos données de facturation lorsque vous passez commande ;</p>
              <p>Le respect d’une obligation légale qui nous incombe ;</p>
              <p>L’existence d’un intérêt légitime nous poussant à traiter vos données personnelles, comme pour améliorer notre Site afin de pouvoir vous proposer une meilleure expérience utilisateur, assurer le bon fonctionnement de notre Site et répondre à vos demandes lorsque vous utilisez le formulaire de contact présent sur le Site ;</p>
              <p>Votre consentement, par exemple : avant de déposer et lire les cookies et autres traceurs, nous veillons à recueillir votre consentement. </p>
            </div>
            <br />

            <h3 className="font-semibold">4.2. Finalités pour lesquelles nous utilisons vos données personnelles </h3>
            <p>Nous utilisons vos données personnelles dans les conditions et aux fins énumérées ci-après :</p>
            <div className="ml-10">
              <p>Pour vous permettre d’utiliser pleinement notre Site et commander nos produits, par exemple : configurer et tenir votre compte, suivre vos commandes, consulter l’historique de vos commandes, ajouter et modifier vos adresses de livraisons et de facturations ;</p>
              <p>Surveiller et analyser les tendances, et mieux comprendre la manière dont vous interagissez avec notre Site, ce qui nous aidera à l’améliorer en retour et à le rendre plus facile à utiliser ;</p>
              <p>Mesurer, jauger et améliorer l’efficacité de notre publicité, et ainsi mieux comprendre les mécanismes de fidélisation de nos clients, par exemple : nous pouvons effectuer des analyses sur le nombre d’individus qui ont commandé un produit après avoir reçu un message marketing ;</p>
              <p>Surveiller et empêcher l’apparition de problèmes sur notre Site ;</p>
              <p>Vous informer, via e-mail par exemple, des offres et des promotions proposées par briceshop.fr et susceptibles de vous intéresser, solliciter votre avis ou vous tenir au courant de l’actualité de nos produits (dont vous pouvez vous désabonner à tout moment) ; </p>
              <p>Personnaliser votre expérience d’utilisation sur notre Site, cibler nos messages marketing à destination de certains groupes de clients (par exemple, ceux qui n’ont pas commandé depuis un certain laps de temps) et diffuser des publicités pertinentes.</p>
            </div>
            <br />

            <h2 className="my-2 text-lg font-semibold">5. Qui peut avoir accès à vos données personnelles ?</h2>
            <p>briceshop.fr partage vos données personnelles dans des circonstances précises et limitées. Nous avons mis en place des garanties appropriées pour préserver votre vie privée.</p>
            <p>Nous partageons vos données personnelles avec les acteurs suivants et/ou pour les finalités suivantes :</p>
            <div className="ml-10">
              <p>Prestataires externes : nous pouvons partager vos données personnelles avec nos prestataires pour vous fournir nos Services ;</p>
              <p>Partenaires commerciaux : nous pouvons également partager vos données personnelles avec nos partenaires commerciaux ;</p>
              <p>Les autorités de police, les autorités judiciaires ou administratives : nous pouvons divulguer vos données personnelles lorsqu’une obligation légale nous y oblige, comme en cas de réquisition judiciaire ;</p>
              <p>Protection de nos droits : nous pouvons également divulguer vos données personnelles pour défendre ou faire valoir nos droits en justice.</p>
            </div>
            <br />

            <h2 className="my-2 text-lg font-semibold">6. Pendant combien de temps conservons-nous vos données personnelles ?</h2>
            <p>Nous supprimons vos données personnelles lorsqu’elles ne sont plus nécessaires aux fins pour lesquelles nous les avons collectées ; sous réserve qu’aucune obligation légale ou réglementaire nous oblige à les conserver.</p>
            <p>Par exemple, nous conservons vos données de connexion pendant 12 mois à compter de leur collecte, conformément à nos obligations légales.</p>
            <br />

            <h2 className="my-2 text-lg font-semibold">7. Comment protégeons-nous vos données personnelles ?</h2>
            <p>briceshop.fr prend diverses mesures pour assurer la sécurité de vos données personnelles contre leur perte, leur utilisation abusive, leur accès non autorisé, leur divulgation, leur modification ou leur destruction.</p>
            <p>En particulier :</p>
            <div className="ml-10">
              <p>Dès la réception de vos données personnelles, nous appliquons des procédures et des mesures de sécurité strictes afin de nous efforcer d’empêcher tout accès non autorisé, l’accès aux bases de données personnelles étant strictement réservé aux personnes habilitées à en prendre connaissance dans le cadre de leurs missions ;</p>
              <p>Nous exigeons de nos sous-traitants qu’ils s’engagent à respecter la sécurité et la confidentialité de vos données personnelles, et ce par voie contractuelle.</p>
            </div>
            <br />

            <h2 className="my-2 text-lg font-semibold">8. Quels sont vos droits et comment pouvez-vous les exercer ?</h2>
            <p>Conformément à la réglementation applicable en matière de protection des données à caractère personnel, vous pouvez :</p>
            <div className="ml-10">
              <p>Demander l’accès à vos données personnelles ;</p>
              <p>Demander la rectification ou la suppression de vos données personnelles ;</p>
              <p>Vous opposer à notre utilisation et au traitement de vos données personnelles ;</p>
              <p>Nous demander de limiter l’utilisation et le traitement de vos données personnelles ;</p>
              <p>Retirer votre consentement lorsque le traitement repose sur cette base ;</p>
              <p>Demander la portabilité de vos données personnelles.</p>
            </div>
            <p>Enfin, vous pouvez nous faire part de vos directives quant à la conservation, l’effacement et la communication de vos données personnelles dans l’hypothèse où vous décéderiez.</p>
            <p>Si vous souhaitez nous contacter au sujet de l’un de ces droits, vous pouvez nous joindre par courrier à :</p>
            <p>par courriel à l’adresse suivante : <span className="text-primary font-semibold">contact@briceshop.fr</span></p>
            <p>Nous vous adresserons une réponse dans un délai de 1 mois après la réception de votre demande.</p>
            <p>Dans un souci de confidentialité et de protection des données personnelles, une copie d’un titre d’identité signé pourra vous être demandée.</p>
            <p>En cas de réponse insatisfaisante de notre part, vous pouvez introduire une réclamation auprès de la CNIL. Nous vous invitons néanmoins à nous contacter aux coordonnées ci-dessus avant d’introduire toute réclamation auprès de la CNIL.</p>
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

export default Policy;
