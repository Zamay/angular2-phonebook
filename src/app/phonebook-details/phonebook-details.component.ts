import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Location} from '@angular/common';
import {HttpService} from "../service/http.service";
import {NgForm} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: "phrase-details",
  templateUrl: "phonebook-details.component.html",
  styleUrls: ["../../../node_modules/bootstrap/dist/css/bootstrap.css"]
})
export class PhonebookDetailsComponent implements OnInit {
  phonebook: any;
  userId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private location: Location
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => this.userId = params["id"]);
    this.httpService.getPhonobook(this.userId)
      .subscribe((data: Response) => {
        this.phonebook = data.json();
      })
  }

  editList(form: NgForm) {
    this.httpService.updatePhone(form.value).subscribe((data) => data);
    // this.goBack();
  }

  deleteList() {
    this.activatedRoute.params.subscribe((params: Params) => this.userId = params["id"]);
    this.httpService.deletePhone(this.userId)
      .subscribe((data) => data);
    this.goBack()
  }

  goBack(): void {
    this.location.back();
  }
}
