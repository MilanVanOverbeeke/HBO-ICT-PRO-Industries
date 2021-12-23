import Player from './Player.js';
import Virus from './Virus.js';

export default class Game {
  // Necessary canvas attributes
  private readonly canvas: HTMLCanvasElement;

  private readonly ctx: CanvasRenderingContext2D;

  // Garbage items (the player needs to pick these up)
  private virus: Virus[]; // TODO switch to correct type

  // Player
  private player: Player; // TODO switch to correct type

  private frameCounter: number;

  private score: number;

  /**
   * Initialize the game
   *
   * @param canvas - The canvas element that the game
   * should be rendered upon
   */
  public constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.virus = [];

    // add some Virussen
    for (let index = 0; index < 10; index++) {
      if (index % 2 === 0) {
        console.log('leftToRight');
        this.virus.push(
          new Virus('leftToRight', this.canvas.width, this.canvas.height),
        );
      } else {
        console.log('topToBottom');
        this.virus.push(
          new Virus('topToBottom', this.canvas.width, this.canvas.height),
        );
      }
    }

    this.score = 0;

    // Create player
    this.player = new Player(this.canvas.width, this.canvas.height);

    this.frameCounter = 0;

    // Start the game cycle
    this.loop();
  }

  /**
   * Method for the Game Loop
   */
  public loop = (): void => {
    this.score += 1;
    this.frameCounter += 1;
    this.move();
    this.scoringItemOutOfCanvas();
    this.cleanUpVirus();

    // Show score
    // TODO: fix actual score system
    this.writeTextToCanvas('Score: 0', 36, 120, 50);

    this.draw();

    requestAnimationFrame(this.loop);
  };

  /**
   * Removes scoring objects from the game based on box collision detection.
   *
   */
  private cleanUpVirus() {
    // create a new array with garbage item that are still on the screen
    // (filter the clicked garbage item out of the array garbage items)
    this.virus = this.virus.filter(
      (element) => {
        const collides = this.player.collidesWith(element);
        if (collides) {
          console.log('ouch!');
        }
        return !collides;
      },
    );
  }

  /**
   * Method to determine of a scoring items leaves the window
   */
  public scoringItemOutOfCanvas(): void {
    this.virus.forEach((element) => {
      element.outOfCanvas(this.canvas.width, this.canvas.height);
    });
  }

  /**
   * Method to move the scoring items
   */
  public move(): void {
    this.virus.forEach((element) => {
      element.move();
    });
    this.player.move(this.canvas);
  }

  /**
   * Draws all the necessary elements to the canvas
   */
  public draw(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.player.draw(this.ctx);
    // when there are elements in the scoring items array
    if (this.virus.length !== 0) {
      // draw each scoring item
      this.virus.forEach((element) => {
        element.draw(this.ctx);
      });
    }
  }

  /**
   * Writes text to the canvas
   *
   * @param text - Text to write
   * @param fontSize - Font size in pixels
   * @param xCoordinate - Horizontal coordinate in pixels
   * @param yCoordinate - Vertical coordinate in pixels
   * @param alignment - Where to align the text
   * @param color - The color of the text
   */
  private writeTextToCanvas(
    text: string,
    fontSize: number = 20,
    xCoordinate: number,
    yCoordinate: number,
    alignment: CanvasTextAlign = 'center',
    color: string = 'white',
  ) {
    this.ctx.font = `${fontSize}px sans-serif`;
    this.ctx.fillStyle = color;
    this.ctx.textAlign = alignment;
    this.ctx.fillText(text, xCoordinate, yCoordinate);
  }

  /**
   * Method to load an image
   *
   * @param source the source
   * @returns HTMLImageElement - returns an image
   */
  public static loadNewImage(source: string): HTMLImageElement {
    const img = new Image();
    img.src = source;
    return img;
  }

  /**
   * Returns a random number between min and max
   *
   * @param min - lower boundary
   * @param max - upper boundary
   * @returns a random number between min and max
   */
  public static randomNumber(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }
}
