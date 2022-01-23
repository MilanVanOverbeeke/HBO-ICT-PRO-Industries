import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';
import Game from './Game.js';
import UserData from './UserData.js';

export default class Player extends GameItem {
  private xVel: number;

  private yVel: number;

  // KeyboardListener so the player can move
  private keyboard: KeyListener;

  /**
   *
   * @param maxX the max value of the X position
   * @param maxY the max value of the X position
   * @param imgSrc the image of the player
   */
  public constructor(maxX: number, maxY: number, imgSrc: string) {
    super(UserData.name, imgSrc, Game.randomNumber(0, maxX - 76), Game.randomNumber(0, maxY - 92));
    this.xVel = 3;
    this.yVel = 3;
    this.keyboard = new KeyListener();
  }

  /**
   * Moves the player depending on which arrow key is pressed. Player is bound
   * to the canvas and cannot move outside of it
   *
   * @param canvas the canvas to move over, for max x and y positions
   */
  public move(canvas: HTMLCanvasElement): void {
    // Set the limit values
    const minX = 0;
    const maxX = canvas.width - this.img.width;
    const minY = 0;
    const maxY = canvas.height - this.img.height;

    // Moving right
    if (this.keyboard.isKeyDown(KeyListener.KEY_RIGHT) && this.xPos < maxX) {
      this.xPos += this.xVel;
      // Limit to the max value
      if (this.xPos > maxX) {
        this.xPos = maxX;
      }
    }

    // Moving left
    if (this.keyboard.isKeyDown(KeyListener.KEY_LEFT) && this.xPos > minX) {
      this.xPos -= this.xVel;
      // Limit to the max value
      if (this.xPos < minX) {
        this.xPos = minX;
      }
    }

    // Moving up
    if (this.keyboard.isKeyDown(KeyListener.KEY_UP) && this.yPos > minY) {
      this.yPos -= this.yVel;
      // limit to the max value
      if (this.yPos < minY) {
        this.yPos = minY;
      }
    }

    // Moving down
    if (this.keyboard.isKeyDown(KeyListener.KEY_DOWN) && this.yPos < maxY) {
      this.yPos += this.yVel;
      if (this.yPos > maxY) {
        this.yPos = maxY;
      }
    }
  }

  /**
   *
   * @param other the other GameItem
   * @returns true if this object collides with the specified other object
   */
  public collidesWith(other: GameItem): boolean {
    return this.xPos < other.getXPos() + other.getImageWidth()
    && this.xPos + this.img.width > other.getXPos()
    && this.yPos < other.getYPos() + other.getImageHeight()
    && this.yPos + this.img.height > other.getYPos();
  }

  /**
   * Increases the speed
   *
   * @param size the amount of speed to add
   */
  increaseSpeed(size: number): void {
    this.xVel += size;
    this.yVel += size;
  }
}
