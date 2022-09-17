function math (number) {
  let result = ''
  for(let i = 1; i <= 10; i++) {
    result +=`${i} + ${number} = ${i + number}</br>`
  }
  return result
}

let element = document.getElementById('container')
element.innerHTML = math(3)