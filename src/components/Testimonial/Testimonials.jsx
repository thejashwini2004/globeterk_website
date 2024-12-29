import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import ava04 from '../../assets/images/ava-4.jpg'
import ava05 from '../../assets/images/ava-5.jpg'
import ava06 from '../../assets/images/ava-6.jpg'
import ava07 from '../../assets/images/ava-7.jpg'
import ava08 from '../../assets/images/ava-8.jpg'
import ava09 from '../../assets/images/ava-9.jpg'
import ava10 from '../../assets/images/ava-10.jpg'
const Testimonials = () => {
    const settings = {
        dots:true,
        infinite: true,
        autoplay:true,
        speed: 1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
            breakpoint:992,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint:576,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
            }  ,
        },
    ],
    };
  return (
 <Slider {...settings}>
<div className="testimonial py-4 px-3">
<p>"Globe Trek made my travel planning so easy and hassle-free! The user-friendly interface and excellent customer support ensured I got the best deals for my trip. Highly recommend it!"</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava01} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>John Doe</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>"As a solo female traveler, safety is my top priority, and Globe Trek delivered! Their recommendations for accommodations were spot-on, and I felt secure throughout my journey. Highly trusted platform!"</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava02} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Lia Franklin</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>"Globe Trek made our couple's getaway absolutely perfect! From romantic hotel recommendations to seamless travel bookings, everything was stress-free and well-organized. We even found personalized itinerary ideas that made our trip extra special!"
</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava03} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>William smith</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>"As an elderly solo traveler, I found Globe Trek to be incredibly thoughtful and accommodating. Their recommendations for accessible accommodations and clear travel guidance made my trip comfortable and stress-free. I felt safe and well-supported throughout!" 
</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava04} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Evelyn</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p> "Booked my entire holiday through Globe Trek, and everything went smoothly. The price comparison feature is amazing, though I wish there were more options for local guides." </p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava05} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>charles willam</h6>
    <p>Customer</p>
</div>
</div>
</div>

<div className="testimonial py-4 px-3">
<p>"Globe Trek is my go-to travel site! I loved the personalized itinerary suggestions, and their 24/7 customer support was a lifesaver when my flight got rescheduled."  </p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava06} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Swapan </h6>
    <p>Customer</p>
</div>
</div>
</div>

<div className="testimonial py-4 px-3">
<p>"Fantastic experience! Globe Trek offered a seamless booking process, and their curated travel packages made my vacation truly memorable. Will definitely use it again!"  </p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava07} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Nisha gupta </h6>
    <p>Customer</p>
</div>
</div>
</div>


<div className="testimonial py-4 px-3">
<p>"Globe Trek was perfect for planning my adventurous solo trip! The platform recommended budget-friendly hostels with great social vibes, perfect for meeting other travelers. I loved their activity suggestions, like trekking tours and local food trails, tailored for young, energetic travelers like me!" </p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava08} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Christoper</h6>
    <p>Customer</p>
</div>
</div>
</div>

<div className="testimonial py-4 px-3">
<p>"Rajasthan exceeded all my expectations. I loved the camel ride in Jaisalmer and the cultural performances in Udaipur. Globe Trek’s recommendations for staying in heritage hotels gave us a truly authentic experience." </p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava09} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Vishna gupta</h6>
    <p>Customer</p>
</div>
</div>
</div>

<div className="testimonial py-4 px-3">
<p>"As an older traveler, I was initially nervous about going abroad, but my experience was incredible. The detailed itinerary from Globe Trek made everything smooth, from accessible flights to comfortable accommodations. I felt safe and well-supported throughout my journey. The local guides were very accommodating, ensuring I could enjoy everything at my own pace. It truly exceeded my expectations, and I can’t wait for my next trip!"</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava10} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Bhashyam Iyengar</h6>
    <p>Customer</p>
</div>
</div>
</div>



 </Slider>
  )
}

export default Testimonials
