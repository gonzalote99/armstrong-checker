const txtInput = document.querySelector('.inputs input'),
checkBtn = document.querySelector('.inputs button'),
infoTxt = document.querySelector('.info-txt');


let filterInput;


function Armstrong(number) {
  var flag,remainder,addition = 0;
  flag = number;
  while(number > 0) {
    remainder = number % 10;
    addition = addition + remainder*remainder*remainder;
    number = parseInt(number/10);
    
  }

  if(addition == flag) {
    return true;
  }
  else {
    return false;
  }
}

checkBtn.addEventListener('click', () => {
  let n = filterInput;
  console.log(typeof n);

  infoTxt.style.display = "block";
  if(Armstrong(n) === true) {
    return infoTxt.innerHTML = `yes, <span>'${txtInput.value}'</span> is armstrong value`
  }

  infoTxt.innerHTML = `no, <span>'${txtInput.value}'</span> is not armstrong value `
 });

txtInput.addEventListener('keyup', () => {
  filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, '');
  if(filterInput) {
    return checkBtn.classList.add('active');
  }
  infoTxt.style.display = "none";
  checkBtn.classList.remove('active');
} )



