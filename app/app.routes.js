"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { HomeComponent } from "./home/home.component";
var phonebook_list_component_1 = require("./phonebook-list/phonebook-list.component");
var phonebook_details_component_1 = require("./phonebook-details/phonebook-details.component");
var add_user_component_1 = require("./add-user/add-user.component");
exports.routes = [
    {
        path: "",
        redirectTo: "phonebooks",
        pathMatch: "full"
    },
    {
        path: "phonebooks",
        component: phonebook_list_component_1.PhonebookListComponent
    },
    {
        path: "phonebook/:id",
        component: phonebook_details_component_1.PhonebookDetailsComponent
    },
    {
        path: "add",
        component: add_user_component_1.AddUserComponent
    }
];
//# sourceMappingURL=app.routes.js.map