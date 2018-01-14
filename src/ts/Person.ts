export class Person {    
    readonly id: number;
    readonly name: string;    
    age: number;

    constructor(_id: number, _name: string) {
        this.id = _id;
        this.name = _name;
        this.age = 99;      
    }
}

