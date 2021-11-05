import React from 'react';
import "./Home.css";
import HomeCard from './../HomeCard/HomeCard';


export default function Home (props) {

    return(
        <>
        <HomeCard image="./../assets/beers.png" title="All beers" body="Lorem ipsum dolor sit amet" url="/beers"/>
        <HomeCard image="./../assets/random-beer.png" title="Random beer" body="Lorem ipsum dolor sit amet" url="/random-beer"/>
        <HomeCard image="./../assets/new-beer.png" title="New beer" body="Lorem ipsum dolor sit amet" url="/new-beer"/>
        </>
    )

}