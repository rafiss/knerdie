/**
 * Represents an image source (url, animations, sprite information)
 * @interface IImageSource
 */
export interface IImageSource {
    source: string;
    animations: {
        [name: string]: number[];
    };
    sprite: ISprite;
}
/**
 * Represents a sprite (part of an image)
 */
export interface ISprite {
    width: number;
    height: number;
}
/**
 * Singleton class used to load images at startup and runtime if necessary.  Images are indexed
 * by their source url.  Images will only be loaded once - future references to that image
 * will return the cached pixel data.
 *
 * @class InternalImageLoader
 */
export declare class InternalImageLoader {
    private readonly images;
    private loading;
    constructor();
    /**
     * Loads all the given images and executes the callback when all the iages have finished loading
     *
     * @param {IImageSource[]} sources The list of images to load (only the source needs to be provided)
     * @param {() => void} callback The function to execute when all images have finished loading.
     *
     * @memberOf InternalImageLoader
     */
    load(sources: IImageSource[], assetPrefix: string, callback: () => void): void;
    /**
     * Returns the number of images which have been loaded by the loader.
     *
     * @readonly
     * @type {number} The total number of loaded images
     * @memberOf InternalImageLoader
     */
    readonly numImages: number;
    /**
     * Returns the image pixel data given a source string.  The image data might not exist if
     * it has not finished loading.
     *
     * @param {string} source The source string of the image
     * @returns {HTMLImageElement} The image data, if available
     *
     * @memberOf InternalImageLoader
     */
    getImage(source: string): HTMLImageElement;
    /**
     * Returns a map of animation names to pixel rectangles in the source image.
     *
     * @param {string} source The source image string
     * @returns {{ [name: string]: number[] }} The animation data associated with the image
     *
     * @memberOf InternalImageLoader
     */
    getAnimations(source: string): {
        [name: string]: number[];
    };
    /**
     * Returns the sprite information associated with the source image
     *
     * @param {string} source The source image string
     * @returns {ISprite} Sprite image data associated with that image
     *
     * @memberOf InternalImageLoader
     */
    getSprite(source: string): ISprite;
}
/**
 * An instance of @InternalImageLoader
 */
export declare const ImageLoader: InternalImageLoader;
