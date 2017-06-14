import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { routes } from "./app.routes";

// components

import { PhraseDetailsComponent } from "./phrase-details/phrase-details.component";
import { PhraseListComponent } from "./phrase-list/phrase-list.component";

// services
import { PhraseService } from "./shared/phrase.service";
import {AddComponent} from "./add/add.component";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [AppComponent, AddComponent, PhraseDetailsComponent, PhraseListComponent],
    providers: [PhraseService],
    bootstrap: [AppComponent]
})
export class AppModule { }
