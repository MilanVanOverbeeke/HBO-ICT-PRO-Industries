import Game from './Game.js';
import Scene from './Scene.js';
import Player from './Player.js';
import PowerUp from './PowerUp.js';
import GameOver from './GameOver.js';
import Virus from './Virus.js';
import LevelUp from './LevelUp.js';
import KeyListener from './KeyListener.js';
export default class Level extends Scene {
    scoringItems;
    player;
    countUntilNextItem;
    gameLoop;
    keyboard;
    imgSourcePlayer;
    constructor(game) {
        super(game);
        this.scoringItems = [];
        this.keyboard = new KeyListener();
        for (let i = 0; i < Game.randomNumber(8, 15); i++) {
            this.scoringItems.push(this.createScoringItem());
        }
        const backgroundImages = [
            'url(./assets/img/background-blue-tint.png)',
            'url(./assets/img/background-cyan.png)',
            'url(./assets/img/background-blue.png)',
            'url(./assets/img/background-red.png)',
            'url(./assets/img/background-red-tint.png)',
            'url(./assets/img/background-purple.png)',
            'url(./assets/img/background-purple-tint.png)',
            'url(./assets/img/background-green.png)',
            'url(./assets/img/background-orange.png)',
            'url(./assets/img/background-yellow.png)',
        ];
        const dom = document.getElementById('canvas');
        dom.style.backgroundImage = backgroundImages[Game.randomNumber(0, backgroundImages.length)];
        const playerImages = [
            './assets/img/computer-gif-image.gif',
            './assets/img/computer-player-blue.png',
            './assets/img/computer-player-red.png',
            './assets/img/computer-player-heart.png',
            './assets/img/computer-player-green.png',
            './assets/img/computer-player-blush.png',
            './assets/img/computer-player-old.png',
            './assets/img/computer-player-pink.png',
            './assets/img/computer-player-pirate.png',
        ];
        this.player = new Player(this.game.canvas.width, this.game.canvas.height, playerImages[Game.randomNumber(0, playerImages.length)]);
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
            return new PowerUp('./assets/img/healt-icon-1.png', this.game.canvas.width, this.game.canvas.height);
        }
        if (selector < 60) {
            return new Virus('leftToRight', './assets/img/computer-virus-1.png', this.game.canvas.width, this.game.canvas.height, Game.randomNumber(this.game.getUser().getLevel(), this.game.getUser().getLevel() + 2));
        }
        return new Virus('topToBottom', './assets/img/computer-virus-1.png', this.game.canvas.width, this.game.canvas.height, Game.randomNumber(this.game.getUser().getLevel(), this.game.getUser().getLevel() + 2));
    }
    cleanUpVirus() {
        this.scoringItems = this.scoringItems.filter((element) => {
            const collides = this.player.collidesWith(element);
            if (collides) {
                console.log('ouch!');
                const user = this.game.getUser();
                user.addHealth(element.getPoints());
                for (let i = 1; user.getHealth() > 10; user.addHealth(-i))
                    ;
            }
            return !collides;
        });
    }
    hasWon() {
        const user = this.game.getUser();
        return user.getScore() >= user.getLevel() * 1000;
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
        if (this.hasWon()) {
            return new LevelUp(this.game);
        }
        if (this.game.getUser().getHealth() <= 0) {
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
        this.game.writeTextToCanvas(`Level: ${this.game.getUser().getLevel()}`, 36, 120, 100);
        this.game.writeTextToCanvas(`Score: ${this.game.getUser().getScore()}`, 36, 120, 150);
        this.game.writeTextToCanvas(`Health: ${this.game.getUser().getHealth()}`, 36, 120, 200);
    }
}
//# sourceMappingURL=Level.js.map
