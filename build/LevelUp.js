import KeyListener from './KeyListener.js';
import Level from './Level.js';
import Scene from './Scene.js';
export default class LevelUp extends Scene {
    shouldStart;
    keyboard;
    constructor(game) {
        super(game);
        this.keyboard = new KeyListener();
        this.shouldStart = false;
    }
    processInput() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_P)) {
            this.shouldStart = true;
        }
    }
    update() {
        if (this.shouldStart) {
            this.game.getUser().increaseLevel();
            return new Level(this.game);
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        const centerX = this.game.canvas.width / 2;
        const line1 = `Level ${this.game.getUser().getLevel()} Clear`;
        this.game.writeTextToCanvas(line1, 20, centerX, 100, 'center', 'black');
        const msg = `${this.game.getUser().getName()} score: ${this.game.getUser().getScore()}`;
        this.game.writeTextToCanvas(msg, 20, centerX, 150, 'center', 'black');
        this.game.writeTextToCanvas("Type 'p' to proceed to the next level", 15, centerX, 200, 'center', 'black');
    }
}
//# sourceMappingURL=LevelUp.js.map