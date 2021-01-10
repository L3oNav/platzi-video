import React from 'react';
import './assets/styles/app.scss';
import Search from './components/Search';
import Carousel from './components/Carousel';
import Categories from './components/Categories';
import CarouselItem from './components/CarouselItem';
import {connect} from 'react-redux';

const App = ({mylist, trends, originals}) => (
	<div>
			<Search/>
				{mylist.length > 0 &&
					<Categories title="My List">
						<Carousel>
							{mylist.map(item => (<CarouselItem key={item.id} {...item} mylist/>))}
						</Carousel>
					</Categories>
				}
			<Categories title="Trends">
				<Carousel>
					{trends.map(item=>(<CarouselItem key={item.id} {...item}/>))}
				</Carousel>
			</Categories>

			<Categories title="Platzi Originals">
				<Carousel>
					{originals.map(item =>(<CarouselItem key={item.id} {...item}/>))}
				</Carousel>
			</Categories>
	</div>
)
const mapStateToProps = state => {
	return {	
		mylist: state.mylist,
		trends: state.trends,
		originals: state.originals,	
	}
}
export default connect(mapStateToProps, null)(App)
