// convert to arrow function
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "동의하십니까?",
//     function() { alert("동의하셨습니다."); },
//     function() { alert("취소 버튼을 누르셨습니다."); }
//   );

let userAnswer = true

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "동의하십니까?",
    function() { console.log("동의하셨습니다."); },
    function() { console.log("취소 버튼을 누르셨습니다."); }
  );