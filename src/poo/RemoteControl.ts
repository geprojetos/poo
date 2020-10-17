/**
 * @RemoteControl
 * Class that has a remote control abstraction 
 * 
 * @description 
 * With encapsulation
 * With getters and setters methods
*/

import { logger } from "../helpers/logger"

interface RemoteControlInterface {
    openMenu: () => void;
    closeMenu: () => void;
    play: () => void;
    pause: () => void;
}

class RemoteControl implements RemoteControlInterface {

    private _volume: number
    private _turnOn: boolean
    private _menu: boolean;

    constructor() {
        this._volume = 50
        this._turnOn = false
        this._menu = false
    }

    getVolume(): number {
        return this._volume
    }

    setVolume(volume: number): void {

        if(this._turnOn === false) {
            logger(`Remote control is not ON for add volume`)
            return
        }

        if(this._menu === false) {
            logger(`Menu is not opened for add volume`)
            return
        }

        logger(`Add volume success :)`)        
        this._volume = volume
    }

    getTurnOn(): boolean {
        return this._turnOn;
    }

    setTurnOn(on: boolean): void {
        if(on === false) {
            logger(`Remote control is off`)
            return
        }

        this._turnOn = on;
    }

    getMenu(): boolean {
        return this._menu
    }

    setMenu(status: boolean): void {
        if(this._turnOn === false) {
            logger(`Remote control is not ON for is change menu`)
            return
        }

        this._menu = status;
        logger(`Menu is change for ${status}`)
    }

    openMenu(): void {
        if(this._turnOn === false) {
            logger(`Remote control is not ON for is open menu`)
            return
        }

        this._menu = true;
        logger(`Menu is opened`)
    }

    closeMenu(): void {
        if(this._turnOn === false) {
            logger(`Remote control is not ON for is closed menu`)
            return
        }

        this._menu = false;
        logger(`Menu is closed`)
    }

    play(): void {
        if(this._turnOn === false) {
            logger(`Remote control is not ON for is played`)
            return
        }

        logger('Play is success :)')
    }

    pause(): void {
        if(this._turnOn === false) {
            logger(`Remote control is not ON for pause`)
            return
        }

        logger('Pause is success :)')
    }

    status():void {
        logger(`
            *** Remote Control Status ***

            volume:  ${this.getVolume()}
            turnON:  ${this.getTurnOn()}
            menu:    ${this.getMenu()}
        `)
    }
}

const remote = new RemoteControl()
remote.setTurnOn(true)
remote.play()
remote.pause()
remote.setMenu(true)
remote.setVolume(2)
remote.status()

export default RemoteControl;