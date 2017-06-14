"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { HomeComponent } from "./home/home.component";
var phrase_list_component_1 = require("./phrase-list/phrase-list.component");
var phrase_details_component_1 = require("./phrase-details/phrase-details.component");
exports.routes = [
    {
        path: "",
        redirectTo: "phrases",
        pathMatch: "full"
    },
    // {
    //     path: "home",
    //     component: HomeComponent
    // },
    {
        path: "phrases",
        component: phrase_list_component_1.PhraseListComponent
    },
    {
        path: "phrase/:id",
        component: phrase_details_component_1.PhraseDetailsComponent
    }
];
//# sourceMappingURL=app.routes.js.map