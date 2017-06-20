import {Injectable} from "@angular/core";
import {Headers, Http, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

import {Phonebook} from "../phonebook";
import {Observable} from "rxjs";

@Injectable()
export class HttpService {
  private userUrl = 'http://589b1131bc99bf120037b98c.mockapi.io/api/v1/phones';

  constructor( private http: Http){}

  // Метод для получения всех ...
  getData(): Observable<Phonebook[]> {
    return this.http.get(this.userUrl)
      .map((resp: Response) => resp.json());
  }

  // Метод для получения фразы по id.
  getPhonobook(id: string): Observable<any>{
    return this.http.get(`${this.userUrl}/${id}`)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addPhone (body: Object): Observable<Phonebook[]> {

    let bodyString = JSON.stringify(body);
    // console.log(bodyString);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.userUrl, body, options)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteList(id: string): Observable<Phonebook[]>{
    return this.http.delete(`${this.userUrl}/${id}`)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


}

