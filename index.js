//I DON'T KNOW WHAT I'VE DONE!

document.getElementById("button1").addEventListener("click", function(){
  document.getElementById("userChoice").innerHTML = 'Rock <img class="action-pics" src="images/rock.png">'
})
document.getElementById("button2").addEventListener("click", function(){
  document.getElementById("userChoice").innerHTML = 'Paper <img class="action-pics" src="images/paper.png">'
})
document.getElementById("button3").addEventListener("click", function(){
  document.getElementById("userChoice").innerHTML = 'Scissors <img class="action-pics" src="images/scissors.png">'
})

const options = ["Rock", "Paper", "Scissors"]

document.getElementById("button1").addEventListener("click", function(){
  let randomChoice = Math.floor(Math.random()*3)
  document.getElementById("computerChoice").innerHTML = options[randomChoice]
})
document.getElementById("button2").addEventListener("click", function(){
  let randomChoice = Math.floor(Math.random()*3)
  document.getElementById("computerChoice").innerHTML = options[randomChoice]
})
document.getElementById("button3").addEventListener("click", function(){
  let randomChoice = Math.floor(Math.random()*3)
  document.getElementById("computerChoice").innerHTML = options[randomChoice]
})

//Result is declared for button "Rock"

document.getElementById("button1").addEventListener("click", function(){

  var computerWord = document.getElementById("computerChoice").innerHTML

  if(computerWord === "Rock"){
    document.getElementById("result").innerHTML = "It's a Draw!"
  }else if(computerWord === "Paper"){
    document.getElementById("result").innerHTML = "You Lose!👎🏻"
  }else if(computerWord === "Scissors"){
    document.getElementById("result").innerHTML = "You Win!🙌🏻"
  }
})

//Result is declared for button "Paper"

document.getElementById("button2").addEventListener("click", function(){

  var computerWord = document.getElementById("computerChoice").innerHTML

  if(computerWord === "Paper"){
    document.getElementById("result").innerHTML = "It's a Draw!"
  }else if(computerWord === "Scissors"){
    document.getElementById("result").innerHTML = "You Lose!👎🏻"
  }else if(computerWord === "Rock"){
    document.getElementById("result").innerHTML = "You Win!🙌🏻"
  }
})

//Result is declared for button "Scissors"

document.getElementById("button3").addEventListener("click", function(){

  var computerWord = document.getElementById("computerChoice").innerHTML

  if(computerWord === "Scissors"){
    document.getElementById("result").innerHTML = "It's Draw!"
  }else if(computerWord === "Rock"){
    document.getElementById("result").innerHTML = "You Lose!👎🏻"
  }else if(computerWord === "Paper"){
    document.getElementById("result").innerHTML = "You Win!🙌🏻"
  }
})
