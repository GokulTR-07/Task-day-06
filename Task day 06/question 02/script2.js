// 2)

class Circle {
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
        return "your circle radius is : " + this.radius;
    }
    set Radius(temp1){
        this.radius = temp1;
    }
    getColor(){
        return "your circle Color is : " + this.color;
    }
    set Color(temp2){
        this.color = temp2;
    }
    toString(){
        return "Circle [radius = "+ this.radius + "," + "color = " + this.color + "]";
    }
    getArea(){
        return 3.14*this.radius*this.radius;
    }
    getCircumference(){
        return 2*3.14*this.radius;
    }
}

var a = new Circle(1.0,"Red");
console.log(a);
console.log(a.getRadius());

a.Radius = 5.0;
console.log("setRedius: ", a.radius);

console.log(a.getColor());

a.Color = "Green";
console.log("setColor: ",a.color);

console.log(a.toString());

console.log("your circle Area is : ",a.getArea());

console.log("your circle Circumference is : ",a.getCircumference());