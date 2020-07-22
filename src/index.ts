import { CanvasComponent } from './components/canvas.component';
import { PointLocation } from './models/point-location.model';
import { Rectangle } from './models/rectangle.model';
import { FieldComponent } from './components/field.component';
import { PointsLocationHelper } from './services/points-location.helper';

const canvas = new CanvasComponent('canvas');
const areaDimensions = {
    x: window.innerWidth - 200,
    y: window.innerHeight - 200
}

const rect = new Rectangle(
    new PointLocation(25, 25),
    new PointLocation(areaDimensions.x, 25),
    new PointLocation(25, areaDimensions.y),
    new PointLocation(areaDimensions.x, areaDimensions.y)
);

const field = new FieldComponent(canvas);
field.draw();

paint(rect);

function paint(rect: Rectangle): void {

    const minDistance = 50;

    const rowsCount = Math.round(rect.height / minDistance);
    const columnCount = Math.round(rect.width / minDistance);

    PointsLocationHelper.fillColumn(columnCount, rowsCount, minDistance, 0).forEach((point) => {
        canvas.drawPoints(PointsLocationHelper.addNoise(point, minDistance));
    });
}