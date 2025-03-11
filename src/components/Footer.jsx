import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Footer = () => {
  return (
    <footer style={{width:'100%', backgroundColor:'lavender',padding:'2rem', display:'flex', justifyContent:'space-between',}}>
      <div><div className='footer--heading--title'> NewsLetter</div><p>Sign Up for our weekly newsletter and get 15% off your first order</p> <p><input type="text" placeholder='Email address' /><ArrowForwardIcon fontSize='0.5rem'/></p></div>
      <div><div className='footer--heading--title'> Company</div>
      <p>About Us</p>
      <p>Contact us</p>
      <p>Our Brands</p>
      <p>Latest News</p>
      <p>FAQ</p>
      </div>
      <div><div className='footer--heading--title'> Shop</div>
      <p>All Products</p>
      <p>E-gift Cards</p>
      <p>Order Tracking</p></div>
      <div><div className='footer--heading--title'> Our Social</div>
      <p>Twitter</p>
      <p>Instagram</p>
      <p>Facebook</p>
      <p>Pinterest</p></div>
      <div><div className='footer--heading--title'> Contact</div>
      <p>+123-456-789</p>
      <p>+987-654-321</p>
      <p>lynna@example.com</p></div>
      
    </footer>
  )
}

export default Footer
