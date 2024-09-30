import InputView from "./view/InputView.mjs";
import InputValidator from "./utils/inputValidator.mjs";


InputView.readUserNumber((input)=>{
    InputValidator.validateUserNumber(input); //검사 실시
    console.log(input)
})

//test시 터미널에 node 파일명 
//mjs 파일이 아니라면 ex) node src/Test.js 이렇게 하면 테스트 가능