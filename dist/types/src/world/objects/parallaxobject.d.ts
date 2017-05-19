import { LayerObject } from './layerobject';
import { RelativeYPosition } from '../../position';
/**
 * A parallax object is a layer object that is not collidable and has velocity that moves at a
 * different speed than the world and gives depth perception
 *
 * @export
 * @class ParallaxObject
 * @extends {LayerObject}
 */
export declare class ParallaxObject extends LayerObject {
    constructor(x: number, yPosition: RelativeYPosition, worldHeight: number, xVelocity: number, image: string);
}
