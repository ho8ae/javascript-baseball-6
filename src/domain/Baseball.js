import RandomNumberGenerator from "../utils/RandomNumberGenerator.js";

class BaseBall {
    #answer; //private 필드를 나타내는 문장이라고 함
    //오직 클래스 내부 메서드를 통해서만 접근 가능 !

    constructor(radnomNumber) { //new Baseball(randomNumber) 이런 구조에서 호출됨
        this.#answer = radnomNumber;
    }


    //input = Array 형태
    getStrikeCount(input) {
        let count = 0;

        for (let i = 0; i < input.length; i++) {
            if (input[i] === this.#answer[i]) count += 1;
        }

        return count;
    }

    //input = Array 형태

    getBallCount(input, strikeCount) {
        let count = 0;

        for (let i = 0; i< input.length; i++){
            if(this.#answer.includes(input[i])) count += 1;
        }

        return count - strikeCount;
    }

    resetGame(){
        this.#answer = RandomNumberGenerator.generateRandomNumber(3);
    }


}

export default BaseBall;