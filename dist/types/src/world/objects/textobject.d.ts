import { WorldObject } from '../../world/objects/worldobject';
import { RelativeYPosition } from '../../position';
export declare class TextObject extends WorldObject {
    constructor(text: string, x: number, yPosition: RelativeYPosition, worldHeight: number, y?: number, scale?: number, opts?: {});
    private positionY(yPosition, worldHeight);
}
