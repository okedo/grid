import { PointLocation } from "./point-location.model";

export abstract class Point {
    private _id: string;
    private _neighborhood: Array<string>;
    private _location: PointLocation;

    constructor(neighborhood: Array<string>, location: PointLocation) {
        this._neighborhood = neighborhood || [];
        this._location = location;
        this._id = location.id;
    }
    public get id(): string {
        return this._id;
    }
    public get location(): PointLocation {
        return this._location;
    }
    public get neighborhood(): Array<string> {
        return this._neighborhood;
    }
}