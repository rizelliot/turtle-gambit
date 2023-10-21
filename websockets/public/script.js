const ws = new WebSocket("ws://localhost:1081")
const buttonTurn = document.querySelector('button');

function moveTurtleRight(){
    ws.send("return turtle.turnRight()")
}   

buttonTurn.addEventListener('click', (e) => {
    moveTurtleRight()
})