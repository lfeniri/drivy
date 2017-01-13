'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

//Exercice 1
function updatePrice1(){
rentals.forEach(function(rental) {

  var time = new Date(rental.returnDate) - new Date(rental.pickupDate);
  time = time / (1000*60*60*24) ;
  for(var c in cars){
    //console.log(c);
    if(cars[c].id == rental.carId ){
        //console.log(time*cars[c].pricePerDay + rental.distance*cars[c].pricePerKm);
        rental.price = time*cars[c].pricePerDay + rental.distance*cars[c].pricePerKm;
        break;
    }
  }

});
}
//exercice 2
function updatePrice2(){
rentals.forEach(function(rental) {

  var time = new Date(rental.returnDate) - new Date(rental.pickupDate);
  time = time / (1000*60*60*24) ;
  var percentage = 0;
  if(time > 1)
    percentage = 10;
  if(time > 4)
    percentage = 30;
  if(time > 10)
    percentage = 50;
  time++;
  for(var c in cars){
    //console.log(c);
    if(cars[c].id == rental.carId ){
        //console.log(time*cars[c].pricePerDay + rental.distance*cars[c].pricePerKm);
        rental.price = time* (cars[c].pricePerDay - (cars[c].pricePerDay * percentage/100)) + rental.distance*cars[c].pricePerKm ;
        break;
    }
  }
});
}

//exercice 3
function updatePrice3(){
rentals.forEach(function(rental) {

  var time = new Date(rental.returnDate) - new Date(rental.pickupDate);
  time = time / (1000*60*60*24) ;
  var percentage = 0;
  if(time > 1)
    percentage = 10;
  if(time > 4)
    percentage = 30;
  if(time > 10)
    percentage = 50;
  time++;
  for(var c in cars){
    //console.log(c);
    if(cars[c].id == rental.carId ){
        //console.log(time*cars[c].pricePerDay + rental.distance*cars[c].pricePerKm);
        rental.price = time* (cars[c].pricePerDay - (cars[c].pricePerDay * percentage/100)) + rental.distance*cars[c].pricePerKm ;
        break;
    }
  }
  var commission  =   rental.price * 30 / 100;
  rental.commission.insurance = commission / 2;
  rental.commission.assistance = time;
  rental.commission.drivy = commission/2 - time;
});
}

//exercice 4
function updatePrice4(){
rentals.forEach(function(rental) {

  var time = new Date(rental.returnDate) - new Date(rental.pickupDate);
  time = time / (1000*60*60*24) ;
  var percentage = 0;
  if(time > 1)
    percentage = 10;
  if(time > 4)
    percentage = 30;
  if(time > 10)
    percentage = 50;
  time++;
  var addition = 0;
  for(var c in cars){
    //console.log(c);
    if(cars[c].id == rental.carId ){
        //console.log(time*cars[c].pricePerDay + rental.distance*cars[c].pricePerKm);
        if(rental.options.deductibleReduction == true)
          addition = time * (cars[c].pricePerDay * 4);
        rental.price = time* (cars[c].pricePerDay - (cars[c].pricePerDay * percentage/100)) + rental.distance*cars[c].pricePerKm ;
            break;
    }
  }

  var commission  =   rental.price  * 30 / 100;
  rental.price = rental.price + addition;
  rental.commission.insurance = commission / 2;
  rental.commission.assistance = time;
  rental.commission.drivy = commission/2 - time + addition;
});
}


//exercice 5
function updateActor(){
actors.forEach(function(actor) {
  for(var rental in rentals){
    if(actor.rentalId == rentals[rental].id){
      for(var p in actor.payment){
          if(actor.payment[p].who == "driver")
            actor.payment[p].amount = rental.price;
          if(actor.payment[p].who == "owner")
            actor.payment[p].amount = rental.price - rental.commission.assistance - rental.commission.drivy - rental.commission.insurance;
          if(actor.payment[p].who == "insurance")
            actor.payment[p].amount = rental.commission.insurance;
          if(actor.payment[p].who == "assistance")
            actor.payment[p].amount = rental.commission.assistance;
          if(actor.payment[p].who == "drivy")
            actor.payment[p].amount = rental.commission;
      }
      break;
    }
});
}

updatePrice3();


//console.log(cars);
console.log(rentals);
//console.log(actors);
//console.log(rentalModifications);
