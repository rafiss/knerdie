import { WorldObject } from './worldobject';
export declare class Character extends WorldObject {
    private static images;
    /**
     * Indicates on which life the character is on starting from 0
     *
     * @private
     * @type {number}
     * @memberof Character
     */
    private life;
    constructor(x: number, y: number, xVelocity: number, yVelocity: number);
    lifeLost(): void;
}
