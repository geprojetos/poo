/**
 * @Person
 * Class that has a person abstraction 
 * 
 * @description 
 * With getters and setters methods
*/

import { logger } from "../helpers/logger"
import Book from "./Book"

export type TypeSex = 'M' | 'F'

class Person {

    private _name: string
    private _age: number
    private _sex: TypeSex

    constructor(name: string, age: number, sex: TypeSex) {
        this._name = name
        this._age = age
        this._sex = sex
    }

    getName(): string {
        return this._name
    }

    setName(name: string): void {
        this._name = name
    }

    getAge():number {
        return this._age
    }

    setAge(age: number): void {
        this._age = age
    }

    getSex(): TypeSex {
        return this._sex
    }

    setSex(sex: TypeSex): void {
        this._sex = sex
    }

    birthday(): void {

    }

    status(): void {
        logger(`
            *** Person ***

            name: ${this.getName()}
            age:  ${this.getAge()}
            sex:  ${this.getSex()}
        `)
    }
}

// const person = new Person('Ge', 31, 'M')
// const book = new Book('Batismo de fogo', 'Pe Marcelo', 150, 40, person)

// person.status()

// book.open()
// book.next()
// book.next()
// book.next()
// book.status()

export default Person