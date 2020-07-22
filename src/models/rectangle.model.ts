import { PointLocation } from "./point-location.model"

export class Rectangle {
    public leftTop: PointLocation;
    public rightTop: PointLocation;
    public leftBottom: PointLocation;
    public rightBottom: PointLocation;

    constructor(leftTop: PointLocation,
        rightTop: PointLocation,
        leftBottom: PointLocation,
        rightBottom: PointLocation) {

        this.leftTop = leftTop;
        this.rightTop = rightTop;
        this.leftBottom = leftBottom;
        this.rightBottom = rightBottom;
    }

    public get square(): number {
        return

    }

    public get width(): number {
        return this.abs(this.leftBottom.x - this.rightBottom.x);
    }

    public get height(): number {
        return this.abs(this.leftBottom.y - this.leftTop.y);
    }

    private abs(val: number): number {
        return Math.abs(val);
    }
}