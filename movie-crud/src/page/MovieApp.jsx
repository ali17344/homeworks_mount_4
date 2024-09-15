import React, { useEffect, useState } from 'react';
import axios from "axios"
const MovieApp = () => {

        // const [movie,setMovie] = useState([])
        // const [newMovie, setNewMovie] = useState({title: '' , year: ''})
        // const baseURL = "http://localhost:5000/movie"
        // useEffect(() => {
        //     fetchApi()
        // },[])
        // const fetchApi = () => {
        //     axios.get(baseURL)
        //     .then((res) => {
        //         console.log(res);
        //         setMovie(res.data)
        //     })
        //     .catch((error) => {
        //         console.log(error);
                
        //     })
        // }
        
        // const addMovie = (movie) => {
        //  axios.post(baseURL, movie)
        //  .then(() => {
        //     fetchApi();
        //     setNewMovie({title: '', year: ''})
        //  })
        //  .catch((error) => {
        //     console.log(error);
            
        //  })
        // }
        // const Search = () => {
        //  addMovie(newMovie)
        // }
    
        const baseURL = 'http://localhost:5000/movie';
    const [movie, setMovie] = useState([]);
    const [newMovie, setNewMovie] = useState({title: '', year: ''})
    const [editMovie,setEditMovie] = useState()

    useEffect(() => {
        fetchAPI();
    }, []);
    const fetchAPI = () => {
        axios.get(baseURL)
        .then((res) => {
            setMovie(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    const deleteMovie = (id) => {
        axios.delete(`http://localhost:5000/movie/${id}`)
        .then(() => {
            fetchAPI()
        })
        .catch((err) => {
            console.log(err);
            
        })
    }
    const addMovie = (movie) => {
        axios.post(baseURL, movie)
        .then(() => {
            fetchAPI();
            setNewMovie({title: '', year: ''})
        }).catch((err) => {console.log(err);})
    }
    const uppdete = (id, uppdeteMovie) => {
        axios.patch(`http://localhost:5000/movie/${id}`)
        .then(() => {
            fetchAPI();
            setEditMovie(null)
        })
        .catch((err) => {
            console.log(err);
            
        })
    }
    const Search = () => {
        addMovie(newMovie)
    }

    return (
        <div >
            <h1>Movies</h1>
            <div className='box'>
            {
                movie && 
                movie.map((item) => (
                    <div key={item.id} className='card'>
                        <h1>{item.title}</h1>
                        <h3>{item.year}</h3>
                        <img src={item.img}/>
                        <button>Edit</button>
                        <button onClick={() => {deleteMovie(item.id)}}>Delete</button>
                    </div>
            ))}</div>
            <div className='search'>
            <input type="text" value={newMovie.title} onChange={(e) => {setNewMovie({...newMovie,title: e.target.value})}}/>
            <input type="text" value={newMovie.year} onChange={(e) => {setNewMovie({...newMovie,year: e.target.value})}} />
            <button onClick={Search}>Search movie</button>
            </div>
        </div>
    );
}

export default MovieApp;
