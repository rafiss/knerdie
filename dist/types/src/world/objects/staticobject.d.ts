import { WorldObject } from '../../world/objects/worldobject';
import { RelativeYPosition } from '../../position';
export declare class StaticObject extends WorldObject {
    constructor(source: string, x: number, yPosition: RelativeYPosition, worldHeight: number, y?: number, scale?: number);
    private positionY(yPosition, worldHeight);
}
