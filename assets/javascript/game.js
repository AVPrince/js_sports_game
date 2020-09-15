let count = 0
let resetButton = document.querySelector('#reset-button')
const resetAll = document.querySelector('#num-resets')
let teamOne = document.querySelector('#teamone-shoot-button')
let teamTwo = document.querySelector('#teamtwo-shoot-button')
const shoot1 = document.querySelector('#teamone-numshots')
const shoot2 = document.querySelector('#teamtwo-numshots')
const goal1 = document.querySelector('#teamone-numgoals')
const goal2 = document.querySelector('#teamtwo-numgoals')

teamOne.addEventListener('click', function(){
    console.log("Team One button clicked")
    let countValue = Number(shoot1.innerHTML) +1
    shoot1.innerHTML = countValue
    let goalValue = Math.floor(Math.random()*2)+ Number(goal1.innerHTML)
    goal1.innerHTML = goalValue
})

teamTwo.addEventListener('click', function(){
    console.log("Team Two button clicked")
    let countValue = Number(shoot2.innerHTML) +1
    shoot2.innerHTML = countValue
    let goalValue = Math.floor(Math.random()*2) + Number(goal2.innerHTML)
    goal2.innerHTML=goalValue
})

resetButton.addEventListener('click', function(){
    let counterValue = Number(resetAll.innerHTML)+1
    resetAll.innerHTML = counterValue
    goal1.innerHTML = '0'
    goal2.innerHTML = '0'
    shoot1.innerHTML = '0'
    shoot2.innerHTML = '0'
})