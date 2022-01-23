import Game from './Game.js';
import ScoringItem from './ScoringItem.js';
export default class Virus extends ScoringItem {
    type;
    constructor(type, img, canvasW, canvasH, speed) {
        super('Virus', img, Game.randomNumber(0, canvasW), Game.randomNumber(0, canvasH), -1, speed);
        if (type === 'leftToRight') {
            this.xPos = 0;
        }
        else {
            this.yPos = 0;
        }
        this.setXPos(this.xPos);
        this.setYPos(this.yPos);
        this.type = type;
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