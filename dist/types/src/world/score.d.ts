export declare class Score {
    private _score;
    private _maxScore;
    private prevTimestamp;
    private continue;
    constructor();
    private tick(timestamp?);
    readonly score: number;
    readonly maxScore: number;
}
