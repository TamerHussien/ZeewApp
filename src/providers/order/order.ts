import { Injectable } from '@angular/core';
import { Order } from '../../shared/order'
import { Observable } from 'rxjs/Observable';
import { Http,Headers, RequestOptions} from '@angular/http';
import { baseURL } from '../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

/*
  Generated class for the OrderProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class OrderProvider {

  constructor(public http: Http, private ProcessHttpmsgService: ProcessHttpmsgProvider) {
    console.log('Hello OrderProvider Provider');
  }
addOrder(order:Order): Observable<Order> {
	let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(baseURL + 'order', order, options)
                   .map(res => {return this.ProcessHttpmsgService.extractData(res)})
                   .catch(error => {return this.ProcessHttpmsgService.handleError(error)});
}
     getOrderList():Observable<Order[]>{
      return this.http.get(baseURL + 'order')
      .map(res => {return this.ProcessHttpmsgService.extractData(res)})
      .catch(error => {return this.ProcessHttpmsgService.handleError(error)})
  }
}
