import {Component, OnInit, Input} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Location} from '@angular/common';
import {HttpService} from "../service/http.service";
import {NgForm} from "@angular/forms";
import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: "phrase-details",
  templateUrl: "phonebook-details.component.html",
  styleUrls: ["../../../node_modules/bootstrap/dist/css/bootstrap.css"]
})
export class PhonebookDetailsComponent implements OnInit {
  public phonebook: any;
  public userId: string;
  public myDate: any = '';
  // @Input() serverDate: number;

  // this.phonebook.createdAt
  // [serverDate]="phonebook.createdAt"

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private location: Location
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => this.userId = params["id"]);
    this.httpService.getPhonobook(this.userId)
      .subscribe((data: Response) => {
        this.phonebook = data.json();
        this.myDate = moment(this.phonebook.createdAt).format('h:mm:ss a, DD-MM-YYYY');
      });
  }

  editList(form: NgForm) {
    this.httpService.updatePhone(form.value).subscribe((data) => data);
  }

  deleteList() {
    this.httpService.deletePhone(this.userId)
      .subscribe((data) => {
        data;
        this.goBack();
      } );

  }

  goBack(): void {
    this.router.navigate(["phonebooks"]);
  }
}
