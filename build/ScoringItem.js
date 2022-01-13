import GameItem from './GameItem.js';
export default class ScoringItem extends GameItem {
    points;
    constructor(name, imageSrc, maxX, maxY, points) {
        super(name, imageSrc, maxX, maxY);
        this.points = points;
    }
    getPoints() {
        return this.points;
    }
}
//# sourceMappingURL=ScoringItem.js.map