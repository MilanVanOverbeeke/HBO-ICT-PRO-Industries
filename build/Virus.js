import Game from './Game.js';
import ScoringItem from './ScoringItem.js';
export default class Virus extends ScoringItem {
    type;
    constructor(type, canvasWidth, canvasHeight) {
        super('Virus', './assets/img/computer-virus-1.png', Game.randomNumber(0, canvasWidth - 200), Game.randomNumber(0, canvasHeight - 200), -1);
        if (type === 'leftToRight') {
            this.xPos = 0;
        }
        else {
            this.yPos = 0;
        }
        this.setXPos(this.xPos);
        this.setYPos(this.yPos);
        this.type = type;
        this.setSpeed(Game.randomNumber(3, 6));
    }
    getImage() {
        return this.img;
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