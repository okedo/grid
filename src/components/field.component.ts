import { Point } from "../models/point.model";

export class FieldComponent {
    private pointsList: Array<Point>;

    constructor(points: Array<Point>) {
        this.pointsList = points;
    }

    public drawPoints(): void {
        console.log(this.pointsList);

        this.pointsList.forEach(this.drawPoint)
    }

    public drawPoint(point: Point): void {
        console.log(point);
    }
}