

let collection = [];

console.log(`<_________Tracks__________>`);

//took a liberal definition of array and since objects are technically arrays, I used them in place of array.
//Did not add them to the search
let tbiTracks = {
    trackOne: { song: `Dressed in Black`, duration: `7:08`},
    trackTwo: { song: `For the Love of God`, duration: `4:11`},
    trackThree: { song: `Christmas`, duration: `6:15`}
}

let pcTracks = {
    trackOne: { song: `Lost in Moments`, duration: `7:15`},
    trackTwo: { song: `Hallways of Always`, duration: `6:36`},
    trackThree: { song: `Tomorrow Never Knows`, duration: `8:00`}
}

let rttnTracks = {
    trackOne: { song: `The Echoes of a Disharmonic Evensong`, duration: `9:36`},
    trackTwo: { song: `Where Mountains Pierce the Sky`, duration: `12:42`},
    trackThree: { song: `One Last Fire`, duration: `5:55`}, 
}
console.log(rttnTracks);

console.log(`<_________Add to Collection__________>`);
function addToCollection( title, artist, released, trackListing ){//changed yearPublished to released for shorthand.
    let record = {
        title: title,
        artist: artist,
       released: released,
       trackListing: trackListing
    };
        collection.push(record);
    return console.log( record );
}

console.log(addToCollection( `The Blood Inside`, `Ulver`, `2007`, tbiTracks));
console.log(addToCollection( `Perdition City`, `Ulver`, `2000`, pcTracks));
console.log(addToCollection( `Roads to the North`, `Panopticon`, `2014`, rttnTracks));


console.log(`<_________search_________>`);
function defaultParam( artist, released, searchFound = [], foundObject = {} ){
    for (let i = 0; i < collection.length; i++){
        if( collection[i].artist === artist && collection[i].released === released ){
            foundObject = { artist: artist, released: released };
            searchFound.push(foundObject);
            return searchFound; // returns entered information.
        }//any else statements don't return anything past the first item in the array. 
        if (collection[i].artist != artist && collection[i].released !=released) {
            collection++;
            return searchFound;
            
        } //can't get the empty parameter to post
    }
}

console.log(defaultParam( `Ulver`, `2007` ));

/*
console.log(`<_________Add to Collection__________>`);
function addToCollection( title, artist, released ){//changed yearPublished to released for shorthand.
    let record = {};
        record.title = title;
        record.artist = artist;
        record.released = released; 
        collection.push(record);
    return console.log( record );
}

console.log(`<_________Adding Albums Begins__________>`);
console.log(addToCollection( `The Blood Inside`, `Ulver`, `2007`));
console.log(addToCollection( `Perdition City`, `Ulver`, `2000`));
console.log(addToCollection( `Henki`, `Richard Dawson`, `2021`));
console.log(addToCollection( `Unnatural Life`, `Have A Nice Life`, `2014`));
console.log(addToCollection( `Get to Heaven`, `Everything Everything`, `2015`));
console.log(addToCollection( `Roads to the North`, `Panopticon`, `2014`));

console.log(collection);
console.log(`<_________Adding Albums Ends__________>`);
console.log(`<_________Show Collection__________>`);
function showCollection( array ) {
    for (let i = 0; i < array.length; i++) {
        console.log( `${array[i].title} by ${array[i].artist} was published in ${array[i].released}.`)
    }
    return array.length;
}
console.log(showCollection(collection));


console.log(`<_________findByArtist_________>`);

function findByArtist( artist ) { //Pushes at least one of the objects into the array.
    let artistList = []; //having artist list in here makes the variable temporary. 
    for (let i = 0; i < collection.length; i++){
        if( collection[i].artist === artist){  
            artistList.push( collection[i] ); 
         } 
         //any use of else causes nothing to populate.    
    }
    return console.log( artistList );
}

console.log(findByArtist( `Ulver` ));
console.log(findByArtist( `Panopticon` ));
console.log(findByArtist( `ABBA` )); //does not post the value, but can't get empty array

console.log(`<_________search_________>`);













  Different way of creating objects, using variable = new object function.
collection = [];

console.log(`<_________Test_________>`);
function Record( title, artist, yearPublished ) {
    this.title = title;
    this.artist = artist;
    this.yearPublished = yearPublished
    return;
}

let recordOne = new Record( `The Blood Inside`, `Ulver`, `2007`);
let recordTwo = new Record( `Perdition City`, `Ulver`, `2000`);
let recordThree = new Record( `Henki`, `Richard Dawson`, `2021`);
let recordFour = new Record( `Unnatural Life`, `Have A Nice Life`, `2014`);
let recordFive = new Record( `Get to Heaven`, `Everything Everything`, `2015`);
let recordSix = new Record( `Roads to the North`, `Panopticon`, `2014`);

function addToCollection( album, array ) {
    array.push(album);
    return array;
}

console.log( addToCollection( recordOne, collection));
console.log( addToCollection( recordTwo, collection));
console.log( addToCollection( recordThree, collection));
console.log( addToCollection( recordFour, collection));
console.log( addToCollection( recordFive, collection));
console.log( addToCollection( recordSix, collection));
*/
