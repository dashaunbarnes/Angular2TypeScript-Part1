import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {IDataService} from '../models/IDataService';
import {Observable} from 'rxjs/Observable';
import {Customer} from '../models/Customer';
import {Response} from 'angular2/src/http/static_response';

@Injectable()
export class QuarksDataService implements IDataService{

  constructor (public http: Http) {

  }

  GetCustomers(): Observable<Response> {
    return this.http.get('dapi/customers.json');
    //return this.http.get('http://127.0.0.1:3000/api/Customers');
  }

  GetSubdivisions(): Observable<Response> {
    return this.http.get('dapi/subdivisions.json');
  }

}
