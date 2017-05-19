import Konva from 'konva';
import { World } from '../world';
import { WorldObject } from '../world/objects/worldobject';
export declare class Renderer {
    private container;
    private world;
    private prevTimestamp;
    private stage;
    private mainLayer;
    private shapes;
    private readonly initialWidth;
    private readonly initialHeight;
    constructor(container: HTMLElement, world: World);
    getShape(object: WorldObject): Konva.Shape;
    run(timestamp?: number): Renderer;
    private onResize();
    private worldToScreen(worldX, worldY);
    private onWorldObjectAdded(object);
    private onWorldObjectRemoved(object);
    private render(dt);
    private drawWorldObject(object, sx, sy);
}
