import {Component, View} from 'angular2/core';
import {Customer} from '../models/Customer';

@Component({
    selector: 'my-app'
})

@View({
    template:
    `
<h1>Hello World</h1>

<h2>Hello {{customer.name}}</h2>


<div  *ngIf="quarkCustomers.length>0">

<h2>Customers On Deck</h2>
<h3 *ngFor="#customer of quarkCustomers"> {{customer.name}}</h3>

{{quarkCustomers.length}} customers on deck
</div>

    `
})

export class AppComponent {
  customer: Customer;
  quarkCustomers: Customer[] = [];
  constructor(){

    var newCustomer = new Customer('Sheldon Barnes');
    this.customer = newCustomer;

    this.quarkCustomers.push(newCustomer);

    var klingonCustomer = new Customer('Cmdr Worf');
    this.quarkCustomers.push(klingonCustomer);

    //this.quarkCustomers = [];
  }
}
