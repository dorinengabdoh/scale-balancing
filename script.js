'use strict'

// select elements from the DOM
const input = document.getElementById('element1')
const listOfWeights = document.getElementById('element2')
const button = document.getElementById('btn')
const displayResult = document.getElementById('result')


const balanceScale = (element1, element2) => {
  const difference = Math.abs(element1[0] - element1[1])
  if (difference === 0) return 'The scale is balanced'

  let value1, value2, result1, result2
  for (let i = 0; i < element2.length; i++) {
    for (let j = 0; j < element2.length; j++) {
      result1 = parseInt(element1[0]) + parseInt(element2[i])
      result2 = parseInt(element1[1]) + parseInt(element2[j])
      if (result1 === result2) {
        value1 = element2[j]
        value2 = element2[i]

        if (element1[0] > element1[1]) {
          if (value1 >= value2) return `The balance weight of ${element1} are: ${value2} and ${value1}`
          else return `The balance weight of ${element1} are: ${value1} and ${value2}`
        } else {
          if (value1 >= value2) return `The balance weight of ${element1} are: ${value1} and ${value2}`
          else return `The balance weight of ${element1} are: ${value2} and ${value1}`
        }
      }
    }
  }
  return displayResult.innerHTML = 'The scale cannot be balanced'
}

button.addEventListener('click', () => {
  if (input.value.trim() === '') {
    return displayResult.innerHTML = 'Please enter 2 weights on the balance scale'
  } else if (listOfWeights.value.trim() === '') {
    displayResult.style.borderColor = 'red'
    return displayResult.innerHTML = 'Please enter a list of weights to balance the scale'
  } else {
    const element1Arr = input.value.split(',').map(Number)
    const element2Arr = listOfWeights.value.split(',').map(Number)

    if (element1Arr.length !== 2 || element1Arr[0] === 0) {
      displayResult.innerHTML = 'Please enter 2 weights on the balance scale'
    }else {
      displayResult.innerHTML = balanceScale(element1Arr, element2Arr)
    }
  }
  displayResult.style.borderColor = 'green'
})