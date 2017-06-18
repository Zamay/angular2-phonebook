import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { routes } from "./app.routes";

// components

import { PhonebookDetailsComponent } from "./phonebook-details/phonebook-details.component";
import { PhonebookListComponent } from "./phonebook-list/phonebook-list.component";

// services
import { PhonebookService } from "./shared/phonebook.service";
import {AddUserComponent} from "./add-user/add-user.component";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [AppComponent, AddUserComponent, PhonebookDetailsComponent, PhonebookListComponent],
    providers: [PhonebookService],
    bootstrap: [AppComponent]
})
export class AppModule { }
