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
var PhonebookDetailsComponent = (function () {
    // ActivatedRoute - содержит информацию о маршруте связанную с компонентом, который загружен в outlet
    function PhonebookDetailsComponent(router, activatedRoute, service) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.service = service;
    }
    PhonebookDetailsComponent.prototype.ngOnInit = function () {
        // params - параметры текущего маршрута. Данное свойство является Observable объектом
        // Если параметры будут изменены - произойдет событие и компонент узнает о изменениях.
        var _this = this;
        // OBSERVABLE PARAMS
        // forEach - устанавливаем обработчик на каждое изменение params
        this.activatedRoute.params.forEach(function (params) {
            var id = +params["id"]; // конвертируем значение параметра id в тип number
            _this.service
                .getPhrase(id) // обращаемся к сервису и запрашиваем фразу по id. Получаем Promise
                .then(function (result) { return _this.phonebook = result; }); // как только Promise перейдет в состояние resolved присваиваем его значение свойству phonebook
        });
        // SNAPSHOT
        // получение начального значения параметра id
        /*let id = +this.activatedRoute.snapshot.params["id"];
        this.service
            .getPhrase(id)
            .then(result => this.phonebook = result); */
    };
    PhonebookDetailsComponent.prototype.goToPhonebooksList = function () {
        this.router.navigate(["phonebooks"]); // перенаправляем пользователя на PhonebookListComponent
    };
    return PhonebookDetailsComponent;
}());
PhonebookDetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "phrase-details",
        templateUrl: "phonebook-details.component.html"
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        phonebook_service_1.PhonebookService])
], PhonebookDetailsComponent);
exports.PhonebookDetailsComponent = PhonebookDetailsComponent;
//# sourceMappingURL=phonebook-details.component.js.map
