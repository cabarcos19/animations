class Rectangle {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.stepX = 1;
        this.stepY = 2;
    }
    move(maxWidth, maxHeight) {
        this.x += this.stepX;
        this.y += this.stepY;
        if (this.x+this.width>maxWidth || this.x < 0 ) {
            this.stepX *= -1;
            if (this.x+this.width>maxWidth)
                this.x = maxWidth - this.width;
            else this.x=0;
        }
        if (this.y+this.height>maxHeight || this.y < 0 ) {
            this.stepY *= -1;
            if (this.y+this.height>maxHeight)
                this.y = maxHeight - this.height;
            else this.y=0;
        }
    }

    draw(context, maxWidth, maxHeight) {
        this.move(maxWidth,maxHeight)
        context.fillRect(this.x, this.y, this.width, this.height)
    }

}

let rectangle = new Rectangle(0,0,20,20);

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
let canvasWidth = canvas.getAttribute("width");
let canvasHeight = canvas.getAttribute("height");
//add
// bouncing, so that the rectangle can not leave our canvas
// add ten more object
console.log(canvasWidth+"-"+canvasHeight)
function animate() {
    context.clearRect(0,0,canvasWidth,canvasHeight);
    rectangle.draw(context,canvasWidth, canvasHeight)
    requestAnimationFrame(animate);
}
animate();
