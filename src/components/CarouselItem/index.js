
import React from 'react';
import PropTypes from 'prop-types'
import PlayIcon from '../../assets/images/play-icon.png'
import PlusIcon from '../../assets/images/plus-icon.png'
import RemoveIcon from '../../assets/images/remove-icon.png'
import '../../assets/styles/components/CarouselItem.scss'
import { setFavorite, deleteFavorite } from '../../redux/actions'
import {connect} from 'react-redux';

const CarouselItem = (props) => {
  console.log(props)
  const {id, cover, title, year, contentRating, duration, mylist} = props;
  const handleSetFavorite = () => {
    console.log("Si se ejecuta handleSetFavorite")
    props.setFavorite({id, cover, title, year, contentRating, duration})
  }

  const handleDeleteFavorite = (itemid) => {
    props.deleteFavorite(itemid)
  }

  return(
	  <div className="carousel-item">
      <img className="carousel-item__img" src={cover}/>
      <div className="carousel-item__details">
        <div>
          <img className="carousel-item__details--img" src={PlayIcon} alt="Play Icon"/> 
          <img className="carousel-item__details--img" src={PlusIcon} alt="Plus Icon" onClick={()=>handleSetFavorite()}/> 
          {mylist && (<img className="carousel-item__details--img" src={RemoveIcon} alt="Remove Icon" onClick={()=>handleDeleteFavorite(id)}/>)}
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  )
}

CarouselItem.propTypes = {
  id: PropTypes.number,
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  mylist: PropTypes.bool
}

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite
}

export default connect(null, mapDispatchToProps)(CarouselItem);
