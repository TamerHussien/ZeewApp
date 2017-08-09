import { Injectable } from '@angular/core';
import { Past } from '../../shared/past'
import { Observable } from 'rxjs/Observable';
import { Http} from '@angular/http';
import { baseURL } from '../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
/*
  Generated class for the PastProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PastProvider {

  constructor(public http: Http, private ProcessHttpmsgService: ProcessHttpmsgProvider) {
    console.log('Hello PastProvider Provider');
  }

  getPastList():Observable<Past[]>{
      return this.http.get(baseURL + 'past')
      .map(res => {return this.ProcessHttpmsgService.extractData(res)})
      .catch(error => {return this.ProcessHttpmsgService.handleError(error)})
  }

  getPast(id: number): Observable<Past>{
      return this.http.get(baseURL + 'past/' + id)
      .map(res => {return this.ProcessHttpmsgService.extractData(res)})
      .catch(error => {return this.ProcessHttpmsgService.handleError(error)})
  }
}


