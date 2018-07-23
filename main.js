$(document).ready(function() {
  var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];
  
  planets.reverse();
  
  for(i = 0; i < planets.length; i++) {
    var options = $('<option></option>').text(planets[i][0]);
    $('#planets').append(options);
  }
  
  function calculateWeight(weight, planetName) {
    for(i = 0; i < planets.length; i++) {
      if(planetName === planets[i][0]) {
        var gravity = planets[i][1];
      }
    }
    return (weight * gravity);
  }
  
  function handleClickEvent() {
    var weight = $('#user-weight').val();
    var planetName = $('#planets').val();
    var result = calculateWeight(weight, planetName);
    
    $('#output').text('If you were on ' + planetName + ', you would weigh ' + result + 'lbs!');
  }
    
    $('#calculate-button').click(function() {
      handleClickEvent();
    })
  
})