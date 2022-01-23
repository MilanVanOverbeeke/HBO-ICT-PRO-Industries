import Game from './Game.js';

export default abstract class GameItem {
  protected name: string;

  protected img: HTMLImageElement;

  protected xPos: number;

  protected yPos: number;

  /**
   * constructs the class
   *
   * @param name name
   * @param imageSrc image source
   * @param maxX maximum x
   * @param maxY miximum y
   */
  public constructor(name: string, imageSrc: string, maxX: number, maxY: number) {
    this.name = name;
    this.img = Game.loadNewImage(imageSrc);
    this.xPos = Game.randomNumber(0, maxX);
    this.yPos = Game.randomNumber(0, maxY);
  }

  /**
   * getImageHeight
   *
   * @returns the current height of the image.
   */
  public getImageHeight(): number {
    return this.img.height;
  }

  /**
   * getImageWidth
   *
   * @returns the current width of the image.
   */
  public getImageWidth(): number {
    return this.img.width;
  }

  /**
   * getXPos
   *
   * @returns the current X-position
   */
  public getXPos(): number {
    return this.xPos;
  }

  /**
   * getYPos
   *
   * @returns the current Y-position
   */
  public getYPos(): number {
    return this.yPos;
  }

  /**
   * Set the xPosition
   *
   * @param xPos - set a new xPosition
   */
  protected setXPos(xPos: number): void {
    this.xPos = xPos;
  }

  /**
   * Set the yPosition
   *
   * @param yPos - set a new yPosition
   */
  protected setYPos(yPos: number): void {
    this.yPos = yPos;
  }

  /**
   * draw
   *
   * @param ctx the rendering context to draw on
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.img, this.xPos, this.yPos);
  }
}
