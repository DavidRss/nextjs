import React from 'react';

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
                <div className="modal-box bg-white text-gray-900 w-full max-w-5xl">
                    <h3 className="font-bold text-lg">TIPEEE'S TERMS & CONDITIONS</h3>
                        <div>
                        <p>Last update: 04/01/2022</p>
<h2 className="my-2 text-xl font-semibold">PREAMBLE</h2>
<p>All terms and expressions beginning with a capital letter appearing below are defined in Article 1 of the
Terms of Use (TOU).</p>
<p>
    The purpose of the Site is to provide a Service enabling Creators to benefit from financial support from their
    community in the context of their creative activity.
</p>
<p>
    The TOU govern all relations between Members and TIPEEE, a simplified joint-stock company (SAS)
    registered with the Paris Trade and Companies Register under number 529 108 334, whose registered office
    is located at 37 Bis Rue Général Leclerc – 92130 ISSY LES MOULINEAUX – France.
</p>
<p>
    TIPEEE is registered as a crowdfunding intermediary with ORIAS under number 15000822. This information
    can be verified with ORIAS, <a href="https://www.orias.fr/welcome">https://www.orias.fr/welcome</a> or 1, rue Jules Lefebvre 75311 PARIS Cedex 9.
</p>
<p>
    TIPEEE can be contacted as follows:
    </p><ul>
        <li>
            email address: <a href="mailto:support@tipeee.com">support@tipeee.com</a>,
        </li>
        <li>
            telephone number: 01 40 13 16 15.
        </li>
    </ul>
<p></p>
<p>
    All Tips made through the Site are handled by the Payment Service Providers indicated on the Site. The
    Creators contract directly with the latter regarding the receipt of Tips, by accepting their general conditions,
    through a checkbox on the Site.
    <br />The Member expressly mandates TIPEEE to transmit to the Payment Service Provider(s) all their instructions
    relating to Tips.
    <br />If the Payment Service Providers refuse or terminate the Creator's subscription to their services, the Creator
    may not use the Services as a Creator, but only as a Tipper. Conversely, the termination of the contractual
    relationship between the Creator and TIPEEE leads to the termination of the contract between the Creator
    and the Payment Service Provider(s).
</p>
<p>
    The Member is also informed that TIPEEE may modify the TOU at any time. In this case, the Member will
    be notified at least 1 week before the modified TOU come into force. If the Member uses the Services after
    the entry into force of the modified TOU, the Member is considered to have accepted them.
</p>
<p>
    Creators may only request the financing of Content on the Site if they have full legal capacity or, failing this,
    if they are at least 16 years old and have obtained the agreement of their legal representative. Creators not
    acting for professional purposes shall have the status of consumer, understood as any natural person who
    acts for purposes that are not part of their professional activity.
</p>
<p>
    Tippers can only make Tips if they have full legal capacity or, failing this, if they are at least 13 years old and
    have obtained the agreement of their legal representative. Tippers are consumers, understood as any
    natural person who acts for purposes that are not part of their professional activity. As an exception to the
    foregoing, some Tippers may have the status of professional as defined above. Where applicable, the
    provisions relating to consumers do not apply to them.
</p>
<p>
    These TOU and the Privacy Policy constitute the entirety of the contractual documents enforceable
    between TIPEEE and the Members.
</p>
<p>
    They may be supplemented by special conditions which, in the event of contradiction, shall prevail over the
    TOU.
</p>
<h2 className="my-2 text-xl font-semibold">1. DEFINITIONS</h2>
<ul>
    <li>
        "<b>TOU</b>" means the General Terms of Use of the Service.
    </li>
    <li>
        "<b>Commission</b>" means the standard commission of 8% including VAT, i.e. 6.66% excluding VAT, charged to
        the Creator by TIPEEE in return for the Service provided. It is understood that TIPEEE is free to propose
        promotional offers or reductions in its commission.
    </li>
    <li>
        "<b>Account</b>" means the account opened by a Member on the Site.
    </li>
    <li>
        "<b>Content</b>" means any creation (video, blog post, comic strip, photo, etc.) for which a Creator requests
        financial support on their Tipeee Page.
    </li>
    <li>
        "<b>Reward</b>" means the reward(s) that may be offered by the Creator to Tippers in exchange for their Tips.
    </li>
    <li>
        "<b>Creator</b>" means a Member who creates at least one Tipeee Page.
    </li>
    <li>
        "<b>Transaction Fee</b>" means the fee, including VAT, paid by the Tipper and added to the amount of their Tip
        when it is deducted. The details and process for calculating Transaction Fees are available <a href="/about/fees"><i>here</i></a>.
    </li>
    <li>
        "<b>Member</b>" means a natural or legal person registered on the Site and having an Account. The Member
        can become a Tipper and/or a Creator.
    </li>
    <li>
        "<b>Tipeee Page</b>" means the page(s) of the Site created by the Creator and enabling a Member to support
        the Creator.
    </li>
    <li>
        "<b>Payment Service Provider</b>" means the payment service providers indicated on the Site that enable the
        implementation of Tips.
    </li>
    <li>
        "<b>Project</b>" means a specific project presented by the Creator on their Tipeee Page and for which the Creator
        needs financial support from the Tippers to be able to carry it out.
    </li>
    <li>
        "<b>Publication</b>" means the activation by the Creator of the function integrated on their Tipeee Page allowing
        them to initiate the process of collecting Tips relating to this Content.
    </li>
    <li>
        "<b>Service</b>" means the service offered by TIPEEE whose purpose is to allow: intermediation between
        Creators and Tippers via the Site, the collection of Tips through the Site in order to allow Creators to obtain
        financial support, any additional service in connection with the services described above.
    </li>
    <li>
        "<b>Site</b>" means the website <a href="http://www.tipeee.com">http://www.tipeee.com</a> or any URL that TIPEEE may replace it with, as well as
        all the tools made available by TIPEEE (widgets, API, etc.).
    </li>
    <li>
        "<b>Tip</b>" means an One-off Tip and/or a Regular Tip.
    </li>
    <li>
        "<b>Tipper</b>" means a Member who has given a Tip to at least one Creator.
    </li>
    <li>
        "<b>TIPEEE</b>" means the company TIPEEE.
    </li>
    <li>
        "<b>One-off Tip</b>" means the monetary value excluding Transaction Fees that the Tipper undertakes to give to
        the Creator on a one-off basis (only once), unless the said Creator has expressly activated on the Site the
        option allowing them not to receive any.
    </li>
    <li>
        "<b>Regular Tip</b>" means the monetary value excluding Transaction Fees that the Tipper undertakes to give
        the Creator on a regular basis, if the Creator has opted for this form of support.
    </li>
</ul>
<h2 className="my-2 text-xl font-semibold">2. ACCESSING THE SERVICE AND OPENING AN ACCOUNT</h2>
<p>
    The Member accesses the Service directly on the Site or through any third party site on which the Service
    is integrated.
</p>
<p>
    Registration gives access to an Account which is unique and exclusively accessible by using the Member's
    identifiers. The Member is solely responsible for the use made of their identifiers, without being able to
    invoke against TIPEEE any loss, misappropriation or fraudulent use by a third party. Any access and/or use
    of the Site and transmission of data made from an Account shall be deemed to have been made by the
    Member of the Account concerned.
</p>
<p>
    However, the Member is required to inform TIPEEE without delay of any loss, misappropriation or
    fraudulent use of their identifiers by a third party having allowed access to their Account, indicating their
    surname, first name and user name by email to <a href="mailto:support@tipeee.com">support@tipeee.com</a> or by post to the address of the
    registered office indicated above.
    <br />If the Member wishes to close their Account, they must comply with the procedure provided for this
    purpose on the Site.
</p>
<p>
    When using the authentication of a third-party service, the Member acknowledges having read the terms
    of use and/or service of the third party service.
</p>
<h2 className="my-2 text-xl font-semibold">3. TERMS OF USE OF THE SITE AS A MEMBER</h2>
<p>
    The Member undertakes not to create or use a false identity of such a nature as to mislead TIPEEE or any
    third party and not to usurp the identity of another legal or physical person.
</p>
<p>
    In order to ensure compliance with the provisions of the TOU, TIPEEE reserves the right to ask the Member
    to prove their identity by any means. In the absence of proof within 7 (seven) days of TIPEEE's request,
    TIPEEE reserves the right to suspend or delete the Account and/or the Tipeee Page(s) of said Member
    without notice.
</p>
<p>
    The Member:
    </p><ul>
        <li>
            is solely responsible for any formalities that may be required in connection with a money transfer,
        </li>
        <li>
            undertakes to cooperate with TIPEEE and, where appropriate, with the Payment Service Providers,
            so that TIPEEE:
            <ul>
                <li>
                    implements systems for identifying and assessing money laundering and terrorist financing
                    risks and a policy adapted to these risks,
                </li>
                <li>
                    is able to identify all its Members and scrutinise their transactions,
                </li>
                <li>
                    reports suspicious transactions to the national financial intelligence unit (TRACFIN) if TIPEEE
                    has reason to believe that the money is derived from a crime,
                </li>
                <li>
                    communicates all the necessary documents and information to the legal authorities, and
                    therefore keeps part of the documents and information provided by the Member, even after
                    the latter has unsubscribed from the Site.
                </li>
            </ul>
        </li>
    </ul>
<p></p>
<p>
    Furthermore, TIPEEE reserves the right to transmit such information without notifying the Member. Funds
    for which there is a legitimate suspicion that they are linked to an illegal or fraudulent activity shall not be
    immediately paid to the Member concerned and may be passed on to the competent authority if necessary.
    The Member waives any right or recourse following the communication by TIPEEE of this information to the
    competent authorities.
</p>
<p>
    The Member is responsible for the payment of any applicable fee or associated taxes, both on the amounts
    received as a Creator and on the Tips given as a Tipper. TIPEEE shall in no way substitute itself for the
    Member in this respect, nor shall it advise the Member on the nature and details of its obligations.
</p>
<h2 className="my-2 text-xl font-semibold">4. TERMS OF USE AS A TIPPER</h2>
<h3>4.1. How Tips are paid</h3>
<p>
    The Site allows the Tipper to support the Creator(s) of their choice by paying Tips to them. The Tipper may
    opt for a One-off Tip or a Regular Tip under the conditions defined below:
</p>
<h4>4.1.1. One-off Tips</h4>
<p>
    One-off Tips may be sent to any Creator, regardless of the method of collection chosen by the latter, unless
    the Creator has expressly activated the option on the Site not to receive them.
</p>
<p>
    One-off Tips are debited immediately and do not commit the Tipper in the long term.
</p>
<p>
    In the event of payment of a One-off Tip to a Creator who has chosen the "per Project" collection method,
    the Tipper shall be reimbursed for said Tip if the objective defined by the Creator, i.e. the amount that the
    latter wishes to collect in the context of a Project, has not been reached within the time limit set.
</p>
<h4>4.1.2. Regular Tips</h4>
<p>
    Regular Tips can be made in two ways:
</p>
<ul>
    <li>
        if the collection method chosen by the Creator is "per month", the Regular Tip will be debited around
        the 6th of the month following the month in which it was first made, and then each subsequent month
        at the same time,
    </li>
    <li>
        If the collection method chosen by the Creator is "per Content", the Regular Tip will be debited around
        the 6th of the month following the month in which a Publication was initiated by the Creator. The
        amount charged to the Tipper then depends on the number of Publications made by the Creator. If
        the Creator has not made any Publication during the month, the amount debited will be €0. If the
        Creator has made one or more Publications during the month, the amount debited will be equal to the
        amount of the Regular Tip multiplied by the number of Publications. In any event, the amount debited
        may not exceed the Tip limit defined by the Tipper.
    </li>
</ul>
<h3>4.2. Common provisions for Tips</h3>
<p>
    The minimum Tip amount is 1 Euro.
</p>
<p>
    At any time, the Tipper may (i) cancel or modify the amount of their Tip for Regular Tips and (ii) cancel or
    set or modify their Tip limit.
</p>
<p>
    However:
    </p><ul>
        <li>
            a One-off Tip cannot be cancelled,
        </li>
        <li>
            a Regular Tip made in the context of a "per month" collection is due if the cancellation has not been
            made before the end of the collection month. For example, for a Regular Tip made on 10 April and
            cancelled on 2 May, the Tipper will be debited for the month of April,
        </li>
        <li>
            a Regular Tip made in the context of a "per Content" collection is due if the cancellation has not been
            made before the Content is published. For example, for a Regular Tip made on 10 April and cancelled
            on 2 May, the Tipper will be debited (within the limit they have defined) for the Publication(s) made
            between these two dates.
        </li>
    </ul>
<p></p>
<h3>4.3. Transaction Fee</h3>
<p>
    When the Tip is debited, TIPEEE charges a Transaction Fee, the details of which are available to the Tipper
    before the Tip is actually debited. The Tipper is hereby informed and accepts without reservation that under
    no circumstances may these fees be reimbursed.
</p>
<h3>4.4. Transmission of the Tipper's identification data to the Content Creator(s)</h3>
<p>
    The Tipper acknowledges and expressly accepts that the Creator they support will be provided by TIPEEE
    with information on their identity as well as their email and postal addresses, in order to allow the Creator
    to communicate with them by email and to send them the promised Rewards, if applicable.
</p>
<h2 className="my-2 text-xl font-semibold">5. TERMS OF USE AS A CREATOR</h2>
<h3>5.1. Selection, collection and receipt of Tips</h3>
<p>
    When a Creator creates a Tipeee Page, they must necessarily opt for a collection method:
</p>
<ul>
    <li>
        "<b>per month</b>" collection method: the Tips are paid to the Creator at the end of the month following the
        collection month for which they were debited to the Tippers,
    </li>
    <li>
        "<b>per Content</b>" collection method: the Tips are paid to the Creator at the end of the month following 
        the month during which the Creator has made at least one Publication,
    </li>
    <li>
        "<b>per Project</b>" collection method: the Tips are paid to the Creator 14 days after the collection end date,
        if and only if the Creator has reached the collection target before the deadline. If the target is not
        reached, the Tips are returned in full to the Tippers concerned.
    </li>
</ul>
<h3>5.2. Payment of Tips and deduction of the Commission by TIPEEE</h3>
<p>
    For each Tip received, TIPEEE charges its commission.
</p>
<p>
    Thus, the Creator receives the sums corresponding to the total amount of Tips due, minus the Commission
    due to TIPEEE. These sums are transferred to the Creator's bank account and/or PayPal account. No advance
    on Tips can be paid to the Creator.
</p>
<h3>5.3. Transmission of the Creator's identification data to a Tipper</h3>
<p>
    The Creator expressly acknowledges and accepts that TIPEEE may communicate a means of contact to a
    Tipper in the event of a dispute with the latter.
</p>
<h3>5.4. Creator's commitments</h3>
<p>
    The Creator undertakes on their Tipeee Page(s) not to create any ambiguity as to the purpose of the funding
    they seek and not to misuse it.
</p>
<p>
    Regardless of the number of people involved in the creation of Content, there can only be one Creator per
    Tipeee Page. They must therefore be individually and clearly identified; they will be the sole beneficiary of
    the rights and responsible for the obligations attached to the Account and the Tipeee Page as Creator.
</p>
<p>
    In order to receive the Tips to which they are entitled, the Creator must, before receiving their first Tip,
    submit their Account to the KYC procedure described in the Payment Service Providers' general terms and
    conditions. Thus, upon request from the Payment Service Providers, the Creator must provide TIPEEE with
    information to prove their identity and banking information.
</p>
<p>
    The Creator may terminate their Tipeee Page(s) at any time. If a Tipeee Page is closed, no more Tips may
    be made through this Page from the first day of its closure.
</p>
<p>
    If applicable, the Creator declares that they have a status allowing them to collect Tips, and that they are
    responsible for all formalities and payments incumbent on them in the context of the use of the Service.
</p>
<p>
    <u>On the Site</u>, the Creator undertakes not to publish any material contrary to the purpose of the Site and/or
    the provisions of these TOU and/or of an illicit nature, in particular malicious, inappropriate, disrespectful,
    defamatory, injurious, infringing, secret or confidential, misleading or erroneous (including personal
    information), xenophobic, racist, hateful, inciting violence, xenophobia, racism or hatred, illegal or contrary
    to public order or morality, indecent, obscene, pornographic, threatening or violent.
    <br />Failing this, TIPEEE reserves the right (a) to suspend or close immediately and without notice the Creator's
    Tipeee Page(s) and/or Account, any content and/or element published on the Site, which violates the terms
    hereof, as soon as TIPEEE has become aware of it and/or (b) to return to the Tipper(s) concerned the Tip(s)
    that they have made but that have not yet been paid to the Creator concerned,
</p>
<p>
    <u>On third-party sites and platforms</u>, the Creator undertakes not to publish Content or elements of an illicit
    nature for which they request support through TIPEEE. Failing that, TIPEEE reserves the right:
    </p><ul>
        <li>
            (a) to close or suspend the Creator's Account and/or the Tipeee Page(s) of said Creator and/or (b)
            to return to the Tipper(s) concerned the Tip(s) which they have made but which have not yet been
            paid to the Creator concerned,
        </li>
        <li>
            if necessary, to order the Creator to remove any reference to TIPEEE on the third-party site on
            which said Creator has published any illicit Content or element.
        </li>
    </ul>
<p></p>
<h3>5.5. Grant of rights</h3>
<p>
    TIPEEE does not hold any ownership or other rights on the content published on the Site and more generally
    on all other elements that the Creator may post, share or disseminate on their Tipeee Page(s), which remain
    the exclusive property of the Creator.
</p>
<p>
    The Creator grants to TIPEEE, as well as to TIPEEE's partners who may support the Creator, on a non-
    exclusive basis and free of charge, for the entire world and for the entire duration hereof, the rights below,
    in order to allow TIPEEE to provide the Service in the form of broadcasting on the Internet, on mobile
    telephone networks and/or any other current or future communication network open to the public:
    </p><ul>
        <li>
            to disseminate all or part of the Creator's TIPEEE page and their profile image, known as an "avatar",
            on the Site and/or on the site of TIPEEE's partners supporting the Creator, by any means and on any
            medium,
        </li>
        <li>
            to translate all or part of the Creator's TIPEEE page, in any language,
        </li>
        <li>
            to modify (in particular the framing, format and colours) and/or adapt all or part of the Creator's TIPEEE
            page and their profile image known as an "avatar" (in particular to take account of the technical
            constraints of the Site and/or the site of TIPEEE's partners supporting the Creator).
        </li>
    </ul>
<p></p>
<p>
    The Creator also expressly authorises TIPEEE, as well as TIPEEE's partners supporting the Creator, to
    promote and/or advertise the Creator's Tipeee Page.
</p>
<p>
    The Creator remains free to offer their Content on any crowdfunding platform other than TIPEEE.
</p>
<h2 className="my-2 text-xl font-semibold">6. PROCESSING OF PERSONAL DATA</h2>
<h3>6.1. Personal data processed by TIPEEE</h3>
<p>
    TIPEEE processes the personal data of Members in the context of the Service and as such, practices a policy
    of personal data protection, the characteristics of which are explained in the document entitled "<a href="/privacy">Privacy
    Policy</a>". Members are expressly invited to read it.
</p>
<h3>6.2. Personal data processed by Creators</h3>
<p>
    The Creators undertake to comply, as far as they are concerned, with all legal and regulatory obligations
    incumbent on them in terms of personal data protection, in particular Law 78-17 of 6 January 1978 in its
    latest amended version, known as the <i>Loi Informatique et Libertés</i> (Data Protection Act), and EU Regulation
    2016/679 of the European Parliament and of the Council of 27 April 2016 (together referred to as the
    "<b>Applicable Regulations</b>"). In this respect, Creators acknowledge that the processing of personal data
    carried out on the personal data of Tippers, in particular for the purposes of delivering Rewards, is done
    under their sole responsibility, in their capacity as autonomous data controller. Creators thus undertake to
    process under their responsibility, in a lawful, fair and transparent manner, the personal data of Tippers,
    and in particular, to ensure the legal basis of this processing and the information due to Tippers. TIPEEE
    may not be held liable in the event of Creators' failure to comply with the Regulations applicable to the
    processing of Tippers' personal data.
</p>
<h2 className="my-2 text-xl font-semibold">7. LIABILITY OF TIPEEE</h2>
<h3>7.1. TIPEEE acts as an intermediary between Creators and Tippers</h3>
<p>
    TIPEEE shall not under any circumstances:
    </p><ul>
        <li>
            be responsible for the actions of the Members, the Content and other elements presented on the Site
            by the Creators (and in particular, without limitation, the presentation of the Creator's activity, the
            time taken to create the Content (including delays and cancellations), the quality of the Content, and
            any problem related to the delivery of the possible Rewards offered),
        </li>
        <li>
            be responsible for the relations between the Members, nor be a party to any possible dispute.
        </li>
    </ul>
<p></p>
<p>
    In accordance with its capacity as host, and upon receipt of a notification in accordance with the terms of
    Article 6 I 5 of Law No. 2004-575 of 21 June 2004 on confidence in the digital economy concerning Content
    or any element of the Site that is clearly illegal, TIPEEE will act promptly to remove it or make it impossible
    to access, and reserves the right to take the measures described in the article "<i>Sanctions in case of breach</i>".
</p>
<p>
    TIPEEE cannot be held liable for the content stored if it was not aware of its illegal nature or if, as soon as it
    became aware of it, it acted promptly to remove this content or to make it impossible to access.
</p>
<p>
    The Creator guarantees and undertakes to hold TIPEEE harmless against any damage suffered by the latter
    or any fact attributed to it in relation to the Creator's actions, and guarantees TIPEEE without limit against
    any liability action of any kind that may be brought against TIPEEE by a Member or by any third party due
    to the Creator's actions.
</p>
<h3>7.2. TIPEEE is expressly subject to a best-efforts obligation in providing the Service</h3>
<p>
    TIPEEE also reserves the right to temporarily suspend access to the Site or part of it, in particular for
    corrective or evolutionary maintenance reasons.
</p>
<h3>7.3. The Service offered by TIPEEE cannot be considered as an advisory mission.</h3>
<p>
    In this respect, TIPEEE cannot in any way be held responsible for the consequences of the choices made by
    Tippers, particularly with regard to the Tips paid to Creators. In particular, TIPEEE does not provide any
    recommendation or advice on the Creators to be supported, intervening only in a limited way with the
    latter in order to assist them in the presentation of their activity on the Site.
</p>
<h3>7.4. Limitation of liability</h3>
<p>
    Whatever the nature, basis and terms of any action brought by the Member against TIPEEE, except in the
    case of personal injury or fraud attributable to TIPEEE, the latter's liability is limited to direct damage.
</p>
<h2 className="my-2 text-xl font-semibold">8. DURATION OF THE RELATIONSHIP WITH TIPEEE</h2>
<p>
    The TOU apply for an indefinite period from the creation of the Member's Account until its closure, for
    whatever reason.
</p>
<p>
    The Member may unsubscribe from the Services at any time through their Account.
</p>
<h2 className="my-2 text-xl font-semibold">9. SANCTIONS IN CASE OF BREACH</h2>
<p>
    In the event of a breach of the Member's obligations as defined in Articles 2 to 7 above, TIPEEE reserves the
    right to:
</p>
<ul>
    <li>
        suspend or close immediately and without notice, temporarily or permanently, any Account and/or
        Tipeee Page(s) of the Member concerned,
    </li>
    <li>
        in case of suspicion of breach by the Member on the part of TIPEEE, suspend the Account and/or
        Tipeee Page(s) of the Member concerned pending clarification or provision of additional elements,
    </li>
    <li>
        not to pay all Tips to the Member concerned until they have sent all the information required by
        TIPEEE,
    </li>
    <li>
        take all appropriate measures and to initiate and pursue any legal proceedings, to inform, where
        appropriate, the competent authorities, to cooperate with them and to provide them with any
        information that may be necessary for the investigation and prosecution of illegal or illicit activities,
    </li>
    <li>
        suspend or close the Account and/or Tipeee Page(s) in the event of an injunction from an
        administrative or judicial authority.
    </li>
</ul>
<p>
    In the event of suspension or deletion of a Member's Account and/or Tipeee Page(s) by TIPEEE, TIPEEE shall
    use its best endeavours to inform the Member, unless such information compromises legitimate security
    measures or is illegal. TIPEEE will terminate the suspension or deletion of the Account and/or Tipeee Page(s)
    as soon as possible once the reasons that led to the termination of its use have disappeared and TIPEEE has
    been informed of this.
</p>
<p>
    In the event that TIPEEE closes a Creator's Account for breach, the Creator will receive the current Tips
    under the following conditions:
</p>
<ul>
    <li>
        In the case of the "<b>per month</b>" collection method: the Creator will receive the Tips collected in the
        month preceding the month in which the Account is closed. However, Tips collected during the month
        in which the Account is closed will be returned to the Tippers. For example: if an Account is closed on
        16 March, the Creator will receive the Tips collected in February, but Tips collected up to 16 March will
        be returned to the Tippers.
    </li>
    <li>
        In the case of the "<b>per Content</b>" collection method: the Creator will receive the Tips collected relating
        to the Publications made before the month in which their Account is closed. However, Tips made since
        the last Publication or Tips relating to a Publication made during the month of closure will be returned
        to the Tippers. For example: the Creator made a Publication on 15 February and 10 March. In the case
        of an Account closed on 16 March, the Creator will receive the Tips collected before the Publication of
        15 February. However, Tips made later will be returned to the Tippers.
    </li>
    <li>
        In the case of the "<b>per Project</b>" collection mode: the Creator will not receive any of the Tips collected,
        regardless of whether they have reached their target. All Tips will be returned to the Tippers.
    </li>
</ul>
<h2 className="my-2 text-xl font-semibold">10. INTELLECTUAL PROPERTY</h2>
<p>
    The Site and its content (in particular texts, software, scripts, graphics, photos, sounds, music, images,
    drawings, videos, etc.) are the exclusive property of TIPEEE, with the exception of the content and any
    element published and/or shared by the Creator on their Tipeee Page, which remain the exclusive property
    of the Creators concerned. In general, TIPEEE grants a free, personal, non-exclusive and non-transferable
    right to access and use the Site, any other right, in particular of reproduction or representation, being
    expressly forbidden and liable to civil and criminal penalties for infringement.
</p>
<h2 className="my-2 text-xl font-semibold">11. RIGHT OF WITHDRAWAL</h2>
<p>
    <b>
        The Member declares that they are informed and expressly accept that Tips do not fall within the scope
        of Articles L. 221-18 et seq. of the Consumer Code. Consequently, Tips are not subject to any right of
        withdrawal.
    </b>
</p>
<h2 className="my-2 text-xl font-semibold">12. MEDIATION</h2>
<p>
    In the event of a dispute with TIPEEE, the Member who is a consumer may have recourse free of charge to
    the following consumer mediator with a view to an amicable resolution:
    <br />Centre de médiation de la consommation de conciliateurs de justice (CM2C)
    <br />Postal address: <a href="https://www.cm2c.net/contact.php">14 rue Saint Jean 75017 Paris</a>
    <br />Telephone: 06 09 20 48 86
    <br /><a href="https://www.cm2c.net">https://www.cm2c.net</a>
</p>
<p>
    If the Member is a foreign consumer but located in the European Union, they can go to the European
    consumer law dispute resolution platform accessible <a href="https://ec.europa.eu/consumers/odr/main/index.cfm">here</a>.
</p>
<h2 className="my-2 text-xl font-semibold">13. LANGUAGE</h2>
<p>
    The French language shall prevail in case of contradiction or dispute as to the meaning of a term or
    provision.
</p>
<h2 className="my-2 text-xl font-semibold">14. JURISDICTION AND APPLICABLE LAW</h2>
<p>
    These TOU are governed by French law.
</p>
<p>
    In the event of a dispute with a Creator acting for professional purposes, the Paris courts shall have
    jurisdiction to hear any dispute relating to the application, interpretation or termination of these TOU,
    unless otherwise provided by mandatory provisions.
</p>
                        </div>
                    <div className="modal-action">
                    <form method="dialog">
                        <button className="btn bg-primary text-white border-none hover:bg-primary">Close</button>
                    </form>
                    </div>
                </div>
            </dialog>
        </>
        
    );
}

export default Terms;