console.log('***** Music Collection *****')

let collection = [];


//1:

console.log(`<_________Add to Collection__________>`);
function addToCollection(title, artist, yearPublished){
    let record = { album: title,  band: artist,  released: yearPublished}//record creates new variable inside, doesn't need addtional parameter. 
    collection.push(record);   
    return record;// returning that varaible, but not creating object
}   
//2:
console.log(`<_________Adding Albums Begins__________>`);
console.log(addToCollection( `The Blood Inside`, `Ulver`, `2007`));
console.log(addToCollection( `Perdition City`, `Ulver`, `2000`));
console.log(addToCollection( `Henki`, `Richard Dawson`, `2021`));
console.log(addToCollection( `Unnatural Life`, `Have A Nice Life`, `2014`));
console.log(addToCollection( `Get to Heaven`, `Everything Everything`, `2015`));
console.log(addToCollection( `Roads to the North`, `Panopticon`, `2014`));

console.log( collection );
console.log(`<_________Adding Albums Ends__________>`);
console.log(`<_________Show Collection__________>`);
//3:
function showCollection( array ){
    for( let i in array){ //array[i] searches all objects in the array .title (and others) grab the values attached to the properties. 
        console.log( `${array[i].album} by ${array[i].band} was published in ${array[i].released}.`)
    }
    return true;//to show it's posting
}
console.log(showCollection(collection));

//4.
console.log(`<_________findByArtist_________>`);
let artistList = [];
let test = `One`;
function findByArtist( band ) {
    for( let i = 0; i < test.length; i++){
        let list = test.match(band)
        return list; 
    }
}

console.log(findByArtist( `One` )); 

/*
function addToCollection(title, artist, released){
    let record = {};
    record.title = title;
    record.artist = artist;
    record.released = released; 
    return console.log( record );
}
*/