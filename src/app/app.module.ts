import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {routes} from "./app.routes";

import { PhonebookDetailsComponent } from "./phonebook-details/phonebook-details.component";
import {PhonebookListComponent} from "./phonebook-list/phonebook-list.component";
import {HttpService} from "./service/http.service";
import {AddUserComponent} from "./add-user/add-user.component";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    AddUserComponent,
    PhonebookDetailsComponent,
    PhonebookListComponent
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
