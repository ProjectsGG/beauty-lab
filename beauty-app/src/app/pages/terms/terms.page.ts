import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})

export class TermsPage implements OnInit {
  @ViewChild(IonContent, {static: false}) content: IonContent;
  termsContent = [{
    title: 'Terms and Conditions',
    text: 'PLEASE READ THESE TERMS AND CONDITIONS OF USE CAREFULLY BEFORE USING OUR WEBSITE AND MOBILE APPLICATION.<br><br>'
     + 'By using our websites you agree to all of our terms and conditions. If you do not agree your remedy is to stop using our websites.'
     + '<br><br>When you read the words “us”, “our” or “we”, it means Beauty Lab App. The words “you” or “your” means you, the visitor to our website. The following terms form part of the terms and conditions of use of our website.'
     + '<br><br>No Unlawful or Prohibited Use<br><br>'
     + 'As a condition of your use of our websites, you warrant that you will not use these websites for any purpose that is unlawful or prohibited by these terms and conditions. You may not use our websites in any manner which could damage, disable, overburden, or impair our websites or interfere with any other party’s use and enjoyment of this website. You agree not to hack into areas of this website that are not intentionally made available by us.'
     + '<br><br>Not Suitable for Children<br><br>'
     + 'We are committed to protecting the privacy of children. You should be aware that this website is not intended nor designed to attract children under the age of 18.'
     + '<br><br>Links Disclaimer<br><br>'
     + 'This website contains links to other sites; these links are meant for your convenience only. Links to third party sites do not constitute sponsorship or endorsement or approval of those websites. We have no control over the information accessed through links from our site. You use links at your own risk.'
     + '<br><br>Use of content – Copyright<br><br>'
     + 'The content of our websites is protected by copyright under Australian and foreign laws. Title to the content remains with Beauty Lab App or its licensors. Any use of the content not expressly permitted by these terms and conditions is a breach of these terms and conditions and may violate copyright, trademark, and other laws. Content and features are subject to change or deletion without notice in the editorial discretion of Beauty Lab App. All rights not expressly granted by these terms are reserved to Beauty Lab App and its licensors.'
     + '<br><br>We authorise you to view or download a single copy of the material on the Beauty Lab App websites solely for your personal, non-commercial use provided you include the following copyright notice: “©2020 Beauty Lab App. All rights reserved” and other copyright and proprietary rights notices that are contained in the content.'
     + '<br><br>If you violate any of these terms and conditions, your permission to use the content automatically terminates and you must immediately destroy any copies you have made of any portion of the content.'
     + '<br><br>User Submissions<br><br>'
     +'Our websites and app allows users to upload content to “Public Areas” and our contact form. You agree that you will not upload or transmit any communications or content of any type to the Public Areas or contact form that infringes or violates any rights of any party.'
     + '<br><br>By submitting communications or content to the Public Areas, you agree that:<br>'
     + '<li><ul>you have the necessary ownership or permission to upload the submitted content which do not violate trademark, copyright, privacy or any other rights of any other person;</ul>'
     + '<ul> by uploading that content you grant Beauty Lab App a royalty-free, perpetual, irrevocable, worldwide non-exclusive license to use, reproduce, create derivative works from, modify, publish, edit, translate, distribute, perform, and display the communication or submitted content in any media or medium, or any form, format, or forum now known or developed in the future;</ul>'
     +'<ul><br>the submitted content is non-confidential for all purposes; and you agree to indemnify Beauty Lab App and its affiliates, directors, officers and employees and hold them harmless from any and all claims and expenses, including legal fees, arising from the display of your submitted content and/or your failure to comply with these terms and conditions.</ul></li>'
     +'If you submit any business information, idea, concept or invention to Beauty Lab App you agree that we can use that information without any further reference to you. No compensation will be paid or payable to you for the use of your submitted content.'
     +'<br><br>Uploading media like images or video of other people without their permission is strictly prohibited. Photos or videos of celebrities and cartoon or comic images are usually copyrighted by the owner.'
     +'<br><br>To protect your privacy, you agree that you will not submit any media that contains personal information like a name, phone number, email address or web site URL of you or of anyone else.'
     +'<br><br>It is strictly prohibited to submit content of any kind that contain expressions of hate, abuse, offensive images or conduct, obscenity, pornography, sexually explicit or any material that could give rise to any civil or criminal liability under applicable law or regulations or that otherwise may be in conflict with these terms and conditions.'
     +'<br><br>We are not obliged to monitor the Public Area submitted content on our websites. Beauty Lab App reserves the right to review all submitted content prior to display on our websites and to remove any submitted content for any reason at any time without prior notice, at our sole discretion.'
     +'<br><br>Feedback and Testimonials<br><br>'
     +'We do not control or endorse feedback or submitted content in Public Areas. We specifically disclaim any liability for feedback or submitted content or actions resulting from participation in the Public Areas of our websites. Persons submitting content to Public Areas not authorised spokespersons for Beauty Lab App and their views do not necessarily reflect our views.'
     +'All testimonials displayed on our website have been received from real people. We endeavour to display current testimonials that have been received and are not older than 2 years from the date of receipt. Feel free to give us your testimonial at any time!'
     +'<br><br>Any negative comments relating to patient unhappiness with a surgeon, clinic or hospital will not be published. All such advice will however be passed onto the surgeon or relevant person for them to act upon.'
     +'<br><br>DCMA Notice and Takedown Procedures – US law'
     +'<br><br>If you believe any materials accessible on or from the website infringe your copyright, you may request access to or removal of those materials from this website by advising us through the contact form and providing the following information:'
     +'<li><ul>1. Identify the copyright work that you believe to be infringed. Please describe the work, and if possible include a copy or the location (eg URL) of an authorised version of the work.</ul>'
     +'<ul>2. Your name, address, telephone number and e-mail address.</ul>'
     +'<ul>3. A statement that you believe in good faith that the use of the material on our website is not authorised by the copyright owner, its agent, or the law. </ul>'
     +'<ul>4. The statement “I make this solemn declaration by virtue of the Statutory Declarations Act 1959 (Cth) and subject to the penalties provided by that Act for the making of false statements, conscientiously believing the statements contained herein to be true in every particular.”</ul>'
     +'<ul>5. A signature or the electronic equivalent from the copyright holder or authorised representative.</ul></li>'
     +'<br><br>In appropriate circumstances Beauty Lab App may terminate access to our websites for repeat copyright infringers.'
     +'<br><br>Disclaimer of Liability<br><br>'
     +'You specifically acknowledge and agree that your use of our websites, content and services found on our websites are at your own risk. Any content available via this website may include inaccuracies or typographical errors. Changes are periodically made to the information on and available via the website. Beauty Lab App assumes no liability for or relating to the delay, failure, interruption, or corruption of any data or other information transmitted in connection with use of the Beauty Lab App and websites.'
     +'<br><br>We make no representations about the suitability, reliability, availability, timeliness, and accuracy of anything contained on this website, for any purpose, to the maximum extent permitted by applicable law, anything contained on this website is provided “as is” without warranty or condition of any kind. This provision is not intended to contravene any applicable law and should be read in compliance with applicable laws.'
     +'<br><br>This disclaimer applies to the fullest extent permitted by law, and shall survive any termination or expiration of this agreement or your use of this website or the services found on this website.'
     +'<br><br>Limitation of Liability and Indemnity<br><br>'
     +'We will not be liable to you or any other person or entity for any damages whatsoever arising as a result of your use of or inability to use these websites in any way. In addition, where warranties are implied by law, you acknowledge and agree that the total aggregate liability to us is limited to the total amount paid by you for the particular services that are the subject of the cause of action, even if those services were provided to you without cost.'
     +'<br><br>You agree to defend, indemnify, and hold Beauty Lab App, its officers, directors, employees, agents, licensors, and suppliers harmless from and against any claims, actions or demands, liabilities and settlements including without limitation, reasonable legal and accounting fees, resulting from or alleged to result from your use or misuse of our websites, or your violation of these terms and conditions.'
     +'<br><br>Jurisdiction<br><br>'
     +'This agreement is governed by the laws of New South Wales, Australia. You consent to the non-exclusive jurisdiction and venue of the courts of that State.'
     +'Beauty Lab App makes no claims that Beauty Lab App, or any Site within the Beauty Lab App Network and the content are appropriate or may be downloaded outside of Australia. Access to the content may not be legal by certain persons or in certain countries. If you access the Beauty Lab App Network from outside of Australia, you do so at your own risk and are responsible for compliance with the laws of your jurisdiction.'
     +'<br><br>Payment of Deposit<br><br>'
     +'A 500 dollar deposit is required to reserve your date of surgery and is non refundable if the client decides to cancel. Incase of emergency or client surgery date can be rescheduled at no extra cost (15 days notice must be provided). Remaining payment of surgery must be paid on arrival.' 
     +'<br><br>Entire Agreement<br><br>'
     +'Terms and Conditions constitute the entire agreement between you and Beauty Lab App with respect to the use of our websites and content. Where applicable, these terms and conditions will continue to apply even after you stop using our websites.'
     +'Thank you for your cooperation. We hope you find the Beauty Lab App helpful and convenient to use! Questions or comments regarding this website, including any reports of non-functioning links, should be submitted using our contact form. We try to answer every email in a timely manner but due to volume may not always be able to do so.',
     state: true
  },
  {
    title: 'Privacy Policy',
    text: 'Your privacy is important to the Beauty Lab App. Please review our privacy policy below to learn how we collect and use information. If you have any questions or concerns, we welcome you to contact us via our contact form. For further information on your privacy rights, please see the Office of the Australian Information Commissioner website.' 
    + '<br><br>What is personal information?'
    + '<br><br>Personal information is information that identifies you or could identify you. Your name and address are obvious examples. Personal information can also include medical records, bank account details, photographs, videos, and even information about your opinions and where you work – basically, any information where you are reasonably identifiable.   ' 
    + '<br><br>Strictly speaking, the information collected automatically through web browsers when you visit a website is not personal information. However, we have included our policy on how we deal with that information here for your reference.' 
    + '<br><br>Information automatically collected from Website Visitors'
    + '<br><br>Like most website and online service providers, Beauty Lab App collects non-personally-identifying information that web browsers and search engines make available. Typically this information includes items like language, date and time of visit, time spent on the website, the type of device used (like a smart phone) and language used.'
    + '<br><br>Our purpose in collecting this information is to better understand our visitors to improve the products and services we offer.    '
    + '<br><br>We may also collect information like Internet Protocol (IP) addresses. This information is used as part of a moderation process to protect registered users from online abuse and harassment and confirm online purchase authenticity. Beauty Lab App reserves the right to block any IP address from access if it has been deemed to have breached the Terms and Conditions of use of this website.    '
    + '<br><br>Aggregated Statistics'
    + '<br><br>Beauty Lab App may collect statistics about the behaviour of visitors to its websites, including but not limited to monitoring the most popular content on the site, identifying spam or have information scanned by a third party product to identify spam and inappropriate content.    '
    + '<br><br>Cookies'
    + '<br><br>A cookie is a stored packet of information that is recorded on your computer when you visit a website. The website visited may associate information with that cookie each time you return to the website.'
    + '<br><br>We use cookies to make navigation within Beauty Lab App and use of our services more user-friendly. If you do not wish to have cookies used, we recommend that you change your browser settings to refuse cookies before accessing our website. Some features of our website may not function properly without cookies enabled.'
    + '<br><br>Advertising'
    + '<br><br>Advertisements appearing on any of our websites may be delivered to users by advertising partners, who may use cookies. This information allows advertising networks to deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by Beauty Lab App and does not cover the use of cookies by any advertisers.'
    + '<br><br>Gathering of Personal Information'
    + '<br><br>We provide opportunities for you to interact with Beauty Lab App in ways that requires the collection of some personally-identifying information. For example, you may opt to receive email based newsletters and information, or participate in an online forum discussion requiring a username. In those circumstances, we collect the information we deem necessary and appropriate to provide you with that service.    '
    + '<br><br>We do not disclosure your personal information to anyone outside our business except as outlined below or by order of an appropriate government or law enforcement agency. Beauty Lab App reserves the right to deny you service or interaction with sections of Beauty Lab App if you chose not to supply the requested information.'
    + '<br><br>You understand that if you create a profile for use in the forum or interaction with other users of our website you user name, profile image and comments will be publicly available and may be indexed by search engines. Always use caution when giving out any personally identifying information about yourself anywhere on the internet.'
    + '<br><br>Use of Personal Information'
    + '<br><br>Beauty Lab App discloses potentially personally-identifying information of website visitors to employees, contactors and affiliated organisations to operate, maintain and improve the website and services provided as well as communicate and interact with you. By using Beauty Lab App, you consent to the use and transfer of your information for this purpose.'
    + '<br><br>We will not rent or sell personal information. Beauty Lab App will potentially disclose information in response to a court order or other governmental request if required to by Law or as recommended by legal advisors. Beauty Lab App may also disclose personally-identifying information when it believes in good faith that disclosure is necessary to protect the property or rights of Beauty Lab App, third parties, or the public.'
    + '<br><br>If you have registered with Beauty Lab App and have supplied your email address, we may occasionally send you emails regarding our business or to request your feedback. If you send us a request (for example support request or correction request), we reserve the right to publish it in order to help clarify or respond to it, or to assist other visitors to the Beauty Lab App.'
    + '<br><br>Personal Information and Service Providers'
    + '<br><br>From time to time, we might establish a business relationship with other persons or entities whom we believe trustworthy and whom we have asked to confirm that their privacy practices are consistent with ours (“Service Providers”). For example, we may contract with Service Providers to provide certain services, such as credit card processing, advertising, analytics tools, widget providers, data management services, Web hosting, and Web development. We provide our Service Providers with the information reasonably necessary for them to perform these services.'
    + '<br><br>Protection of Personal Information'
    + '<br><br>Beauty Lab App takes commercially reasonable measures to protect against the unauthorised access, use, alteration or destruction of personal information. Beauty Lab App uses software and services provided by third-party providers with the understanding that the products in use appropriately protect personal information.'
    + '<br><br>Business Transfers'
    + '<br><br>If Beauty Lab App or its assets were sold, or in the unlikely event that Beauty Lab App goes out of business, user information would be one of the assets that is transferred or acquired by a third party. You acknowledge that a transfer could occur, and that any gaining Beauty Lab App may continue to use your personal information as set out in this policy.'
    + '<br><br>Credit Card Information'
    + '<br><br>Credit card details are only used when placing an order, are processed by our Service Providers and at no time collected or stored by Beauty Lab App. For further information on protection of credit card details, see the relevant service providers’ website.'
    + '<br><br>Links'
    + '<br><br>This website contains links to other sites; these links are meant for your convenience only. Please be aware that we are not responsible for the privacy practices of other websites. You should read the privacy statements of each and every website that collects your personal information.'
    + '<br><br>Children’s Privacy Statement'
    + '<br><br>We do not knowingly collect personal information from children under the age of 18. If we become aware that we have inadvertently received personal information from a child under the age of 18, we will delete the information from our records.'
    + '<br><br>Change in Privacy Policy'
    + '<br><br>As we plan to ensure our privacy policy remains current, this policy is subject to change. Please return periodically to review our privacy policy.'
    + '<br><br>How to Contact Us'
    + '<br><br>If you have any questions or concerns regarding our Privacy Policy or our use of your information, or believe your information needs to be updated, please use the contact form to let us know.'
    + '<br><br>Forum Rules'
    + '<br><br>By using the Beauty Lab App Forums you agree to abide by these Forum Rules and the terms and conditions of use of our websites.'
    + '<br><br>The Beauty Lab App Forums have been made available to enable you to find the support and friendship that makes the process of deciding whether or not you want to have a plastic or cosmetic surgery, and/or non-surgical procedure, and the results, more rewarding.'
    + '<br><br>Participation'
    + '<br><br>To participate in the Forums you must create an account. You can sign up here. You may choose your own public profile. You must not impersonate any other person, nor allow another person to use your account to submit or access Forum content. Your personal details will not be disclosed unless in accordance with relevant privacy laws.'
    + '<br><br>You can stop participating in the Forums at any time. We may remove your access to the Forums at our discretion.'
    + '<br><br>Passwords'
    + '<br><br>You are responsible for taking all reasonable steps to ensure that no unauthorised person has access to your Beauty Lab App passwords or accounts. You must promptly inform Beauty Lab App if you believe your account or password has been compromised or if there is any other reason you need to deactivate a password. Use the contact form to let us know you need to close an account.'
    + '<br><br>Your Responsibility'
    + '<br><br>Each participant in the Forums is personally responsible and liable for their submitted content and all consequences arising from their participation in the Forums. We will not be liable to you or any third parties for any action, claim, loss or damage arising from use of the Forum.'
    + '<br><br>You must not to use the Forums to submit:'
    + '<li>content that would violate any applicable law;'
    + '<ul>content that is offensive, indecent or objectionable in any way;</ul>'
    + '<ul>content to disrupt the normal flow of dialogue, or post comments that are not related to the topic being discussed, unless it is clear the discussion is free-form;</ul>'
    + '<ul>unsolicited or unauthorised advertising, promotional material, ‘spam’, chain letters or any other form of solicitation;</ul>'
    + '<ul>content that infringes any copyright, trademark, trade secret or other proprietary rights of any party;</ul>'
    + '<ul>any content that the sender does not have a right to transmit under any contractual or fiduciary relationship (such as confidential information or personal information);</ul>'
    + '<ul>any material that contains software viruses or any other computer programs designed to interrupt, destroy or limit the functionality of any computer software or hardware or telecommunications equipment; or links to websites of a commercial nature or links to websites of individual members.</ul></li>'
    + 'Our Responsibility'
    + '<br><br>Beauty Lab App reserves the right (but is not obligated) to do any or all of the following:    '
    + '<li><ul>Monitor, edit, or disclose any communication in the Forums.</ul>'
    + '<ul>Record the dialogue in Forums</ul>'
    + '<ul>Investigate an allegation that a communication does not conform to the Forum Rules and determine in our sole discretion to remove or request the removal of the communication.</ul>'
    + '<ul>Remove communications which are abusive, illegal, or disruptive or that otherwise fail to conform to the terms and conditions.</ul>'
    + '<ul>Terminate any person’s access to the Forums.</ul></li>',
    state: false
  }
];

  constructor() { }

  ngOnInit() {
  }
  showText(i) {
    this.ScrollToTop();
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.termsContent.length; index++) {
      if (i !== index) {
        this.termsContent[index].state = false;
      }
    }
    this.termsContent[i].state = !this.termsContent[i].state;
  }
  ScrollToTop() {
    this.content.scrollToTop(1500);
    setTimeout(() => {
  }, 1500);
  }
}
