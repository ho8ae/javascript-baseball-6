import { Console } from "@woowacourse/mission-utils";
import Baseball from "../domain/Baseball.mjs";
import RandomNumberGenerator from "../utils/RandomNumberGenerator.mjs";
import InputView from "../view/InputView.mjs";
import OutputView from "../view/OutputView.mjs";
import InputValidator from "../utils/InputValidator.mjs";

class BaseballGameController {
    //여기서 모든 걸 controll. 함수만 호출 하는 느낌

    #baseball;

    constructor() {
        this.#baseball = new Baseball(
            RandomNumberGenerator.generateRandomNumber(3)
        );
    }

    startGame() {
        OutputView.printStartMessage();
        this.InputValidator();
        //함수 내에서 함수는 여러가지 사용을 하지 않기 위해 구조분해 할당
    }

    inputuserNumber() {
        InputView.readUserNumber((input) => {
            InputValidator.validateUserNumber(input); //유효성 검사 먼저
            const inputNumber = input.split("").map(Number);
            const strikeCount = this.#baseball.getStrikeCount(inputNumber);
            const ballCount = this.#baseball.getballCount(inputNumber, strikeCount);

            return this.checkHint(strikeCount, ballCount);
        });
    }

    inputRestart() {
        InputView.readRestartNumber((input) => {
            InputValidator.readRestartNumber(input); //유효성 검사
            if (input == "1") {
                this.resetGame();
                this.inputUserNumber();
            }
            if (input == "2") return Console.close();
        });
    }

    checkHint(strikeCount, ballCount){
        OutputView.printHintMessage(ballCount,strikeCount);

        if (strikeCount ===3){
            OutputView.printEndMessage();
            return this.inputRestart();
        }

        this.inputuserNumber();

        //함수 호출과 if만으로 반복문을 만들 수 있음 !!
    }
}

export default BaseballGameController;