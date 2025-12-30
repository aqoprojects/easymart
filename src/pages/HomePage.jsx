import { useEffect, useState } from 'react'
import HomeBanner from '../components/HomeBanner';
import ProductSlider from '../components/ProductSlider';
import Category from '../components/Category';
import BestSeller from '../components/BestSeller';
import TrendingStore from '../components/TrendingStore';
import Discount from '../components/Discount';
import WeeklySold from '../components/WeeklySold';
import Discount2 from '../components/Discount2';
import Discount3 from '../components/Discount3';
import Discount4 from '../components/Discount4';
import api from '../services/api';

const HomePage = () => {
  const [promotions, setPromotions] = useState(
    []
  )

   const getPromotions = async ()=> {
    const response = await api.get('/promotions/?size=3')
    setPromotions({
      promotion1: response.data['0'], 
      promotion2: response.data['1'], 
      promotion3: response.data['2'], 
    })
  }
  useEffect(()=>{
    getPromotions()

  }, [])
  return (
    <>
      <HomeBanner/>
      <ProductSlider/>
      <Category/>
      <BestSeller/>
      <TrendingStore/>
      {promotions.promotion1 && <Discount name={promotions.promotion1.name} desc={promotions.promotion1.description} />}
      {promotions.promotion1 && <Discount4 name={promotions.promotion1.name} desc={promotions.promotion1.description} products={promotions.promotion1.products} />}
      {/* <Discount4/> */}
      {promotions.promotion2 && <Discount3 name={promotions.promotion2.name} desc={promotions.promotion2.description} />}

      {/* <Discount3/> */}
      <WeeklySold/>
      {promotions.promotion3 && <Discount2 name={promotions.promotion3.name} desc={promotions.promotion3.description}  products={promotions.promotion3.products} total_products={promotions.promotion3.total_products} discount_type={promotions.promotion3.discount_type} discount_value={promotions.promotion3.discount_value}  start_date={promotions.promotion3.start_date} end_date={promotions.promotion3.end_date}  />}
      {/* <Discount2/> */}
    </>
  )
}

export default HomePage