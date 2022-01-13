import Game from './Game.js';
import ScoringItem from './ScoringItem.js';

export default class Virus extends ScoringItem {
  private type: string;

  /**
   * Initialize the Virus
   *
   * @param type type of the Virus
   * @param canvasWidth width of the canvas
   * @param canvasHeight heighst of the canvas
   */
  public constructor(type: string, canvasWidth: number, canvasHeight: number) {
    super('Virus', './assets/img/computer-virus-1.png', Game.randomNumber(0, canvasWidth - 200), Game.randomNumber(0, canvasHeight - 200), -1);

    if (type === 'leftToRight') {
      this.xPos = 0;
    } else {
      this.yPos = 0;
    }

    this.setXPos(this.xPos);
    this.setYPos(this.yPos);

    this.type = type;
    this.setSpeed(Game.randomNumber(3, 6));
  }

  /**
   * Get the image of the virus
   *
   * @returns the image of the Virus
   */
  public getImage(): HTMLImageElement {
    return this.img;
  }

  /**
   * Method to move the Virus
   */
  public move(): void {
    if (this.type === 'leftToRight') {
      this.setXPos(this.getXPos() + this.getSpeed());
    } else {
      this.setYPos(this.getYPos() + this.getSpeed());
    }
  }

  /**
   * Checks if Virus is out of canvas
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
