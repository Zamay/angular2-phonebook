import { Component } from "@angular/core";
import {Phrase} from "../shared/phrase";


@Component({
    moduleId: module.id,
    selector: "my-add",
    templateUrl: "add.component.html",
    styleUrls: ["add.component.css"]
})
export class AddComponent{


    onSabmit(){
        console.log("submitted");
    }
}