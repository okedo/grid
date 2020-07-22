import { PointLocation } from "./point-location.model";

export abstract class Point {
    private id: string;
    private neighborhood: Array<Point>;
    private location: PointLocation;

    constructor(neighborhood: Array<Point>, location: PointLocation) {
        this.neighborhood = neighborhood || [];
        this.location = location
    }
}