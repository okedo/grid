import { CanvasConponent } from './components/canvas.component';
import { PointLocation } from './models/point-location.model';
import { Rectangle } from './models/rectangle.model';

const canvas = new CanvasConponent('canvas');

const rect = new Rectangle(
    new PointLocation(0, 0),
    new PointLocation(700, 0),
    new PointLocation(0, 700),
    new PointLocation(700, 700)
)
canvas.drawRect(rect);

paint(rect);

function paint(rect: Rectangle): void {

    const minDistance = 50;

    const rowsCount = Math.round(rect.height / minDistance);
    const columnCount = Math.round(rect.width / minDistance);

    fillColumn(rowsCount, columnCount, minDistance, 0).forEach((point) => {
        canvas.drawPoints(addNoise(point, minDistance));
    });
}

function fillRow(count: number, minDistance: number, height: number, list: Array<PointLocation>): Array<PointLocation> {
    list = list || [];
    const show = Math.floor(Math.random() * Math.floor(2)) % 2;
    if (!count) {
        return list;
    }
    else {
        show && list.push(new PointLocation(height, count * minDistance))
        return fillRow(count - 1, minDistance, height, list)
    }
}
function fillColumn(rowsCount: number, cellsCount: number, minDistance: number, height: number, list?: Array<PointLocation>): Array<PointLocation> {
    list = list || [];
    if (!rowsCount) {
        return list;
    }
    else {
        fillRow(cellsCount, minDistance, height + minDistance, list);
        height += minDistance;
        return fillColumn(rowsCount - 1, cellsCount, minDistance, height, list);
    }
}

function addNoise(point: PointLocation, minDistance: number) {
    const noisedDistance = Math.floor(Math.random() * Math.floor(10)) / 10 * minDistance;
    const x = point.x - minDistance + noisedDistance;
    const y = point.y - minDistance + noisedDistance;
    return new PointLocation(x, y);
}