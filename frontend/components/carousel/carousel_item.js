import React from 'react';
import { connect } from 'react-redux';

const countries = ['Germany','America','Japan','China','England','Argentina','Iran','India']

const CarouselItem = props => (
        <li class='album'>
            <img class='img-block' src={props.song.photo_url}/>
            <div class='album-info'>
                <div class='song-title'>{props.song.title}</div>
                <div class='name'>By Edward</div>
                <div class='price'>Sold for ${Math.floor(Math.random() * (20-10))}</div>
                <div class='country'>in {countries[Math.floor(Math.random() * countries.length)]}</div>
            </div>
        </li>
)

export default CarouselItem