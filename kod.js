const myCircle = {
circumference: 0,
area: 0,
};

const calculateArea = function(circle, r) {
circle.circumference = 2 * Math.PI * r;
circle.area = Math.PI * r * r;
return circle;
};

console.log(calculateArea(myCircle, 5));

