console.log('***** Music Collection *****');
// Safe Zone -- Write code below this line

const myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  newAlbum = {
    collection: collection,
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  // Add the new album to the collection
  collection.push(newAlbum);

  // Return the newly created object
  return newAlbum;
}

// Use addToCollection function to add albums to myCollection
console.log(addToCollection(myCollection, 'Make Yourself', 'Incubus', 1999));
console.log(addToCollection(myCollection, 'Metallica', 'Metallica', 1991));
console.log(addToCollection(myCollection, 'Morning View', 'Incubus', 2001));
console.log(addToCollection(myCollection, 'Look Sharp', 'Roxette', 1988));
console.log(addToCollection(myCollection, 'Spark', 'Drake White', 2016));
console.log(addToCollection(myCollection, 'Baby Beluga', 'Raffi', 1980));

// Function to display the collection
function showCollection(collection) {
  collection.forEach((album) => {
    console.log(
      `${album.title} by ${album.artist}, published in ${album.yearPublished}`
    );
  });
}

// Test showCollection function
console.log('***** Collection *****');
showCollection(myCollection);

// Function to find albums by artist
function findByArtist(collection, artist) {
  const matchingAlbums = [];
  collection.forEach((album) => {
    if (album.artist === artist) {
      matchingAlbums.push(album);
    }
  });
  return matchingAlbums;
}

// Test findByArtist function
const incubusAlbums = findByArtist(myCollection, 'Incubus');
const drakeAlbums = findByArtist(myCollection, 'Drake White');

console.log('***** Incubus Albums *****');
showCollection(incubusAlbums);

console.log('***** Drake White Albums *****');
showCollection(drakeAlbums);

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection:
      typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection:
      typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection:
      typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist:
      typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  };
} catch (e) {
  // Do nothing
}
