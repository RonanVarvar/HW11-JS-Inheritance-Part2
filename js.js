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

Clock.prototype.setClock = function () {
    this.getTime();
    this.elem.innerHTML = this.hours + ':' + this.min + ':' + this.sec;
};

Clock.prototype.start = function () {
    setInterval(this.setClock.bind(this), 1000);
};

function Shortclock(elem, color) {
    Clock.apply(this, arguments);
}

Shortclock.prototype = Object.create(Clock.prototype);
Shortclock.prototype.constructor = Shortclock;

Shortclock.prototype.setClock = function () {
    this.getTime();
    this.elem.innerHTML = this.hours + ':' + this.min;
};

var greenClock = new Shortclock('clock1', 'green');

greenClock.start();

function Fullclock(elem, color, size) {
    Clock.apply(this, arguments);

    this.elem.style.fontSize = size;
}

Fullclock.prototype = Object.create(Clock.prototype);
Fullclock.prototype.constructor = Fullclock;

var blueClock = new Fullclock('clock2', 'blue', '24px');

blueClock.start();