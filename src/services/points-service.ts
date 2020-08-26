import { CanvasComponent } from "../components/canvas.component";
import { Rectangle } from "../models/rectangle.model";
import { PointsLocationHelper } from "./points-location.helper";
import { PointLocation } from "../models/point-location.model";
import { Point } from "../models/point.model";
import { EmptyPoint } from "../models/empty-point.model";

export class PointsService {
    private pointsLocations: Array<PointLocation> = [];
    private _points: Array<Point> = [];

    constructor(private canvas: CanvasComponent, private rectangle: Rectangle) {
        this.init();
    }

    public init(): void {
        const minDistance = 100;

        const rowsCount = Math.round(this.rectangle.height / minDistance);
        const columnCount = Math.round(this.rectangle.width / minDistance);

        this.pointsLocations = this.getPointsLocations(minDistance, rowsCount, columnCount);
        this.fillPoints(this.pointsLocations);
    }

    public get points(): Array<Point> {
        return this._points;
    }

    public get locations(): Array<PointLocation> {
        return this.pointsLocations;
    }

    private fillPoints(locations: Array<PointLocation>): void {
        this._points = locations.map((location: PointLocation, index: number) => {
            return new EmptyPoint([], location);
        })
    }

    private getPointsLocations(minDistance: number, rowsCount: number, columnCount: number): Array<PointLocation> {
        return PointsLocationHelper.fillColumn(
            columnCount,
            rowsCount,
            minDistance,
            this.rectangle.leftTop.y,
            this.rectangle.leftTop.x
        ).map(
            (point: PointLocation) => this.noicePoint(point, minDistance)
        );
    }

    private noicePoint(point: PointLocation, minDistance: number): PointLocation {
        return PointsLocationHelper.addNoise(point, minDistance);
    }
}