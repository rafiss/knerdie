import { World } from '../world';
import { WorldObject } from '../world/objects/worldobject';
import { WorldGenerator } from '../world/generator';
import { StaticObject } from '../world/objects/staticobject';
import { TextObject } from '../world/objects/textobject';
import Konva from 'konva';
/**
 * A scene class contains static objects and dynamic objects (created by a Generator).
 * @class Scene
 */
export declare abstract class Scene {
    protected world: World;
    private objects;
    private generator;
    constructor(world: World, objects: WorldObject[], generator?: WorldGenerator);
    start(): void;
    stop(): void;
}
export declare class StartScene extends Scene {
    private static readonly SPLASH_SCREEN_SOURCE;
    private static readonly SPLASH_SCREEN_ISAAK_SOURCE;
    private static readonly SPLASH_SCREEN_OLIVE_SOURCE;
    private static readonly SPLASH_SCREEN_MRFIGG_SOURCE;
    private static readonly SPLASH_SCREEN_KAM_SOURCE;
    constructor(world: World);
}
export declare class GameScene extends Scene {
    constructor(world: World, generator: WorldGenerator);
}
export declare class EndScene extends Scene {
    endTextTop: TextObject;
    endTextMiddle: TextObject;
    endTextBottom: TextObject;
    constructor(world: World, objects?: WorldObject[]);
    start(): void;
    updateText(endTextTop: Konva.Text, endTextMiddle: Konva.Text, endTextBottom: Konva.Text): void;
}
export declare class GameOverScene extends EndScene {
    backToWorkButton: StaticObject;
    start(): void;
    updateText(endTextTop: Konva.Text, endTextMiddle: Konva.Text, endTextBottom: Konva.Text): void;
}
