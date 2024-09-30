import { ERROR_MESSAGE, STATIC_NUMBER } from "../domain/Constant.js";

const InputValidator = {
    validateUserNumber(input) {
        const inputNumbers = input.split("");
        if (input.length !== STATIC_NUMBER.baseballNumberLength)
            throw new Error(ERROR_MESSAGE.inputLengthError);
        if (inputNumbers.includes("0"))
            throw new Error(ERROR_MESSAGE.inputIncludeZeroError);
        if (input.replace(STATIC_NUMBER.possibleBaseballNumber, "").length > 0)
            throw new Error(ERROR_MESSAGE.inputNumberError);//1-9로 해야 0을 넣었을 때 오류가 나옴
        if (inputNumbers.length !== new Set(inputNumbers).size)
            throw new Error(ERROR_MESSAGE.inputDuplicateError); // 다른 숫자여야 합니다.
       },


    validateRestartNumber(input) {
        if (input.length !== STATIC_NUMBER.restartNumberLength)
            throw new Error(ERROR_MESSAGE.restartCountError);
        //길이가 1인지 검사
        if (input.replace(STATIC_NUMBER.possibleEndOrNotNumber, "").length > 0)
            throw new Error(ERROR_MESSAGE.restartNumberError);
        //1또는 2를 검사
    },
};

export default InputValidator; 