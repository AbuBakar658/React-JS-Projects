import React, { useEffect, useState} from 'react';
import './Home.scss';
import axios from 'axios';
import {BiPlay} from 'react-icons/bi'
import {AiOutlinePlus} from 'react-icons/ai'

const apiKey='d394c35037433a2856a93be497d57065';
const url="https://api.themoviedb.org/3";
const upcoming="upcoming";
const imgUrl="https://image.tmdb.org/t/p/original/";
const nowPlaying="now_playing";
const popular= "popular";
const topRated="top_rated";

const Card=({img})=>(
  <img className='card' src={img} alt="cover" />
)
const Row=({title,arr=[]})=>(
<div className='row'>
  <h2>{title}</h2>
<div>
{
  arr.map((item,index)=>(<Card key={index} img={`${imgUrl}${item.poster_path}`}/>
  ))
}
</div>
</div>
)
const Home = () => {

  const [upcomingMovie, setUpComingMovie]=useState([]);
  const [nowPlayingMovie, setNowPlayingMovie]=useState([]);
  const [popularMovie, setpopularMovie]=useState([]);
  const [topRatedMovie, setTopRatedMovie]=useState([]);


  useEffect(()=> {
    const fetchUpcomming= async()=> {
      const {data: {results}}= await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      setUpComingMovie(results);
    };
    const fetchPopular= async()=> {
      const {data: {results}}= await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      setpopularMovie(results);
    };
    const fetchTopRated= async()=> {
      const {data: {results}}= await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      setTopRatedMovie(results);
    };
    const fetchNowPlaying= async()=> {
      const {data: {results}}= await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      setNowPlayingMovie(results);
    };
    fetchUpcomming();
    fetchNowPlaying();
    fetchPopular();
    fetchTopRated();
  }, [])

  return (
    <section className='home'>
    <div className="banner" style={{
      backgroundImage: popularMovie[0]? `url(${`${imgUrl}${popularMovie[11].poster_path}`})` : 'rgb(16,16,16)'}}> 
  
      
      {popularMovie[11] && <h1>{popularMovie[11].original_title}</h1>}
      
      {popularMovie[11] && <p>{popularMovie[11].overview}</p>}
      <div>
      <button><BiPlay/> Play</button>
      <button>My List <AiOutlinePlus/></button>
      </div>
    </div>
    <Row title={"Upcomming"} arr={upcomingMovie}/>
    <Row title={"Now Playing"} arr={nowPlayingMovie}/>
    <Row title={"Top Rated"} arr={topRatedMovie}/>
    <Row title={"Popular"} arr={popularMovie}/>
    </section>
  )
}

export default Home