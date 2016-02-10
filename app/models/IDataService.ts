import {Observable} from 'rxjs/Observable';
import {Response} from 'angular2/src/http/static_response';
import {Customer} from './Customer';

export interface IDataService {

    GetCustomers(): Observable<Response>;
    GetSubdivisions(): Observable<Response>

}
