import {Component, View, Inject} from 'angular2/core';
import {Customer} from '../models/Customer';
import  'rxjs/add/operator/map';
import {CustomerComponent} from './app.customercomponent';
import {IDataService} from '../models/IDataService';
import {QuarksDataService} from '../services/QuarksDataService';

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
  ds: IDataService;
  constructor(@Inject(QuarksDataService)dataService: IDataService){

    var newCustomer = new Customer('Sheldon Barnes');
    newCustomer.address.streetaddress = "123 Market SQ";
    this.quarkCustomers.push(newCustomer);

    var klingonCustomer = new Customer('Cmdr Worf');
    klingonCustomer.address.streetaddress = "999 Market SQ";
    this.quarkCustomers.push(klingonCustomer);

    dataService.GetCustomers()
    .map(res => res.json())
    .subscribe(customers => this.quarkCustomers = customers);



    //this.quarkCustomers = [];
  }

}
