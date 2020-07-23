import { PointLocation } from "../models/point-location.model";

export class PointsLocationHelper {
    public static fillRow(count: number, minDistance: number, offsetY: number, offsetX: number, list: Array<PointLocation>): Array<PointLocation> {
        list = list || [];
        const show = Math.floor(Math.random() * Math.floor(2)) % 2;
        if (!count) {
            return list;
        }
        else {
            show && list.push(new PointLocation(count * minDistance + offsetX, offsetY,))
            return PointsLocationHelper.fillRow(count - 1, minDistance, offsetY, offsetX, list)
        }
    }

    public static fillColumn(cellsCount: number, rowsCount: number, minDistance: number, offsetY: number, offsetX: number, list?: Array<PointLocation>): Array<PointLocation> {
        list = list || [];
        if (!rowsCount) {
            return list;
        }
        else {
            offsetY += minDistance;
            PointsLocationHelper.fillRow(cellsCount, minDistance, offsetY, offsetX, list);
            return PointsLocationHelper.fillColumn(cellsCount, rowsCount - 1, minDistance, offsetY, offsetX, list);
        }
    }

    public static addNoise(point: PointLocation, minDistance: number) {
        const noisedDistance = Math.random() * minDistance;
        const x = point.x - minDistance + noisedDistance;
        const y = point.y - minDistance + noisedDistance;
        return new PointLocation(x, y);
    }
}