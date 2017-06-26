import {Injectable} from "@angular/core";
import {Headers, Http, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

import {Phonebook} from "../phonebook";
import {Observable} from "rxjs";

@Injectable()
export class HttpService {
  private userUrl = 'http://595165e7138d63001132bbd0.mockapi.io/api/v1/phones';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
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
    return this.http.post(this.userUrl, body, this.options)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  updatePhone (body: Object): Observable<Phonebook[]> {
     return this.http.put(`${this.userUrl}/${body['id']}`, body, this.options)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  deletePhone(id: string): Observable<Phonebook[]>{
    return this.http.delete(`${this.userUrl}/${id}`)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}

