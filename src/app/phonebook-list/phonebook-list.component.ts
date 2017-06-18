import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router"

import { Phonebook } from "../shared/phonebook";
import { PhonebookService } from "../shared/phonebook.service";

@Component({
    moduleId: module.id,
    selector: "phrase-list",
    templateUrl: "phonebook-list.component.html",
    styleUrls: ["phonebook-list.component.css", "../../../node_modules/bootstrap/dist/css/bootstrap.css"]
})
export class PhonebookListComponent implements OnInit {

    phonebooks: Phonebook[];

    constructor(private router: Router,
        private phraseService: PhonebookService) { }

    ngOnInit() {
        this.phraseService // обращаемся к сервису
            .getAll()   // получаем Promise
            .then(result => this.phonebooks = result); // как только Promise перейдет в состояние resolved результат его работы присваиваем свойству phonebooks
    }

    onSelect(selected: Phonebook) {
        console.log(selected);
        // При клике по элементу списка перенаправляем пользователя по адресу /phonebooks/id
        // адрес с обязательным параметром указан в настройках маршрутизации в файле app.routes.ts
        this.router.navigate(["phonebook", selected.id]);
    }
}
