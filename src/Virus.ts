import Game from './Game.js';
import ScoringItem from './ScoringItem.js';

export default class Virus extends ScoringItem {
  private type: string;

  /**
   * Initialize the Virus
   *
   * @param type type of the Virus
   * @param img image of the virus
   * @param canvasW width of the canvas
   * @param canvasH heighst of the canvas
   * @param speed speed of the virus
   */
  public constructor(type: string, img: string, canvasW: number, canvasH: number, speed: number) {
    super('Virus', img, Game.randomNumber(0, canvasW), Game.randomNumber(0, canvasH), -1, speed);

    if (type === 'leftToRight') {
      this.xPos = 0;
    } else {
      this.yPos = 0;
    }

    this.setXPos(this.xPos);
    this.setYPos(this.yPos);

    this.type = type;

    // this.setSpeed(Game.randomNumber(3, 5));

    // console.log();
  }

  // /**
  //  * speed adjust method
  //  *
  //  * @returns speed
  //  */
  // public speedAdjust(): number {
  //   if (this.user.getLevel() >= 5) {
  //     return Game.randomNumber(4, 6);
  //   }
  //   return Game.randomNumber(3, 5);
  // }

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
