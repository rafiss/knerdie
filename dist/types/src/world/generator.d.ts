import { Character } from './objects/character';
import { World } from './';
export declare class WorldGenerator {
    private world;
    private static globalMaxNumberOfObjects;
    private static globalMaxProbabilityToAddObject;
    private _character;
    private maxNumberOfObjects;
    private probabilityToAddObject;
    constructor(world: World);
    /**
     * Responsible for adding and removing elements from the world
     */
    worldGenLoop(): void;
    start(): void;
    stop(): void;
    printWorldGeneratorState(): void;
    /**
     * Figures out if new objects need to be added to the world
     */
    private addObjects();
    /**
     * Figures out what elements are out of the world and removes them
     */
    private removeObjects();
    /**
     * Generates a random object to add to the world
     *
     * @private
     * @param {number} worldWidth  The width of the world
     * @param {number} worldHeight The height of the world
     * @returns A new randomly generated object
     *
     * @memberOf WorldGenerator
     */
    private pickObject(worldWidth, worldHeight);
    private updateLayers();
    private updateWorldProperties();
    private setupLives();
    readonly character: Character;
}
