console.log('***** Music Collection *****')

let collection = [];

console.log(`<_________Tracks__________>`);
//Partially complete
//took a liberal definition of array and since objects seem to technically be arrays, I used them in place of array.
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
//1:
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

//2:
console.log(`<_________Adding Albums Begins__________>`);
console.log(addToCollection( `The Blood Inside`, `Ulver`, `2007`, tbiTracks));
console.log(addToCollection( `Perdition City`, `Ulver`, `2000`, pcTracks));
console.log(addToCollection( `Henki`, `Richard Dawson`, `2021`));
console.log(addToCollection( `Unnatural Life`, `Have A Nice Life`, `2014`));
console.log(addToCollection( `Get to Heaven`, `Everything Everything`, `2015`));
console.log(addToCollection( `Roads to the North`, `Panopticon`, `2014`, rttnTracks));

console.log( collection );
console.log(`<_________Adding Albums Ends__________>`);


console.log(`<_________Show Collection__________>`);
//3:
function showCollection( array ) {
    for (let i = 0; i < array.length; i++) {
        console.log( `${array[i].title} by ${array[i].artist} was published in ${array[i].released}.`)
    }
    return array.length;
}
console.log(showCollection(collection));


console.log(`<_________findByArtist_________>`);
//4.
function findByArtist( artist ) { 
    let artistList = []; 
    for (let i = 0; i < collection.length; i++){
        if( collection[i].artist === artist){  
            artistList.push( collection[i] ); 
         } 
         //any use of else causes nothing to populate.    
    }
    return console.log( artistList );
}

console.log(findByArtist( `Ulver` )); //In collection
console.log(findByArtist( `Panopticon` )); //In collection
console.log(findByArtist( `ABBA` )); //Not in Collection

//Search is partially completed.
//Search is only Functional to the point where I can successfully return found objects.
//Search can return empty arrays, but Can't return the collection. 
//Not updated for tracks.
console.log(`<_________search_________>`);
function defaultParam( artist, released, searchFound = [], foundObject = {} ){
    for (let i = 0; i < collection.length; i++){
        if( collection[i].artist === artist && collection[i].released === released ){
            foundObject = { artist: artist, released: released };
            searchFound.push(foundObject);
            return searchFound; 
        }//any else statements don't return anything past the first item in the array. 
        if (collection[i].artist != artist && collection[i].released !=released) {
            collection++;
            return searchFound;
            
        } //can't get the empty parameter to post
    }
}

console.log(defaultParam( `Ulver`, `2007` )); //In collection
console.log(defaultParam( `Ulver`, `2000` )); //In collection
console.log(defaultParam( `Ulver`, `2001` )); //Not in collection
