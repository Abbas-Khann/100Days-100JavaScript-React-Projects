/*
Let's look at the requirements:
1- We need to fetch the canvas element


*/

let canvas = document.getElementById("canvas")
let ctx = canvas.getContext('2d')
// Here we are creating a context

let size = 10
let isPressed = false
let color = document.getElementById('color')
let x
let y

color.addEventListener('change', (e)=> {
    color = e.target.value
})

let sizeEl = document.getElementById('size')
let decreaseBtn = document.getElementById('decrease')
let increaseBtn = document.getElementById('increase')

increaseBtn.addEventListener('click', ()=> {
    if(size <= 45) {
    sizeEl.textContent = size += 5
    }
})

decreaseBtn.addEventListener('click', ()=> {
    sizeEl.textContent = size -= 5
    if(size < 5) {
        size = 0
        sizeEl.textContent = size
    }
    
})



canvas.addEventListener('mousedown', (e)=> {
        isPressed = true
         // Now to get the position of where the mouse is so we're gonna do 
        x = e.offsetX
        y = e.offsetY
        
        // console.log(isPressed, x, y)
})

// Now if we release the mouse we want to clear the x and y values
canvas.addEventListener('mouseup', (e)=> {
    isPressed = false
     // Now to get the position of where the mouse is so we're gonna do 
    x = undefined
    y = undefined
    
    // console.log(isPressed, x, y)
})

// Now we want to draw something once the mouse is being moved so we would listen for a mousemove event

canvas.addEventListener('mousemove', (e)=> {
    // Now we need to run a check for if the mouse is actually pressed
    if(isPressed) { // Means if that's true which means we're holding the mouse down
        const x2 = e.offsetX
        const y2 = e.offsetY
        drawCircle(x2,y2)
        drawLines(x,y,x2,y2)

        x = x2
        y = y2
    }

})


// The function draw circle takes two parameters x and y which is going to be the positioning of the circle
function drawCircle(x,y) {
    // Now to draw a circle we need to begin a path
    ctx.beginPath()
    // And then create an arc
    // syntax of arc => arc(x, y, radius, startAngle, endAngle);
    ctx.arc(x, y, size, 0, Math.PI * 2)
    // Now we need to fill the circle
    ctx.fillStyle = color
    ctx.fill()

}

// We also wanna be able to draw lines
// x1,y1 will be the positions we're moving towards and x2,y2 are going to be the positions we're drawing the lines towards
function drawLines(x1,y1,x2,y2) {
    ctx.beginPath()
    // moveTo will set the starting point for the line
    ctx.moveTo(x1,y1)
    // This will set the line towards the point where the line should go upto
    ctx.lineTo(x2,y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    // Now to draw the line we are gonna need ctx.stroke
    ctx.stroke()

}

let resetBtn = document.getElementById('reset')

resetBtn.addEventListener('click', ()=> {
        ctx.clearRect(0,0,canvas.width,canvas.height)
})


/*
                                                            For testing purposes                                                 
 drawCircle(100,200)
 drawLines(300,300,300,500)
 300 each on the x-axis and y-axis which in this case is the moveTo
 300 and 500 on lineTo
 */