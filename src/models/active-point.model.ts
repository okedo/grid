import { Point } from './point.model';
import { PointLocation } from './point-location.model';
import { TeamsEnum } from '../enums/teams.enum';

export class ActivePoint extends Point {
    private health: number;
    private team: TeamsEnum;

    public focused: boolean;

    constructor(neighborhood: Array<string>, location: PointLocation, team: TeamsEnum, health?: number) {
        super(neighborhood, location);
        this.team = team;
        this.health = health || 100;
    }
    public updateHealth(health: number): void {
        this.health = health;
    }
}