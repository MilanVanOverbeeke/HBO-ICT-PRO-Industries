import Player from './Player.js';
import Virus from './Virus.js';
export default class Game {
    canvas;
    ctx;
    virus;
    player;
    frameCounter;
    score;
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.virus = [];
        for (let index = 0; index < 10; index++) {
            if (index % 2 === 0) {
                console.log('leftToRight');
                this.virus.push(new Virus('leftToRight', this.canvas.width, this.canvas.height));
            }
            else {
                console.log('topToBottom');
                this.virus.push(new Virus('topToBottom', this.canvas.width, this.canvas.height));
            }
        }
        this.score = 0;
        this.player = new Player(this.canvas.width, this.canvas.height);
        this.frameCounter = 0;
        this.loop();
    }
    loop = () => {
        this.score += 1;
        this.frameCounter += 1;
        this.move();
        this.scoringItemOutOfCanvas();
        this.cleanUpVirus();
        this.writeTextToCanvas('Score: 0', 36, 120, 50);
        this.draw();
        requestAnimationFrame(this.loop);
    };
    cleanUpVirus() {
        this.virus = this.virus.filter((element) => {
            const collides = this.player.collidesWith(element);
            if (collides) {
                console.log('ouch!');
            }
            return !collides;
        });
    }
    scoringItemOutOfCanvas() {
        this.virus.forEach((element) => {
            element.outOfCanvas(this.canvas.width, this.canvas.height);
        });
    }
    move() {
        this.virus.forEach((element) => {
            element.move();
        });
        this.player.move(this.canvas);
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.draw(this.ctx);
        if (this.virus.length !== 0) {
            this.virus.forEach((element) => {
                element.draw(this.ctx);
            });
        }
    }
    writeTextToCanvas(text, fontSize = 20, xCoordinate, yCoordinate, alignment = 'center', color = 'white') {
        this.ctx.font = `${fontSize}px sans-serif`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
    static randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
//# sourceMappingURL=Game.js.map