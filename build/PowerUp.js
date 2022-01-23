import ScoringItem from './ScoringItem.js';
import Game from './Game.js';
export default class PowerUp extends ScoringItem {
    constructor(img, canvasWidth, canvasHeight) {
        super('PowerUp', img, Game.randomNumber(0, canvasWidth), Game.randomNumber(0, canvasHeight), 2, 3);
        this.xPos = 0;
        this.setXPos(this.xPos);
        this.setSpeed(Game.randomNumber(1.5, 3));
    }
    move() {
        this.setXPos(this.getXPos() + this.getSpeed());
    }
    outOfCanvas(canvasWidth, canvasHeight) {
        if (this.getXPos() + this.img.width >= canvasWidth) {
            this.setXPos(0);
            this.setYPos(Game.randomNumber(0, canvasHeight));
        }
    }
}
//# sourceMappingURL=PowerUp.js.map