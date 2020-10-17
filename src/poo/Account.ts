/**
 * @Account 
 * Class that has a account abstraction 
 * 
 * @description 
 * with getters and setters methods
*/

import { logger } from "../helpers/logger";

type TypeAccount = 'C' | 'P';
type TypeStatus = 'open' | 'close';

enum EnumAccount {
    C = 'C',
    p = 'P'
};

enum EnumStatus {
    open = 'open',
    close = 'close'
}

class Account {

    private _account: number;
    protected type: TypeAccount;
    private _owner: string;
    private _balance: number;
    private _status: TypeStatus; 

    constructor(type: TypeAccount, owner: string) {
        this._account = Math.floor(Math.random() * 1000);
        this.type = type;
        this._owner = owner;
        this._balance = 0;
        this._status = EnumStatus.close;

        this.verifyTypeAccount(type);
    }

    verifyTypeAccount(type: TypeAccount): void {

        if(type === EnumAccount.C) {
            this._balance = 50;
            return
        }

        if(type === EnumAccount.p) {
            this._balance = 150
        }
    }

    getAccount(): number {
        return this._account;
    };

    getType(): string {
        return this.type;
    }

    setType(type: TypeAccount): void {
        this.type = type;
    }

    getOwner(): string {
        return this._owner
    }

    setOwner(owner: string): void {
        this._owner = owner;
    }

    getBalance(): number {
        return this._balance
    }

    setBalance(value: number): void {
        this._balance = value;
    }

    getStatus(): TypeStatus {
        return this._status;
    }

    setStatus(status: TypeStatus): void {
        this._status = status;
    }

    openAccount(): void {
        this._status = EnumStatus.open;
    }

    closeAccount(): void {
        if(this._balance >= 1) {
            logger(`Account with balance is not closed`);
            return;
        }

        if(this._balance <= -1) {
            logger(`Account with negative balance`);
            return;
        }

        this._status = EnumStatus.close;
        logger(`Account closed with sucess :)`);
    }

    depositedAccount(value: number): void {

        if(this._status === EnumStatus.close) {
            logger(`Your account is not opened`);
            return;
        }

        logger(`Deposity realized with success :)`)
        this._balance = this._balance + value;
    }

    withdrawAccount(value: number): void {
        
        if(this._status === EnumStatus.close) {
            logger(`Your account is not opened`);
            return;
        }

        if(this._balance >= value) {
            this._balance = this._balance - value;
            logger(`Get value with success :)`);
            return;
        }

        if(this._balance <= value) {
            logger(`Your is not get value`);
            return;
        }

    }

    mensality(): void {
        this._balance = this._balance - 12;
        logger(`Mensality realized`)
    };

    status(): void {
        logger(`
            *** Account Status ***

                owner:   ${this.getOwner()}
                account: ${this.getAccount()}
                type:    ${this.getType()}
                balance: ${this.getBalance()}
                status:  ${this.getStatus()}           
        `)
    }
}

const afonso = new Account('C', 'Afonso')
afonso.openAccount()
afonso.mensality()
afonso.mensality()
afonso.mensality()
afonso.mensality()
afonso.mensality()
afonso.mensality()
afonso.depositedAccount(23)
afonso.closeAccount()
afonso.status()

export default Account;