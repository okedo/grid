import { CanvasConponent } from './components/canvas.component';
import { PointLocation } from './models/point-location.model';
import { Rectangle } from './models/rectangle.model';
import { FieldComponent } from './components/field.component';
import { PointsLocationHelper } from './services/points-location.helper';

const canvas = new CanvasConponent('canvas');
const field = new FieldComponent([], canvas);

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

    PointsLocationHelper.fillColumn(rowsCount, columnCount, minDistance, 0).forEach((point) => {
        canvas.drawPoints(PointsLocationHelper.addNoise(point, minDistance));
    });
}