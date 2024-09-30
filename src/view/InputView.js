import { Console } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE } from "../constant/Constant.mjs";


const InputView = {
    //비동기함수 Async를 사용하여 callback을 통해 함수 호출 

    readUserNumber(callback){
        Console.readLineAsync(GUIDE_MESSAGE.inputNumber).then((input)=>{
            callback(input)
        });
    },

    readRestartNumber(callback){
        Console.readLineAsync(GUIDE_MESSAGE.restartGame).then((input)=>{
            callback(input);
        });
    },
}

export default InputView;