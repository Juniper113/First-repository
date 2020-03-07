let calculateArea = function(r) {
  let circumference = 2 * Math.PI * r;
  let area = Math.PI * r * r;
  return circumference;
  return area;
}

let value = circumference(5)
let otherValue = area(5)

console.log(value)
console.log(otherValue)
