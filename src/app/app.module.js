"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
// components
var phonebook_details_component_1 = require("./phonebook-details/phonebook-details.component");
var phonebook_list_component_1 = require("./phonebook-list/phonebook-list.component");
// services
var phonebook_service_1 = require("./service/phonebook.service");
var add_user_component_1 = require("./add-user/add-user.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(app_routes_1.routes)
        ],
        declarations: [app_component_1.AppComponent, add_user_component_1.AddUserComponent, phonebook_details_component_1.PhonebookDetailsComponent, phonebook_list_component_1.PhonebookListComponent],
        providers: [phonebook_service_1.PhonebookService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
