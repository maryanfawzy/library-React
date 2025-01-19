import React, { useEffect } from 'react';
import Landing from '../components/Landing';
import Highlights from '../components/Highlights';
import Featured from '../components/Featured';
import Discounted from '../components/Discounted';
import Explore from '../components/Explore';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0,0)
      },[])

    return (
        <>
            <Landing />
            <Highlights />
            <Featured />
            <Discounted />
            <Explore />
        </>
    );
}

export default Home;