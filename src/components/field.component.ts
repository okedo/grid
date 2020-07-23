import { CanvasComponent } from "./canvas.component";
import { Rectangle } from "../models/rectangle.model";
import { PointLocation } from "../models/point-location.model";

export class FieldComponent {
    constructor(private canvas: CanvasComponent) {
        this.canvas = canvas;
    }

    public draw(): void {
        const rectangle = new Rectangle(
            new PointLocation(10, 10),
            new PointLocation(window.innerWidth - 100, 10),
            new PointLocation(10, window.innerHeight - 100),
            new PointLocation(window.innerWidth - 100, window.innerHeight - 100)
        );

        this.canvas.drawRect(rectangle);
    }
}