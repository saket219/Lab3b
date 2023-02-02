'use strict';

  
    var again = "y";
    
    do {
      var miles = prompt("Enter miles driven"+
      "Or enter 0 to end entries", 0);
      miles = parseFloat(miles);
      document.write('<h2> <i><center>Miles driven<i> <span id = "result"></span>'+miles+' </center></h2>');
      
      var gallons = prompt("Enter gallons of gas used"+
      "Or enter 0 to end entries", 0);
      gallons = parseFloat(gallons);
      document.write('<h2> <i><center>Gallons of gas used <i> <span id = "result"></span>'+gallons+' </center></h2>');

      if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) 
      { 
        var mpg = miles / gallons;
        mpg = parseInt(mpg);
        document.write('<h2> <i><center> Total Miles per gallon <i> <span id = "result"></span>'+mpg+' </center></h2>');
        alert("Miles per gallon = " + mpg);
      }
      else
      {
        alert("One or both entries are invalid");
      }
      again = prompt("Repeat entries?", "y");
    }
    while (again == "y");
    