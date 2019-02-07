//Use the control flow instructions (if, switch, cycles) to "select" which area of what shape to calculate.//

function areaTriangle (base,height) {
  var result = (base*height)/2; //Won't divide by 2
  return result; }

function areaTrapezoid (base1, base2, height) {
  var result = ((base1+base2)/2)*height 
  return result; }

function areaCircle (radius) {
  var result = 3.14*(radius * radius)  //Won't multiply by 3.14
  return result; }

function areaRectangle (base,height) {
  var result = (base*height)
  return result; } //Works okay
  

//Prompt//

var shape = prompt('What shape do you want to calculate? Triangle, Trapezoid, Circle or Rectangle?');

//Switch Function//


switch (shape) {
  case 'Triangle':
    var base = prompt ('Please insert the base value:')
    var height = prompt ('Please insert the height value:')
    alert (areaTriangle (base,height));
    break;
  case 'Trapezoid':
    var base1 = prompt ('Please insert the first base value:')
    var base2 = prompt ('Please insert the second base value:')
    var height = prompt ('Please insert the height value:')
    alert (areaTrapezoid (base1, base2 ,height));
  case 'Circle':
    var base = prompt ('Please insert the radius value:')
    alert (areaCircle (radius));
  case 'Rectangle':
    var base = prompt ('Please insert the base value:')
    var height = prompt ('Please insert the height value:')
    alert (areaRectangle (base,height));

}

//ask user what shape

//decide what function to execute
