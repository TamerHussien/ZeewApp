import { Injectable } from '@angular/core';
import { Draft } from '../../shared/draft'
import { Observable } from 'rxjs/Observable';
import { Http,Headers, RequestOptions} from '@angular/http';
import { baseURL } from '../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

/*
  Generated class for the DraftProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DraftProvider {

  constructor(public http: Http, private ProcessHttpmsgService: ProcessHttpmsgProvider) {
    console.log('Hello DraftProvider Provider');
  }

  getDraftList():Observable<Draft[]>{
      return this.http.get(baseURL + 'drafts')
      .map(res => {return this.ProcessHttpmsgService.extractData(res)})
      .catch(error => {return this.ProcessHttpmsgService.handleError(error)})
  }

  getDraft(id: number): Observable<Draft>{
      return this.http.get(baseURL + 'drafts/' + id)
      .map(res => {return this.ProcessHttpmsgService.extractData(res)})
      .catch(error => {return this.ProcessHttpmsgService.handleError(error)})
  }
    addDraft(draft: Draft): Observable<Draft> {
	let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(baseURL + 'drafts', draft, options)
                   .map(res => {return this.ProcessHttpmsgService.extractData(res)})
                   .catch(error => {return this.ProcessHttpmsgService.handleError(error)});
    
}
}
