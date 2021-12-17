import React from 'react'
import './styles.css';
import { Parser } from 'html-to-react'
// var __html = require('./terms.html');
// var template = { __html: __html };

const html = `<style type="text/css">
p.p1 {
    margin: 0.0px 0.0px 10.0px 0.0px;
     text-align: center;
    font: 11.0px 'Inter';
    color: #000000
}

p.p2 {
    margin: 0.0px 0.0px 10.0px 0.0px;
    text-align: justify;
    font: 11.0px 'Inter';
    color: #000000
}

p.p3 {
    margin: 0.0px 0.0px 10.0px 36.0px;
    text-align: justify;
    font: 11.0px 'Inter';
    color: #000000
}

p.p4 {
    margin: 0.0px 0.0px 10.0px 0.0px;
    text-align: justify;
    font: 11.0px 'Inter';
    color: #000000;
    min-height: 13.0px
}

p.p5 {
    margin: 0.0px 0.0px 10.0px 36.0px;
    text-align: justify;
    font: 11.0px 'Inter';
    color: #000000;
    min-height: 13.0px
}

p.p6 {
    margin: 0.0px 0.0px 10.0px 35.5px;
    text-align: justify;
    font: 11.0px 'Inter';
    color: #000000
}

p.p7 {
    margin: 0.0px 0.0px 0.0px 0.0px;
    text-align: justify;
    font: 11.0px 'Inter';
    color: #000000;
    min-height: 13.0px
}

p.p8 {
    margin: 0.0px 0.0px 0.0px 0.0px;
    font: 12.0px Helvetica;
    min-height: 14.0px
}

p.p9 {
    margin: 0.0px 0.0px 0.0px 0.0px;
    text-align: justify;
    font: 11.0px 'Inter';
    color: #000000
}

li.li2 {
    margin: 0.0px 0.0px 10.0px 0.0px;
    text-align: justify;
    font: 11.0px 'Inter';
    color: #000000
}

span.s1 {
    text-decoration: underline
}

span.Apple-tab-span {
    white-space: pre
}

table.t1 {
    border-collapse: collapse
}

td.td1 {
    width: 204.0px;
    height: 63.0px;
    border-style: solid;
    border-width: 1.0px 1.0px 1.0px 1.0px;
    border-color: #000000 #000000 #000000 #000000;
    padding: 4.0px 4.0px 4.0px 4.0px
}

ol.ol1 {
    list-style-type: upper-roman
}

ol.ol2 {
    list-style-type: decimal
}

ol.ol3 {
    list-style-type: lower-alpha
}

ol.ol4 {
    list-style-type: lower-roman
}
</style>
<p class="p1"><span class="s1"><strong>TERMS &amp; CONDITIONS<span class="Apple-converted-space">&nbsp;</span></strong></span></p>
<ol class="ol1">
<li class="li2">TERMS OF USE</li>
</ol>
<ol class="ol2">
<li class="li2">This &lsquo;Terms of Use&rsquo; is formulated and published pursuant to the provisions of Rule 3 (1) of the Information Technology (Intermediaries Guidelines) Rules, 2011 that requires the publication of Rules and Regulations, Privacy Policy and Terms of Use for access or usage of a website or an application for mobile and handled devices. This Terms of Use agreement (the &ldquo;Terms of Use&rdquo;/ the &ldquo;Agreement&rdquo;) governs your use of this website wwww.___________.com and mobile App (jointly referred to as the &ldquo;Platform&rdquo;). The Platform is owned and operated by M/s RAAMS MOVING TECHNOLOGIES PRIVATE LIMITED, a company incorporated under the Companies Act, 2013 and having its registered office at 5-36/8, MADHURA NAGAR COLONY, ROAD NO. 1, KASHIBUGGA 1, WARANGAL, Warangal Urban, Telangana, 506006 (hereinafter referred to as &ldquo;Spetrol&rdquo;).<span class="Apple-converted-space">&nbsp;</span></li>
<li class="li2">PLEASE READ THESE TERMS CAREFULLY BEFORE ACCESSING OR USING THE SERVICES as these Terms of Use govern the access and/or use by you of the services provided by Spetrol. Any person using the Platform is addressed herein as a &ldquo;user&rdquo; or simply as &ldquo;you&rdquo;. The users&rsquo; access and use of the services provided by this Platform (the &ldquo;Services&rdquo;) hereby constitutes and deems the users&rsquo; agreement to be bound by these Terms. If you do not agree to these Terms of Use, you may not use the services on the Platform, and we request you to uninstall the App. By using this Platform the User agrees to these Terms, and designates Spetrol on its behalf to procure HSD (the &ldquo;Product&rdquo;) and to transport it to a location chosen by the User, and thereafter transfer the Product into a container or other place as may be directed by the User.</li>
</ol>
<ol class="ol1">
<li class="li2">GENERAL</li>
</ol>
<ol class="ol2">
<li class="li2">The platform provided by Spetrol is to facilitate refueling at scheduled place and time. The ever-evolving interaction &amp; technology requires Spetrol to maintain pace &amp; alter user interface including these Terms &amp; Conditions, which are therefore subject to change, modification, alteration without notice, at any time and you acknowledge that you shall be bound by such change/amendments in Terms of Use for continued use of our digital platform/s. Be sure to return to this page periodically to review the most current version of Terms of Use. You shall, at all times, be responsible to regularly review the changes made in these terms and conditions and note the changes on the platform. Your continued use of this digital platform/s shall constitute acceptance of all changes and the same shall be binding upon you. You also acknowledge that you are legally competent to perform and be bound by these Terms &amp; Conditions under Indian Law.<span class="Apple-converted-space">&nbsp;</span></li>
</ol>
<ol class="ol1">
<li class="li2">APPLICATION STORES</li>
</ol>
<ol class="ol2">
<li class="li2">The Application can also be downloaded from third-party application stores including Google Play and Apple App Store. You agree to comply with all third party terms and conditions &amp; privacy policy, if any, applicable to the use of the Application or related services. Spetrol shall not be responsible for violation and infringement of any third party right, terms, and conditions in connection with the access, download, or installation of the Application by you. <span class="Apple-converted-space">&nbsp; &nbsp;</span></li>
</ol>
<ol class="ol1">
<li class="li2">DEFINITIONS</li>
</ol>
<p class="p3">Definitions:</p>
<ol class="ol2">
<li class="li2">User: defined by words including you, yours, consumer, individual, person, entity, party, user, end-user, customer, client, purchaser, principal all collectively and/or separately intended to mean the &ldquo;user&rdquo; who uses the Services and who is the recipient of the product procured using the service as described and provided by Spetrol, and specifically excluding a Dealer/Agent/Distributor appointed by a private company engaged in marketing of product (product includes HSD and Motor Spirit) in India and/or an individual or company that has been barred from procuring product by an Government Agency or Oil Company.</li>
<li class="li2">Spetrol: defined by words including our/we/ours and its parents, subsidiaries, affiliates, employees, operators collectively and/or separately intended to mean, &ldquo;Spetrol&rdquo;.</li>
<li class="li2">Services: defined by word including product procurement services, product acquisition services, and any all of the preceding with Spetrol acting on behalf of the users during the purchase, and transporter, transportation logistics and product transferring services with operator with Spetrol acting on behalf of the user during the process, any and all in all cases collectively and/or separately to mean the &ldquo;services&rdquo;.</li>
<li class="li2">Applications: defined by words including applications, websites, app, phone, content all collectively and/or separately intended to mean the &ldquo;Application:.</li>
</ol>
<ol class="ol1">
<li class="li2">DECLARATION<span class="Apple-converted-space">&nbsp;</span></li>
</ol>
<ol class="ol2">
<li class="li2">Spetrol hereby declares and the user acknowledges and agrees that, for the purposes of these Terms or otherwise, Spetrol is not an oil company/ oil marketing company (or its agent/affiliate/subsidiary or in any way whatsoever related to any oil company or oil marketing company operating in India or anywhere else in the world) and Spetrol does not endorse in explicit or implied form, any Oil Marketing Company or Oil Company operating in India or anywhere in the world. Spetrol only provides logistical services to its Users through (i) procuring; (ii) transporting; and (iii) delivering the Product at a location specified by the User. In providing the service that it provides, Spetrol finds the Product based on ease of access and distance to the final delivery point and transport the product procured on the users behalf, to a location of the users choosing and transfer the said product procured on the users behalf into a container /s of the users choosing. Spetrol does not indulge in an unauthorized exchange or unauthorized sale or unauthorized purchase or any malpractice. <span class="Apple-converted-space">&nbsp; &nbsp; &nbsp;</span></li>
<li class="li2">The agreement/contract has been entered Into specifically between two parties, the user and Spetrol, at the users initiation and behest, with the user understanding and acknowledging that all disclaimers, conditions and terms of service including all those stated or implied in this document are non-negotiable, and further the user acknowledging and agreeing that the user approached Spetrol with an intention to hire Spetrol&rsquo;s services, and in doing so undertakes to have acted independently and without any coercion or compulsion or undo any duress.<span class="Apple-converted-space">&nbsp;</span></li>
<li class="li2">These Terms expressly supersede prior or other agreements or other arrangements that may exist between the User and Spetrol. Notwithstanding this, Spetrol may at any time terminate these Terms or any Services, or cease offering or deny access to the Services or any portion thereof to a User. Supplemental terms may apply to Services and shall be deemed a part of these Terms. Supplemental terms shall prevail over these Terms in the event of a conflict with respect to the applicable Services. Spetrol may, at any time, amend these Terms. Amendments will become effective upon their publication on the Platform. The User is responsible for keeping updated with revised or amended terms from time to time. The Users use of the Services after the publication of amended terms constitutes and deems the users consent to be bound by the amended Terms. If the user does not agree with the amended Terms, please do not use the Services.</li>
</ol>
<ol class="ol1">
<li class="li2">THE SERVICES<span class="Apple-converted-space">&nbsp;</span></li>
</ol>
<ol class="ol2">
<li class="li2">The Services offered constitute a technology platform that enables users</li>
</ol>
<ol class="ol3">
<li class="li2">To designate Spetrol to act on the users behalf to procure the Product and</li>
<li class="li2">To schedule transportation of the Product procured on the users&rsquo; behalf (including transportation by hiring/leasing Spetrol equipment with operator to transport the product procured on the users behalf) to a location of the users choosing and further transfer product procured on the users behalf, by hiring/leasing Spetrol&rsquo;s equipment with operator into a container of the users choosing.</li>
</ol>
<p class="p3">(a and b collectively part of &apos;Services). Spetrol procures the Product on the users&rsquo; behalf from Authorized Government Agencies or Authorized dealers (public or private oil Companies) based on ease of access and distance to final delivery point.</p>
<ol class="ol2">
<li class="li2">Unless otherwise agreed by Spetrol in a separate written agreement, the user, the Services are made available solely for the user&rsquo;s end-use and non-commercial use.</li>
<li class="li2">Spetrol provides on-demand product delivery services as described in these Terms. The user may order Spetrol&rsquo;s Services using Spetrol&rsquo;s Website / mobile application. The user may cancel orders at any time prior to receiving a notification from Septrol that the product has been procured by Spetrol on the user&rsquo;s behalf. Spetrol will also notify the user that Spterol&rsquo;s delivery vehicle is on its way to a location specified by the user. When Spetrol notifies the user that its delivery truck is on route, or the user specifies an appointment window the user agrees that this window is an estimate only- Spetrol does not guarantee delivery at any particular time within such window and does not guarantee that Spetrol&rsquo;s vehicle will arrive within the estimated time.<span class="Apple-converted-space">&nbsp; &nbsp;</span></li>
<li class="li2">Once Spetrol&rsquo;s delivery vehicle arrives onsite, whether within or outside the estimated window, the driver will notify the user via Spetrol&rsquo;s application, and Spetrol&rsquo;s driver will wait no more than five minutes for the user to give access to a container of the users choosing for transferring the product procured on the users behalf. If access in not granted within such five-minute period, Spetrol&rsquo;s delivery vehicle will leave and the user will be charged the applicable fees irrespective of whether or not the delivery was successful. Due to reasons such as restrictions imposed by applicable law, terrain or building features and limitations (e.g. overhead clearance), or the requirements of some private property owners, the services may not be available in all locations within a service area. We reserve the right to decline to enter into any area based on ease of access or for any other reason. The User may not be charged in such an event.<span class="Apple-converted-space">&nbsp; &nbsp;</span></li>
</ol>
<ol class="ol1">
<li class="li2">LICENSE</li>
</ol>
<ol class="ol2">
<li class="li2">Contingent to the users agreement to these Terms and stipulations, and deemed agreement in case of use, Spetrol hereby grants the user a limited, restricted, non-sub licensable , user irrevocable (during an active order) but revocable by Spetrol (at any time), non-transferrable license to:<span class="Apple-converted-space">&nbsp;</span></li>
</ol>
<ol class="ol3">
<li class="li2">Access and use the Applications on the user&rsquo;s personal device solely in connection with the use of the Services.</li>
<li class="li2">Access and use any content, information and related materials that may be made available through the use of Services, in each case for the user&rsquo;s personal end-use and non-commercial use.<span class="Apple-converted-space">&nbsp;</span></li>
</ol>
<p class="p3">Any rights not expressly granted herein are hereby reserved by Spetrol and Spetrol&rsquo;s licensors.</p>
<p class="p4"><br></p>
<ol class="ol1">
<li class="li2">RESTRICTIONS AND CONTINGENCIES OF GRANT OF LICENSE</li>
</ol>
<p class="p2">The license is granted to user contingent to the following conditions. The user represents warrants and undertakes that the user:</p>
<ol class="ol3">
<li class="li2">Is not a Dealer/Agent/Distributor appointed by a private or public company engaged in marketing of the Product in India.</li>
<li class="li2">Is not an individual or company barred from procuring the Product by any Government Agency or Oil Company.</li>
<li class="li2">Will not alter, add or remove any copyright, trademark or other proprietary notices from any portion of the Application.</li>
<li class="li2">Will not duplicate, reproduce, modify, prepare derivative works based upon, distribute, license, lease, sell, resell, transfer, publicly display, publicly perform, transmit, steam, broadcast or otherwise exploit the Services except as expressly by Spetrol.</li>
<li class="li2">Will not decompile, reverse engineer or disassemble the Application and/or Services.</li>
<li class="li2">Will not link to mirror or frame any portion of the Application and/or Services.</li>
<li class="li2">Will not cause or Launch any programs or scripts for the purpose of scraping, indexing, surveying, or otherwise data mining any portion of the Application and/or Services or unduly burdening or hindering the operation and functionally of any aspect of the Services; attempt to gain unauthorized access to or impair any aspect of the Services or its related or network.</li>
</ol>
<ol class="ol1">
<li class="li2">OWNERSHIP</li>
</ol>
<ol class="ol2">
<li class="li2">The Application and Services and all rights therein are and shall remain Spetrol&rsquo;s property. Neither these Terms nor the users&rsquo; use of the Application or grant to the user any rights (in or related to the Applications or Services) except for the limited license granted above to use or reference in any manner Spetrol&rsquo;s company names, logos, product, and service names, trademarks or services marks or those of Spetrol&rsquo;s licensors.<span class="Apple-converted-space">&nbsp;</span></li>
</ol>
<ol class="ol1">
<li class="li2">FALSE CLAIMS MADE BY USER TO OBTAIN LICENSE</li>
</ol>
<ol class="ol2">
<li class="li2">Making a false claim to obtain in a license to use services or in any section in this document shall automatically disqualify the user from using the services. The user is advised to cease and desist from using the service if making a false claim and if the user continues to do so, the user will be liable and subject to prosecution for fraud.</li>
</ol>
<ol class="ol1">
<li class="li2">TERMS OF USE OF THE SERVICES</li>
</ol>
<ol class="ol2">
<li class="li2">ACCOUNTS:</li>
</ol>
<ol class="ol3">
<li class="li2">To use the Services, the user must register for and maintain a user account (&ldquo;Account&rdquo;). The user must be an adult and reside within India to obtain an Account. The Account will be linked to an active mobile/cell phone number, either belonging to the user or to which to user has authorization to use. Account registration requires the user to submit to Spetrol personal information, including name, address, mobile /cell phone number, age, vehicle, details (make, model, year, colour, license Registration/Number plate), as well as at least one valid payment method that either belongs to the user or the user has authorization to use, (credit card/ debit cart/net banking/e wallet or other accepted payment method). The user agrees to maintain accurate and up-to-date information in the Account, failure to do so may result in inability to access and use the Services or Spetrol&rsquo;s termination of this Agreement with the user. Further, the user is solely responsible for all activity that Account, and the user agrees to maintain the secrecy of the user Account username and password at all times. Unless otherwise permitted by Spetrol, the user may only possess one Account.<span class="Apple-converted-space">&nbsp;</span></li>
<li class="li2">By using the services, the user hereby agrees and undertakes to accept product procured by Spetrol irrespective of the Brand of the Product procured (the Product shall be procured only from an Authorized Oil Company Including but not limited to Indian Oil Corporation Limited, Bharat Petroleum, Hindustan Petroleum, Essar Oil , Reliance Petroleum, Shell etc.) or Location at which procured ( A specific authorized location including but not limited to a Fuelling station, Retail Pump Outlet, Filling Station, Diesel Station run by an Oil Company , Government Agency or an Oil Company Dealer etc.). The user further agrees and authorizes Spetrol to make a payment on the user&rsquo;s behalf for procurement of product. Since Spetrol is acting on behalf of the user, the user agrees that the bill/invoice that will be generated during product procurement will be in the users name, even though Spetrol may pay for the product on the users behalf. The charges incurred by Spetrol, acting on users behalf, in this case will be refunded in full to Spetrol. These charges will be the actual cost of product purchased, inclusive of all taxes payable and will simulate the transaction as if the user has procured the product. The user agrees to accept and pay and not challenge these charges.<span class="Apple-converted-space">&nbsp;</span></li>
<li class="li2">By using the services the user hereby agrees to hire/lease Spetrol&rsquo;s equipment with operator to transport the product procured on the user&rsquo;s behalf to a location of the users choosing and transfer product procured on the user&rsquo;s behalf into a container of the users choosing. Charges will also be applicable to schedule transportation and transferring of product procured on the user&rsquo;s behalf. The user will be charged applicable Service Tax on these charges. The user agrees to not challenge these charges.</li>
<li class="li2">By using the services, the user hereby undertakes that the user is not a Dealer/Agent/Distributor appointed by a company engaged in marketing of product in India and undertakes that the user is not an individual or company barred from procuring product by any Government Agency or Oil Company. Making a false claim in this regard or any section in this document shall automatically disqualify the user from using the Services. The user is advised to cease and desist from using the Services if making a false claim and if the user continues to do so, the user will be liable and subject to prosecution for having committed fraud with Spetrol. (All relevant clauses for the applicable law will be used for proceeding with prosecution by Spetrol including statutory reporting of breach of contract/agreement if and when a user&rsquo;s default is recognized by Spetrol or reported to Spetrol, and Spetrol declares that it will cooperate any other agency Government or Public to aid such a prosecution, if charge are pressed by such an agency).</li>
<li class="li2">By using the services, the user hereby undertakes:</li>
</ol>
<ol class="ol4">
<li class="li2">That the mobile/cell phone number used to register for the account, either belongs to the user or the user has authorization to use the number for the specific purpose of registering with Spetrol.</li>
<li class="li2">That the payment method used to pay to Spetrol for services provided, either belongs to the user or the user has authorization to use the payment method provides for the specific purpose of paying for the services.<span class="Apple-converted-space">&nbsp;</span></li>
<li class="li2">To pay all and any applicable charges to Spetrol including procurement, transporting statutory and payment facilitation charges including taxes, levies, charges, surcharges, cesses, fees will be charged as applicable.</li>
<li class="li2">That the user is acting on the users own accord and is bound to all terms and conditions mentioned in the agreement when using the services and further is fully responsible for all actions taken by the user.</li>
<li class="li2">To have access right and privileges to property (Movable or Immovable) at the time of delivery and transferring of product.</li>
<li class="li2">To not authorize third parties to use their Account.</li>
<li class="li2">To not assign or transfer the Account to any other person or entity.</li>
<li class="li2">To comply with all applicable laws when using the Services.</li>
<li class="li2">To use the Services only for lawful purposes.</li>
<li class="li2">That the Services will not be used to cause nuisance, inconvenience, or property damage (Movable and Immovable), whether to Spetrol or to any other party.</li>
<li class="li2">That in certain instances the user may be asked to provide proof of identity to access or use the Services and that the user may be denied access to use of the Services if the user refuses to provide proof of identity to check compliance of mentioned undertakings.</li>
<li class="li2">That all information that has been shared by the user with Spetrol is factually correct and accurate.</li>
<li class="li2">That in-case there are quality issues with the product procured, the user will direct all claims to the point of purchase where product was procured by Spetrol on the user behalf.</li>
<li class="li2">That any and all benefits including but not limited to reimbursements/paybacks/cashback/points/miles whether or not obtained when procuring product on behalf of the user and/or whether or not derived from use of cashless transactions and/or whether or not derived from using fleet cards will be the sole property of Spetrol and the user hereby acknowledges and agrees that the user has no claim on any such benefits. Further, even in-case a residual claim exists the user agrees to transfer any all such residual claims to Spetrol for monetization. The user hereby waives all direct and indirect claims and subsequently transfers all such benefits to Spetrol.</li>
</ol>
<p class="p4"><br></p>
<ol class="ol1">
<li class="li2">TEXT/SMS/PUSH MESSAGING</li>
</ol>
<ol class="ol2">
<li class="li2">By creating an Account and using these services the user agrees to receive informational text (SMS) messages or push messages.</li>
</ol>
<ol class="ol1">
<li class="li2">USER PROVIDED CONTENT</li>
</ol>
<ol class="ol2">
<li class="li2">Spetrol may, in its sole discretion, allow or request the user to present, upload, or make available text, audio-visual content and information, including commentary and feedback related to the Services. (&ldquo;User Content&rdquo;).<span class="Apple-converted-space">&nbsp;</span></li>
<li class="li2">By providing User Content to Spetrol, the user agrees to give to Spetrol a worldwide, perpetual, irrevocable, royalty-free license, with the right to sublicense, use copy, modify, create derivative works of, distribute, publicly display, publicly perform, and otherwise exploit in any manner such User Content ( including in connection with the Services and Spetrol&rsquo;s business and on third &ndash;party sites and services), without further notice to or consent from the user, and without the requirement of payment to the user or any other person or entity.</li>
</ol>
<ol class="ol1">
<li class="li2">NETWORK ACCESS AND DEVICES</li>
</ol>
<ol class="ol2">
<li class="li2">The user is solely responsible for obtaining the data network access necessary to use the Services. The users mobile/cell network&rsquo;s data and fees may apply if the user accesses or uses the Services from a wireless-enabled device. The user is responsible for acquiring and updating compatible hardware or devices necessary to access and use the Services and Applications and any updates thereto.<span class="Apple-converted-space">&nbsp;</span></li>
<li class="li2">Spetrol does not guarantee that the Services, or any portion thereof, will function on any particular hardware or devices. In addition, the user should be aware that the Services may be subject to malfunctions and delays inherent in the use of the internet and electronic communications.</li>
</ol>
<ol class="ol1">
<li class="li2">FALSE CLAIM MADE BY USER TO USE SERVICES</li>
</ol>
<ol class="ol2">
<li class="li2">Making a false claim to obtain a License to use services or in any section in this document shall automatically disqualify the user from using the Services.<span class="Apple-converted-space">&nbsp;</span></li>
<li class="li2">The user is encouraged to cease and desist from using the services if making a false claim and if the user continues to do so, the user will be liable and subject to prosecution for having committed fraud with Spetrol.</li>
</ol>
<p class="p4"><br></p>
<ol class="ol1">
<li class="li2">PAYMENT</li>
</ol>
<p class="p2">The user understands, acknowledges and undertakes following:</p>
<ol class="ol2">
<li class="li2">That use of the Services will result in charge to the user (&ldquo;Charges&rdquo;).</li>
<li class="li2">The charges will include charges for product procured (from an authorized government agency, authorized dealer (private or public) of Oil Company) by Spetrol on the user&rsquo;s behalf. These charges will be the actual cost of product procured, inclusive of all taxes payable and will simulate the transaction as if the user had procured the product. The user agrees to not dispute or challenge these charges. The bill/invoice will be in the name of the user and the user authorizes Spetrol to pay for these charges acting on the user&rsquo;s behalf, and further the user agrees to refund these charges to Spetrol.<span class="Apple-converted-space">&nbsp;</span></li>
<li class="li2">Charges will also be applicable to schedule transportation and transferring of product procured on the user&rsquo;s behalf. The user will be charged applicable Service Tax on these charges. The user agrees to not dispute or challenge these charges.</li>
<li class="li2">The user acknowledges that part of the charges may be derived from benefits (including but not limited to reimbursements/paybacks/cashback/points/miles whether or not obtained when procuring product on behalf of the user and/or whether or not derived from use of cashless transaction and/or whether or not derived from using fleet cards) which will be the sole property of Spetrol and the user hereby acknowledge and agrees that the user has no claim on any such benefits. Further, even in case a residual claim exists the user agrees to transfer any and all such residual claims to Spetrol from monetization. The user hereby waives all direct and indirect claims and rights and subsequently transfers to Spetrol. These charges may not be reflected in the user&rsquo;s bill.<span class="Apple-converted-space">&nbsp;</span></li>
<li class="li2">The user agrees to be liable to pay all applicable charges described above, even if the user chooses not to accept the product (procured by Spetrol on user&rsquo;s behalf and its subsequent transportation to a location of the users choosing). In case of non-acceptance of product by the user, the user agrees and undertakes that Spetrol is free to appropriately dispose the product or use the product as Spetrol may deem fit and further the user hereby relinquishes all claims on the product procured.</li>
<li class="li2">All Charges are due immediately and payment will be facilitated by Spetrol using the preferred payment method designated in the users Account, after which Spetrol will send the user a receipt by email. If users primary Account payment method is determined to be expired, invalid or otherwise not able to be charged, the user agrees that Spetrol may use a secondary payment method specified in the Account, if available.</li>
<li class="li2">A delay in payment from the user for more than 7 working days from the due date would attract an interest on the total amount.</li>
<li class="li2">As between the user and Spetrol, Spetrol reserves the right to establish, remove and revise Charges for any or all services or goods (as applicable) obtain through use of the Services at any time in Spetrol&rsquo;s sole discretion. Spetrol may from time to time provide certain users with promotional offers and discounts that may result in different amount charge for the same or similar services or goods obtain through the use of the Services, and the user agrees that such promotional offers and discounts, unless also made available to the user, shall have no bearing on use of the Services or the Charges applied to the user in question. The user may elect to cancel request for Services at any time prior to receiving a product procured confirmation massage from Spetrol, in which case the user may be charged a cancellation fee.</li>
<li class="li2">The user understands that, while the user is free to provide additional payment as a gratuity/tip to any operator the user is under no obligation to do so. Gratuities/tips are voluntary.</li>
<li class="li2">&nbsp; &nbsp; 10.The user expressly authorize Spetrol to charge the applicable fees and taxes on said payment method as well as taxes and other charges incurred thereto at regular intervals, all of which depend on the particular membership and utilised services.</li>
<li class="li2">&nbsp; &nbsp; 11.We understand that the user might cancel an account, but please know that Spetrol will not provide any refund(s) and the user will be responsible for paying any balance due on the account. The user agrees that Spetrol may charge any unpaid fees through provided payment method and/or send the user a bill for such unpaid fees.</li>
<li class="li2">&nbsp; &nbsp; 12.All statutory and payment facilitation charges including taxes, levy&rsquo;s, charges, surcharges, cesses, fees will be charged as applicable.<span class="Apple-converted-space">&nbsp;</span></li>
<li class="li2">&nbsp; &nbsp; 13.The user hereby undertakes that the payment method used to pay to Spetrol for services provided, either belongs to the user or the user has authorization to use the payment method provided for the specific purpose of paying for the services.<span class="Apple-converted-space">&nbsp;</span></li>
</ol>
<ol class="ol1">
<li class="li2">DISCLAIMERS; LIMITATION OF LIABILITY; INDEMNITY</li>
</ol>
<ol class="ol2">
<li class="li2">DISCLAIMERS</li>
</ol>
<p class="p3">The services are provided as is and as available basis, Spetrol disclaims all representations and warranties, express, implied, or statutory, not expressly set out in these terms, including the implied warranties of merchantability, fitness for a particular purpose and non-infringement. In addition, Spetrol makes no representation, warranty, or guarantee regarding the reliability, timeliness, quality, suitability, or availability of the services or any services or product (procured by Spetrol on behalf of the user) requested through the use of the services, or that the services will be uninterrupted or error-free. Spetrol does not guarantee the quality, suitability, safety of product (procured by Spetrol on behalf of the user) provided to the user. The user agrees that the entire risk arising out of use of the services, and any service or product requested in connection therewith, remains solely with the user, to the maximum extent permitted under applicable law. Spetrol does not sell, put up for sale, put on the market, vend, trade, retail, wholesale, market, promote, advertise, publicise a product, transact an unauthorized sale or unauthorized exchange or unauthorized purchase, but offers the user a technology platform where a user can authorize Spetrol to purchase product on the users behalf and subsequently have it transported on the users behalf to place of the users choosing and transferred into a container of the users choosing.</p>
<p class="p5"><br></p>
<ol class="ol2">
<li class="li2">LIMITATION OF LIABILITY</li>
</ol>
<p class="p3">Spetrol shall not be liable for indirect, incidental, special, exemplary, punitive, or consequential damages, including lost profits, lost data, personal injury, or damage to property (both moveable and immovable) related to, or in connection with, or otherwise resulting from any use of the services or product (procured by Spetrol on behalf of the user) even if Spetrol has been advised of the possibility of such damages. Spetrol shall not be liable for any damages, liability or losses arising out of the users use of or reliance on the services or use of product procured (with Spetrol as the users agent) using the services or the users inability to access or use the services. Spetrol shall not be liable for delay or failure in performance resulting from causes beyond Spetrol&rsquo;s control. In case of quality issues with the product procured, the user is directed to address all claims to the point of purchase where the product was procured by Spetrol on the users behalf. The user hereby indemnifies Spetrol from any and all claim that may arise out of quality issues with the product procured by Spetrol acting on behalf of the user. In no event shall Spetrol&rsquo;s total liability to the user in connection with the services for all damages, losses and causes of action exceed ten thousand INR (INR 10,000). In addition , Spetrol shall not be liable to the user for any damages arising out of, or relating to any of the following regardless of whether sounding in contract, tort (Including negligence) or otherwise:</p>
<p class="p5"><br></p>
<ol class="ol3">
<li class="li2">Any siphoning of product from the users container.</li>
<li class="li2">Access by any third party to any area within which the users movable or immovable property is located, whether or not the user has provided us any key, pin or passcode to allow us access to such area.</li>
<li class="li2">Any spillage of product, whether or not related to the services; and the product used to fill the users container.</li>
<li class="li2">Any damage to the users immovable or movable or other real or tangible personal property, whether owned by the user or by a third party, by agreeing to these terms of use and using the services. The user assumes all liability for any damages arising from Spetrol&rsquo;s access movable or immovable property. The user agrees that any insurance, under which the user may be insured, which may be available to address any damage arising out of, or related to any of the preceding listed events, shall be the source of insurance to address any such damages. The user understand and agrees that any insurance under which Spetrol is insured shall not be the primary source of insurance to address any damages and may only be accessed at Spetrol&rsquo;s sole discretion and election or not at all.</li>
</ol>
<p class="p5"><br></p>
<ol class="ol2">
<li class="li2">RESTRICTIONS ON USE</li>
</ol>
<p class="p3">The Users of the Website and/or Platform and/or the Services shall not host, display, upload, modify, publish, transmit, update or share any information that:</p>
<p class="p5"><br></p>
<ol class="ol3">
<li class="li2">belongs to another person and to which the User does not have any proprietary right;</li>
<li class="li2">is grossly harmful, harassing, blasphemous defamatory, obscene, pornographic, pedophilic, libelous, invasive of another&apos;s privacy, hateful, or racially, ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, or otherwise unlawful in any manner whatever;</li>
<li class="li2">harm minors in any way;</li>
<li class="li2">infringes any patent, trademark, copyright or other proprietary rights;</li>
<li class="li2">violates any law for the time being in force;</li>
<li class="li2">deceives or misleads the addressee about the origin of such messages or communicates any information which is grossly offensive or menacing in nature;</li>
<li class="li2">impersonates another person;</li>
<li class="li2">contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer resource; or</li>
<li class="li2">Threatens the unity, integrity, defense, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting any other nation.</li>
</ol>
<p class="p2">Spetrol retains the right to remove from the Platform any content that contravenes any of the above conditions.</p>
<ol class="ol2">
<li class="li2">DISCLAIMER OF WARRANTIES</li>
</ol>
<ol class="ol3">
<li class="li2">Please note that your use of the Website/paltform and the Services shall be at your sole risk. Spetrol disclaims all warranties of any kind, whether express or implied, including, but not limited to non-infringement of third party rights with respect to the contents of the Website/Platform, or any reliance upon or use of the Website/Platform contents or products.</li>
<li class="li2">Further, Spetrol makes no warranty:</li>
</ol>
<ol class="ol4">
<li class="li2">That the content made available on the Website/platform is complete, updated or accurate; or</li>
<li class="li2">That the third party information made available on the Website or the third party links made available on the Website are accurate, reliable or complete.<span class="Apple-converted-space">&nbsp;</span></li>
</ol>
<ol class="ol2">
<li class="li2">INDEMNITY</li>
</ol>
<p class="p3">The user is responsible for use of the Services, and hereby indemnifies and holds Spetrol and its officers, directors, employees, consultants, affiliates, subsidiaries, and agent (together the &ldquo;Spetrol&rdquo; Entities) from and against any and all claims, demands, losses, liabilities, and expenses (including attorneys&rsquo; fees ), arising out of or in any way connected with;</p>
<ol class="ol3">
<li class="li2">The users access to use of or alleged use of the Services or goods (procured by Spetrol on the user behalf) procured through use of the Services;</li>
<li class="li2">The user making any false claim to either obtain a license to Access Services or Application or to Use Services;</li>
<li class="li2">Sharing of inaccurate, false, misleading or incorrect information uploaded by the user;<span class="Apple-converted-space">&nbsp;</span></li>
<li class="li2">The users breach or violation of any of these Terms, any representation, warranty, or agreement referenced in these Terms, or any applicable law or regulation;</li>
<li class="li2">Spetrol&rsquo;s use of user content;</li>
<li class="li2">The users violation of the rights of any third party, including any intellectual property right or publicity, confidential, other property, or privacy, right; or,</li>
<li class="li2">Any dispute or issue between the user and any third party;</li>
<li class="li2">Access rights and privileges to property (Movable or Immovable) at the time of delivery and transferring to product.</li>
</ol>
<p class="p6">Spetrol reserves the right, at its own expense to assume the exclusive defence and control of any matter otherwise subject to indemnification by the user (without limiting the users indemnification obligation with respect to that matter), and in that case, the user agrees to co-operate with Spetrol&rsquo;s defence of that claim.</p>
<ol class="ol1">
<li class="li2">INTELLECTUAL PROPERTY RIGHTS</li>
</ol>
<ol class="ol2">
<li class="li2">The user acknowledges and agrees that the Application, the Website, the Services, and all trademarks, service marks and trade names and other intellectual property rights associated therewith are, and shall remain, the property of Spetrol.<span class="Apple-converted-space">&nbsp;</span></li>
<li class="li2">All content related to Spetrol corporate and business activities included on the Site and embedded in the Application, including any text, graphics, logos, button icons, images, audio clips, and software, is the exclusive property of Spetrol or its licensors and is protected by applicable legislation concerning protection and preservation of intellectual property rights and applicable international treaties governing intellectual property.<span class="Apple-converted-space">&nbsp;</span></li>
<li class="li2">The compilation (meaning the collection, arrangement, and assembly) of all content on the Site and Application is also the exclusive property of the Spetrol and is protected by applicable laws as stated above. All software used on the Site and the Application is the property of Spetrol or its software suppliers and protected by Indian and international copyright laws.<span class="Apple-converted-space">&nbsp;</span></li>
<li class="li2">Any use except as specifically permitted, including the reproduction, modification, distribution, transmission, republication, display or performance, of the content on the Site and the Application is strictly prohibited except as otherwise permitted by law. All Spetrol graphics, logos, and service names are trademarks of Spetrol or its affiliates.<span class="Apple-converted-space">&nbsp;</span></li>
<li class="li2">Spetrol&rsquo;s trademarks may not be used in connection with any product or service that is not Spetrol&apos;s, in any manner that is likely to confuse customers, or in any manner that disparages or discredits Spetrol. Spetrol&rsquo;s trademarks may not be used in connection with any product or service except as authorized by Spetrol in writing.</li>
</ol>
<ol class="ol1">
<li class="li2">DISPUTE RESOLUTION MECHANISM</li>
</ol>
<ol class="ol2">
<li class="li2">The user agrees that any dispute, claim or controversy arising out of or relating to these Terms or the breach, terminated, enforcement, interpretation or validity thereof or the use of Services (collectively, &ldquo;Disputes&rdquo;) will:</li>
</ol>
<p class="p3">FIRST- be brought to the attention of Spetrol&rsquo;s management in writing for settlement. The Management, after scrutinizing the claim will reply to the user with a decision on the matter within a period of 60 days. Such a decision, if challenged by the user in respect of every matter so referred shall, subject to adjudication by courts in Hyderabad, State of Telangana.</p>
<ol class="ol1">
<li class="li2">REDRESSAL OF GRIEVANCES</li>
</ol>
<ol class="ol2">
<li class="li2">If a User has any questions or grievances regarding the Website/Application, the contents thereof or the Services, the User may reach out to Spetrol customer support at _________ (the &ldquo;Grievance Officer&rdquo;). The Grievance Officer shall address any complaint or grievance that is raised by a User within a period of one (1) month from when it is raised.</li>
</ol>
<ol class="ol1">
<li class="li2">MISCELLANEOUS PROVISIONS</li>
</ol>
<ol class="ol2">
<li class="li2">Force Majeure: Spetrol shall not responsible for any cessation, interruption or delay in the performance of its obligations hereunder due to earthquake, flood, pandemic, fire, storm, natural disaster, act of God, war, terrorism, armed conflict, labor strike, lockout, or boycott. Spetrol may at any time, in its sole discretion and without advance notice to you, cease operation of the Platform and the provision of the Services.</li>
<li class="li2">Entire Agreement: This Agreement comprises the entire agreement between you and Spetrol with respect to the use of the Platform.</li>
<li class="li2">Relationship: The Agreement is entered into between Spetrol and the user on a principal to principal basis. Neither Spetrol acts as an agent of the user nor the user acts as an agent of Spetrol.<span class="Apple-converted-space">&nbsp;</span></li>
<li class="li2">No Waiver: Any delay or failure by Spetrol to exercise or enforce any right or provision of this Agreement will not constitute a waiver of such right or provision.</li>
<li class="li2">Notices: All notices given to a User by Spetrol or by a User to Spetrol or another User shall be in writing and in the English language. Such notice shall be sent by e-mail or mailed by a prepaid internationally-recognized courier service to the intended recipient at the address set out below, or any changed address that is notified by either Party:</li>
</ol>
<table cellpadding="0" cellspacing="0" class="t1">
<tbody>
    <tr>
        <td class="td1" valign="top">
            <p class="p2">Notice to Spetrol:</p>
            <p class="p7"><br></p>
            <p class="p7"><br></p>
            <p class="p8"><br></p>
        </td>
        <td class="td1" valign="top">
            <p class="p9">Address:</p>
        </td>
    </tr>
</tbody>
</table>
<p class="p5"><br></p>
<p class="p3">Notice to User:</p>
<p class="p3">At the email address provided by you at the time of registration on the Platform.</p>
<ol class="ol2">
<li class="li2">Applicable Law: These Terms of use/Agreement shall be governed by and construed in accordance with the laws of the Union of India or State laws of State of Telangana.<span class="Apple-converted-space">&nbsp;</span></li>
<li class="li2">Exclusive jurisdiction: These Terms of Use/Agreement shall be governed by and constructed according to the laws in force in India. The buyer shall hereby submit to the jurisdiction of the courts situated at Hyderabad for the purpose of actions and proceedings arising out of the contract and the courts at Hyderabad shall have the sole jurisdiction to hear and decide such actions and proceedings.</li>
<li class="li2">Termination: Spetrol may terminate your access to the Website/Platform without any notice to you if it reasonably believes, in its sole discretion, that you have breached any of the terms and conditions of this Agreement.</li>
</ol>`

const Terms = () => {
 return (
    // <div dangerouslySetInnerHTML={template} />
    <div style={{marginRight:100,marginLeft:100}}>
        {Parser().parse(html)}
    </div>
 )
}

export default Terms;
