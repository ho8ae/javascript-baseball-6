import RandomNumberGenerator from "../utils/RandomNumberGenerator.js";
import { STATIC_NUMBER } from "./Constant.js";

class BaseBall {
    #answer; //private 필드를 나타내는 문장이라고 함
    //오직 클래스 내부 메서드를 통해서만 접근 가능 !

    constructor(randomNumber) { //new Baseball(randomNumber) 이런 구조에서 호출됨
        this.#answer = randomNumber;
    }


    //input = Array 형태
    // getStrikeCount(input) {
    //     let count = 0;

    //     for (let i = 0; i < input.length; i++) {
    //         if (input[i] === this.#answer[i]) count += 1;
    //     }

    //     return count;
    // }

    getStrikeCount(input) {
        const count = input.reduce((acc, value, i) => {
          return value === this.#answer[i] ? acc + 1 : acc;
        }, 0);
    
        return count;
      }

    //input = Array 형태

    // getBallCount(input, strikeCount) {
    //     let count = 0;

    //     for (let i = 0; i < input.length; i++) {
    //         if (this.#answer.includes(input[i])) count += 1;
    //     }

    //     return count - strikeCount;
    // }

    getBallCount(input, strikeCount) {
        const count =
          input.filter((value) => this.#answer.includes(value)).length -
          strikeCount;
        return count;
      }
    

    getResetNumber() {
        this.#answer = RandomNumberGenerator.generateRandomNumber(
            STATIC_NUMBER.baseballNumberLength
        );
    }


}

export default BaseBall;