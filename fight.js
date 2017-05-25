class Fighter {
  constructor(name = 'Fighter', power = 10, health = 100) {
    this.name = name;
    this.power = power;
    this.health = health;
  }
  
    setDamage(damage){
      this.health = this.health - damage;
    };
    
    hit(enemy, point){
      let damage = point * this.power;
      enemy.setDamage(damage);
    }
  
}

class ImprovedFighter extends Fighter{
  doubleHit(enemy, point){
    super.hit(enemy, point * 2);
  }
}


let fight = (fighter, improvedFighter, ...point) => {
  for (let i of point) {
    fighter.hit(improvedFighter, ...point);
    improvedFighter.doubleHit(fighter, ...point);
    
    if ( fighter.health <= 0 ){
         console.log(`${improvedFighter.name} Win!`);
         break;
      } else if ( improvedFighter.health <= 0 ){
         console.log(`${fighter.name} Win!`);
         break;
    }
  }
}

let newFighter = new Fighter('qwe', 15, 200);
let newImprovedFighter = new ImprovedFighter('zxc', 20, 300);

fight(newFighter, newImprovedFighter, 7, 15, 42);





