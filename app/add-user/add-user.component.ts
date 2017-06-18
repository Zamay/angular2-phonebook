import { Component } from "@angular/core";
import {Phonebook} from "../shared/phonebook";


@Component({
    moduleId: module.id,
    selector: "my-add",
    templateUrl: "add-user.component.html",
    styleUrls: ["add-user.component.css"]
})
export class AddUserComponent{


    onSabmit(){
        console.log("submitted");
    }
}