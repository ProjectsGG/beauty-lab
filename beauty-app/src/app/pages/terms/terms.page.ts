import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {

  termsContent = [{
    title: 'Terms And Conditions',
    text: 'Es requisito necesario para la adquisición de los productos que se ofrecen en este sitio'
     + 'que lea y acepte los siguientes Términos y Condiciones que a continuación se redactan'
     + 'El uso de nuestros servicios así como la compra de nuestros productos implicará que usted ha'
     + 'leído y aceptado los Términos y Condiciones de Uso en el presente documento. Todas los productos'
     + 'que son ofrecidos por nuestro sitio web pudieran ser creadas, cobradas, enviadas o presentadas por'
     + 'una página web tercera y en tal caso estarían sujetas a sus propios Términos y Condiciones. En algunos'
     + 'casos, para adquirir un producto, será necesario el registro por parte del usuario, con ingreso de'
     + 'datos personales fidedignos y definición de una contraseña.',
    state: true
  },
  {
    title: 'Policy and Privacy',
    text: 'Usted no puede declarar propiedad intelectual o exclusiva a ninguno de nuestros' 
    +'productos, modificado o sin modificar. Todos los productos son propiedad  de los proveedores' 
    +'del contenido. En caso de que no se especifique lo contrario, nuestros productos se proporcionan' 
    +'sin ningún tipo de garantía, expresa o implícita. En ningún esta compañía será  responsables de ningún' 
    +'daño incluyendo, pero no limitado a, daños directos, indirectos, especiales, fortuitos o consecuentes'
    +'u otras pérdidas resultantes del uso o de la imposibilidad de utilizar nuestros productos.',
    state: false
  }
];

  constructor() { }

  ngOnInit() {
  }
  showText(i) {
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.termsContent.length; index++) {
      if (i !== index) {
        this.termsContent[index].state = false;
      }
    }
    this.termsContent[i].state = !this.termsContent[i].state;
  }
}
