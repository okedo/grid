import { CanvasComponent } from './components/canvas.component';
import { PointLocation } from './models/point-location.model';
import { Rectangle } from './models/rectangle.model';
import { FieldComponent } from './components/field.component';
import { PointsService } from './services/points-service';
import { Point } from './models/point.model';
import { EmptyPoint } from './models/empty-point.model';

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

    const arr = fillIds([...service.locations]);

    paint(canvas, arr);
    canvas.drawLines(createConnections(arr));
}

const getHashedId = (): string => {
    const length = 10;
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const fillIds = (arr: Array<PointLocation>): Array<PointLocation> => {
    return arr.map(el => {
        return new PointLocation(el.x, el.y, getHashedId());
    })
}

const getDistance = (first: PointLocation, second: PointLocation): number => {
    return Math.sqrt(Math.pow(first.x - second.x, 2) + Math.pow(first.y - second.y, 2));
}

const getDistances = (point: PointLocation, arr: Array<PointLocation>, result?: Array<{ id: string, distance: number }>): Array<{ id: string, distance: number }> => {
    result = result || [];
    if (!arr.length) {
        return result;
    }
    else {
        result.push({ id: arr[0].id, distance: getDistance(point, arr[0]) });
        return getDistances(point, arr.slice(1), result);
    }
}

const createConnections = (initialArr: Array<PointLocation>, arr?: Array<PointLocation>, result?: Array<Point>): Array<Point> => {
    result = result || [];
    arr = arr || initialArr;
    if (!arr.length) {
        return result;
    }
    else {
        const distances = getDistances(arr[0], [...initialArr]).sort((a, b) => a.distance - b.distance).filter(el => el.distance);
        const cutDistances = distances.slice(0, 3);
        const cutIds = cutDistances.map(el => el.id);
        result.push(new EmptyPoint(cutIds, arr[0]));

        return createConnections(initialArr, arr.slice(1), result);
    }

}

const paint = (canvas: CanvasComponent, arr?: Array<PointLocation>): void => {
    if (arr.length) {
        canvas.drawPoints(arr[0]);
        paint(canvas, arr.slice(1));
    }
}

init();
