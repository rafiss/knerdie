import '../styles/index.css';
export interface KnerdieOpts {
    assetPrefix: string;
    logLevel: 'debug' | 'info' | 'warn' | 'error';
    onExit: () => void;
}
export declare const main: (container?: HTMLDivElement, opts?: KnerdieOpts) => void;
