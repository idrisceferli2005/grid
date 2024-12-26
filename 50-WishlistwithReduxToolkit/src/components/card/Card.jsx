import React, { useEffect } from 'react';
import "./card.css";
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, updateWishlist } from '../../redux/features/wishlistSlice';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const Card = ({card}) => {
const navigate =  useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.wishlist);

  const addWishlist = (card) => {
    if(user) {
      dispatch(updateWishlist(card));
      notify("Item added to wishlist", "success");
    } else {
      notify("Please login to add to wishlist", "error");
      setTimeout(() => {
    
        navigate("/login");
      }, 1500);
     
    }
  }

  useEffect(() => {
   
      dispatch(getUser());
    
  }, [dispatch]);

    function notify(text, type){
      toast(text, {
        type: type,
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

  return (
    
    <div className="card">
        <i className="fa-regular fa-heart" onClick={()=> addWishlist(card)}></i>
    <div className="card-image">
      <img
        src={card.image}
        alt="Fjallraven Backpack"
      />
    </div>
    <div className="card-content">
      <h2 className="card-title">{card.title.slice(0,20) + "..."}</h2>
      <p className="card-category">{card.category}</p>
      <div className="card-footer">
        <span className="card-price">${card.price}</span>
        <div className="card-rating">
          <span>⭐ {card.rating.rate}</span>
          <span>({card.rating.count} reviews)</span>
        </div>
      </div>
    </div>
    <Button variant= "contained" color='primary' className='add-to-cart'>Success</Button>
  </div> 

  )
}

export default Card
