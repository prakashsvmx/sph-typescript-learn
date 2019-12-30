console.log('Static Members');
//visible to class itself

class Grid{
    static origin={x:0, y:0}
    calcDist(point:{x:number, y:number}){
        let xDist=point.x -Grid.origin.x;
        let yDist=point.y - Grid.origin.y;

        return Math.sqrt(xDist * xDist + yDist* yDist)/this.scale;

    }

    constructor(public scale:number){

        this.scale = scale;
    }
}

let grid1 = new Grid(1.0);

console.log(grid1.calcDist({x:10, y:10}))