import { PointLocation } from "../models/point-location.model";
import { Rectangle } from "../models/rectangle.model";

export class CanvasConponent {
    private canvasId: string;
    private ctx: any;
    private canvas: any;

    constructor(id: string) {
        this.canvas = document.getElementById(id);
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
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