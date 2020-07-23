import { PointLocation } from "../models/point-location.model";
import { Rectangle } from "../models/rectangle.model";

export class CanvasComponent {
    private ctx: any;
    private canvas: any;

    constructor(private id: string) {
        this.canvas = document.getElementById(this.id);
        this.canvas.width = window.innerWidth-100;
        this.canvas.height = window.innerHeight-100;
        this.ctx = this.canvas.getContext('2d');
    }
    public drawRect(rect: Rectangle) {
        this.ctx.beginPath();
        this.ctx.rect(rect.leftTop.x, rect.leftTop.y, rect.width, rect.height);
        this.ctx;
        this.ctx.stroke();
    }

    public drawPoints(point: PointLocation): void {
        this.ctx.beginPath();
        this.ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI);
        this.ctx.stroke();
    }
}