/**
 * @Student
 * Class that has a student abstraction 
 * 
 * @description 
 * With inheritance for difference
 * With polymorphism
 * With getters and setters
*/

import { logger } from "../helpers/logger";
import Person, { TypeSex } from "./Person";

class Student extends Person {

    private _registration: string
    private _course: string

    constructor(name: string, age: number, sex: TypeSex, registration: string, course: string) {
        super(name, age, sex)
        this._registration = registration
        this._course = course
    }

    getRegistration(): string {
        return this._registration
    }

    setRegistration(registration: string): void {
        this._registration = registration
    }

    getCourse(): string {
        return this._course
    }

    setCourse(course: string): void {
        this._course = course
    }

    status(): void {
        logger(`
            *** Sdudent ***
            
            name: ${this.getName()}
            age: ${this.getAge()}
            sex: ${this.getSex()}
            registration: ${this.getRegistration()}
            course: ${this.getCourse()}
        `)
    }
}

const student = new Student('Dev', 21, 'M', '12/01/2020', 'Front-end')

student.status()

export default Student