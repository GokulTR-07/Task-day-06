// 4) write a class to calculate the uber price

class price {
  constructor(totaldistance, priceperKM = "8"){
      this.TotalDistance = totaldistance;
      this.PricePerKM = priceperKM;
  }
  gettotalfair(){
      return this.TotalDistance*this.PricePerKM ;
  }
}
var a = new price(40);
console.log("Your Total fair: " + a.gettotalfair()+"rs.");