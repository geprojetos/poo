/**
 * @Pencil
 * Class that has a pencil abstraction 
 * 
 * @description 
 * With getters and setters methods
*/

import { logger } from "../helpers/logger";

class Pencil {
  private _model: string;
  private _color: string;

  constructor(model: string, color: string) {
    this._model = model;
    this._color = color;
  }

  public getModel(): string {
    return this._model;
  }

  public setModel(model: string): void {
    this._model = model;
  }

  public getColor(): string {
    return this._color;
  }

  public setColor(color: string): void {
    this._color = color;
  }

  public status(): void {
    logger(`
        *** Pencil Status ***

        model: ${this.getModel()}
        color: ${this.getColor()}
    `);
  }
}

const pencil = new Pencil("big", "red");
const pencil2 = new Pencil("other", "blue");

pencil.setModel("model alter");
pencil.setColor("change color");
pencil.status();
pencil2.status();

export default Pencil;
