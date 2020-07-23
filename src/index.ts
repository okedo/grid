import { CanvasComponent } from './components/canvas.component';
import { PointLocation } from './models/point-location.model';
import { Rectangle } from './models/rectangle.model';
import { FieldComponent } from './components/field.component';
import { PointsService } from './services/points-service';

const init = () => {
    const canvas = new CanvasComponent('canvas');
    const areaDimensions = {
        x: window.innerWidth - 200,
        y: window.innerHeight - 200
    }

    const rect = new Rectangle(
        new PointLocation(50, 25),
        new PointLocation(areaDimensions.x, 25),
        new PointLocation(50, areaDimensions.y),
        new PointLocation(areaDimensions.x, areaDimensions.y)
    );

    const field = new FieldComponent(canvas);
    field.draw();

    const service = new PointsService(canvas, rect);

    const arr = [...service.locations];

    paint(canvas, arr,);
}

const paint = (canvas: CanvasComponent, arr?: Array<PointLocation>): void => {
    if (arr.length) {
        canvas.drawPoints(arr[0]);
        paint(canvas, arr.slice(1));
    }
}

init();