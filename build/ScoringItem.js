import GameItem from './GameItem.js';
export default class ScoringItem extends GameItem {
    points;
    speed;
    constructor(name, imageSrc, maxX, maxY, points, speed) {
        super(name, imageSrc, maxX, maxY);
        this.points = points;
        this.speed = speed;
    }
    getSpeed() {
        return this.speed;
    }
    setSpeed(speed) {
        this.speed = speed;
    }
    speedUp() {
        this.speed += 5;
    }
    getPoints() {
        return this.points;
    }
}
//# sourceMappingURL=ScoringItem.js.map