import { Injectable } from "@angular/core";

import { Phrase } from "./phrase";

let phrases = [
    new Phrase(1, "firstName 1", "secondName 1", "phone 1", "addressnew 1", 14863243134),
    new Phrase(3, "firstName 2", "secondName 2", "phone 2", "addressnew 2", 14863243134),
    new Phrase(2, "firstName 3", "secondName 3", "phone 3", "addressnew 3", 14863243134),
    new Phrase(4, "firstName 4", "secondName 4", "phone 4", "addressnew 4", 14863243134),
    new Phrase(5, "firstName 5", "secondName 5", "phone 5", "addressnew 5", 14863243134),
    new Phrase(6, "firstName 6", "secondName 6", "phone 6", "addressnew 6", 14863243134),
    new Phrase(7, "firstName 7", "secondName 7", "phone 7", "addressnew 7", 14863243134),
    new Phrase(8, "firstName 8", "secondName 8", "phone 8", "addressnew 8", 14863243134),
    new Phrase(9, "firstName 9", "secondName 9", "phone 9", "addressnew 9", 14863243134)

];

// Promise, который сразу переходит в состояние resolved с данными из массива phrases
let phrasesPromise = Promise.resolve(phrases);

// Сервис для работы с данными.
// в будущем его можно переделать на работу с сервером
@Injectable()
export class PhraseService {

    // Метод для получения всех фраз. Возвращает Promise с массивом Phrase
    getAll(): Promise<Phrase[]> {
        return phrasesPromise;
    }

    // Метод для получения фразы по id. Возвращает Promise c экземпляром Phrase
    getPhrase(id: number): Promise<Phrase> {
        return phrasesPromise
            .then(phrases => phrases.find(x => x.id == id));
    }
}

