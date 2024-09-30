import BaseballGameController from "./controller/BaseballGameController.mjs";



class App {
  #baseballGame = new BaseballGameController(3);
  constructor(){}
  
  async play() {
    await this.#baseballGame.startGame();
  }
}

export default App;

const app =new App();
app.play();