import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';




@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  faqContent = [{
    title: 'What is the recovery from cosmetic surgery like?',
    text: '<strong>What is the recovery from cosmetic surgery like?</strong><br><br>'
    +'One of the biggest concerns many people have regarding cosmetic surgery is the recovery process. In fact, 54% of women actively considering plastic surgery list recovery issues as a reason they are hesitant about surgery. After all, the procedure may only take a couple of hours, but recovery is something you will be facing for days or weeks after the big day. While every process is different, we’ve put together a basic timeline for recovery with some of the most common cosmetic procedures. With this information, and by having questions answered by your doctor, you can be well-prepared for your procedure.<br>'
    +'<strong>Source:</strong> <a href="https://reverehealth.com/live-better/cosmetic-surgery-recovery-process/" target="_blank">Reverehealth.com</a>',
    state: false
  },
  {
    title: 'A Basic Timeline for Recovery',
    text: '<strong>A Basic Timeline for Recovery</strong><br><br>'
        +'The First 24 Hours – During the first 24 hours after surgery, it will be best to have someone with you. Not only will you have someone who can help if you need anything (water, an extra pillow or someone to talk to), but if you find yourself feeling bad, you’ll have assistance getting to the doctor for follow-up care. At this time you will likely have a prescription for pain relief and may be told to ice the affected area. Follow all your doctors advice and relax <br>'
        +' The First Week – For most major cosmetic surgery procedures, the first week will involve bruising, swelling and some pain. You will want to take it easy. Most people will take this time off of work and may need some help with chores around the house. Follow all wound care guidelines to make sure your incision heals properly. <br>'
        +'Week Two – At this point you will likely have had a follow-up visit with your doctor and may be cleared to go back to work. Make sure you get plenty of rest at night and do not neglect your wound care process—even as you start feeling better'
        +'Three Weeks and Later –The bruising and swelling will somewhat subside. You may still have some healing left to do, but in many cases, you will feel much better and prepared to resume nearly normal activity levels. Talk to your doctor before you continue to exercise or complete any heavy-duty work.<br>'
        +'<strong>Source:</strong> <a href="https://reverehealth.com/live-better/cosmetic-surgery-recovery-process/" target="_blank">Reverehealth.com</a>',
    state: false
  },
{
    title: 'Recovery Times for Common Procedures',
   text: '<strong>Recovery Times for Common Procedures</strong><br><br>' 
        +'As mentioned, the recovery time will vary from procedure to procedure, but some of the more common procedures’ recovery times are as follows:<br>'
        +'<strong>Facelift:</strong> – This process is often more visible than other procedures and many people do not feel like going out in public until they look more presentable—usually after 14 – 21 days.<br>'
        +'<strong>Breast Augmentation:</strong> – After about a week or two of rest, you should be able to begin light duty work again.<br>'
        +'<strong>Eyelid Surgery: </strong> – Usually 2 – 3 weeks is the normal time of recovery before an individual can return to work.<br>'
        +'<strong>Liposuction:</strong> – Bruising will usually subside after a week or two, and patients can return to work when they feel able to complete their duties.<br>'
        +'As you can see, there is a lot to think about when it comes to cosmetic surgery (and the recovery process). It is important not to become overwhelmed by the information. Make an appointment for a consultation with one of our Revere Health doctors and talk to him or her about any concerns. Doing this will help you feel more confident about the process from start to finish.<br>'
        +'<strong>Source:</strong> <a href="https://reverehealth.com/live-better/cosmetic-surgery-recovery-process/" target="_blank">Reverehealth.com</a>',
    state: false
 },
  {
    title: 'Risks',
    text: '<strong>Risks</strong><br><br>'
        +'All surgeries, including cosmetic procedures, carry risk. Those with a history of cardiovascular disease, lung disease, diabetes or obesity have a higher risk of developing complications such as pneumonia, stroke, heart attack or blood clots in the legs or lungs. Smoking also increases risks and interferes with healing<br>'
        +'A meeting with the surgeon will include a discussion of these risks and others related to the patients health history'
        +'Possible complications for any surgical procedure include:<br>'
        +'- Complications related to anesthesia, including pneumonia, blood clots and, rarely, death<br>'
        +'- Infection at the incision site, which may worsen scarring and require additional surgery<br>'
        +'- Fluid build up under the skin<br>'
        +'- Mild bleeding, which may require another surgical procedure, or bleeding significant enough to require a transfusion<br>'
        +'- Obvious scarring or skin breakdown, which occurs when healing skin separates from healthy skin and must be removed surgically<br>'
        +'- Numbness and tingling from nerve damage, which may be permanent<br>'
        +'<strong>Source:</strong> <a href="https://www.mayoclinic.org/tests-procedures/cosmetic-surgery/about/pac-20385138" target="_blank">Mayoclinic.org</a>',
    state: false
  },
  {
    title: 'When can I travel back to my country of origin?',
    text: '<strong>When can I travel back to my country of origin?</strong><br><br>'
        + 'After your surgery your body will need the appropriate care to heal, Most surgeons agree that 15 days is the'
        + 'minimum your body needs to be ready to travel again, plus, it´s essential that the Doctor evaluates your healing'
        + 'process and can give you the ok to travel safely back home.'
        + '<br> <br>Something to have in mind is that legally and for the Colombian immigration Office, you are allowed to travel back'
        + 'home after 15 days of your procedure, no less than that.',
    state: false
  },
  {
    title: 'How can I pay for my surgery?',
    text: '<strong>How can I pay for my surgery?</strong><br><br>'
          + 'In our app, you will need to make a 500 deposit to make the reservation of your stay, and here in Colombia you can'
          + 'pay with cash, debit or credit card.'
          + '<br> <br>If you are going to pay with debit or credit card, make sure to include in your budget the 8% extra for the bank' 
          + 'transaction fee they charge.',
    state: false
  },
  {
    title: 'What to bring in my suitcase?',
    text: '<strong>What to bring in my suitcase?</strong><br><br>' 
    +'We will literally take care of everything, so you don’t need much, only bring a positive attitude and a :'

    + '<br> <br>Valid passport<br> <br>'
    + 'Legal Id.'
    + '<br> <br>Comfortable clothes.<br> <br>'
    + 'A few books, magazines of your interest.'
    + '<br> <br>Comfortable shoes.<br> <br>'
    + 'Money.',
    state: false
  },
  {
    title: 'What is Beauty Lab app’s contact number?',
    text: '<strong>What is Beauty Lab app’s contact number?</strong><br><br>'
    +'It is very easy to contact one of our sales representative, Through WhatsApp and that it, we will'
    + 'answer all your questions and help you through your process.'
    + '<br> <br> +57 302 2618171<br> <br>'
    + 'Its easy and we will love to have you visit us at Beauty Factory App',
    state: false
  },
  {
    title: 'Can I bring a companion to Colombia?',
    text: '<strong>Can I bring a companion to Colombia?</strong><br><br>'
    + 'Yes, you can bring a companion with you to Colombia, all you have to do is make your reservatio'
    + 'in a double or shared room and pay 120 dollars a night for the stay of your guest, all meals will be included.'
    + 'Don´t forget to notify us through support@beautyfactoryapp.com, so we are ready to receive you and your guest.',
    state: false
  },
  {
    title: 'What am i going to be doing in the mansion through my recovery?',
    text: '<strong>What am i going to be doing in the mansion through my recovery?</strong><br><br>'
     + 'We have many activities plan for our beauties.<br> <br>Movie night in our<br>'
     + 'private movie theater<br> Makeup classes<br> Cooking class-oriented in healthy'
     + 'easy to cook.<br> Massage night <br>We offer other esthetical procedures that you'
     + 'can get (botox, lip augmentation, facials, smile design, nails, etc.)<br> Netflix and chill <br>Pajama party',
    state: false
  },
  {
    title: 'WHY THE 500 DOLLAR DEPOSIT NOT REFUNDABLE?',
    text: '<strong>WHY THE 500 DOLLAR DEPOSIT NOT REFUNDABLE?</strong><br><br>'
     + 'The 500 dollar deposit that you pay in advance is not refundable because this money is used to separate'  
     + 'or reserve your room at the mansion, otherwise if you can´t make it to Colombia this will assure us as a company' 
     + 'that we are not going to lose any money if we said no to other potential clients that needed that stay. The 500' 
     + 'dollar deposit is also used to book you doctors appointment and to pay the driver who will pick you up.',
    state: false
  }
];

  constructor(public hero: HeroService) { }

  ngOnInit() {
  }
  showText(i) {
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.faqContent.length; index++) {
      if (i !== index) {
        this.faqContent[index].state = false;
      }
    }
    this.faqContent[i].state = !this.faqContent[i].state;
  }
}

