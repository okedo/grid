import { PointLocation } from "../models/point-location.model";

export class PointsLocationHelper {
    public static fillRow(count: number, minDistance: number, height: number, list: Array<PointLocation>): Array<PointLocation> {
        list = list || [];
        const show = Math.floor(Math.random() * Math.floor(2)) % 2;
        if (!count) {
            return list;
        }
        else {
            show && list.push(new PointLocation(height, count * minDistance))
            return PointsLocationHelper.fillRow(count - 1, minDistance, height, list)
        }
    }

    public static fillColumn(rowsCount: number, cellsCount: number, minDistance: number, height: number, list?: Array<PointLocation>): Array<PointLocation> {
        list = list || [];
        if (!rowsCount) {
            return list;
        }
        else {
            PointsLocationHelper.fillRow(cellsCount, minDistance, height + minDistance, list);
            height += minDistance;
            return PointsLocationHelper.fillColumn(rowsCount - 1, cellsCount, minDistance, height, list);
        }
    }

    public static addNoise(point: PointLocation, minDistance: number) {
        const noisedDistance = Math.floor(Math.random() * Math.floor(10)) / 10 * minDistance;
        const x = point.x - minDistance + noisedDistance;
        const y = point.y - minDistance + noisedDistance;
        return new PointLocation(x, y);
    }
}