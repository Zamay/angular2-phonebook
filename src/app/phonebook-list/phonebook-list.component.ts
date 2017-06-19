import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router"

import {Phonebook} from "../phonebook";
import {HttpService} from "../service/http.service";
import {Response} from "@angular/http";



@Component({
  moduleId: module.id,
  selector: "phrase-list",
  templateUrl: "phonebook-list.component.html",
  styleUrls: ["phonebook-list.component.css", "../../../node_modules/bootstrap/dist/css/bootstrap.css"]
})
export class PhonebookListComponent implements OnInit {

  phonebooks: Phonebook[];

  constructor(
    private router: Router,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.httpService.getData().subscribe(resp => this.phonebooks = resp);
  }

  onSelect(selected: Phonebook) {
    // console.log(selected);
    this.router.navigate(["phonebook", selected.id]);
  }
}
