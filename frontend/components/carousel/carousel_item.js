import React from 'react';
import { connect } from 'react-redux';

const countries = ['Germany','America','Japan','China','England','Argentina','Iran','India']

const CarouselItem = props => (
        <li className='album'>
            <img className='img-block' src={props.song.photo_url}/>
            <div className='album-info'>
                <div className='song-title'>{props.song.title}</div>
                <div className='name'>By Edward</div>
                <div className='price'>Sold for ${Math.floor(Math.random() * (20-10))}</div>
                <div className='country'>in {countries[Math.floor(Math.random() * countries.length)]}</div>
            </div>
        </li>
)

export default CarouselItem