import BaseballGameController from "./controller/BaseballGameController.js";
import { STATIC_NUMBER } from "./domain/Constant.js";

class App {
  #baseballGame = new BaseballGameController(
    STATIC_NUMBER.baseballNumberLength
  );

  constructor() {}

  async play() {
    await this.#baseballGame.startGame();
  }
}

export default App;