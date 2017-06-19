import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Location } from '@angular/common';

import { Phonebook } from "../phonebook";
import { PhonebookService } from "../service/phonebook.service";

@Component({
    moduleId: module.id,
    selector: "phrase-details",
    templateUrl: "phonebook-details.component.html",
    styleUrls: ["phonebook-details.component.css","../../../node_modules/bootstrap/dist/css/bootstrap.css"]
})
export class PhonebookDetailsComponent implements OnInit {
    phonebook: Phonebook;

    // ActivatedRoute - содержит информацию о маршруте связанную с компонентом, который загружен в outlet
    constructor(
      // private router: Router,
      private activatedRoute: ActivatedRoute,
      private service: PhonebookService,
      private location: Location
    ) { }

    ngOnInit(): void {
        // phonebook - параметры текущего маршрута. Данное свойство является Observable объектом
        // Если параметры будут изменены - произойдет событие и компонент узнает о изменениях.

        // OBSERVABLE PARAMS
        // forEach - устанавливаем обработчик на каждое изменение params
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params["id"]; // конвертируем значение параметра id в тип number
            this.service
                .getPhrase(id)  // обращаемся к сервису и запрашиваем фразу по id. Получаем Promise
                .then(result => this.phonebook = result);  // как только Promise перейдет в состояние resolved присваиваем его значение свойству phonebook
        });
    }

    goToPhonebooksList() {
        // this.router.navigate(["phonebooks"]); // перенаправляем пользователя на PhonebookListComponent
      this.location.back();
    }
}
