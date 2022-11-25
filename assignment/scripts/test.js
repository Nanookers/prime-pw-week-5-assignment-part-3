

let collection = [];

/*
function Record( title, artist, yearPublished ) {
    this.title = title;
    this.artist = artist;
    this.yearPublished = yearPublished
    return;
}

function addToCollection( album, title, artist, yearPublished ) {
    var album = new Record(title, artist, yearPublished);
    collection.push(album);
    return album;
}
console.log(addToCollection( 1, `The Blood Inside`, `Ulver`, `2007`));
console.log(collection.Record.artist);
*/


function addToCollection( title, artist, released ){//changed yearPublished to released for shorthand.
    let record = {};
        record.title = title;
        record.artist = artist;
        record.released = released; 
        collection.push(record);
        return console.log( record );
}

console.log(addToCollection( `The Blood Inside`, `Ulver`, `2007`));
console.log(addToCollection( `Perdition City`, `Ulver`, `2000`));
console.log(addToCollection( `Henki`, `Richard Dawson`, `2021`));
console.log(addToCollection( `Unnatural Life`, `Have A Nice Life`, `2014`));
console.log(addToCollection( `Get to Heaven`, `Everything Everything`, `2015`));
console.log(addToCollection( `Roads to the North`, `Panopticon`, `2014`));

console.log(collection);

function showCollection( array ) {
    for (let i = 0; i < array.length; i++) {
        console.log( `${array[i].title} by ${array[i].artist} was published in ${array[i].released}.`)
    }
    return array.length;
}
console.log(showCollection(collection));

let list = [];

function findByArtist( artist ) { //Pushes at least one of the objects into the 
    for (let i = 0; i < collection.length; i++){
        console.log( `in for loop:`, collection [i]);
        if( collection[i].artist === artist ){
            console.log( `match`);
            list.push( collection[i] );
        }
        return console.log(list);

    }
}
console.log( findByArtist( `Ulver` ));
console.log( list );
