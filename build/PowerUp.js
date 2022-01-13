import ScoringItem from './ScoringItem.js';
import Game from './Game.js';
export default class PowerUp extends ScoringItem {
    constructor(canvasWidth, canvasHeight) {
        super('PowerUp', './assets/img/healt-icon-1.png', Game.randomNumber(0, canvasWidth - 200), Game.randomNumber(0, canvasHeight - 200), 2);
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