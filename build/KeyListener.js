export default class KeyListener {
    static KEY_LEFT = 37;
    static KEY_RIGHT = 39;
    keyCodeStates = new Array();
    constructor() {
        window.addEventListener('keydown', (ev) => {
            this.keyCodeStates[ev.keyCode] = true;
        });
        window.addEventListener('keyup', (ev) => {
            this.keyCodeStates[ev.keyCode] = false;
        });
    }
    isKeyDown(keyCode) {
        return this.keyCodeStates[keyCode] === true;
    }
}
//# sourceMappingURL=KeyListener.js.map