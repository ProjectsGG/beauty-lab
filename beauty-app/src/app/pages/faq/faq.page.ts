import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  faqContent = [{
    title: 'What is the recovery from cosmetic surgery like?',
    text: 'The first thing you beauties need to know is that each of you tolerates'
        + 'pain after surgery in different ways, and reacts to procedures differently, some might be more swollen than others,'
        + 'some more bruised than others and like that. It all depends on the work that you had done, and the part of your'
        + 'body that was intervened, but hey! don’t worry! Your surgeon will prescribe the appropriate pain medications to help'
        + 'minimize any discomfort, and with the care of our beautiful nurses, you will feel right at home. <br> <br>'
        + 'Post-operatively Speaking, Liposuction is slightly more uncomfortable, and surgeries that require elevation or tightening'
        + 'of the muscles-such as an abdominoplasty or breast augmentation can cause discomfort equal to a C-section.'
        + '<br> <br>But hey! You know what they say, no pain, no gain, and in our pink mansion you will be treated like a princess,'
        + 'and you won’t even feel your stay.',
    state: false
  },
  {
    title: 'How is a patient’s physical condition evaluated before plastic surgery?',
    text: 'A complete pretesting series of appointments is done prior to any surgery, in the first one, you get to meet your Doctor,'
        + 'ask all the questions that you have and vice versa, you will decide what procedures you will get done, pick the size of'
        + 'implants if needed, etc.; then the Doctor will perform a series of blood test and an electrocardiogram to make sure you'
        + 'are ready for your surgery, and a few days later you will get your procedure done and the same day or one day later you '
        + 'will be in our pink mansion being treated like a princess.',
    state: false
  },
{
    title: 'What happens after the surgery?',
   text:  'The first days are always the hardest. You have to remember that this is not only a physical'
        + 'but a mental and emotional journey, and in beauty factory, we understand that and will make sure'
        + 'you get all the attention and the help you need. <br> <br> Usually the day or two later there is a check-up'
        + 'at the Doctor’s office or in the mansion where the Doctor will evaluate your response to the surgery.'
        + ' <br> <br>There will be swelling, followed by itchiness, and depending on your procedure; you will have specific'
        + 'symptoms that will be gone after a few days or weeks.',
    state: false
 },
  {
    title: 'What are the possible risks of having plastic surgery?',
    text: 'Is very important that you guys understand there are risks associated with any surgical procedures.' 
        + 'You can find out what they are, how often they occur and how they will be handled if they do occur with the' 
        + 'help of our Doctor’s that will openly discuss the risks to each procedure, and the fantastic part is that our' 
        + 'staff of Doctor’s is fully prepared, and certified by the Colombian society of plastic, esthetic and reconstructive'
        + 'surgery so you can be sure your in the best hands.',
    state: false
  },
  {
    title: 'What are some of the things I can’t do after surgery?',
    text: 'The Doctor recommends to stay calm at home following all the instructions they give you; you can’t have physical'
        + 'activity, you can’t take the sun, you can’t go to the pool or anything similar for more than a month, you can’t drink'
        + 'alcohol or consume any substances during your recuperation period. It is ideal for maintaining a healthy diet and a calm'
        + 'state of mind when you get the procedure done. And remember beauties, it will all be worth it once you see the results.',
    state: false
  },
  {
    title: 'When can I travel back to my country of origin?',
    text: 'After your surgery your body will need the appropriate care to heal, Most surgeons agree that 15 days is the'
        + 'minimum your body needs to be ready to travel again, plus, it´s essential that the Doctor evaluates your healing'
        + 'process and can give you the ok to travel safely back home.'
        + '<br> <br>Something to have in mind is that legally and for the Colombian immigration Office, you are allowed to travel back'
        + 'home after 15 days of your procedure, no less than that.',
    state: false
  },
  {
    title: 'How can I pay for my surgery?',
    text: 'In our app, you will need to make a 500 deposit to make the reservation of your stay, and here in Colombia you can'
          + 'pay with cash, debit or credit card.'
          + '<br> <br>If you are going to pay with debit or credit card, make sure to include in your budget the 8% extra for the bank' 
          + 'transaction fee they charge.',
    state: false
  },
  {
    title: 'What to bring in my suitcase?',
    text: 'We will literally take care of everything, so you don’t need much, only bring a positive attitude and a :'

    + '<br> <br>Valid passport<br> <br>'
    + 'Legal Id.'
    + '<br> <br>Comfortable clothes.<br> <br>'
    + 'A few books, magazines of your interest.'
    + '<br> <br>Comfortable shoes.<br> <br>'
    + 'Money.',
    state: false
  },
  {
    title: 'Why is it important to wear a faja (spanks) after surgery?',
    text: 'Along with rest and proper nutrition, compression garments, or Fajas as they call them now days are a vital'
     + 'part of your recovery process since all of your tissues are shifting and conforming to your new shape.'
     + '<br> <br>Compression garments can support the healing and recovery process, promotes healthy blood circulation,' 
     + 'and may increase the chances of better results after a body contouring procedure.'
     + '<br> <br>And yes! Here we have all the type of fajas you might need for your surgery.',
     state: false
  },
  {
    title: 'What is Beauty factory app’s contact number?',
    text: 'It is very easy to contact one of our sales representative, Through WhatsApp and that it, we will'
    + 'answer all your questions and help you through your process.'
    + '<br> <br> +57 302 2618171<br> <br>'
    + 'Its easy and we will love to have you visit us at Beauty Factory App',
    state: false
  },
  {
    title: 'Can I bring a companion to Colombia ?',
    text: 'Yes, you can bring a companion with you to Colombia, all you have to do is make your reservatio'
    + 'in a double or shared room and pay 120 dollars a night for the stay of your guest, all meals will be included.'
    + 'Don´t forget to notify us through support@beautyfactoryapp.com, so we are ready to receive you and your guest.',
    state: false
  },
  {
    title: 'What am i going to be doing in the mansion through my recovery?',
    text: 'We have many activities plan for our beauties.<br> <br>Movie night in our<br>'
     + 'private movie theater<br> Makeup classes<br> Cooking class-oriented in healthy'
     + 'easy to cook.<br> Massage night <br>We offer other esthetical procedures that you'
     + 'can get (botox, lip augmentation, facials, smile design, nails, etc.)<br> Netflix and chill <br>Pajama party',
    state: false
  },
  {
    title: 'WHY IS THE 500 DOLLAR DEPOSIT NOT REFUNDABLE?',
    text: 'The 500 dollar deposit that you pay in advance is not refundable because this money is used to separate'  
     + 'or reserve your room at the mansion, otherwise if you can´t make it to Colombia this will assure us as a company' 
     + 'that we are not going to lose any money if we said no to other potential clients that needed that stay. The 500' 
     + 'dollar deposit is also used to book you doctors appointment and to pay the driver who will pick you up.',
    state: false
  }
];

  constructor() { }

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

