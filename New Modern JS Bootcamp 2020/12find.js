const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
 },
 {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
 },
 {
     title: 'American Gods',
     authors: ['Neil Gaiman'],
     rating: 4.11
 },
 {
     title: 'A Gentleman in Moscow',
     authors: ['Amor Towles'],
     rating: 4.36
 }]

 // To find the (first) book where rating is greater or equal to 4.3
 const goodRating = books.find(book => book.rating >= 4.3);

 // To find the book whose author's name includes Neil
 const authorNeil = books.find(auth => {
     return auth.authors.indexOf('Neil Gaiman');
 })