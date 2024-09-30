import RandomNumberGenerator from "../utils/RandomNumberGenerator.mjs";

class BaseBall {
    #answer; //이게 잘 모르겠음. 

    constructor(radnomNumber) {
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




}

export default BaseBall;