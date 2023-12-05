
// ************************************************** MAP ************************************************************
// // create map 
// let mymap = new Map([
//     ["s",20]
// ]);


// // insert data in map using set method
// mymap.set("name" , "Nuralam");
// // remove element on map
// mymap.delete("s")
// // get data from map using get() method
// let mapData = mymap.get("name");
// // get size or lingth of map using size() method
// let mymapSize = mymap.size
// // The map.has() method can be used to check if a Map has a property with the given key.
// let checkKeyInmyMap = mymap.has("name")
// // remove all element on map using clear() method
// mymap.clear()
// console.log(mymap);



// *************************************************SET ******************************************************************


let newSet = new Set(['apple','mengo','orange']);
let arrayFromSet = [...newSet]
arrayFromSet.forEach((el,i)=> console.log(i,el))