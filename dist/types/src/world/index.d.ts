import { LayerObject } from './objects/layerobject';
import { Score } from './score';
import { WorldObject } from './objects/worldobject';
export declare class World {
    private _width;
    private _height;
    private score;
    private _currentVelocity;
    private _lives;
    static initialVelocity: number;
    private objects;
    private layers;
    private spaceKeyCallback;
    constructor(_width: number, _height: number, score: Score, _currentVelocity?: number, _lives?: number);
    /**
     * Get the world width
     */
    readonly width: number;
    /**
     * Get the world height
     */
    readonly height: number;
    /**
     * Returns the current world velocity
     */
    /**
     * Sets the current world relative velocity
     */
    currentVelocity: number;
    /**
     * Return the number of objects in the world
     */
    readonly numObjects: number;
    readonly numLayers: number;
    readonly lives: number;
    /**
     * Decrements lives by 1
     *
     * @memberof World
     */
    decrementLives(): void;
    /**
     * Adds objects to the world
     */
    addObjects(...objects: WorldObject[]): void;
    /**
     * Remove the given object ids from the world
     */
    removeObjects(...objects: WorldObject[]): void;
    /**
     * Adds a parallax layer. This method will also add the layer to the objects array
     */
    addLayers(...objects: LayerObject[]): void;
    /**
     * Removes a layer. This method will also remove the layer from the objects array
     */
    removeLayers(...objects: LayerObject[]): void;
    /**
     * Returns all the obejcts in the world
     */
    getObjects(): WorldObject[];
    /**
     * Returns all the layers in the world
     */
    getLayers(): LayerObject[];
    /**
     * Returns the score object
     */
    getScore(): Score;
    printWorldState(): void;
}
