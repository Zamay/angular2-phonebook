export class Phonebook {
    constructor(public id: number,
                public firstName: string,
                public secondName: string,
                public phone: string,
                public address: string,
                public createdAt?: number
    ) { }
}