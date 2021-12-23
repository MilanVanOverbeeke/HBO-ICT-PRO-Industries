import GameItem from './GameItem.js';
import Game from './Game.js';

export default class Virus extends GameItem {
  private type: string;

  /**
   * Initialize the Virus
   *
   * @param type type of the Virus
   * @param canvasWidth width of the canvas
   * @param canvasHeight heighst of the canvas
   */
  public constructor(type: string, canvasWidth: number, canvasHeight: number) {
    super('Virus');

    let xPos = Game.randomNumber(0, canvasWidth - 200);
    let yPos = Game.randomNumber(0, canvasHeight - 200);

    if (type === 'leftToRight') {
      xPos = 0;
      this.img = Game.loadNewImage('./assets/img/pixel-character-test-1-1.png');
    } else {
      yPos = 0;
      this.img = Game.loadNewImage('./assets/img/pixel-character-test-1-1.png');
    }

    this.setXPos(xPos);
    this.setYPos(yPos);

    this.type = type;
    this.setSpeed(Game.randomNumber(5, 15));
  }

  /**
   * Get the image of the rocket
   *
   * @returns the image of the rocket
   */
  public getImage(): HTMLImageElement {
    return this.img;
  }

  /**
   * Method to draw the Rocket on the canvas
   *
   * @param ctx rendering context
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.img, this.getXPos(), this.getYPos());
  }

  /**
   * Method to move the Rocket
   */
  public move(): void {
    if (this.type === 'leftToRight') {
      this.setXPos(this.getXPos() + this.getSpeed());
    } else {
      this.setYPos(this.getYPos() + this.getSpeed());
    }
  }

  /**
   * Checks if Rocket is out of canvas
   *
   * @param canvasWidth widht of the canvas
   * @param canvasHeight height of the canvas
   */
  public outOfCanvas(canvasWidth: number, canvasHeight: number): void {
    if (this.type === 'leftToRight') {
      if (this.getXPos() + this.img.width >= canvasWidth) {
        this.setXPos(0);
        this.setYPos(Game.randomNumber(0, canvasHeight));
      }
    } else if (this.getYPos() + this.img.height >= canvasHeight) {
      this.setYPos(0);
      this.setXPos(Game.randomNumber(0, canvasWidth));
    }
  }
}
