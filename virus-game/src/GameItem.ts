export default abstract class GameItem {
  protected name: string;

  protected img: HTMLImageElement;

  protected xPos: number;

  protected yPos: number;

  protected speed: number;

  /**
   * Creates a new GameItem on a random position
   *
   * @param name the name of the item
   */
  public constructor(name: string) {
    this.name = name;
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
   * Get the speed
   *
   * @returns returns the speed
   */
  public getSpeed(): number {
    return this.speed;
  }

  /**
   * Set the speed
   *
   * @param speed - set a new speed
   */
  protected setSpeed(speed: number): void {
    this.speed = speed;
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
