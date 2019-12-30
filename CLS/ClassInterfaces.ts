interface TimeInterface{

    current:Date;
    setTime(d:Date);
    getTime();
}

class Time implements TimeInterface{
    current: Date;
    setTime(d: Date) {
        this.current =d;
    }
    getTime() {
        console.log('Current is ', this.current);
        return this.current;
    }

    constructor(){

    }
}

let clock = new Time();
clock.setTime(new Date());

console.log(clock.getTime())