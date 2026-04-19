const book = [
    {
      title: "The Great Gatsby",
      genre: "Classic Fiction",
      publish: "1925",
      edition: "1st"
    },
    {
      title: "To Kill a Mockingbird",
      genre: "Historical Fiction",
      publish: "1960",
      edition: "1st"
    },
    {
      title: "1984",
      genre: "Dystopian",
      publish: "1949",
      edition: "1st"
    },
    {
      title: "Pride and Prejudice",
      genre: "Romance",
      publish: "1813",
      edition: "1st"
    },
    {
      title: "The Catcher in the Rye",
      genre: "Fiction",
      publish: "1951",
      edition: "1st"
    },
    {
      title: "The Hobbit",
      genre: "Fantasy",
      publish: "1937",
      edition: "1st"
    },
    {
      title: "Fahrenheit 451",
      genre: "Dystopian",
      publish: "1953",
      edition: "1st"
    },
    {
      title: "Jane Eyre",
      genre: "Gothic Fiction",
      publish: "1847",
      edition: "1st"
    },
    {
      title: "Brave New World",
      genre: "Science Fiction",
      publish: "1932",
      edition: "1st"
    },
    {
      title: "Moby Dick",
      genre: "Adventure",
      publish: "1851",
      edition: "1st"
    }
  ];

//   const user_book = book.filter((bk)=> bk.genre ==="Fiction")
 const user_book = book.filter((bk) =>{
     return Number.parseInt(bk.publish) > 1900 && bk.genre ==="Fiction"
    
})
  console.log(user_book)