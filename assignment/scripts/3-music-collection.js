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
addToCollection('Choosing', 'Tim', '1990');

console.log(collection);

// Creating funciton that will show the collection
function showCollection(array) {
    console.log(`There are ${array.length} items in this array`)
    for (let item of array) {
        console.log(`${item.title}, by ${item.artist}, 
        published in ${item.yearPublished}`)
    }
}
showCollection(collection);

// Creating function that will find inputed artist from the collection and will push it to the results array
function findByArtist (artist) {
    let results = [];
    for (let item of collection) {
        if (item.artist === artist) {
            results.push(item);
            console.log('artist found');
        }
        else {
            console.log('artist not found');
        }
    }
    return console.log(results);
}

// Testing findByArtist funciton 
findByArtist('Tim');