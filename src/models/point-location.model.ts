export class PointLocation {
    private _x: number;
    private _y: number;
    private _id: string;

    constructor(x: number, y: number, id?: string) {
        this._x = x;
        this._y = y;
        this._id = id || "";
    }

    public get x(): number {
        return this._x;
    }
    public get y(): number {
        return this._y;
    }
    public get id(): string {
        return this._id;
    }
    public set id(id: string) {
        this._id = id;
    }
}