/**
 * This class handles the keyboard events. It knows the last known state of its
 * keys
 *
 * Some parts of this class are pretty complex, but the class itself is fairly
 * easy to use. You just instantiate one object in your game and us the method
 * `isKeyDown()` to check if a specific key is currently pressed down by the
 * user.
 *
 * NOTE: It is known that the MouseEvent.keyCode property is deprecated, which
 * means that there will be a moment that this class will not work anymore.
 *
 * @author BugSlayer
 */
 export default class KeyListener {
    // Some convenient key codes already defined here. If you need a specific
    // keycode, see:https://keycode.info/
  
    public static readonly KEY_LEFT = 37;
  
    public static readonly KEY_RIGHT = 39;
  
   
  
    /**
     * Array that holds a boolean for each keycode. The keycode is the index of
     * the array and the boolean is the state of that key (`true` means that
     * the key is down).
     */
    private keyCodeStates: boolean[] = new Array<boolean>();
  
    /**
     * Constructs a new KeyListener.
     */
    constructor() {
      // Register the arrow methods as listeners to keyevents
      // There is a third event ('keypress'), but we do not need to use it
      window.addEventListener('keydown', (ev: KeyboardEvent) => {
        this.keyCodeStates[ev.keyCode] = true;
      });
      window.addEventListener('keyup', (ev: KeyboardEvent) => {
        this.keyCodeStates[ev.keyCode] = false;
      });
    }
  
    /**
     * Returns `true` if and only if the last known state of the keyboard
     * reflects that the specified key is currently pressed.
     *
     * @param keyCode the keyCode to check
     * @returns `true` when the specified key is currently down
     */
    public isKeyDown(keyCode: number): boolean {
      return this.keyCodeStates[keyCode] === true;
    }
  }