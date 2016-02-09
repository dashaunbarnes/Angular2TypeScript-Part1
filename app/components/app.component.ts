import {Component, View} from 'angular2/core';
import {Customer} from '../models/Customer';
import {CustomerComponent} from './app.customercomponent';

@Component({
    selector: 'my-app'
})

@View({
    directives: [CustomerComponent],
    template:
    `
<h1>Hello World</h1>

<customers [customers]="quarkCustomers"></customers>
    `
})

export class AppComponent {
  customer: Customer;
  quarkCustomers: Customer[] = [];
  constructor(){

    var newCustomer = new Customer('Sheldon Barnes');
    newCustomer.address.streetaddress = "123 Market SQ";
    this.quarkCustomers.push(newCustomer);

    var klingonCustomer = new Customer('Cmdr Worf');
    klingonCustomer.address.streetaddress = "999 Market SQ";
    this.quarkCustomers.push(klingonCustomer);

    //this.quarkCustomers = [];
  }

}
