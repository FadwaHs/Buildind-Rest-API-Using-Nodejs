const express = require("express");

const app = express();
const port = 3000;

//parse Json using express
app.use(express.json());
app.use(express.urlencoded({extended: false}));

let movies = [{

    id:"1",
    title:"inception",
    director:"christopher nolan",
    release_data :'2018-07-17',
},
{
    id:"2",
    title:"the crime",
    director:"martin nolan",
    release_data :'2019-06-17',
},
{

    id:"3",
    title:"inception1",
    director:"christopher nolan",
    release_data :'2018-07-19',
},
{

    id:"4",
    title:"inception2",
    director:"christopher nolan",
    release_data :'2018-07-16',
},
];


//Get Api : All json data 

app.get('/movie',(req,res)=>{

    res.json(movies)
})

//add new movie to the list json

app.post('/movie',(req,res)=>{

    const movie = req.body
    movies.push(movie);
    console.log(movie);
    res.send("Movie is edded to the liste");

});

//search for a movie by id in the json 
app.get('/movie/:id',(req,res)=>{

    const id = req.params.id
    for(let movie of movies)
    {
        if(movie.id === id){
            res.json(movie)
            return
        }
    }

    res.status(400).send('Movie Not found')
});


//delete movie from the list by id

app.delete('/movie/:id',(req,res)=>{

    const id = req.params.id;

    //console.log('hy');

    movies = movies.filter((movie)=> {
        if(movie.id !== id ) {
            
            return true;
        }
        return false;
    });
    res.send("Movie is Deleted");
    res.send(movies);
});

//set the server to listen at port
app.listen(port, () => {

    console.log('server started on port 3000');
})
