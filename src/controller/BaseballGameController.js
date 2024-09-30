import Baseball from "../domain/Baseball.js";
import RandomNumberGenerator from "../utils/RandomNumberGenerator.js";
import InputValidator from "../utils/InputValidator.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import { STATIC_NUMBER } from "../domain/Constant.js";


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
        await this.inputUserNumber();
        //함수 내에서 함수는 여러가지 사용을 하지 않기 위해 구조분해 할당
    }

    async inputUserNumber() {
        await InputView.readUserNumber((input) => {
            InputValidator.validateUserNumber(input);
            this.calcaulateCount(input);
        })
    }


    async inputRestartNumber() {
        await InputView.readRestartNumber((input) => {
            InputValidator.validateRestartNumber(input);
            if (input === STATIC_NUMBER.restartNumberLength) {
                this.resetGame();
            }
            if (input === STATIC_NUMBER.possibleEndOrNotNumber) return;
        });
    }

    calcaulateCount(input) {
        const inputNumber = Array.from(input, Number);
        const strikeCount = this.#baseball.getStrikeCount(inputNumber);
        const ballCount = this.#baseball.getBallCount(inputNumber, strikeCount);

        return this.checkHint(strikeCount, ballCount);
    }


    checkHint(ballCount, strikeCount) {
        OutputView.printHintMessage(ballCount, strikeCount);

        if (strikeCount === STATIC_NUMBER.baseballNumberLength) {
            OutputView.printEndMessage();
            return this.inputRestartNumber();
        }
        this.inputUserNumber
    }

    async resetGame() {
        this.#baseball.getResetNumber();
        await this.inputUserNumber();
    }


}

export default BaseballGameController;