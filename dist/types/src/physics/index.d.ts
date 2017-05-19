import { World } from '../world';
import { WorldGenerator } from '../world/generator';
export declare const PHYSICS_TOPIC = "physics";
export declare class Physics {
    private world;
    private worldGen;
    protected static fps: number;
    protected static gravity: number;
    protected static flapKey: number;
    protected static terminalVelocity: number;
    private startTime;
    private character;
    private timeoutCallback;
    private keyUpPressed;
    private keyDown;
    constructor(world: World, worldGen: WorldGenerator);
    start(): void;
    stop(): void;
    /**
     * Main physics loop responsible for updating positions and collision detection
     */
    physicsLoop(): void;
    private collisionDetection(world);
    private boxesIntersect(obj1, obj2);
    private updatePositions(world, start);
    private updatePosition(object, dt);
    private updateCharacterPosition(character, dt);
    private step();
}
