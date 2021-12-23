import GameItem from './GameItem.js';
import Game from './Game.js';
export default class Virus extends GameItem {
    type;
    constructor(type, canvasWidth, canvasHeight) {
        super('Virus');
        let xPos = Game.randomNumber(0, canvasWidth - 200);
        let yPos = Game.randomNumber(0, canvasHeight - 200);
        if (type === 'leftToRight') {
            xPos = 0;
            this.img = Game.loadNewImage('./assets/img/pixel-character-test-1-1.png');
        }
        else {
            yPos = 0;
            this.img = Game.loadNewImage('./assets/img/pixel-character-test-1-1.png');
        }
        this.setXPos(xPos);
        this.setYPos(yPos);
        this.type = type;
        this.setSpeed(Game.randomNumber(5, 15));
    }
    getImage() {
        return this.img;
    }
    draw(ctx) {
        ctx.drawImage(this.img, this.getXPos(), this.getYPos());
    }
    move() {
        if (this.type === 'leftToRight') {
            this.setXPos(this.getXPos() + this.getSpeed());
        }
        else {
            this.setYPos(this.getYPos() + this.getSpeed());
        }
    }
    outOfCanvas(canvasWidth, canvasHeight) {
        if (this.type === 'leftToRight') {
            if (this.getXPos() + this.img.width >= canvasWidth) {
                this.setXPos(0);
                this.setYPos(Game.randomNumber(0, canvasHeight));
            }
        }
        else if (this.getYPos() + this.img.height >= canvasHeight) {
            this.setYPos(0);
            this.setXPos(Game.randomNumber(0, canvasWidth));
        }
    }
}
//# sourceMappingURL=Virus.js.map