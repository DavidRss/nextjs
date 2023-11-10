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
      background: #C73E00;
      border-radius: 50px;
    }

    ::-webkit-scrollbar-track:vertical {
      margin: 10px 0;
      background: white;
    }
  `;

  return (
    <>
      <style>{scrollbarStyles}</style>
      <dialog id="politique" className="modal">
        <div className="modal-box bg-white text-white-90 w-full max-w-5xl">
          <h3 className="font-bold text-lg">PRIVACY POLICY</h3>
          <br/>
          <div className="t-static-container">
            <p>Mention légale</p>
            <p>
              DONNÉES À CARACTÈRE PERSONNEL : NÉCESSITÉ, FINALITÉS, TEMPS DE
              CONSERVATION ET DROITS DE L'UTILISATEUR
            </p>

            <br/>
            <p>
            COFLOW respecte la règlementation RGPD et s'engage :
            </p>
            <p>1/ A ne jamais vendre des données personnelles collectées.</p>
            <p>2/ A ne jamais exploiter/traiter ou conserver des données personnelles collectées :</p>
            <p>a. autrement que pour satisfaire à une mission légale et respecter une règlementation : lutte contre le blanchiment, KYC etc.</p>
            <p>b. ou sinon, après en avoir demandé explicitement l'autorisation à leurs titulaires pour des besoins propres à la bonne marche de son activité.</p>
            <p>3/ À effacer ou à anonymiser au bout de trois ans (quatre ans au plus tard) toute donnée personnelle dont la conservation n’est pas justifiée par l’activité en cours, par la loi ou par la règlementation.</p>
            <br/>

            <p>Qu'est-ce qu'une donnée à caractère personnel ? Il s'agit d'un terme qui englobe toute information concernant une personne physique identifiée ou identifiable (personne concernée) par exemple un nom, une adresse ou un numéro de téléphone renseigné.</p>
            <p>Ces données à caractère personnel concernent aussi des éléments d'identifications directs ou indirects comme une adresse IP. CoFlow recueille des données dans le but d’assurer le meilleur suivi possible de ses utilisateurs (suivi des campagnes et accompagnement des porteurs de projet, aide à la communication, délivrance de contreparties ou de reçus). Elles sont principalement utilisées pour la gestion des relations avec les utilisateurs, et le cas échéant, le traitement de vos demandes relatives à nos services et à une demande d'informations.</p>
            <p>CoFlow utilise différentes catégories de cookies. Nous vous invitons à consulter la page dédiée à ce sujet.</p>
            <br/>

            <p>Aucune donnée personnelle n'est vendue à des tiers. Dans l'exercice de notre activité, des prestataires de services de CoFlow sont toutefois susceptibles d'utiliser vos données personnelles. A noter que CoFlow s'assure de la fiabilité des prestataires choisis et de leur utilisation de vos données personnelles. En cas de tentative de fraude ou de fraude avérée par un utilisateur, conformément à ses Conditions Générales d'Utilisation, CoFlow se réserve le droit de bloquer le compte concerné qui n'aura plus accès à nos Services. CoFlow pourra être amenée à conserver les données du compte bloqué à des fins d'investigation.</p>
            <div className="w-1/4 border-b border-black mt-4"></div>
            <br/>

            <p>LES DONNÉES UTILISÉES PAR COFLOW</p>
            <p>Données d'inscription</p>
            <p>Afin d'assurer un service performant de mise en relation, CoFlow a besoin de recueillir des informations vous concernant. Les données d'inscription demandées sont : - Prénom - Nom - Adresse e-mail - Mot de passe</p>
            <br/>

            <p>Données du porteur de projet</p>
            <p>Pour l’ouverture d’un compte de paiement, au nom d’une personne physique, sont requises les informations suivantes : nom et prénom – adresse email valide – date de naissance – adresse postale – nationalité – pays de résidence – coordonnées bancaires.</p>
            <p>Pour une personne morale, seront demandées la raison sociale de la personne morale, une adresse email et un justificatif d’identité du dirigeant ou de la personne ayant pouvoir pour engager la personne morale dans le cadre des opérations réalisées, ainsi qu’un RIB de la personne morale.</p>
            <p>L’utilisateur peut renseigner des données supplémentaires, comme un numéro de téléphone, afin de faciliter les échanges. Dès lors, CoFlow utilisera à bon escient les données du porteur de projet de façon à l’accompagner au mieux tout au long de sa campagne de collecte.</p>
            <br/>

            <p>Données du contributeur</p>
            <p>Les seules données requises de la part du contributeur sont celles du formulaire d’inscription, à savoir Prénom - Nom - Adresse e-mail - Mot de passe - adresse postale </p>
            <p>CoFlow s’engage à utiliser à bon escient les données du contributeur de façon à lui fournir les meilleurs services dédiés (envoi de la contrepartie choisie, délivrance de reçu...).</p>
            <br/>

            <p>Données de paiement</p>
            <p>L'utilisation d'un token de carte via notre prestataire de paiement nous permet d'accepter les paiements sans stocker les informations sensibles de la carte bancaire. Les opérations de paiement en ligne sont effectuées par un procédé sécurisé et chiffré selon l'état de l'art.</p>
            <p>Les données de paiement sont traitées et stockées par notre prestataire, Stripe, conformément aux règles en vigueur dans le secteur du commerce électronique.</p>
            <br/>

            <p>Données publiques</p>
            <p>Une donnée à caractère personnel rendue publique avec votre consentement sera considérée comme une donnée publique sur le site de CoFlow. Les données publiques sont : prénom et nom, dans le cadre de la publication d’un commentaire sur la page d’un projet (si vous décidez de laisser votre nom apparaître sur cette page, possibilité de laisser un message en anonyme).</p>
            <div className="w-1/4 border-b border-black mt-4"></div>
            <br/>

            <p>TEMPS DE CONSERVATION DE VOS DONNÉES À CARACTÈRE PERSONNEL</p>
            <p>Vos données personnelles sont conservées uniquement pendant la période nécessaire à l'exécution de nos Services et à la durée de votre adhésion à ces derniers.</p>
            <div className="w-1/4 border-b border-black mt-4"></div>
            <br/>

            <p>DROITS</p>
            <p>Vous pouvez exercer des droits attachés à vos données personnelles. Pour exercer un droit d'accès, de rectification, d'effacement, d'opposition, de portabilité des données ou de limitation du traitement, écrivez à rgpd@coflow.fr. Une réponse vous sera apportée dans les meilleurs délais. Une réclamation est aussi formulable auprès de la Commission Nationale Informatique et Libertés (CNIL).</p>
            <br/>

            <p>SÉCURITÉ ET PROTECTION DES DONNÉES PAR COFLOW</p>
            <p>Nous mettons tout en œuvre pour protéger vos données contre les menaces informatiques comme la perte des données et l'accès illégal. Un transfert chiffré (TLS) entre l'utilisateur et le Serveur renforce la sécurité de l'opération. L'accès à votre compte CoFlow n'est possible qu'après une saisie de votre mot de passe personnel directement rentré dans la case adéquate. Il vous incombe de garder vos informations d'accès confidentielles et de vous déconnecter de notre site. Les données stockées par CoFlow sont hébergées dans l'Union Européenne et gérées sur des serveurs qui respecte le droit européen à la protection des données et en particulier le RGPD.</p>
            <br/>

            <p>DROIT DE MODIFICATION DE LA POLITIQUE DE CONFIDENTIALITÉ PAR COFLOW</p>
            <p>CoFlow pourra être amenée à effectuer des modifications de la présente politique. Si une évolution importante est apportée à notre politique de confidentialité, tous les utilisateurs seront avertis notamment par e-mail.</p>
            <br/>

            <p>La solution COFLOW :</p>
            <p>* Permet d'effacer ou d'anonymiser toute donnée personnelle dont la conservation n’est pas justifiée par l’activité en cours, par la loi ou par la règlementation.</p>
            <p>* Permet de paramétrer les durées d’utilité courante et les durées d’utilité administratives.</p>
            <p>* Est conçue de telle sorte qu’elle évite la possibilité de fuites de données personnelles.</p>
            <p>* Est en mesure de conserver trace du consentement de l’usager : acte nécessairement positif, libre et éclairé.</p>
            <br/>

            <p>Comprend un module permettant :</p>
            <p>* D’identifier les données à caractère personnel dont la durée d’utilité est atteinte ;</p>
            <p>* D’éliminer ou d’anonymiser les données.</p>
            <p>* D’extraire les données stockées relatives à une personne physique, afin d’apporter une réponse optimale si cette dernière fait valoir son droit d’accès aux données qui la concernent.</p>
            <br/>

            <p>Utiliser les services CoFlow revient à accepter toute mise à jour apportée à cette politique de confidentialité. Chaque utilisateur de CoFlow est invité à se tenir au courant des dernières informations en date concernant la mise en pratique de notre politique de confidentialité. Vous pourrez faire valoir votre droit d'opposition en écrivant à rgpd@coflow.fr dans les termes prévus par les Conditions Générales d'Utilisation applicables à nos Services.</p>
            <p>NOUS CONTACTER Pour toutes questions liées aux données personnelles, veuillez nous écrire à l'adresse suivante : rgpd@coflow.fr.</p>
            <br/>

            <p>UTILISATION DES COOKIES</p>
            <p>Un « cookie » ou traceur est un fichier électronique déposé sur un terminal, comme c'est le cas d'un ordinateur, d'une tablette, d'un smartphone …. Il est lu par exemple lors de la consultation d'un site internet, de la lecture d'un courrier électronique, de l'installation ou de l'utilisation d'un logiciel ou d'une application mobile et ce quel que soit le type de terminal utilisé.</p>
            <br/>

            <p>Lors de la toute première navigation sur le site de COFLOW, une bannière explicative sur l'utilisation des « cookies » apparaîtra pour informer l'internaute. Dès lors, en poursuivant la navigation, il sera réputé informé et aura accepté l'utilisation des dits « cookies ». En naviguant sur la page de campagne, des « cookies » émanant de la société COFLOW sont susceptibles d'être déposés sur votre terminal. Le présent document a pour but de vous informer sur la nature et la finalité des cookies utilisés par COFLOW.</p>
            <p>Les cookies simplifient votre navigation et votre utilisation des Services COFLOW. Ils sont utilisés à différents buts notamment : authentifier les utilisateurs, mémoriser leurs préférences et leurs historiques de navigation ou encore analyser la fréquentation du site. Les cookies sont enregistrés sur le disque dur de votre ordinateur et/ou également sur votre appareil mobile si vous l'utilisez pour accéder à nos Services. La restriction de certains cookies peut affecter le fonctionnement de certaines fonctionnalités du site et des services COFLOW.</p>
            <br/>

            <p>Les différents cookies utilisés par COFLOW</p>
            <p>Différentes catégories de cookies (certains sont anonymisés) sont utilisées par COFLOW.</p>
            <p>Vous avez la possibilité de gérer les cookies qui utilisent des données personnelles. Une connexion chiffrée transfère les cookies à nos services.</p>
            <br/>

            <p>Cookies fonctionnels</p>
            <p>Ces cookies de suivi d'utilisation sont indispensables au fonctionnement optimal de nos Services. Ils incluent à titre d'exemple des cookies permettant une connexion sécurisée à votre espace personnel et d'autres visant à simplifier votre expérience utilisateur. Le consentement donné pour ces cookies est valable 12 mois.</p>
            <br/>

            <p>Pour que l'utilisateur bénéfice d'une expérience de navigation optimale, l'«Identifiant Utilisateur » est collecté par COFLOW de façon à ce que la navigation concorde toujours avec le même utilisateur.</p>
            <p>Les cookies fonctionnels de suivi d'utilisation ne sont pas désactivables car indispensables au bon fonctionnement du service.</p>
            <br/>

            <p>Gestion de vos cookies</p>
            <p>À tout moment, vous pouvez configurer votre navigateur de manière à enregistrer, contrôler ou supprimer les cookies.</p>
            <br/>

            <p>Pour plus d'informations sur l'utilisation, la gestion et la suppression des « cookies » pour tout type de navigateur, voici le lien à consulter : <a href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser" target="_blank">https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser.</a></p>
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
