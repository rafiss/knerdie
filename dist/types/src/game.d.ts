import { Renderer } from './renderer';
import { World } from './world/index';
import { KnerdieOpts } from 'src/';
export declare class Game {
    private renderer;
    private world;
    private opts;
    private readonly startScene;
    private readonly gameScene;
    private readonly endScene;
    private readonly gameOverScene;
    private readonly physics;
    private state;
    constructor(renderer: Renderer, world: World, opts: KnerdieOpts);
    private startGame();
}
