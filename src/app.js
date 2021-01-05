import React, {useState, useEffect} from 'react';
import './assets/styles/app.scss';
import Header from './components/Header';
import Search from './components/Search';
import Carousel from './components/Carousel';
import Categories from './components/Categories';
import CarouselItem from './components/CarouselItem';
import Footer from './components/Footer';
import useInitialState from './hooks/initialState';

const API = 'http://localhost:3000/initalState'

const App = () => {

	const videos = useInitialState(API)


	if (Object.keys(videos).length !== 0) {
		return (
			<div>
				<Header/>
				<Search/>
					{videos.mylist.length > 0 &&
						<Categories title="My List">
							<Carousel>
								{videos.mylist.map(item => (<CarouselItem key={item.id} {...item}/>))}
							</Carousel>
						</Categories>
					}
					<Categories title="Trends">
						<Carousel>
							{videos.trends.map(item=>(<CarouselItem key={item.id} {...item}/>))}
						</Carousel>
					</Categories>

				<Categories title="Platzi Originals">
					<Carousel>
						{videos.originals.map(item =>(<CarouselItem key={item.id} {...item}/>))}
					</Carousel>
				</Categories>
				<Footer/>
			</div>
		)	
	} else { 
		return 'Loading...'
	}
}



export default App;
