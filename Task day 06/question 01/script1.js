// a)

class movie{
  constructor(title,studio,rating){
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
var a = new movie("KGF","Hombale","U/A");

// b)

class movie{
  constructor(title,studio,rating = "PG"){
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
var a = new movie("KGF","Hombale","");
console.log(a);


// c)

class movie{
  constructor(title,studio,rating){
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  static getpg(temp){
    return temp.filter(movie => movie.rating == "PG");
  }
}
var temp = [new movie("KGF","std1","PG"),
            new movie("AGR","std2","GP"),
            new movie("GN","std3","PG"),
            new movie("FN","std4","PG")];


var result = movie.getpg(temp);
console.log(result);

// d)

class movie{
  constructor(title,studio,rating){
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
var a = new movie("Casino Royale","Eon Productions","PG­13");
console.log(a);





















