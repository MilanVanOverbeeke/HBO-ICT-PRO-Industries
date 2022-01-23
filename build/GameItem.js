import Game from './Game.js';
export default class GameItem {
    name;
    img;
    xPos;
    yPos;
    constructor(name, imageSrc, maxX, maxY) {
        this.name = name;
        this.img = Game.loadNewImage(imageSrc);
        this.xPos = Game.randomNumber(0, maxX);
        this.yPos = Game.randomNumber(0, maxY);
    }
    getImageHeight() {
        return this.img.height;
    }
    getImageWidth() {
        return this.img.width;
    }
    getXPos() {
        return this.xPos;
    }
    getYPos() {
        return this.yPos;
    }
    setXPos(xPos) {
        this.xPos = xPos;
    }
    setYPos(yPos) {
        this.yPos = yPos;
    }
    draw(ctx) {
        ctx.drawImage(this.img, this.xPos, this.yPos);
    }
}
//# sourceMappingURL=GameItem.js.map