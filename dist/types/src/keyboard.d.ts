/**
 * This is a singleton class. It tracks which keys are in a given state.
 * @class Keyboard
 */
export declare class Keyboard {
    private keys;
    constructor();
    /**
     * Returns whether or not a key is currently depressed :(.
     *
     * @param {number} keyCode The key code to check
     * @returns {boolean} True if the key is depressed, false otherwise
     *
     * @memberOf Keyboard
     */
    isKeyDown(keyCode: number): boolean;
}
/**
 * An instance of @Keyboard
 */
export declare const keyboard: Keyboard;
