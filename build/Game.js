import KeyListener from "./KeyListener.js";
export default class Game {
    canvas;
    keyListener;
    lastTickTimeStamp;
    gameDOM;
    constructor(gameDOM) {
        this.gameDOM = gameDOM;
        this.keyListener = new KeyListener();
        console.log("Typescript class is working");
        this.getDOMElements();
    }
    WhatsAppGame() {
        console.log("Go to WhatsAppGame");
    }
    VirusGame() {
        console.log("Go to VirusGame");
    }
    FriendSwiper() {
        console.log("Go to FriendSwiper");
    }
    EmailGame() {
        console.log("Go to EmailGame");
    }
    Settings() {
        console.log("Go to Settings");
    }
    Store() {
        console.log("Go to Store");
    }
    Help() {
        console.log("Go to Help");
    }
    getDOMElements() {
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
//# sourceMappingURL=Game.js.map