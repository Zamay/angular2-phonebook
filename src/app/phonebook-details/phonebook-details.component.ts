import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Location } from '@angular/common';

import { Phonebook } from "../phonebook";
import {HttpService} from "../service/http.service";
// import {PhonebookListComponent} from "../phonebook-list/phonebook-list.component";



@Component({
  moduleId: module.id,
  selector: "phrase-details",
  templateUrl: "phonebook-details.component.html",
  styleUrls: ["../../../node_modules/bootstrap/dist/css/bootstrap.css"]
})
export class PhonebookDetailsComponent implements OnInit {
  phonebook: Phonebook;



  // ActivatedRoute - содержит информацию о маршруте связанную с компонентом, который загружен в outlet
  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private location: Location
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .forEach((params: Params) => {
        let id = +params["id"];
        this.phonebook = this.httpService.getPhonobook(id);
      })

  }

  goBack(): void {
    this.location.back();
  }
}
