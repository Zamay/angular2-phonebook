import { Component } from "@angular/core";
import {Phonebook} from "../phonebook";


@Component({
    moduleId: module.id,
    selector: "my-add",
    templateUrl: "add-user.component.html",
    styleUrls: ["add-user.component.css", "../../../node_modules/bootstrap/dist/css/bootstrap.css"]
})
export class AddUserComponent{


    onSabmit(){
        console.log("submitted");
    }
}
