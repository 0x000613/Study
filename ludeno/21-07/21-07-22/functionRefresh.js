
function checkAge(age) {
  (age > 18) ? true : confirm('보호자의 동의를 받으셨나요?');
}

checkAge(10);
checkAge(30);