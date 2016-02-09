import {Address} from './Address';

export class Customer {
  name: String;
  streetaddress: String;
  state: String;
  phonenumber: String;
  email: String;
  address: Address;

  constructor (nm: string) {
    this.name = nm;
    this.address = new Address();
  }

}
