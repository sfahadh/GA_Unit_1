const blade = {
  title: 'Blade',
  director: 'Stephen Norrington',
  actors: ['Wesley Snipes', 'Stephen Dorff', 'Kris Kristofferson'],
  releaseYear: 1998,
  duration: 120,
};

blade.duration += 25;

console.log(`The name of the movie is ${blade.title} directed by ${blade.director} and was released in ${1998}. The film is ${blade.duration} minutes long.`);

const snakewaterMontana = {
  paleontologist: 'Dr. Alan Grant',
  depth: '10 meters',
  specimen: 'Velociraptor',
};

let guestOfHonor = snakewaterMontana.paleontologist; 
let cleverGirl = snakewaterMontana.specimen;
console.log(guestOfHonor, cleverGirl);

const nicaragua = {
  depth: '200 meters',
  annualBudget: 1500000,
  specimens: [
    'Tyrannosaurus Rex',
    'Stegosaurous',
    'Triceratops',
    'Velociraptor',
  ],
};

let nicaraguaSpecimens = [];
for(let i = 0; i < nicaragua["specimens"].length; i++) {
	nicaragua["specimens"].push(nicaraguaSpecimens);
}
console.log(nicaraguaSpecimens);