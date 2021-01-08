import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';




@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  faqContent = [
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

