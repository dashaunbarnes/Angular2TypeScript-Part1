import {Component, View, Input } from 'angular2/core';

import {Customer} from '../models/Customer';

@Component({
    selector: 'customers',
})

@View({
    template:
    `
    <div  *ngIf="customers.length>0">

    <h2>Customers On Deck</h2>
    <table border=1 cellspacing="5" cellpadding="5">
    <thead>
      <tr> <td>name</td> <td>Street Address</td></tr>
    </thead>

    <tbody>
      <tr  *ngFor="#customer of customers">
      <td>{{customer.name}}</td>
      <td>{{customer.address.streetaddress}}</td>

      </tr>
    </tbody>
    </table>

    {{customers.length}} customers on deck
    </div>
    `
})


export class CustomerComponent {

  @Input() customers: Customer[];

  constructor() {
  }


}
