import { Routes } from "@angular/router";
// import { HomeComponent } from "./home/home.component";
import { PhonebookListComponent } from "./phonebook-list/phonebook-list.component";
import { PhonebookDetailsComponent } from "./phonebook-details/phonebook-details.component";
import {AddUserComponent} from "./add-user/add-user.component";

export const routes: Routes = [
    {
        path: "",
        redirectTo: "phonebooks",
        pathMatch: "full"
    },
    {
        path: "phonebooks",
        component: PhonebookListComponent
    },
    {
        path: "phonebook/:id",
        component: PhonebookDetailsComponent
    },
    {
        path: "add",
        component: AddUserComponent
    }

];