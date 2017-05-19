import { WorldObject } from './worldobject';
/**
 * A layer object is a background object that is not collidable but can have velocity
 *
 * @export
 * @abstract
 * @class LayerObject
 * @extends {WorldObject}
 */
export declare abstract class LayerObject extends WorldObject {
    private _followingLayer;
    constructor(x: number, y: number, scale: number, xVelocity: number, yVelocity: number, source: string);
    followingLayer: LayerObject;
}
