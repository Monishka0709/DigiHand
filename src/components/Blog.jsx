import React from 'react'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const Blog = () => {
  return (
    <section className='blog--container' style={{margin:'3rem 0 10rem 0'}}>
    <div className='subanner--container'>
      <div className='subanner--form'>
        <div className='subanner--title--container'>
        <CardGiftcardIcon/>
        <h3 className='subanner--title'>Sign Up & Get 15% Off</h3>
        </div>
        <div className='subanner--input--container'><input type="text" placeholder='Your email' /><button>SUBMIT</button></div>
        
        </div>
    </div>
    </section>
  )
}

export default Blog
