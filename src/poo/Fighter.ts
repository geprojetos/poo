/**
 *\ @Fighters
 * Class that has a fighters abstraction 
 * 
 * @description 
 * With getters and setters methods
*/

import { logger } from "../helpers/logger";
import Fight from "./Fight";

type TypeCategory = 'light' | 'medium' | 'heavy';

class Fighter {
    private _name: string
    private _weight: number
    private _category!: TypeCategory;
    private _wins: number
    private _loser: number

    constructor(name: string, weight: number) {
        this._name = name
        this._weight = this.setWeight(weight)
        this._wins = 0
        this._loser = 0
    }

    getName():string {
        return this._name
    }

    getWeigth(): number {
        return this._weight
    }

    getCategory(): TypeCategory {
        return this._category
    }

    getWins(): number {
        return this._wins
    }

    getLoser(): number {
        return this._loser
    }

    setWeight(weight: number): number {

        if(weight <= 50) {
            logger('')
            this._category = 'light'
            return weight;
        }

        if(weight > 50 && weight <= 80) {
            this._category = 'medium'
            return weight
        }

        this._category = 'heavy'
        return weight
    }

    winnerFigther():void {
        this._wins += 1
    }

    loserFigther():void {
        this._loser += 1
    }
}

const champions = new Fighter('LeBron', 150)
const changelle = new Fighter('Butler', 190)

const fight = new Fight(champions, changelle)

fight.mark()
fight.mark()
fight.mark()
fight.mark()
fight.mark()
fight.status() 

export default Fighter