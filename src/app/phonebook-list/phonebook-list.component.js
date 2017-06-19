"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var phonebook_service_1 = require("../service/phonebook.service");
var PhonebookListComponent = (function () {
    function PhonebookListComponent(router, phraseService) {
        this.router = router;
        this.phraseService = phraseService;
    }
    PhonebookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.phraseService // обращаемся к сервису
            .getAll() // получаем Promise
            .then(function (result) { return _this.phonebooks = result; }); // как только Promise перейдет в состояние resolved результат его работы присваиваем свойству phonebooks
    };
    PhonebookListComponent.prototype.onSelect = function (selected) {
        console.log(selected);
        // При клике по элементу списка перенаправляем пользователя по адресу /phonebooks/id
        // адрес с обязательным параметром указан в настройках маршрутизации в файле app.routes.ts
        this.router.navigate(["phonebook", selected.id]);
    };
    return PhonebookListComponent;
}());
PhonebookListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "phrase-list",
        templateUrl: "phonebook-list.component.html",
        styleUrls: ["phonebook-list.component.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        phonebook_service_1.PhonebookService])
], PhonebookListComponent);
exports.PhonebookListComponent = PhonebookListComponent;
//# sourceMappingURL=phonebook-list.component.js.map
