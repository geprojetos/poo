/**
 * @Fight
 * Class that has a fight abstraction 
 * 
 * @description 
 * With getters and setters methods
*/

import { logger } from "../helpers/logger";
import Fighter from "./Fighter";

class Fight {

    private _champion!: Fighter
    private _changeller!: Fighter

    constructor(champion: Fighter, changeller: Fighter) {
        this._champion = champion
        this._changeller = changeller
    }

    mark():void {
        
        if(this._champion.getCategory() === this._changeller.getCategory()) {
            this.figthers()
            return
        }

        logger(`Category is not iqual`)
    }

    private figthers():void {
        

        if(Math.floor(Math.random() * 2) === 0) {
            this._champion.winnerFigther()
            this._changeller.loserFigther()
            return
        }

        this._changeller.winnerFigther()
        this._champion.loserFigther()
    }

    status():void {

        if(this._champion.getWins() > this._changeller.getWins()) {
            logger(`
                *** Batle in ***
                
                ${this._champion.getName()} X ${this._changeller.getName()}


            !!!! ${this._champion.getName()} WINNERS !!!!

            name:     ${this._champion.getName()}
            weight:   ${this._champion.getWeigth()}
            category: ${this._champion.getCategory()}
            wins:     ${this._champion.getWins()}
            losers:   ${this._champion.getLoser()}
        `)

        return
        }

        logger(`
                *** Batle in ***
                
                ${this._champion.getName()} X ${this._changeller.getName()}
                

            !!!! ${this._changeller.getName()} WINNERS !!!!

            name:     ${this._changeller.getName()}
            weight:   ${this._changeller.getWeigth()}
            category: ${this._changeller.getCategory()}
            wins:     ${this._changeller.getWins()}
            losers:   ${this._changeller.getLoser()}
        `)
    }
}

export default Fight;