import Baseball from "../domain/Baseball.js";
import RandomNumberGenerator from "../utils/RandomNumberGenerator.js";
import InputValidator from "../utils/InputValidator.js";
import OutputView from "../view/OutputView.js";
import { Console } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE } from "../constant/Constant.js";


class BaseballGameController {
    //여기서 모든 걸 controll. 함수만 호출 하는 느낌

    #baseball;

    constructor() {
        this.#baseball = new Baseball(
            RandomNumberGenerator.generateRandomNumber(3)
        );
    }

    async startGame() {
        OutputView.printStartMessage();
        await this.readUserNumber();
        //함수 내에서 함수는 여러가지 사용을 하지 않기 위해 구조분해 할당
    }

    async readUserNumber() {
        try {
            const input = await Console.readLineAsync(GUIDE_MESSAGE.inputNumber);
            InputValidator.validateUserNumber(input);
            this.callback(input);
        } catch (error) {
            throw error;
        }
    }
    async readRestartNumber() {
        try {
            const input = await Console.readLineAsync(GUIDE_MESSAGE.restartGame);
            InputValidator.validateRestartNumber(input);
            if (input === "1") {
                this.resetGame();
            }
            if (input === "2") return;
        } catch (error) {
            throw error;
        }
    }

    callback(userNumber) {
        const inputNumber = userNumber.split("").map(Number);
        const strikeCount = this.#baseball.getStrikeCount(inputNumber);
        const ballCount = this.#baseball.getBallCount(inputNumber, strikeCount);

        this.checkHint(ballCount, strikeCount);
    }

    checkHint(ballCount, strikeCount) {
        OutputView.printHintMessage(ballCount, strikeCount);

        if (strikeCount === 3) {
            OutputView.printEndMessage();
            this.readRestartNumber();
        } else this.readUserNumber();
    }

    async resetGame(){
        this.#baseball.resetGame();
        await this.readUserNumber();
    }


}

export default BaseballGameController;