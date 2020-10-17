/**
 * @Teacher
 * Class that has a teacher abstraction 
 * 
 * @description 
 * With inheritance for difference
 * With getters and setters methods
*/

import { logger } from "../helpers/logger";
import Person, { TypeSex } from "./Person";

class Teacher extends Person {

    private _speciality: string
    private _salary: number

    constructor(name: string, age: number, sex: TypeSex, speciality: string, salary: number) {
        super(name, age, sex)
        this._speciality = speciality
        this._salary = salary
    }

    getSpeciality(): string {
        return this._speciality
    }

    setSpeciality(speciality: string): void {
        this._speciality = speciality
        logger(`Specialty is change for ${speciality} with success :)`)
    }

    getSalary(): number {
        return this._salary
    }

    setSalary(salary: number): void {
        this._salary = salary
        logger(`Salary is change with success :)`)
    }

    salaryIncrease(amount: number): void {
        this._salary += amount
        logger(`Amount salary realized with success :)`)
    }

    status(): void {
        logger(`
            *** Teacher ***

            name:       ${this.getName()}
            age:        ${this.getAge()}
            sex:        ${this.getSex()}
            speciality: ${this.getSpeciality()}
            salary:     ${this.getSalary()}
        `)
    }
}

const teacher = new Teacher('Dev', 21, 'M', 'Front-end', 1000)

teacher.salaryIncrease(2000)
teacher.setSpeciality('Front-end, UX')
teacher.status()

export default Teacher