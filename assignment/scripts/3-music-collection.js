console.log('***** Music Collection *****')

// NUM 1
let collection = [];

// NUM 2
//Creating function that will add an artist, a song title, and year published
function addToCollection(title, artist, yearPublished) {
    let album  = {
        title: title, 
        artist: artist, 
        yearPublished: yearPublished 
    }
    collection.push(album);
    return album;
} 

// Testing the funciton with different inputs
addToCollection('Love', 'Tim', '2013');
addToCollection('I see you', 'Jon', '2013');
addToCollection('The Way You Look At Me', 'Fadumo', '2019');
addToCollection('Tears', 'Argason', '2020');
addToCollection('Changing', 'Britney', '2015');
addToCollection('Choosing', 'Bob', '1990');

console.log(collection);
