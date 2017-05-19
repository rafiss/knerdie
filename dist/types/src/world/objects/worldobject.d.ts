export declare type WorldObjectType = 'IMAGE' | 'TEXT';
/**
 * An object defines a world element, ex: a flying book, character, etc.
 * An object has a position, velocity, scale, etc.
 */
export declare abstract class WorldObject {
    private _x;
    private _y;
    private _scale;
    private _xVelocity;
    private _yVelocity;
    private _source;
    private _collidable;
    private _type;
    private _konvaOpts;
    protected static count: number;
    private readonly _id;
    private _width;
    private _height;
    constructor(_x: number, _y: number, _scale: number, _xVelocity: number, _yVelocity: number, _source: string, _collidable: boolean, _type?: WorldObjectType, _konvaOpts?: {
        [id: string]: string;
    });
    readonly source: string;
    readonly id: number;
    x: number;
    y: number;
    scale: number;
    readonly height: number;
    readonly scaledHeight: number;
    readonly width: number;
    readonly scaledWidth: number;
    yVelocity: number;
    xVelocity: number;
    readonly collidable: boolean;
    readonly type: WorldObjectType;
    readonly konvaOpts: {
        [id: string]: string;
    };
    protected loadImage(source: string): void;
}
