const mongoose = require('mongoose');
require('dotenv').config();
const { Schema } = mongoose;
const { model } = mongoose;

const mongo_uri  = process.env.MONGO_URI.toString();

const connectToDB = () => {
  mongoose.connect(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true });
}

connectToDB();

  // 1) => create a schema with types
 // create a model
// pass the values and create the model
const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: String
});

const Person = mongoose.model("Abbas", personSchema);
const abbas = new Person({ 
  name: "Abbas",
  age: 22,
  favoriteFoods: "Anything with Beef"
});
// console.log(abbas);

// 2) => Create and Save a Record of a Model
const createAndSavePerson = (done) => {
  let bob = new Person({ name: "Abbas", age: 22, favoriteFoods: "Beef Steak" });
  console.log(bob)
  bob.save((err, data) => {
    if(err) {
      console.log(err)
    }
    else {
      done(null, data)
      console.log(data)
    }
  })
};

// 3) => Create many records with the model.create()
let arrayOfPeople = [
  {name: "JanAgha",
  age: 67, 
  favoriteFoods: ["Ghwasha", "Ghwasha", "Ghwasha"]
},
  {name: "KhanAgha",
  age: 55, 
  favoriteFoods: ["Ghwasha", "Wreje", "palaw"]
},
  {name: "Dilagha",
  age: 40, 
  favoriteFoods: ["Tarkari", "Ghwasha", "Kabab"]
},
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if(err) {
      console.log(err)
    }
    else{
      done(null, data)
      console.log(data)
    }
  })
}

// 4 => Use model.find() to Search Your Database
const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, data) => {
    if(err) {
      console.error(err)
    }
    else{
      done(null, data)
    }
  })
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, data) => {
    if(err) {
      console.error(err)
    }
    else {
      done(null, data)
    }
  })
};

const findPersonById = (personId, done) => {
  Person.findById({ id: personId }, (err, data) => {
    if(err) {
      console.error(err)
    }
    else {
      done(null, data)
    }
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
    Person.findById({ id: personId }, (err, data) => {
    if(err) {
      console.log(err)
    }
    else {
      console.log(data)
      data.favoriteFoods.push(foodToAdd)
      data.age += 1;
      data.save((err, data) => {
        if(err) {
          console.log(err)
        }
        else {
          console.log(data)
          done(null, data);
        }
      })
    }
  })
}

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (err, data) => {
    if(err) {
      console.log(err)
    }
    else {
      console.log(data);
      done(null, data)
    }
  })
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove({id: personId}, {new: true}, (err, data) => {
    if(err) {
      console.log(err)
    }
    else {
      done(null, data)
    }
  })
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({ name: nameToRemove }, {new: true}, (err, data) => {
    if(err) {
      console.log(err)
    }
    else {
      done(null, data)
    }
  })
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  Person.findOne({ favoriteFoods: foodToSearch })
  .sort({ name: "asc" })
  .limit(2)
  .select("name", "favoriteFoods")
  .exec((err, data) => {
    if(err) {
      console.log(err)
    }
    else {
      done(null, data);
      console.log(data)
    }
  })
}

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
