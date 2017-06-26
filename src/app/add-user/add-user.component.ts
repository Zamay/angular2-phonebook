import {Component} from "@angular/core";
import {Phonebook} from "../phonebook";
import {HttpService} from "../service/http.service";
import {NgForm} from '@angular/forms';
import {Location} from '@angular/common';
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: "my-add",
  templateUrl: 'add-user.component.html',
  styleUrls: ["add-user.component.css", "../../../node_modules/bootstrap/dist/css/bootstrap.css"]
})
export class AddUserComponent {

  constructor(
    private router: Router,
    private httpService: HttpService
  ) { }

  onSubmit(form: NgForm) {
    this.httpService.addPhone(form.value).subscribe((data) => {
      data;
      this.router.navigate(["phonebooks"])
    })
  }
}
