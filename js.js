function Clock(elem, color) {
    this.elem = document.getElementById(elem);
    this.elem.style.color = color;
}

Clock.prototype.getTime = function () {
    var now = new Date();
    this.hours = now.getHours();
    this.min = now.getMinutes();
    this.sec = now.getSeconds();

    if (this.hours < 10) this.hours = '0' + this.hours;

    if (this.min < 10) this.min = '0' + this.min;

    if (this.sec < 10) this.sec = '0' + this.sec;
};

Clock.prototype.formatClock = function () {
    this.getTime();

    this.elem.innerHTML = this.hours + ':' + this.min + ':' + this.sec;
};

Clock.prototype.start = function () {
    setInterval(this.formatClock.bind(this), 1000);
};

function ShortClock(elem, color) {
    Clock.apply(this, arguments);
}

ShortClock.prototype = Object.create(Clock.prototype);
ShortClock.prototype.constructor = ShortClock;

ShortClock.prototype.formatClock = function () {
    this.getTime();

    this.elem.innerHTML = this.hours + ':' + this.min;
};

var greenClock = new ShortClock('clock1', 'green');

greenClock.start();

function FullClock(elem, color, size) {
    Clock.apply(this, arguments);

    this.elem.style.fontSize = size;
}

FullClock.prototype = Object.create(Clock.prototype);
FullClock.prototype.constructor = FullClock;

var blueClock = new FullClock('clock2', 'blue', '24px');

blueClock.start();