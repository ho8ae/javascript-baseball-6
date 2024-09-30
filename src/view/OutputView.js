import { Console } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE } from "../constant/Constant.js";


const OuputView = {
    printStartMessage(){
        Console.print(GUIDE_MESSAGE.startGame);
    },

    printHintMessage(ballCount, strikeCount){
        const hint = [];
        if(ballCount !== 0) hint.push(`${ballCount}볼`);
        if(strikeCount !== 0) hint.push(`${strikeCount}스트라이크`);
        if(strikeCount === 0 && ballCount === 0 ) hint.push(`낫싱`);
  
        
        Console.print(hint.join(" "));
    },

    printEndMessage(){
        Console.print(GUIDE_MESSAGE.correctNumber);
    },
};


export default OuputView;