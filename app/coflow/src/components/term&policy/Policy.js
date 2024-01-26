import React from 'react';

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
                <div className="modal-box bg-white text-gray-900 w-full max-w-5xl">
                    <h3 className="font-bold text-lg">PRIVACY POLICY</h3>
                    <div className="t-static-container"><p className="text-center"><i>Last update on: 06/04/2021</i></p>
                        <p>At Tipeee.com ("Tipeee"), we undertake to protect your privacy. All our team members are, like you, Internet users and customers of other web sites, and fully understand the importance of respecting privacy on the Internet.</p>
                        <p>This "Privacy Policy" describes the terms and conditions under which TIPEEE collects and processes the personal data of the users of the platform Tipeee.com.</p>
                        
                        <h2 className="my-2 text-xl font-semibold">Preamble</h2>
                        <p>- Tipeee SAS develops and operates the platform "Tipeee.com" dedicated to crowd funding for content creators on the Internet.
                        </p>
                        <p>- The platform connects "Creators", who create pages of support on the website, and "Tippers", who wish to support these Creators financially by paying them in particular financial contributions known as "Tips". In the course of these activities, we are involved in processing your personal data, whether you are a simple visitor or a member.</p>
                        <p>- In order to respect your privacy and ensure the protection of your data, we comply with the privacy protection regulations in force, including the French Law no. 78-17 dated January 6th 1978, in particular the Law on "Computer Technology and Freedom " and the European Regulation 2016/679 dated April 27th 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, referred to as the "General Data Protection Regulation" or "GDPR".</p>
                        <p>- We may be led to update this Privacy Policy. Any relevant update shall be previously made known to.</p>
                        <p>- Our data protection officer can be contacted at <a href="mailto:dpo@tipeee.com" target="_blank" rel="noreferrer">dpo@tipeee.com</a> or through the postal system: TIPEEE SAS, Protection des données, 37 Bis Rue Général Leclerc, 92130 ISSY LES MOULINEAUX, FRANCE.</p>
                        
                        <h2 className="my-2 text-xl font-semibold">What personal data do we collect and process?</h2>
                        <p>In our capacity as a data controller, we collect and process some of your personal data.</p>
                        <p>We collect this data, in your capacity as a user of our platform in order to identify you and to contact you (username, full name, email address, postal address, phone), to validate the setting on line of your Creator page (explanatory contents of the Creator pages, Counterparties content, etc.) and to organise the collection of the Tips (banking information).</p>
                        <p>Furthermore, we collect data related to your use of our services, as well as the browsing data on our websites and our dedicated pages on social networks (Facebook, Twitter, etc.). The collected data are necessary to generate audience statistics, to measure the performance, and to carry out business development.</p>
                        <p>We collect data related to your exchanges with us regarding our services, and the requests that you are presenting to us, especially regarding the management of your rights as well as your instructions in the event of death.</p>
                        <p>We collect finally the data allowing us to comply with our obligations in the area of combating tax fraud, money laundering and terrorist financing, as well as for the management of your rights, pre-litigations and litigations. Within this framework, we need to collect documents in particular proving your identity (National ID card, Passport, Driving licence, etc.).
                        </p>
                        <p>All of this information can be communicated to us when you fill out our online forms or within our exchanges. These data can also be collected through software technologies such as cookies. For more information on our use of these tools, we invite you to review the cookie policy available at the following address: <a href="/cookies" target="_blank" rel="noreferrer">Cookies policy</a>.</p>
                        <p>
                        If you have linked a YouTube channel to your Tipeee Creator's account, we can use YouTube API to retrieve your channel name and your subscriptions number. This data are used to generate statistics and to help with the authentification of your Creator's page (<a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google's Privacy Policy</a>).
                        </p>
                        
                        <h2 className="my-2 text-xl font-semibold">Concerning the collected data</h2>
                        <p>Some data (whether optional or mandatory) that you record via our online forms becomes public and are accessible to everyone. By recording this data, you could reveal your personal data, sometimes very personal. <b>Therefore, and as a precaution, we suggest to be careful</b> when entering information in order to protect your privacy.</p>
                        <p>- <u>Data accessible from your member profile</u> (when you have created your Tipeee account): username, avatar (graphic illustration), internal messages sent from the website;</p>
                        <p>- <u>Data accessible from your Creator page</u> (when you created a Creator page and decided to publish it by activating it): the Creator name, social networks and websites, the Creator page description (including texts, graphic illustrations or any other type of content), counterparties, objectives;</p>
                        <p>- <u>Data available in the "News" and "Comments"</u> sections of the Creator page (when the Creator posts a News, when comments are sent via the forms available in the "News" and "Comments" tabs or via the form during the financial subscription): The news title and content (including text, graphic illustrations or any other type of content), content of a comment or answer to a comment. </p>
                        <p>For your information, when you send a Tip to a Creator, you can decide whether or not to post publicly the comment you make to the Creator when you support him/her financially;</p>
                        <h2 className="my-2 text-xl font-semibold">Concerning the sensitive data</h2>
                        <p>- Sensitive data when sending a financial contribution to a Creator - by default, the Tips (financial contribution) are public and visible from the Tips list on your member profile. Sometimes, the fact to support a Creator may reveal sensitive or very personal data. For example, by supporting a Creator with a political dimension, you indirectly reveal your political opinion. If you would not like your Tip to be public, Tipeee allows you to not display it on your public profile page. To do so, you will need to access the administration of your account (in "My Account").</p>
                        
                        <h2 className="my-2 text-xl font-semibold">Concerning the third parties data</h2>
                        <p>By writing a presentation of a Creator page or a News, you may be required to enter information about third parties (your partners, people you know, etc.).</p>
                        <p>The data processing shall be carried out in accordance with the regulations.</p>
                        <p><b>You should check that you have the right to communicate</b> such data to Tipeee and to the public (for example by having the written consent of such third parties) and to provide them with the information on the data processing carried out by Tipeee included in this Privacy Policy.</p>
                        
                        <h2 className="my-2 text-xl font-semibold">What are the purposes and legal basis for processing the personal data?</h2>
                        <p>In accordance with the regulations, any processing of personal data shall - in order to be lawful - be based on one of the legal basis set out in Article 6, and Article 9.2 of the GDPR if it related to the said sensitive data.</p>
                        <p>The table below presents the different objectives to be pursued within processing of your personal data and the legal basis for each objective.</p>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>The pursued objectives</th>
                                    <th>Legal basis</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Managing the website visitors</td>
                                    <td>Pre-contractual measurements
                        <br />
                                        Legitimate interests of visitors and users in having the website displayed under optimal conditions
                                        </td>
                                </tr>
                                <tr>
                                    <td>Managing the registered users of the website</td>
                                    <td>Performance of the contracts concluded with the users (management of the creations, modifications and closures of user accounts, the monitoring of the users relations and support)</td>
                                </tr>
                                <tr>
                                    <td>Managing the website user support</td>
                                    <td>The legitimate interests of Tipeee (improvement of services and offers, the monitoring of the users relations and support)</td>
                                </tr>
                                <tr>
                                    <td>Managing the website Creator pages </td>
                                    <td>Performance of the contracts concluded with the Creators
                        <br />
                                        The legitimate interests of Tipeee and compliance with its legal obligations by virtue of the legislation
                                        <br />
                                        For sensitive data communicated by the Creators or by the Tippers: the processing shall be justified since the data have been obviously made public by the concerned persons (Article 9.2 e) of the GDPR)
                                        </td>
                                </tr>
                                <tr>
                                    <td>Managing the Tips and Funds Transfers </td>
                                    <td>Performance of the contracts concluded with the Tippers and the Creators
                        <br />
                                        The legitimate interests of Tipeee (contribution management) and compliance with its legal obligations by virtue of the legislation (reporting of contributions)
                                        <br />
                                        For sensitive data communicated by the Tippers or revealed by simple fact of supporting a Creator: the processing shall be justified since the data have been obviously made public by the concerned persons (Article 9.2 e) of the GDPR)
                                        </td>
                                </tr>
                                <tr>
                                    <td>The fight against fraud, money laundering and terrorist financing</td>
                                    <td>Compliance with Tipeee legal obligations</td>
                                </tr>
                                <tr>
                                    <td>Organizing our marketing operations (audience statistics, performance measurement, commercial prospection, training, etc.)</td>
                                    <td>Legitimate interests of Tipeee (elaboration of performance statistics, website audience measurement, administration of dedicated pages on Facebook, Twitter, Instagram, LinkedIn and YouTube, sending newsletters, customer relationship development)</td>
                                </tr>
                                <tr>
                                    <td>Managing the complaints, pre-litigation and litigation</td>
                                    <td>The legitimate interests of Tipeee or legal obligations according to the case</td>
                                </tr>
                                <tr>
                                    <td>Retention of data related to the creation of accounts, connections to the platform, content creations and payments made, with a view to possible legal requisitions</td>
                                    <td>Compliance with Tipeee legal obligations</td>
                                </tr>
                                <tr>
                                    <td>Managing the users rights</td>
                                    <td>Compliance with Tipeee legal obligations</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>The collection of payments and the funds payment are managed by our payment services providers. They carry out personal data processing - for which they are responsible - as described in their respective privacy policies.</p>
                        <p>As part of its legal obligations to combat fraud, money laundering and terrorist financing, TIPEEE and its payment providers carry out data processing, including data combinations, in order to help their partners to determine the level of fraud risk associated with a payment or fundraising. These processing can be used as a justification of the decision of TIPEEE or its service providers to reject a payment or the release of funds.</p>
                        <h2 className="my-2 text-xl font-semibold">What are the data whose collection and processing are mandatory?</h2>
                        <p>The access to certain functionality requires the creation of an account and therefore the communication of some data. By creating an account, you become a user of the Platform Tipeee, allowing you later to become a Tipper and/or Creator.</p>
                        <p><u>In order to create a member account</u>, you must enter: a username, your email address and a password. You can also use your Facebook or Google accounts using Facebook Connect and Google Connect features. In this case, the identifiers of your Facebook or Google accounts will be transmitted to us.</p>
                        <p><u>In order to create a Creator page</u>, you must enter the following data: 
                            </p><ul>
                                <li>the contact details required to contact you: full name, postal address, country of residence, and telephone number;</li>
                                <li>the data for your page - the page name, the page address (URL), the navigation language, the categories to which your page belongs, the relevant tags associated to the page, a graphic illustration, the links of social networks or websites associated with your activity as Creator, the type of funds collection (monthly or by content) and the full description of the page;</li>
                                <li>the data required for the transfer of your Tips and your identification - banking information, PayPal account email address, proof of your identity (ID card and/or Passport and/or Driver’s License and/or the company registration and your corporation status) depending on whether you are a natural or a legal person.</li>
                            </ul>
                        <p></p>
                        <p><u>In order to support a Creator</u> (to become a Tipper), you are required to provide: your full name, your address, your country of residence, your payment information (credit card or the email linked to your PayPal account in case of payment via PayPal), and to provide any proof of identity required for your identification depending on whether you are a natural or a legal person.</p>
                        <p>In the event of failure to provide such information, you will not be able to publish your Creator page or to support the Creators on the platform.</p>
                        <p>These requirements of data provision are considered hereby within a regulatory and contractual framework (in particular for your proof of identity).
                        </p>
                        <p>In order to exercise your rights, providing a proof of identity may be required in case of doubt about your identity. Failure to provide such document can prevent us from responding to your requests.
                        </p>
                        <p>This requirement of data provision is of regulatory nature.</p>
                        <p>The collection of other data may be mandatory. Any data subject to collection, the contractual or regulatory nature of this obligation related to the data provision, as well as the consequences of failing to provide the relevant data, shall be therefore brought to your attention directly at the time of collection.</p>
                        <h2 className="my-2 text-xl font-semibold">To whom are we likely to transmit the provided data?
                        </h2>
                        <p>- To our subcontractors (web hosts, mailing tools, site security tools, forms manager, audience measurement tools, document sharing tools, navigation trackers on our sites, customer service and support tools, targeted advertising tools on social networks and the Internet). Our subcontractors shall be bound by a confidentiality and security obligation, as well as other obligations listed in the GDPR. We select carefully our subcontractors and we remain, in any event, responsible for the processing of your personal data by our subcontractors.</p>
                        <p>- To the Creator whom you support. Tipeee communicates data about you to the Creator so that he can exchange information with you, and that the intended counterparties are addressed to you. These data are at least your email, username, full name, address, amount paid, date and method of payment, selected counterparties. 
                        </p>
                        <p>- To our partners in the cases where you have expressed your willingness to participate in a particular partner operation.</p>
                        <p>- Our online payment service providers in order to ensure the effective execution of the funds transfers and allow them to fulfil their own due diligence and obligations in the framework of fight against fraud, money laundering and terrorist financing.</p>
                        <p>- To governmental bodies and authorities, court auxiliaries, financial control persons (auditors, accountants), anti-fraud, anti-money laundering and anti-terrorism financing entities, exclusively in order to meet our legal obligations.</p>
                        <p>Within the scope of the tools we use, your data may be subject to transfers outside the European Union. The transfer of your data in this context is secure at by using the following tools:</p>
                        <p>- Either these data are transferred to a country that has been judged to have a level of adequate protection by a decision of the European Commission;</p>
                        <p>- Either we have concluded a specific contract with our subcontractors governing the transfers of your data outside the European Union, on the basis of the standard contractual clauses between a controller and a processor approved by the European Commission.
                        </p>
                        <p>Subject to the foregoing, we undertake to never disclose your data to any third party except with your express consent or under very particular circumstances, including but not limited to:
                        </p>
                        <p>- If we are brought, because of the law, judicial proceedings, litigation and/or a request from the public authorities, to disclose your data;</p>
                        <p>- If we believe that for purposes of national security, of law enforcement or other public interest, the disclosure is necessary or appropriate;</p>
                        <h2 className="my-2 text-xl font-semibold">What rights do you have?</h2>
                        <p>Under the terms and conditions set out in the articles 15 and following of the GDPR, you have, (unless an exception was made) the right:</p>
                        <p>- To obtain from Tipeee the confirmation that your personal data are not processed and, when the access to such personal data as well as to several details on our processing (right of access - article 15 of the GDPR);
                        </p>
                        <p>- To obtain from Tipeee the rectification of you personal data that are inaccurate (right of rectification - article 16 of the GDPR);
                        </p>
                        <p>- To obtain from Tipeee the erase of your personal data, in some cases (right of erase or "right to be forgotten" - article 17 of the GDPR);
                        </p>
                        <p>- To obtain from Tipeee the restriction of processing, in some cases (Right to restriction of processing - Article 18 of the GDPR);

                        </p>
                        <p>- To obtain at any time from Tipeee, on the basis of reasons related to your particular situation, that we no longer proceed to the processing of your personal data, in some cases (right of to object - article 21.1 of the GDPR);</p>
                        <p>- To object, at any time, the processing of your personal data for the direct marketing purpose (right to object to such direct marketing - section 21.2 of the GDPR);
                        </p>
                        <p>- The right to receive the personal data you have provided us with in a standard machine-readable format, and to require their transfer to the recipient of your choice (right to portability – article 20.2 of the RGPD);</p>
                        <p>- To lodge a complaint by the competent data protection authority in your Member State or with the National Commission for Information Technology and Individual Freedom (CNIL Commission Nationale de l’Informatique et des Libertés), the French data protection authority;
                        </p>
                        <p>- To define, amend and revoke at any time the guidelines relating to the retention, erasure and disclosure of your personal data in the event of your death, pursuant to Article 40-1 of the French law on "Computer Technology and Freedom" These guidelines can be general or specific. We may only be the depository and guardian of any guidelines for the data we process, the general guidelines may be collected and retained by a digital trusted third party certified by the French CNIL.</p>
                        <p>You are also entitled to appoint a third party to whom your data may be transferred in the event of death. Therefore, you undertake to inform this third party of your procedure and the fact that identifying data shall be ambiguously provided to us, and to communicate this Privacy Policy to the third party.</p>
                        <p>Subject to the proof of your identity and the aforementioned elements, you can exercise your rights by writing to us either at <a href="mailto:dpo@tipeee.com" target="_blank" rel="noreferrer">dpo@tipeee.com</a> or at the following postal address: TIPEEE SAS, 37 Bis Rue Général Leclerc, 92130 ISSY LES MOULINEAUX, FRANCE.</p>
                        <h2 className="my-2 text-xl font-semibold">How long do we retain your data?</h2>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>The relevant data</th>
                                    <th>Duration of retention</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Data related to the management of the visitors and members (without Tip or Creator page) </td>
                                    <td>If you are an active user (logging to his/her account): for the duration of your account and then 3 months from your account closing request (excluding data required for commercial prospecting that will be retained for 3 years as of the last contact with you) 
                        <br />
                                        If you are an inactive user (idle): after 3 years without connecting to your account, we will ask you if you want to keep your account                 
                                        </td>
                                </tr>
                                <tr>
                                    <td>Data related to the pages management and to fundraising</td>
                                    <td>If you are an active Creator (logging to his/her account): for the duration of your account and then 5 years from your account closing request (to comply with a legal requirements) 
                        <br />
                                        If you are an inactive Creator (idle account): after 5 years without connecting to your account, we will ask you if you want to keep your account 
                                        </td>
                                </tr>
                                <tr>
                                    <td>Data related to the Tips management and funds transfers</td>
                                    <td>If you are an active Tipper : for the duration of your account and then 5 years from your account closing request (to comply with a legal requirements) 
                        <br />
                                        If you are an inactive Tipper (idle account): after 5 years without connecting to your account, we will ask you if you want to keep your account 
                                        </td>
                                </tr>
                                <tr>
                                    <td>Banking details</td>
                                    <td>Within the duration of your account (in particular to manage the recurring tips and the monthly payment of funds for the Creators) and 15 months after the termination of your account for the purposes of evidence in case of a disputed withdrawals</td>
                                </tr>
                                <tr>
                                    <td>Comments, internal messages or page descriptions</td>
                                    <td>Deleted at the termination of the account, or anonymised upon the request of the concerned User</td>
                                </tr>
                                <tr>
                                    <td>Commercial prospecting</td>
                                    <td>3 years from the end of our contractual relationship, unless you notify your objection</td>
                                </tr>
                                <tr>
                                    <td>Performance statistics</td>
                                    <td>No duration when our statistics are made on the basis of anonymous data</td>
                                </tr>
                                <tr>
                                    <td>Cookies and trackers</td>
                                    <td>13 months after the first deposit in your terminal equipment</td>
                                </tr>
                                <tr>
                                    <td>Data relating to our obligations to fight against fraud, money laundering and the terrorist financing</td>
                                    <td>5 years from the termination of the contractual relationship or the termination of your account in respect of the identity data and documents 
                        <br />
                                        5 years from the performance of the financial transaction in respect of the documents and information relating to the performed transactions
                                        </td>
                                </tr>
                                <tr>
                                    <td>Data related to the management of pre-litigation and litigation</td>
                                    <td>In case of pre-litigation, the erase soon as an amicable settlement is reached, or as result of a legal proceeding 
                        <br />
                                        In the case of litigation, the erase in the case of last resort, with the decision to do so
                                        </td>
                                </tr>
                                <tr>
                                    <td>Data related to your directives concerning the fate of your data in the event of death</td>
                                    <td>As long as the data concerned by the directives shall be retained</td>
                                </tr>
                                <tr>
                                    <td>Data related to the exercise of your rights </td>
                                    <td>5 years following the date of exercise of your right</td>
                                </tr>
                                <tr>
                                    <td>Copy of the identity proof submitted within the exercise of your rights</td>
                                    <td>The time needed to grant the data subject's request to exercise his or her rights</td>
                                </tr>
                            </tbody>
                        </table>
                        <h2 className="my-2 text-xl font-semibold">Who is the person that you can contact to answer your questions about your data?</h2>
                        <p>We appointed a Data Protection Officer. He is your contact person for any question regarding the data processing by Tipeee. He can be contacted at <a href="mailto:dpo@tipeee.com" target="_blank" rel="noreferrer">dpo@tipeee.com</a> or at the following postal address: TIPEEE SAS, Protection des données, 37 Bis Rue Général Leclerc, 92130 ISSY LES MOULINEAUX, FRANCE.</p>
                        <br />
                        <h2 className="my-2 text-xl font-semibold">Annex - Cookie Policy</h2>
                        <h3>1. What is a Cookie ?</h3>
                        <p>During your browsing on our Site, cookies, pixels and other tracers (hereinafter referred to collectively as "Cookies") are deposited on your browser.</p>
                        <p>A cookie is a small file, often encrypted, that is stored in your browser or device and is identified by a name. It is deposited when you visit a site or application. Each time you return to the site or application, the cookie is retrieved from your browser or device. Thus, each time you consult the site or application, the browser is recognised.</p>
                        <p>The deposit of these Cookies is likely to allow us to access your navigation data and/or personal data about you.</p>
                        <h3>2. Cookies Identification</h3>
                        <p><b>Technical and functional cookies</b></p>
                        <p>Technical and functional Cookies are necessary to ensure the proper functioning of the Website and to provide you with our services. They are used throughout your navigation, in order to facilitate it and to carry out certain features.</p>
                        <p>For example, a technical Cookie may be used to store your answers to a form or your preferences regarding the language or presentation of the Site, when such options are available.</p>
                        <p>We use the following technical and functional cookies:</p>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Cookie name</th>
                                    <th>Cookie function</th>
                                    <th>Retention period</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Auth</td>
                                    <td>Allows you to keep your authentication to stay logged in to Tipeee.</td>
                                    <td>7 days
                        </td>
                                </tr>
                                <tr>
                                    <td>PHPSESSID</td>
                                    <td>Allows you to keep your authentication on some parts of the Tipeee site.
                                    </td>
                                    <td>7 days
                        </td>
                                </tr>
                                <tr>
                                    <td>cookieconsent_status</td>
                                    <td> Status of your action on the cookie information banner.
                                    </td>
                                    <td>6 month
                        </td>
                                </tr>
                                <tr>
                                    <td>cookies_preferences</td>
                                    <td>Allows you to keep your cookie preferences.
                                    </td>
                                    <td>6 month
                        </td>
                                </tr>
                            </tbody>
                        </table>
                        <p>We may use cookies for advertising, content personalisation, social networking, or analytics. You will be informed when you first visit the Site using these Cookies.
                            <br />You will then be asked to accept or refuse them in accordance with the terms and conditions set out below.
                            </p>
                        <h3>3. Your Cookie Preferences</h3>
                        <p><b>Cookies that can be deposited without consent</b></p>
                        <p>Certain Cookies do not need your consent, as is the case for:<br />
                            - Technical and functional cookies required to ensure the proper functionning of the Website;<br />
                            - Certain Cookies for audience measurement or Cookies that make it possible to test different versions of the Site for the purpose of optimising editorial choices.
                            </p>
                        <p>Acceptance or refusal of Cookies is subject to your express consent.</p>
                        <p>All other cookies require your consent. These include Advertising Cookies, Social Networking Cookies, Content Personalisation Cookies and some Audience Analysis Cookies. You may freely choose to accept or decline the use of these Cookies.</p>
                        <p>You can accept or refuse these Cookies the first time you browse the Website.</p>
                        <p>Your choices to accept or decline cookies will be retained for a period of six (6) months.</p>
                        <p>You are free to withdraw your consent and more generally to change your preferences at any time via the <a href="/cookies">following link.
                        </a>.</p>
                        <p><b>Setting up your browser</b></p>
                        <p>It is also possible to set your browser to accept or refuse certain Cookies. Each browser offers different configuration options:
                        </p>
                        <ul>
                            <li>For Internet Explorer: go to the "Settings" menu, then "Internet Option". Click on "Privacy" and then "Advanced Privacy Settings";</li>
                            <li>For Chrome: go to the "Settings" menu, then "Privacy and security", then click on "Cookies and other site data". You can now choose to block all cookies;</li>
                            <li>For Safari: go to the "Settings" application and then go to Safari. Click on the "Confidentiality and Security" tab. You can now choose to block all cookies;</li>
                            <li>For Iphone: go to the "Settings" menu, then "Safari", then click on "Cookies". You can now choose to block all cookies;</li>
                            <li>For Android : go to "Chrome", then click on the "⁝" tab on the upper right of the screen, then "Site settings", then click on "Cookies".  tout en haut à droite de l’écran, puis sur « paramètre de site » et ensuite sur « Cookies ». You can now choose to block all cookies.</li>
                        </ul></div>
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

export default Policy;