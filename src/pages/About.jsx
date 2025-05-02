import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Founded on a passion for innovation and the ambition to transform online shopping, ShopStyle began its journey with a clear vision: to create a place where finding, exploring, and buying a wide array of products is effortless for customers, all from their own homes.</p>
          <p>Since starting out, we've been committed to building a varied assortment of high-quality goods to match every preference. Our broad selection spans from fashion and beauty items to electronics and home necessities, all sourced from dependable brands and partners.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At ShopStyle, our goal is to provide customers with freedom of choice, utmost convenience, and complete confidence. We are focused on delivering a smooth shopping experience that aims to surpass expectations, covering everything from your initial search to final delivery.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We carefully choose and thoroughly check each product to meet our high quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600'>Our easy-to-navigate site and simple ordering process make shopping with us simpler than ever.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to support you, ensuring your complete satisfaction is our priority.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
