"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var phonebook_1 = require("./phonebook");
var phonebooks = [
    new phonebook_1.Phonebook(1, "firstName 1", "secondName 1", "phone 1", "addressnew 1", 14863243134),
    new phonebook_1.Phonebook(2, "firstName 2", "secondName 2", "phone 2", "addressnew 2", 14863243134),
    new phonebook_1.Phonebook(3, "firstName 3", "secondName 3", "phone 3", "addressnew 3", 14863243134),
    new phonebook_1.Phonebook(4, "firstName 4", "secondName 4", "phone 4", "addressnew 4", 14863243134),
    new phonebook_1.Phonebook(5, "firstName 5", "secondName 5", "phone 5", "addressnew 5", 14863243134),
    new phonebook_1.Phonebook(6, "firstName 6", "secondName 6", "phone 6", "addressnew 6", 14863243134),
    new phonebook_1.Phonebook(7, "firstName 7", "secondName 7", "phone 7", "addressnew 7", 14863243134),
    new phonebook_1.Phonebook(8, "firstName 8", "secondName 8", "phone 8", "addressnew 8", 14863243134),
    new phonebook_1.Phonebook(9, "firstName 9", "secondName 9", "phone 9", "addressnew 9", 14863243134)
];
// Promise, который сразу переходит в состояние resolved с данными из массива phonebooks
var phonebooksPromise = Promise.resolve(phonebooks);
// Сервис для работы с данными.
// в будущем его можно переделать на работу с сервером
var PhonebookService = (function () {
    function PhonebookService() {
    }
    // Метод для получения всех фраз. Возвращает Promise с массивом Phonebook
    PhonebookService.prototype.getAll = function () {
        return phonebooksPromise;
    };
    // Метод для получения фразы по id. Возвращает Promise c экземпляром Phonebook
    PhonebookService.prototype.getPhrase = function (id) {
        return phonebooksPromise
            .then(function (phonebooks) { return phonebooks.find(function (x) { return x.id == id; }); });
    };
    return PhonebookService;
}());
PhonebookService = __decorate([
    core_1.Injectable()
], PhonebookService);
exports.PhonebookService = PhonebookService;
//# sourceMappingURL=phonebook.service.js.map