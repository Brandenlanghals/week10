
//Dogs object with 3 keys
const dogs = {
    raining: true,
    noise: "Woof!",
    //Console log noise if raining is true
    makeNoise: function() {
      if (this.raining === true) {
        console.log(this.noise);
      }
    }
  };
  
  //Cats object with 3 keys
const cats = {
    raining: false,
    noise: "Meow!",
    //console log noise if raining is true
    makeNoise: function() {
      if (this.raining === true) {
        console.log(this.noise);
      }
    }
  };
  
 //Call the makeNoise methods 
  dogs.makeNoise();
  cats.raining = true;
  cats.makeNoise();
  
//BONUS!!!!!!!!!
  var massHysteria = function(dogs, cats) {
    if (dogs.raining === true && cats.raining === true) {
      console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
  };
  
  massHysteria(dogs, cats);