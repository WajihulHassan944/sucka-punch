'use client';

import React from 'react'
import ImageContentSection from './imageContent'
import FAQSection from './faq'
import Product from './product'
import WhatsNewSection from './whatsNew'
import Brand from './brand'
import DrinksAccordion from './drinkAccordion'
import Benefit from './benefit'
import About from './about'
import ProductDetails from './productDetails'

const page = () => {
  return (
    <div className='mt-10'>
      <ImageContentSection/>
      <FAQSection/>
      <Product/>
      <WhatsNewSection/>
      <Brand/>
      <DrinksAccordion/>
      <Benefit/>
      <About/>
      <ProductDetails/>
    </div>
  )
}

export default page
