import {Injectable} from "@angular/core";
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

import {Phonebook} from "../phonebook";
import {Observable} from "rxjs";

@Injectable()
export class HttpService {
  users: Phonebook[] = [];
  users1: Phonebook[] = [];

  constructor( private http: Http){}

  // Метод для получения всех ...
  getData(): Observable<Phonebook[]> {
    return this.http.get('http://589b1131bc99bf120037b98c.mockapi.io/api/v1/phones')
      .map((resp: Response) => {

        let usersList = resp.json();
        for (let index in usersList) {
          let user = usersList[index];
          this.users.push({
            id: user.id,
            firstName: user.firstName,
            secondName: user.secondName,
            phone: user.phone,
            address: user.address,
            createdAt: user.createdAt
          });
        }
        // console.log(this.users);
        return this.users;
      });
  }

  // Метод для получения фразы по id.
  getPhonobook(id: number){
    for (let a in this.users){
      if (this.users[a].id == id ) return this.users[a];
    }
  }
}

