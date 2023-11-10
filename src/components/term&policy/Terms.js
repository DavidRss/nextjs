import React from "react";

function Terms() {
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
      <dialog id="termes" className="modal">
        <div className="modal-box bg-white text-white-90 w-full max-w-5xl">
          <h3 className="font-bold text-lg">TIPEEE'S TERMS & CONDITIONS</h3>
          <div>
            <p>PRÉAMBULE</p>
            <p>
            La solution COFLOW consiste en une prestation technique de fourniture d’un hébergement et en la mise à disposition des fonctionnalités nécessaires à la mise en œuvre d’opérations de financement participatif. Elle s’adresse à ceux qui veulent créer « en deux clics » leur propre page de finance participative de dons et/ou de préachat, 
La solution COFLOW a été développée nativement en marque blanche. La solution COFLOW s’adapte naturellement aux besoins et aux contraintes des clients : elle ne clone pas une solution existante.
            </p>
            <p>La solution COFLOW intègre une solution de paiement via un partenaire établissement de paiement/ ou via un établissement de monnaie électronique, dûment contrôlé par les autorités de surveillance bancaires.</p>
            <p>La solution COFLOW est multidevises.</p>
            <p>La solution COFLOW s’intègre facilement dans des sites existants.</p>
            <p>La solution COFLOW met à disposition : des tableaux de bord de pilotage (suivis projets par projet, des suivis consolidés, des indicateurs de performance, Google Analytics), des envoi de mails automatisés, une aide en ligne + FAQ, la possibilité de gérer une lotterie à destination des participants.</p>
            <p>La solution COFLOW est une solution facilement paramétrable.</p>
            <p>La solution COFLOW permet de gérer plusieurs modèles économiques : campagnes « tout ou rien », campagnes « sans condition », campagnes avec ou sans contreparties, campagnes avec effets de seuils, typologies de commission multiples (commissions prélevées au lancement de projet, à chaque transaction, en cas de succès et suivant le niveau d’accompagnement des projets).</p>
            <p>LES PRESENTES CONDITIONS GENERALES D’UTILISATION ONT POUR OBJET DE DEFINIR LES TERMES ET LES CONDITIONS D’ACCES ET D’UTILISATION DE LA PLATE FORME COFLOW ET DANS CE CADRE, DE DÉFINIR LE RÔLE ET LES OBLIGATIONS DE CHACUN.</p>
            <p>EN LES ACCEPTANT l’UTILISATEUR DU SERVICE DE LA PLATE FORME COFLOW RECONNAIT EXPRESSEMENT AVOIR PRIS CONNAISSANCE ET ACCEPTÉES CELLES CI</p>
            <br/>

            <p>LES PRESENTES CONDITIONS GENERALES D’UTILISATION ONT POUR OBJET DE DEFINIR LES TERMES ET LES CONDITIONS D’ACCES ET D’UTILISATION DU SERVICE COFLOW ET DE DÉFINIR LE RÔLE ET LES OBLIGATIONS DE CHACUN.</p>
            <p>EN LES ACCEPTANT L’UTILISATEUR DU SERVICE COFLOW RECONNAIT EN AVOIR PRIS CONNAISSANCE.</p>
            <p>POUR TOUTE OUVERTURE D’UN COMPTE, L’UTILISATEUR RECONNAIT EGALEMENT AVOIR PRIS CONNAISSANCE ET ACCEPTÉ LES CONDITIONS GENERALES D’UTILISATION DE L’ETABLISSEMENT DE PAIEMENT/ou de MONNAIE ELECTRONIQUE avec lequel travaille COFLOW, lesquelles sont disponibles à partir des CGU des plateformes, clients de COFLOW.</p>
            <p>L’UTILISATEUR DOIT LIRE ATTENTIVEMENT LES PRESENTES CONDITIONS GENERALES D'UTILISATION ET LES COMPRENDRE. EN LES ACCEPTANT IL S’ENGAGE À EN RESPECTER LES TERMES ET LES CONDITIONS.</p>
            <p>L’ACCEPTATION DES CONDITIONS GENERALES D’UTILISATION DU SERVICE COFLOW EST CONSERVÉE ET ARCHIVÉE PAR COFLOW DANS SES SYSTÈMES INFORMATIQUES DE FAÇON INALTÉRABLE, SÛRE ET FIABLE. L’UTILISATEUR PEUT À TOUT MOMENT LES CONSULTER, LES REPRODUIRE, LES STOCKER SUR SON ORDINATEUR, SUR UN AUTRE SUPPORT, SE LES ENVOYER PAR COURRIER ÉLECTRONIQUE OU LES IMPRIMER SUR PAPIER DE MANIÈRE À LES CONSERVER. </p>
            <p>UTILISATEURS, SI VOUS N'ETES PAS D'ACCORD AVEC LES TERMES ET LES CONDITIONS PRESENTEES OU QUE VOUS NE SOUHAITEZ PAS LES RESPECTER, NE LES ACCEPTEZ PAS MAIS VOUS NE POURREZ ALORS PAS BENEFICIER DES SERVICES PROPOSES !</p>
            <div className="w-1/4 border-b border-black mt-4"></div>
            <br/>

            <h2 className="my-2 text-xl font-semibold">
            1. DÉFINITIONS
            </h2>
            <p>Aux fins des présentes conditions générales d’utilisation du service COFLOW, les mots suivants ont, lorsqu’ils sont utilisés en majuscules, et sauf si le contexte en commande une interprétation différente, la signification suivante :</p>
            <p>* BENEFICIAIRE EFFECTIF : Celui qui bénéficie directement des fonds ; il peut donc être distinct du PORTEUR DE PROJET</p>
            <p>* CLIENT COFLOW : Le CLIENT COFLOW est une PORTEUR DE PROJET qui décide d’utiliser la solution technique COFLOW, le temps d’une campagne unique de FINANCE PARTICIPATIVE ; </p>
            <p>* COLLECTE : Montant des fonds recherchés par l’opération de FINANCE PARTICIPATIVE. Les attributs de la COLLECTE sont sa durée et son montant. Ils sont librement fixés par le PORTEUR DE PROJET.</p>
            <p>* COMPTE DE PAIEMENT DU CONTRIBUTEUR : compte du CONTRIBUTEUR géré par l’ETABLISSEMENT DE PAIEMENT ou de MONNAIE ELECTRONIQUE rattaché potentiellement à un IBAN ou à un numéro de carte bancaire.</p>
            <p>* COMPTE DE PAIEMENT DU PORTEUR DE PROJET : compte DU PORTEUR DE PROJET géré par l’ETABLISSEMENT DE PAIEMENT ou de MONNAIE ELECTRONIQUE, rattaché potentiellement à un IBAN ou à un numéro de carte bancaire. Il permet de percevoir les sommes des CONTRIBUTEURS.</p>
            <p>* CONTREPARTIES (voir RECOMPENSES). LES CONTREPARTIES peuvent être matérielles ou immatérielles.</p>
            <p>* CONTRIBUTEUR (ou DONATEUR) : toute personne physique ou morale qui participe au financement d’un PROJET en versant une CONTRIBUTION CONTRIBUTION (ou DON ou PRÉ-ACHAT ou INVESTISSEMENT ou apport de compétence) : la CONTRIBUTION est la somme d’argent versée par le CONTRIBUTEUR pour aider un PROJET.</p>
            <p>* DONATEUR (cf. CONTRIBUTEUR)</p>
            <p>* DONS (cf. CONTRIBUTION)</p>
            <p>* ESPACE CONTRIBUTEUR : interface permettant au CONTRIBUTEUR de consulter et de gérer son profil.</p>
            <p>* ESPACE MANAGER : interface permettant au CLIENT COFLOW de consulter le PORTAIL.</p>
            <p>* ESPACE PORTEUR DE PROJET : interface permettant au PORTEUR DE PROJET de consulter et de gérer le PROJET.</p>
            <p>* ÉTABLISSEMENT DE PAIEMENT : Établissement de paiement agrée et contrôlé par l’ACPR. Les établissements de paiement sont des personnes morales, autres que les établissements de crédit, qui fournissent à titre de profession habituelle des services de paiement mentionné à l'article L.314-1 du code monétaire et financier (art. L.522-1) du code monétaire et financier.</p>
            <p>* ÉTABLISSEMENT DE MONNAIE ELECTRONIQUE- Établissement également agréé par les autorités de Contrôle bancaires.</p>
            <p>* FINANCE PARTICIPATIVE (ou CROWDFUNDING) : La FINANCE PARTICIPATIVE permet de financer un projet, un produit, un évènement, une activité ou une cause, là où désormais les circuits financiers traditionnels ne répondent plus entièrement. Pour le PORTEUR DE PROJET, la FINANCE PARTICIPATIVE peut-être également l’occasion de tester et de jauger le degré d’appétence pour un projet, un produit, un événement, une activité ou une cause auprès d’une communauté, d’un public ou d’acheteurs potentiels. La FINANCE PARTICIPATIVE satisfait à des tendances sociétales fortes qui combinent l’utilisation d’internet et des réseaux sociaux, l’aspiration à des sentiments d’appartenance, de proximité, de confiance voire de passion. L’opération de FINANCE PARTICIPATIVE peut revêtir la forme d’une opération de DON, de PRET, de PREACHAT, d’INVESTISSEMENT, de MECENAT DE COMPETENCE ou d’une combinaison de ces formes.</p>
            <p>* MANAGER DU PORTAIL:</p>
            <p>* COFLOW dans le cas d’un PORTEUR DE PROJET qui a recours à la solution technique COFLOW le temps d’une campagne unique de FINANCE PARTICIPATIVE.</p>
            <p>* MECENAT DE COMPETENCE (ou crowdsourcing) : consiste à mettre à disposition du temps, des services et/ou des ressources, services et/ou compétences pour réaliser des actions le plus souvent d’intérêt général. Le MECENAT DE COMPETENCE ne se traduit pas par des contributions financières.</p>
            <p>* OBJECTIF FINANCIER : montant à réunir pour la réalisation du PROJET.</p>
            <p>* PORTAIL DE FINANCE PARTICIPATIVE : portail qui présente un projet de FINANCE PARTICIPATIVE. </p>
            <p>* PREACHAT : Opération de FINANCE PARTICIPATIVE permettant de réserver un produit avant sa commercialisation.</p>
            <p>* PORTEUR DE PROJET : celui qui initie et porte le PROJET.</p>
            <p>* PROJET : Le PROJET est tout évènement, activité, produit, service et/ou cause qu’un PORTEUR DE PROJET souhaite financer Les éléments caractéristiques d’un PROJET sont :</p>
            <p>* Son objet</p>
            <p>* Le montant de l’OBJECTIF FINANCIER</p>
            <p>* La durée de la COLLECTE</p>
            <p>* Les différentes modes de CONTRIBUTIONS possibles (DON, PRÉ-ACHAT, MECENAT DE COMPETENCE)</p>
            <p>* Les RÉCOMPENSES (ou CONTREPARTIES) affectées aux CONTRIBUTIONS</p>
            <p>* PROJET avec MISE À DISPOSITION CONDITIONNEE DES FONDS COLLECTES : PROJET pour lequel la mise à disposition des fonds collectés au PORTEUR DE PROJET dépend des conditions de succès de la campagne de FINANCE PARTICIPATIVE.  Si l’OBJECTIF de la campagne n’est pas atteint, le PORTEUR DE PROJET ou le BENEFICIAIRE EFFECTIF a la faculté dans des conditions prévues ab initio de reporter la contribution sur des projets équivalents.</p>
            <p>* PROJET SANS MISE À DISPOSITION CONDITIONNEE DES FONDS COLLECTES : PROJET pour lequel les fonds collectés sont collecté directement part un PORTEUR DE PROJET ou à UN BENEFICIAIRE EFFECTIF et ceci indépendamment de l’atteinte des objectifs de la campagne de FINANCE PARTICIPATIVE.</p>
            <p>* RGPD : Règlement Européen pour la protection des données personnelles</p>
            <p>* RÉCOMPENSES (ou CONTREPARTIES) : les RÉCOMPENSES sont les CONTREPARTIES reçues par les CONTRIBUTEURS en échange de leurs CONTRIBUTIONS. Elles sont fixées par le PORTEUR DE PROJET. Elles concernent également l’achat de produits à des conditions préférentielles dans le cadre d’opérations de PREACHAT lesquelles participent à la catégorie des dons avec contreparties.</p>
            <p>* SERVICE COFLOW : mise à disposition de la solution technique développée par Mehdi Aknoun.</p>
            <p>* UTILISATEUR DU COMPTE DE PAIEMENT : Le PORTEUR DE PROJET, le MANAGER DE PROJET(S) ou le CONTRIBUTEUR.</p>
            <p>* UTILISATEUR DU SERVICE COFLOW : Le PORTEUR DE PROJET.</p>
            <div className="w-1/4 border-b border-black mt-4" />
            <br/>

            <h2 className="my-2 text-xl font-semibold">2. INSCRIPTION AU SERVICE COFLOW</h2>
            <p>L’UTILISATEUR DU SERVICE COFLOW doit fournir a minima :</p>
            <p>* Un pseudo</p>
            <p>* Une adresse e-mail</p>
            <p>Dès lors que l’UTILISATEUR DU SERVICE COFLOW souhaite ouvrir un compte de paiement les informations complémentaires peuvent lui être demandées.</p>
            <p>Lors de l’inscription, un ESPACE UTILISATEUR (MANAGER, PORTEUR DE PROJET, CONTRIBUTEUR, PARTICIPANT) est mis à disposition de L’UTILISATEUR DU SERVICE COFLOW dans lequel celui-ci pourra le cas échéant charger ses pièces justificatives.</p>
            <div className="w-1/4 border-b border-black mt-4" />
            <br/>

            <h2 className="my-2 text-xl font-semibold">3. OUVERTURE D’UN COMPTE</h2>
            <h3>3.1. Toute personne physique souhaitant ouvrir un compte doit fournir :</h3>
            <p>* Son nom et son prénom</p>
            <p>* Une adresse e-mail valide</p>
            <p>* Sa date de naissance</p>
            <p>* Son adresse postale</p>
            <p>* Sa nationalité</p>
            <p>* Son pays de résidence</p>
            <h3>3.2. Toute personne morale souhaitant ouvrir un compte de paiement doit fournir :</h3>
            <p>* La raison sociale de la personne morale</p>
            <p>* Une adresse e-mail valide de la personne morale</p>
            <p>* Un justificatif d’identité du dirigeant ou de la personne ayant pouvoir pour engager la personne morale dans le cadre des opérations réalisées.</p>
            <h3>3.3. Tout UTILISATEUR du SERVICE COFLOW déclare que toutes les informations fournies sont sincères et exactes à ce jour.</h3>
            <p>Il doit répondre impérativement à toute demande d'information complémentaire éventuellement formulée par COFLOW ou l’ETABLISSEMENT DE PAIEMENT.</p>
            <div className="w-1/4 border-b border-black mt-4" />
            <br/>
            
            <h2 className="my-2 text-xl font-semibold">4. ACCESSIBILITÉ DU SERVICE COFLOW</h2>
            <h3>4.1. Lors de l’inscription, l’UTILISATEUR- MANAGER de PORTAIL s’engage à fournir des données exactes et est tenu de remplir l’ensemble des champs obligatoires figurant dans le formulaire d’inscription. Une fois le formulaire rempli et validé, COFLOW adresse un email de confirmation de la demande.</h3>
            <h3>4.2. La mise à disposition du SERVICE COFLOW (ouverture et lancement de la page) est soumise à la conclusion d’un contrat entre COFLOW et le PORTEUR DE PROJETS précisant notamment les conditions de rémunération de COFLOW.</h3>
            <h3>4.3. COFLOW se réserve le droit de suspendre temporairement l’accès aux services de du portail pour des raisons techniques ou de maintenance sans que cela ouvre droit à une quelconque indemnité compensatrice en cas de préjudice. Ses clients en sont préalablement avisés. COFLOW s’engage à limiter le plus possible les interruptions de service pour des raisons techniques ou de maintenance.</h3>
            <h3>4.4. COFLOW se réserve le droit de suspendre l’accès aux services du portail dans le cas d’un manquement d’un UTILISATEUR DU SERVICE COFLOW aux obligations visées à l’article 9 ci-après, sans que cela ouvre droit à une quelconque indemnité compensatrice en cas de préjudice.</h3>
            <div className="w-1/4 border-b border-black mt-4" />
            <br/>

            <h2 className="my-2 text-xl font-semibold">5. CAMPAGNE DE FINANCE PARTICIPATIVE</h2>
            <h3>5.1. Le CONTRIBUTEUR choisit le montant de sa CONTRIBUTION et le cas échéant de la CONTREPARTIE (ou RECOMPENSE) associée. Le paiement sécurisé par carte bancaire est effectué par l’intermédiaire de L’ETABLISSEMENT DE PAIEMENT</h3>
            <h3>5.2. Le montant de la CONTRIBUTION est directement versé sur le compte bénéficiaire</h3>
            <h3>5.3. Les frais afférents au Service COFLOW sont à la charge du CLIENT COFLOW, à savoir le PORTEUR DE PROJET lorsque celui-ci agit directement avec COFLOW.  </h3>
            <h3>5.4. COFLOW intervient uniquement pour la mise en œuvre technique de la solution de FINANCE PARTICIPATIVE. La gestion des comptes de paiement ainsi que la sécurisation des opérations de paiement, est assurée par L’ETABLISSEMENT DE PAIEMENT dont COFLOW est le partenaire.</h3>
            <h3>5.5. La définition du PROJET, sa mise en œuvre, sa réussite ou son échec, la délivrance éventuelle de CONTREPARTIES, tout comme la gestion juridique et financière du PROJET sont de la responsabilité du PORTEUR DE PROJET.</h3>
            <h3>5.6. La réussite du PROJET est réputée acquise lorsque l’OBJECTIF FINANCIER de la COLLECTE est atteint en montant et dans les délais impartis.</h3>
            <h3>5.7. En cas de réussite du PROJET :</h3>
            <p>* Lorsque l’OBJECTIF FINANCIER est atteint, la CONTRIBUTION est définitivement acquise au PORTEUR DE PROJET.</p>
            <p>* La CONTRIBUTION est versée au COMPTE DE PAIEMENT DU PORTEUR DE PROJET.</p>
            <div className="w-1/4 border-b border-black mt-4" />
            <br/>

            <h2 className="my-2 text-xl font-semibold">6. LES OBLIGATIONS DE L’UTILISATEUR DU SERVICE COFLOW</h2>
            <h3>6.1. Tout UTILISATEUR du SERVICE COFLOW s’engage expressément</h3>
            <p>* À ne pas enregistrer de lien, message, image, texte, vidéo, sons d’animation ou programme non conformes à la législation française,</p>
            <p>* À ne pas enregistrer ou promouvoir des thèmes, contenus, liens expressément prohibés pouvant porter atteinte aux droits d’auteur ou aux droits à l’image ou à la vie privée d’autrui,</p>
            <p>* À ne pas faire du prosélytisme religieux</p>
            <p>* À ne pas enregistrer ou promouvoir des thèmes qui pourraient avoir trait à l’exploitation de mineurs ou qui consternaient à utiliser des images pornographiques de mineurs, des images dégradantes du corps de l’homme ou de la femme, à lancer des injures, diffamer, proférer des propos homophobes, négationnistes ou antisémites, provoquer ou inciter à la haine, à la violence, au racisme, au suicide ou plus généralement à inciter à tout crime ou délit,</p>
            <p>* À obtenir les autorisations préalables concernant des données protégées par le droit de propriété,</p>
            <p>* À obtenir les autorisations préalables auprès des titulaires de droits dans les conditions légales avant toute reproduction, représentation et communication au public,</p>
            <p>* À prendre garde au fait que les adresses URL doivent respecter le droit des marques et les droits de la personnalité,</p>
            <p>* À assumer la responsabilité des textes, images, programmes ou sons diffusés,</p>
            <p>* À assumer seul tout préjudice direct ou indirect matériel ou corporel causé et faire sien tout litige pouvant survenir,</p>
            <p>* À décharger COFLOW de toute responsabilité en cas de préjudice causé par un manquement à l’un des engagements qui précèdent.</p>
            <h3>6.2. Tout UTILISATEUR DU SERVICE COFLOW s’engage expressément</h3>
            <p>* À ne pas utiliser le service COFLOW pour diffuser et promouvoir des virus informatiques, chevaux de Troie ou tout autre programme de même nature, pour violer des systèmes informatiques ou pour perturber le bon fonctionnement général du service.</p>
            <p>* À assumer seul tout préjudice direct ou indirect matériel ou corporel causé et à faire sien de tout litige pouvant survenir,</p>
            <p>* À décharger COFLOW de toute responsabilité dans ce sens.</p>
            <h3>6.3. Toute contravention à l’un des engagements ci-dessus entraîne une fois connu la suppression immédiate et sans préavis de l’élément litigieux.</h3>
            <div className="w-1/4 border-b border-black mt-4" />
            <br/>

            <h2 className="my-2 text-xl font-semibold">7. RESPONSABILITÉS</h2>
            <h3>7.1. Pour l’ensemble de ses prestations, COFLOW est soumise à une obligation de moyen et non à une obligation de résultat. Le service COFLOW est une prestation technique. En aucun cas, COFLOW ne peut être tenu pour responsable pour ce qui s’apparenterait de près ou de loin au manquement d’une obligation de conseil.</h3>
            <h3>7.2. COFLOW ne pourra en aucun cas être tenu responsable de tout dommage qui résulterait partiellement ou totalement du non-respect des présentes CGU.</h3>
            <h3>7.3. COFLOW n’est pas responsable des activités et informations stockées par les CLIENTS COFLOW ou tout UTILISATEUR du service COFLOW.</h3>
            <h3>7.4. COFLOW ne saurait voir sa responsabilité engagée du fait des activités ou des informations stockées par les CLIENTS COFLOW, si elle n’avait pas connaissance effective de leur caractère illicite ou si dès le moment où elle en a eu connaissance, elle a agi avec diligence pour retirer ces données et/ou en rendre l’accès impossible.</h3>
            <h3>7.5. En aucun cas, COFLOW ne peut être tenu responsable des dommages directs et/ou indirects, tels que le préjudice commercial, perte de clientèle, trouble commercial quelconque, perte de bénéfice, perte d’image de marque subis par un UTILISATEUR, ou par un tiers, et qui pourraient résulter des prestations de COFLOW ou de la mise en œuvre ou de l’indisponibilité involontaire de son service. Toute action dirigée contre un UTILISATEUR par un tiers est assimilée à un préjudice indirect, et en conséquence n’ouvre pas droit à réparation.</h3>
            <h3>7.6. L’UTILISATEUR DU SERVICE COFLOW reconnaît que les garanties et limitations de responsabilité stipulées ci-dessus opèrent entre les parties une répartition raisonnable des risques et des responsabilités eu égard au contexte et aux conditions financières encadrant la fourniture du SERVICE COFLOW.</h3>
            <h3>7.7. Il est précisé que le contenu du PROJET, sa présentation et les éléments de son suivi (actualités etc.) sont élaborés par le PORTEUR DE PROJET sous sa seule responsabilité. COFLOW n’est responsable ni de la délivrance des CONTREPARTIES ni de la livraison des PRODUITS ou des BONUS achetés à l’occasion d’une opération de PRÉACHAT OU DE PARTICIPATION PRODUCTIVE.</h3>
            <h3>7.8. Il est précisé que les conséquences fiscales du non-respect des règlementations en vigueur, et notamment de la réglementation fiscale par exemple par les UTILISATEURS du SERVICE COFLOW (PORTEURS DE PROJET) sont de la seule responsabilité des UTILISATEURS</h3>
            <h3>7.9. Un CONTRIBUTEUR ne pourra rechercher la responsabilité de COFLOW en cas de défaillance d’un PORTEUR DE PROJETS à ses obligations.</h3>
            <div className="w-1/4 border-b border-black mt-4" />
            <br/>

            <h2 className="my-2 text-xl font-semibold">8. RÉMUNÉRATION DE COFLOW</h2>
            <h3>8.1. COFLOW perçoit une commission auprès du PORTEUR DE PROJET correspondant à la mise à disposition de sa solution, associée à une solution de paiement ainsi qu’à la maintenance en continu de celle-là. Les conditions de rémunération sont actées dans un contrat spécifique lors de la mise en place du portail.</h3>
            <div className="w-1/4 border-b border-black mt-4" />
            <br/>

            <h2 className="my-2 text-xl font-semibold">9. OPPOSITION OU CONTESTATION</h2>
            <h3>9.1. En cas de perte ou du vol de son identifiant, du détournement ou de toute utilisation non autorisée de celui-ci ou de ses données, l’UTILISATEUR DU COMPTE DE PAIEMENT doit en informer COFLOW afin de demander le blocage de son identifiant.</h3>
            <p>L’émetteur exécutera immédiatement par l’intermédiaire de COFLOW la demande de mise en opposition de l’Identifiant concerné. L’événement sera enregistré et horodaté.</p>
            <p>Toute demande d’opposition doit être confirmée sans délai par l’UTILISATEUR DU COMPTE concerné par lettre signée remise ou expédiée sous pli recommandé, ou par email à L’ETABLISSEMENT DE PAIEMENT ou de MONNAIE ELECTRONIQUE ou à l’adresse de COFLOW.</p>
            <p>L’émetteur et le Distributeur ne sauraient être tenus pour responsables des conséquences d’une opposition par télécopie ou courriel, qui n’émanerait pas de L’UTILISATEUR DU COMPTE.</p>
            <p>Une demande d’opposition est réputée faite à la date et à l’heure de réception effective de la demande par le Distributeur. En cas de vol ou d’utilisation frauduleuse de l’Identifiant, l’émetteur est habilité à demander par l’intermédiaire du Distributeur, un récépissé ou une copie du dépôt de plainte à l’UTILISATEUR DU COMPTE DE PAIEMENT qui s’engage à y répondre dans les plus brefs délais.</p>
            <h3>9.2. En cas de contestation d’une opération de débit ou de crédit sur le COMPTE (Contribution, Annulation, Remboursement), l’UTILISATEUR DU COMPTE DE PAIEMENT s’adresse à COFLOW ou à L’ETABLISSEMENT DE PAIEMENT ou de MONNAIE ELECTRONIQUE. Toute contestation d’une opération doit être adressée dans un délai de 13 mois à compter de la date de l’opération contestée. La responsabilité de l’émetteur et du Distributeur ne saurait en aucun cas être engagée en cas de faute de l'UTILISATEUR DU COMPTE DE PAIEMENT de manquement intentionnel ou constitutif d’une négligence grave à ses obligations, de transmission tardive d’une opposition ou d’une contestation ou de mauvaise foi.</h3>
            <div className="w-1/4 border-b border-black mt-4" />
            <br/>

            <h2 className="my-2 text-xl font-semibold">10. DONNÉES PERSONNELLES ET RÈGLEMENT EUROPÉEN POUR LA PROTECTION DES DONNÉES PERSONNELLES (RGPD)</h2>
            <p>La solution COFLOW est conçue de telle sorte qu'elle évite la possibilité de fuites de données personnelles. COFLOW met en œuvre les mesures physiques, organisationnelles, matérielles et logistiques nécessaires en l'état des règles de l'art en vigueur pour assurer la sécurité, l'intégrité, la sauvegarde, la confidentialité des données et empêcher que les données soient déformées, traitées de manière non conforme aux finalités du PORTAIL, endommagées ou que des tiers non autorisés y aient accès.</p>
            <h3>10.1. COFLOW s'engage en tant que solution logicielle à développer les fonctionnalités nécessaires de façon que les portails puissent être en mesure de respecter le RGPD. C'est ainsi que COFLOW :</h3>
            <p>* Donne la faculté à ses clients de récolter un consentement écrit, clair et explicite auprès des usagers avant la collecte et le traitement de leurs données personelles, acte nécessairement, libre, éclairé.</p>
            <p>* Est en mesure de permettre aux usagers de revenir sur leur consentement, d'accéder à leurs données personnelles, de les modifier, de les supprimer sous réserve des délais de conservation légaux ou règlementaires</p>
            <h3>10.2. Les données nominatives collectées et traitées par COFLOW sont celles que L’UTILISATEUR DU SERVICE COFLOW transmet volontairement notamment via les formulaires d'inscription.</h3>
            <h3>10.3. L’UTILISATEUR DU SERVICE COFLOW s'engage à fournir des informations exactes à jour et à informer sans délai COFLOW de toute modification de ces informations par l’envoi d’un e-mail à contact@coflow.fr, à effectuer sans délai toutes les modifications correspondantes sur son Espace PERSONNEL</h3>
            <h3>10.4. COFLOW est amené à collecter et à traiter :</h3>
            <p>* Des données pour son propre compte : Email, nom, prénom, date de naissance, adresse, nationalité, téléphone, pièce d'identité, justificatif de domicile, RIB. COFLOW collecte tout ou partie de ces données exclusivement auprès de personnes qui cherchent à prendre contact, ou auprès de ses clients gestionnaire de portail dans son obligation de connaissance client.</p>
            <p>* Des données alors en tant que sous-traitant pour le compte de ses clients plateformes et alors sous leur entière responsabilité de traitement et de durée de conservation.</p>
            <h3>10.5. COFLOW s'engage à ne jamais vendre des données personnelles collectées d'aucune sorte.</h3>
            <h3>10.6. COFLOW s'engage à ne jamais traiter des données personnelles pour son propre compte autrement que pour satisfaire à une mission légale ou à une règlementation ou bien encore pour les besoins strictement utiles à la bonne marche de son activité (envoi de newsletters, prospection commerciale, proposition de nouveaux services, présentation de nouveaux projets, invitations, contacts). Dans tous les cas, COFLOW collecte ces données après en avoir demandé explicitement l'autorisation à ses propriétaires.</h3>
            <h3>10.7. COFLOW s'engage à effacer les données collectées pour son propre compte, au bout de trois ans si leur conservation n'est pas justifiée par l'activité en cours, par la loi ou par la règlementation.</h3>
            <h3>10.8. COFLOW s'engage à effectuer une revue de de ses bases de données une fois par an.</h3>
            <h3>10.9. COFLOW s'engage à ne jamais conserver les données personnelles et les pièces justificatives collectées momentanément (au demeurant après en avoir sollicité l'autorisation) pour l'exercice de son rôle d'intermédiaire-agent de paiement de STRIPE ou pour son rôle de sous- traitant de ses clients - s'agissant du traitement des KYC par STRIPE.</h3>
            <h3>10.10. COFLOW s'engage à attirer l'attention de ses clients en cas de non-respect manifeste de leur part du règlement RGPD.</h3>
            <h3>10.11. COFLOW s'engage à notifier le cas échéant à la CNIL ainsi qu'à toutes les personnes qui pourraient être impactées, sous 72 heures des fuites de données intempestives ou frauduleuses.</h3>
            <h3>10.12. Les portails/clients COFLOW doivent se conformer à la règlementation RGPD.</h3>
            <h3>10.13. Aucune des informations transmises par UN UTILISATEUR DU SERVICE COFLOW lors de la création de son Espace Individualisé n'est visible par d'autres UTILISATEURS. Ces informations sont protégées par un nom d'UTILISATEUR et un mot de passe de façon que seul L’UTILISATEUR DU SERVICE COFLO ait accès à ses informations personnelles.</h3>
            <h3>10.14. Aucune des informations transmises par UN UTILISATEUR DU SERVICE COFLOW lors de la création de son Espace Individualisé n'est visible par les autres UTILISATEURS. Ces informations sont protégées par un nom d'UTILISATEUR et un mot de passe de que seul L’UTILISATEUR DU SERVICE COFLOW ait accès à ses informations personnelles.</h3>
            <h3>10.15. Le mot de passe d’un UTILISATEUR est personnel et confidentiel. L’UTILISATEUR DU SERVICE COFLOW est seul responsable de l'utilisation de son mot de passe. L’UTILISATEUR DU SERVICE COFLOW s'engage à conserver secret son mot de passe et à ne pas le divulguer sous quelque forme que ce soit. Il assume notamment la responsabilité de l’utilisation de son mot de passe par une tierce personne pour la réalisation de transactions. Plus généralement il est seul responsable de l’utilisation et de la conservation des identifiants qu’il a créés.</h3>
            <h3>10.16. NI UN PORTEUR DE PROJET ni COFLOW ne demanderont jamais à un CONTRIBUTEUR son mot de passe via un appel téléphonique ou un e-mail non sollicité. Le CONTRIBUTEUR ne devra en outre pas oublier de se déconnecter de son Espace CONTRIBUTEUR ni de fermer la fenêtre de son navigateur à l'issue de sa session de travail. Il évitera ainsi que des personnes accèdent à ses informations personnelles en cas de partage d'ordinateur, ou de travail dans un espace personnel, professionnel ou dans un lieu public.</h3>
            <div className="w-1/4 border-b border-black mt-4" />
            <br/>

            <h2 className="my-2 text-xl font-semibold">11. MODIFICATION DES CONDITIONS GÉNÉRALES D’UTILISATION DU SERVICE COFLOW</h2>
            <p>COFLOW se réserve le droit de modifier unilatéralement les présentes Conditions générales d’Utilisation du service COFLOW et sans préavis.</p>
            <p>Il appartient en particulier aux UTILISATEURS de consulter et d’accepter les Conditions Générales d’Utilisation du service COFLOW au moment où il utilise les services d'un PORTAIL ou le service COFLOW. Chaque utilisation du SERVICE COFLOW constitue l'acceptation de la dernière version des présentes Conditions Générales d’Utilisation du service COFLOW.</p>
            <p>En cas de modifications substantielles des présentes conditions générales d’utilisation, les nouvelles conditions générales entreront en vigueur un mois après leur publication sur le site internet de COFLOW. Une notification concomitante sera adressée par e-mail au client direct de COFLOW à l’adresse e-mail que le client aura indiqué à COFLOW lors de son inscription. Le client direct de COFLOW disposera d'un délai d'un mois à compter de la notification pour mettre fin au contrat. En l’absence de dénonciation par le client dans ce délai, ce dernier sera réputé avoir accepté les conditions générales modifiées.</p>
            <div className="w-1/4 border-b border-black mt-4" />
            <br/>

            <h2 className="my-2 text-xl font-semibold">12. PROPRIÉTÉ INTELLECTUELLE</h2>
            <h3>12.1. Le contenu du SERVICE COFLOW ne peut être ni modifié, copié, distribué, encadré ou reproduit sans l’accord de COFLOW.</h3>
            <h3>12.2. Tous les droits de propriété portant sur les programmes informatiques ainsi que toutes les mises à jour, nouvelles versions et copies des programmes mis à disposition de l’UTILISATEUR DU SERVICE COFLOW lors de l’utilisation sont de la propriété de COFLOW.</h3>
            <div className="w-1/4 border-b border-black mt-4" />
            <br/>

            <h2 className="my-2 text-xl font-semibold">13. DURÉE – SUSPENSION - RÉSILIATION</h2>
            <p>Les présentes Conditions générales sont applicables pour une durée indéterminée.</p>
            <p>COFLOW se réserve le droit de résilier immédiatement et sans préavis le Service COFLOW, et de mettre un terme aux collectes en cours en cas de violation par le PORTEUR de PROJET des obligations mises à leur charge aux termes des présentes conditions générales.</p>
            <div className="w-1/4 border-b border-black mt-4" />
            <br/>

            <h2 className="my-2 text-xl font-semibold">14. COMPTES INACTIFS</h2>
            <h3>14.1. COFLOW se réserve le droit de clôturer des comptes inactifs ; en ce sens : Toute ouverture du PORTAIL, non suivie de la prise d’un abonnement dans un délai de 6 mois, pourra faire l’objet d’une notification de clôture avec un préavis d’un mois adressé par e-mail. En l’absence de réponse, le PORTAIL sera clôturée.</h3>
            <h3>14.2. Tout COMPTE non utilisé dans un délai de 24 mois pourra faire l’objet d’une notification de clôture avec un préavis d’un mois adressé par e-mail. Sa clôture ne pourra plus donner lieu à l’utilisation ultérieure du compte de paiement. Il sera procédé au remboursement de la créance diminué des éventuels frais de gestion de comptes inactifs, c’est à dire n’ayant pas mouvementés depuis plus de douze mois (15 €/an). Les comptes non utilisés depuis plus de douze mois à solde zéro seront clôturés d’office. En cas d’impossibilité de remboursement, il appartiendra à l’UTILISATEUR de transmettre ses coordonnées bancaires à jour permettant de réaliser un virement.</h3>
            <div className="w-1/4 border-b border-black mt-4" />
            <br/>

            <h2 className="my-2 text-xl font-semibold">15. DROIT APPLICABLE ET JURIDICTIONS COMPÉTENTES</h2>
            <p>Il est expressément stipulé que les présentes Conditions générales sont régies par la loi française. Tout litige qui naîtrait à l’occasion de l’exécution du présent contrat seront soumis aux tribunaux compétents de Paris.</p>
            <div className="w-1/4 border-b border-black mt-4" />
            <br/>

            <h2 className="my-2 text-xl font-semibold">16. MENTIONS LÉGALES</h2>
            <h3>16.1 Éditeur du Site COFLOW : le Site COFLOW est édité par COFLOW, immatriculée au registre du commerce et des sociétés de Paris sous le SIREN 978863272 et dont le siège social est situé au 6 rue d’armaillé - 75017 Paris 17, France.</h3>
            <h3>16.2. Hébergeur du Site COFLOW : FIREBASE</h3>
            <h3>16.3. Contact pour toute réclamation contact@coflow.fr.</h3>
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

export default Terms;
