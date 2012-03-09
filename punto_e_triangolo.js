function Point(x,y) {
	this.x = x;
	this.y = y;
}
Point.prototype.distance = function(p) {
	var x_distance = this.x - p.x;
	var y_distance = this.y - p.y;
	return Math.sqrt(Math.pow(x_distance,2)
		+Math.pow(y_distance,2));
}

function Triangle(p1, p2, p3) {
	var l1 = p1.distance(p2);
	var l2 = p1.distance(p3);
	var l3 = p2.distance(p3);
	this.perimeter = function() {
		return l1 + l2 + l3;
	}
	this.area = function() {
		var semiperimeter = this.perimeter()/2;
		return Math.sqrt(semiperimeter*(semiperimeter-l1)*(semiperimeter-l2)*(semiperimeter-l3));
	}
}
Triangle.prototype.getArea = function() {return this.area();}
Triangle.prototype.getPerimeter = function() {return this.perimeter();}