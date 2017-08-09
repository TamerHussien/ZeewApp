import { Injectable } from '@angular/core';
import { Active } from '../../shared/active'
import { Observable } from 'rxjs/Observable';
import { Http} from '@angular/http';
import { baseURL } from '../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

/*
  Generated class for the ActiveProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ActiveProvider {

  constructor(public http: Http, private ProcessHttpmsgService: ProcessHttpmsgProvider) {
    console.log('Hello ActiveProvider Provider');
  }

  getActiveList():Observable<Active[]>{
      return this.http.get(baseURL + 'active')
      .map(res => {return this.ProcessHttpmsgService.extractData(res)})
      .catch(error => {return this.ProcessHttpmsgService.handleError(error)})
  }

  getActive(id: number): Observable<Active>{
      return this.http.get(baseURL + 'active/' + id)
      .map(res => {return this.ProcessHttpmsgService.extractData(res)})
      .catch(error => {return this.ProcessHttpmsgService.handleError(error)})
  }
}
