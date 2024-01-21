let plus = document.querySelector('#increment-btn')
let minuc = document.querySelector('#decrement-btn')
let reset = document.querySelector('#reset')
let value = document.querySelector('#counter-value')
let random = document.querySelector('#random')
let num = 12
value.innerText = num
function counter(num) {
    plus.onclick = () => {
        value.innerText = ++num
    }

    minuc.onclick = () => {
        value.innerText = --num
    }
    reset.onclick = () => {
        num = value.innerText = 0
    }
  random.onclick = () => {
       num = value.innerText = Math.floor(Math.random() * 50)

    }



}

counter(num)