import { Engine } from "./Engine";

class App {
  private _engine: Engine;

  constructor() {
    this._engine = new Engine();
    this._engine.initialize().then(() => this._engine.draw());
  }
}
new App();
