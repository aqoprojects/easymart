import React from 'react'
import HomeBanner from '../components/HomeBanner';
import ProductSlider from '../components/ProductSlider';
import Category from '../components/Category';
import BestSeller from '../components/BestSeller';
import TrendingStore from '../components/TrendingStore';
import Discount from '../components/Discount';
import WeeklySold from '../components/WeeklySold';
import Discount2 from '../components/Discount2';
import Discount3 from '../components/Discount3';

const HomePage = () => {
  return (
    <>
      <HomeBanner/>
      <ProductSlider/>
      <Category/>
      <BestSeller/>
      <TrendingStore/>
      <Discount/>
      <Discount3/>
      <WeeklySold/>
      <Discount2/>
    </>
  )
}

export default HomePage