const dog = {
    species: 'dog',
    name: 'Hachiko',
    gender: 'male',
    legs: 4,
    hands: 0,
    saying: 'wooooof!'
};

const cat = {
    species: 'cat',
    name: 'Mira',
    gender: 'female',
    legs: 4,
    hands: 0,
    saying: 'meow'
};

const man = {
    species: 'human',
    name: 'Sasha',
    gender: 'male',
    legs: 2,
    hands: 2,
    saying: 'Hi there!'
};

const woman = {
    species: 'human',
    name: 'Maria',
    gender: 'female',
    legs: 2,
    hands: 2,
    saying: 'Hola'
};

const catWoman = {
    species: 'cat-human',
    name: 'Catwoman',
    gender: 'female',
    legs: 2,
    hands: 2,
    saying: cat.saying
}

dog.friends = man.name + ', ' + woman.name;
cat.friends = woman.name + ', ' + catWoman.name;
woman.friends = man.name + ', ' + dog.name + ', ' + cat.name;
man.friends = dog.name;

const objData = obj => {
    let sol = '';
    for (prop in obj) {
        sol += obj[prop] + '; ';
    }
    return sol;
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


