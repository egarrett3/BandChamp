import React from 'react';
import { Link } from "react-router-dom";

const countries = ['Germany','America','Japan','China','England','Argentina','Iran','India']

const CarouselItem = props  => {
    debugger
    const module = <Link className='album' to={{
        pathname: `/songPage/${props.album.id}`
    }}>
        <img className='img-block' src={props.album.photo_url}/>
        <div className='album-info'>
            <div className='song-title'>{props.album.title}</div>
            <div className='name'>By Edward</div>
            <div className='price'>Sold for ${Math.floor(Math.random() * (20-10))}</div>
            <div className='country'>in {countries[Math.floor(Math.random() * countries.length)]}</div>
        </div>
    </Link>
    return module
}

export default CarouselItem