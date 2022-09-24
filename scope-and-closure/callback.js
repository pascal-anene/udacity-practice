/* Using map()
 *
 * Using the musicData array and map():
 *   - Return a string for each item in the array in the following format:
 *     <album-name> by <artist> sold <sales> copies
 *   - Store the returned data in a new albumSalesStrings variable
 *
 * Note:
 *   - Do not delete the musicData variable
 *   - Do not alter any of the musicData content
 *   - Do not format the sales number; leave it as a long string of digits
 *   - After practice comment out the code in preparation for next practice
 */

// const musicData = [
//     { artist: 'Adele', name: '25', sales: 1731000 },
//     { artist: 'Drake', name: 'Views', sales: 1608000 },
//     { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
//     { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
//     { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
//     { artist: 'Original Broadway Cast Recording', 
//       name: 'Hamilton: An American Musical', sales: 820000 },
//     { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
//     { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
//     { artist: 'Rihanna', name: 'Anti', sales: 603000 },
//     { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
// ];

// const albumSalesStrings = musicData.map(function(item){
//             return `${item.name} by ${item.artist}  sold ${item.sales} copies`
// });

// console.log(albumSalesStrings);


// for(let i = 0; i < albumSalesStrings.length; i++){
//     console.log(albumSalesStrings[i]);
// }




/* Using filter()
 *
 * Using the musicData array and filter():
 *   - Return only album objects where the album's name is
 *     10 characters long, 25 characters long, or anywhere in between
 *   - Store the returned data in a new `results` variable
 *
 * Note:
 *   - Do not delete the musicData variable
 *   - Do not alter any of the musicData content
 */

// const musicData = [
//     { artist: 'Adele', name: '25', sales: 1731000 },
//     { artist: 'Drake', name: 'Views', sales: 1608000 },
//     { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
//     { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
//     { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
//     { artist: 'Original Broadway Cast Recording', 
//       name: 'Hamilton: An American Musical', sales: 820000 },
//     { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
//     { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
//     { artist: 'Rihanna', name: 'Anti', sales: 603000 },
//     { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
// ];

// const results = musicData.filter(function(item){
//     if( (item.name.length >= 10) && (item.name.length <= 25)){
//         return item;
//     }
// });



// console.log(results);

/*

Declare a function named `expandArray()` that:

* Takes no arguments
* Contains a single local variable, `myArray`, which points to [1, 1, 1]
* Returns an anonymous function that directly modifies `myArray` by
  appending another `1` into it
* The returned function then returns the value of `myArray`

*/


// function expandArray() {

//     const myArray = [1,1,1];

//     return function(){
//         myArray.push(1);

//         return myArray;
//     }

// }

// const results = expandArray();

// console.log(results());



/*
 * Programming Quiz: Convert Function into an Arrow Function (2-1)
 */

// convert to an arrow function
const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(square => square * square);



console.log(...squares);

