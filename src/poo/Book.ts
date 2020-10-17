/**
 * @Book 
 * Class that has a book abstraction 
 * 
 * @description 
 * With getters and setters methods
*/

import { logger } from "../helpers/logger"
import Person from "./Person"

interface BookInterface {
    open: () => void
    close: () => void
    next: () => void
    previous: () => void
    write: () => void
}

class Book implements BookInterface {

    private _title: string
    private _author: string
    private _pages: number
    private _current: number
    private _reader: Person
    private _open: boolean

    constructor(title: string, author: string, pages: number, current: number, reader: Person) {
        this._title = title
        this._author = author
        this._pages = pages
        this._current = current
        this._reader = reader
        this._open = false
    }

    geTitle(): string {
        return this._title
    }

    setTitle(title: string): void {
        this._title = title
    }

    getAuthor(): string {
        return this._author
    }

    setAuhtor(author: string): void {
        this._author = author
    }

    getPages(): number {
        return this._pages
    }

    setPages(pages: number): void {
        this._pages = pages
    }

    getCurrent(): number {
        return this._current
    }

    setCurrent(current: number): void {
        if(!this.getOpen()) {
            logger('this book has been closed for set current')
            return
        }

        this._current += current
    }

    getReader(): Person {
        return this._reader
    }

    setReader(reader: Person): void {
        this._reader = reader
    }

    getOpen(): boolean {
        return this._open
    }

    setOpen(open: boolean): void {
        this._open = open
    }

    open(): void {
        this.setOpen(true)
        logger(`This book has been opened`)
    }

    close(): void {
        this.setOpen(false)
        logger(`This book has been closed`)
    }

    next(): void {
        if(!this.getOpen()) {
            logger('This book is not open for next page')
            return
        }

        this._current += 1
    }

    previous(): void {
        if(!this.getOpen()) {
            logger('This book is not open for previous page')
            return
        }

        this._current -= 1
    }

    write(): void {
        this.getAuthor()
    }

    status(): void {
        logger(`
                *** Book ***

            title:   ${this.geTitle()}
            author:  ${this.getAuthor()}
            pages:   ${this.getPages()}
            current: ${this.getCurrent()}
            reader:  ${this.getReader().getName()}
            open:    ${this.getOpen()}
        `)
    }
}

export default Book