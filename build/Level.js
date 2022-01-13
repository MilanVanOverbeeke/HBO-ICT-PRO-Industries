import Game from './Game.js';
import Scene from './Scene.js';
import Player from './Player.js';
import PowerUp from './PowerUp.js';
import GameOver from './GameOver.js';
import Virus from './Virus.js';
export default class Level extends Scene {
    scoringItems;
    player;
    countUntilNextItem;
    gameLoop;
    constructor(game) {
        super(game);
        this.scoringItems = [];
        for (let i = 0; i < Game.randomNumber(8, 15); i++) {
            this.scoringItems.push(this.createScoringItem());
        }
        this.player = new Player(this.game.canvas.width, this.game.canvas.height);
        this.countUntilNextItem = 300;
    }
    scoringItemOutOfCanvas() {
        this.scoringItems.forEach((element) => {
            element.outOfCanvas(this.game.canvas.width, this.game.canvas.height);
        });
    }
    createScoringItem() {
        const selector = Game.randomNumber(0, 100);
        if (selector < 10) {
            return new PowerUp(this.game.canvas.width, this.game.canvas.height);
        }
        if (selector < 60) {
            return new Virus('leftToRight', this.game.canvas.width, this.game.canvas.height);
        }
        return new Virus('topToBottom', this.game.canvas.width, this.game.canvas.height);
    }
    cleanUpVirus() {
        this.scoringItems = this.scoringItems.filter((element) => {
            const collides = this.player.collidesWith(element);
            if (collides) {
                console.log('ouch!');
                const user = this.game.getUser();
                user.addHealth(element.getPoints());
            }
            return !collides;
        });
    }
    processInput() {
        this.scoringItems.forEach((element) => {
            element.move();
        });
        this.player.move(this.game.canvas);
    }
    update(elapsed) {
        this.cleanUpVirus();
        this.game.getUser().addScore(1);
        if (this.countUntilNextItem <= 0) {
            const choice = Game.randomNumber(0, 10);
            if (choice < 5) {
                this.scoringItems.push(this.createScoringItem());
            }
            this.countUntilNextItem = Game.randomNumber(120, 240);
        }
        this.countUntilNextItem -= elapsed;
        if (this.game.getUser().getHealth() === 0) {
            return new GameOver(this.game);
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        this.player.draw(this.game.ctx);
        if (this.scoringItems.length !== 0) {
            this.scoringItems.forEach((element) => {
                element.draw(this.game.ctx);
            });
        }
        this.game.writeTextToCanvas(`Score: ${this.game.getUser().getScore()}`, 36, 120, 150);
        this.game.writeTextToCanvas(`Health: ${this.game.getUser().getHealth()}`, 36, 120, 250);
    }
}
//# sourceMappingURL=Level.js.map