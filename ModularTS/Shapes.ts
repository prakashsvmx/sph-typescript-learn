
import ShapesInterface from './ShapesInterface';
export class Triangle implements ShapesInterface{
    points:number;
    getPoints():number{
        console.log(`A triangle poin is`, this.points)
        return this.points;
    }
    setPoints(points:number){
        this.points= points;
    }
}

export class Square implements ShapesInterface{
    points:number;
    getPoints():number{
        console.log(`A Square point is`, this.points)
        return this.points;
    }
    setPoints(points:number){
        this.points= points;
    }
}

