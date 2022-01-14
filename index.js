let loginForm = document.querySelector('#login-form')

let loginBtn = document.querySelector('#login-btn')

validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

checkLoginInput = (input) => {
  let errSpan = loginForm.querySelector(`span[data-err-for="${input.id}"]`)
  let val = input.value
  let formGroup = input.parentElement

  switch(input.getAttribute('type')) {
    case 'password':
      if(val.length < 6){
        formGroup.classList.add('err')
        formGroup.classList.remove('success')
        errSpan.innerText = 'Password must be at least 6 characters'
      }else {
        formGroup.classList.remove('err')
        formGroup.classList.add('success')
        errSpan.innerText = ''
      }
      break;
    case 'email':
      if(val.length === 0 || !validateEmail(val)){
        formGroup.classList.add('err')
        formGroup.classList.remove('success')
        errSpan.innerText = 'Email is invalid'
      }else {
        formGroup.classList.remove('err')
        formGroup.classList.add('success')
        errSpan.innerText = ''
      }
  }
}

checkLoginForm = () => {
  let inputs = loginForm.querySelectorAll('.form-input')
  inputs.forEach(input => checkLoginInput(input))
}

let inputs = loginForm.querySelectorAll('.form-input')
  inputs.forEach(input => {
    input.addEventListener('focusout', ()=>{
      checkLoginInput(input)
    })
  })

loginBtn.onclick = () => {
  checkLoginForm()
}