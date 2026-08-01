// const coding = ["js", "rb", "py", "java", "cpp"]
// const values = coding.forEach((item) => {
//     return item
// })
// console.log(values);//undefined

const mynums = [1,2,3,4,5,6,7,8,9,10]
// const newnums = mynums.filter( (num)=> num>4)
const newnums = []
mynums.forEach( (item) => {
if(item>4) newnums.push(item)  
});
// console.log(newnums);//[ 5, 6, 7, 8, 9, 10 ]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'C', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userbooks = books.filter((bk)=> bk.genre === "History")
  const after2000andScience = books.filter((bk)=> {
    return (bk.publish>2000 && bk.genre === "Science")
})
//   console.log(userbooks);
  console.log(after2000andScience);
