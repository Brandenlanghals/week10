class Character {
  constructor(name, strength, hitPoints) {
    if (!name) {
      throw new Error("you are missing the name.");
    }
    if(!strength) {
      throw new Error("You are missing the strength.");
    }
    if (!hitPoints) {
      throw new Error("You are missing the hitpoints.");
    }  

    this.name = name;
    this.strength = strength;
    this.hitPoints = hitPoints;
  }
  

  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for NAME are as following:`);
    console.log(`Each attack will do STRENGTH damage.`);
    console.log(`NAME has HITPOINTS hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    if (this.hitPoints <= 0) {
      console.log(`${this.name} was crushed like a bitch`);
      return false;
    }
    return true;
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    if(this.hitPoints <= 0){
      console.log(`${this.name} hit ${opponent.name} for ${this.strength}`);
      opponent.hitPoints -= this.strength;
    }
    // console.log which character was attacked and how much damage was dealt
    // Then, change the opponent's hitPoints to reflect this
    this.attack(opponent) {
      console.log(`${this.name} hit ${opponent.name} for ${this.strength}`);
      opponent.hitPoints -= this.strength;
    }
  }
}

// Create two unique characters using the "character" class
const Ari = new Character("Ari", 50, 50);
const Layla = new Character("Layla", 50, 50);
// Create an interval that alternates attacks every 2000 milliseconds
