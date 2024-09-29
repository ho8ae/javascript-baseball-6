const GUIDE_MESSAGE = Object.freeze({ //freeze 이해 필요
    startGame: "숫자 야구 게임을 시작합니다.",
    restartGame: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요",
    inputNumber: "숫자를 입력해주세요",
    correctNumber: "3개의 숫자를 모두 맞히셨습니다.",
});

const ERROR_MESSAGE = Object.freeze({
    restartNumberError : "[ERROR] 입력값은 1 또는 2로 이루어진 숫자여야 합니다.",
    restartCountError : "[ERROR] 입력값은 1 또는 2, 둘 중 하나여야 합니다.",
    inputLengthError : "[ERROR] 입력값은 3자리로 구성 되어야 합니다.",
    inputNumberError : "[ERROR] 입력값은 숫자로 구성되어야 합니다.",
    inputDuplicateError : "[ERROR] 입력값은 모두 다른 숫자로 구성되어야 합니다.",
    inputIncludeZeroError : "[ERROR] 입력값에 0은 포함될 수 없습니다.",
});

export default {GUIDE_MESSAGE,ERROR_MESSAGE}; //module 이해 필요