const buttons  = document.querySelectorAll('button');
const result = document.querySelector('#result');
// const tenFlg ="false";
 

let concatText = "";
function buttonPressed(event) {
    
  const text = event.target.textContent;
  
  if(text === "=") {
      concatText = eval(concatText);
  } else if(text === "AC") {
      concatText = "";
  } else {
      concatText += text;
  }

  result.textContent =  concatText;
 
}
  buttons.forEach (button => button.addEventListener('click', buttonPressed));
