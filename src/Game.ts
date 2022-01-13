import KeyListener from "./KeyListener.js";

export default class Game {
  private readonly canvas: HTMLCanvasElement;

  private keyListener: KeyListener;

  private lastTickTimeStamp: number;

  private gameDOM: Element;

  constructor(gameDOM: Element) {
    this.gameDOM = gameDOM;
    this.keyListener = new KeyListener();

    console.log("Typescript class is working");

    this.getDOMElements();
  }

  private WhatsAppGame(): void {
    console.log("Go to WhatsAppGame");
  }

  private VirusGame(): void {
    console.log("Go to VirusGame")
  }

  private FriendSwiper(): void {
    console.log("Go to FriendSwiper")
  }

  private EmailGame(): void {
    console.log("Go to EmailGame")
  }

  private Settings(): void {
    console.log("Go to Settings")
  }

  private Store(): void {
    console.log("Go to Store")
  }

  private Help(): void {
    console.log("Go to Help")
  }

  private getDOMElements() {
    this.gameDOM
      .querySelector("#WhatsAppImg")
      .addEventListener("click", this.WhatsAppGame);

    this.gameDOM
      .querySelector("#VirusGameButton")
      .addEventListener("click", this.VirusGame);

    this.gameDOM
      .querySelector("#FriendSwiperButton")
      .addEventListener("click", this.FriendSwiper);

    this.gameDOM
      .querySelector("#EmailGameButton")
      .addEventListener("click", this.EmailGame);

    this.gameDOM
      .querySelector("#SettingsButton")
      .addEventListener("click", this.Settings);

    this.gameDOM
      .querySelector("#StoreButton")
      .addEventListener("click", this.Store);

    this.gameDOM
      .querySelector("#HelpButton")
      .addEventListener("click", this.Help);
  }
}
console.log("Typescript is working");

const init = () => new Game(document.querySelector("#game"));

window.addEventListener("load", init);
