import GameItem from './GameItem.js';

export default abstract class ScoringItem extends GameItem {
  private points: number;

  /**
   *
   * @param name the name of the scoring object
   * @param imageSrc the src of the image
   * @param maxX the max value of the X position
   * @param maxY the max value of the X position
   * @param points the score of this scoring object
   */
  public constructor(name: string, imageSrc: string, maxX: number, maxY: number,
    points: number) {
    super(name, imageSrc, maxX, maxY);
    this.points = points;
  }

  /**
   * getScore
   *
   * @returns the score
   */
  public getPoints(): number {
    return this.points;
  }

  /**
   * Abstract method to move item
   */
  public abstract move(): void;

  /**
   * Abstract method to determine if item is out of canvas
   *
   * @param canvasWidth width of the canvas
   * @param canvasHeight height of the canvas
   */
  public abstract outOfCanvas(canvasWidth: number, canvasHeight: number): void;
}
