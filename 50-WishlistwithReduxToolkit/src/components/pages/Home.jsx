import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/features/productSlice';
import Card from '../card/Card';

const Home = () => {
  const datas = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    }, [dispatch]);
  
  return (
    <section id="products">
    <div className="container">
      <div className="row">
        <div className="cards">

  {
    datas && datas.map((card) => 
      <Card key={card.id} card={card}/>
    )
  }

</div>
        </div>
      </div>
    </section>
  )
   
};


export default Home;
