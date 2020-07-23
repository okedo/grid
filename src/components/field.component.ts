import { CanvasComponent } from "./canvas.component";
import { Rectangle } from "../models/rectangle.model";
import { PointLocation } from "../models/point-location.model";

export class FieldComponent {
    constructor(private canvas: CanvasComponent) {
        this.canvas = canvas;
    }

    public draw(): void {
        const rectangle = new Rectangle(
            new PointLocation(0, 0),
            new PointLocation(window.innerWidth - 170, 0),
            new PointLocation(0, window.innerHeight - 170),
            new PointLocation(window.innerWidth - 170, window.innerHeight - 170)
        );

        this.canvas.drawRect(rectangle);
    }
}