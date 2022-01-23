import ScoringItem from './ScoringItem.js';
import Game from './Game.js';

export default class PowerUp extends ScoringItem {
  /**
   * constructs the class
   *
   * @param img image o the powerUp
   * @param canvasWidth canvas width
   * @param canvasHeight canvas height
   */
  public constructor(img: string, canvasWidth: number, canvasHeight: number) {
    super('PowerUp', img, Game.randomNumber(0, canvasWidth), Game.randomNumber(0, canvasHeight), 2, 3);
    this.xPos = 0;

    this.setXPos(this.xPos);

    this.setSpeed(Game.randomNumber(1.5, 3));
  }

  /**
   * Method to move the Virus
   */
  public move(): void {
    this.setXPos(this.getXPos() + this.getSpeed());
  }

  /**
   * Checks if Virus is out of canvas
   *
   * @param canvasWidth widht of the canvas
   * @param canvasHeight height of the canvas
   */
  public outOfCanvas(canvasWidth: number, canvasHeight: number): void {
    if (this.getXPos() + this.img.width >= canvasWidth) {
      this.setXPos(0);
      this.setYPos(Game.randomNumber(0, canvasHeight));
    }
  }
}
