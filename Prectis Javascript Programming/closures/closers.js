// cloosers in js with scoping
function grandParent() {

    var house = "Green-House";
    var car = 'Ambasider Legend'
    console.log("grand Parent");
    
    function parent() {

      var car = "Tata Harrer";
      var house = "Yellow-House";

      function child(){
        var scooter = "Nano";
        var house = 'Flat'
        console.log("I have:", house, car, scooter);
      }

      return child;
    }
    return parent;
  }
  console.log("closers run in the terminal");
  
  let x = grandParent();
  let y = x()
  y()