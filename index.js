class Inhabitants {
    constructor(species, subSpecies, name, gender, legs, hands, saying) {
        this.species = species,
        this.subSpecies = subSpecies,
        this.name = name,
        this.gender = gender,
        this.legs = legs,
        this.hands = hands,
        this.saying = saying
    }

    say() {
        return this.saying
    }
}

class Animals extends Inhabitants {
    constructor(subSpecies, name, gender, saying, furColor) {
        super('animal', subSpecies, name, gender, 4, 0, saying)
        this.furColor = furColor
    }
}

class Humans extends Inhabitants {
    constructor(subSpecies, name, gender, saying) {
        super('human', subSpecies, name, gender, 2, 2, saying)
    }

    say() {
        return `${this.saying} My name is ${this.name}.`
    }
}

const dog = new Animals('dog', 'Hachikō', 'male', 'woof!', 'red-white'),
      cat = new Animals('cat', 'Mira', 'female', 'meow...', 'black'),
      man = new Humans('homo sapiens', 'Sasha', 'male', 'Hi there!'),
      woman = new Humans('homo sapiens', 'Maria', 'female', 'Hello!'),
      catWoman = new Humans('cat-human', 'Anonymous', 'female', cat.saying);

dog.friends = [man.name, woman.name];
cat.friends = [woman.name, catWoman.name];
man.friends = [dog.name, woman.name];
woman.friends = [dog.name, cat.name];

const objData = obj => {
     let allData = '';
     for (prop in obj) {
         allData += `<strong>${prop}</strong>: ${obj[prop]}; `;
     }
     return allData
 };

print(objData(dog));
print(objData(cat));
print(objData(man));
print(objData(woman));
print(objData(catWoman));

/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here


// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */


