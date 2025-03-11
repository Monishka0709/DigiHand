import React from 'react'
import BabyToys from '../assets/babytoys.png'
import WoodenBike from '../assets/woodenbike.png'
import WoodenChair from '../assets/woodenchair.png'
import Bunny from '../assets/bunny.png'
import Giraffe from '../assets/giraffe.png'
import Avocado from '../assets/avocado.png'

const Arrivals = () => {
  return (
    <section className="arrival--container">
      <div className='arrival--content--section'>
        <h5 className='arrival--subtitle'>CREATIVE TOYS</h5>
        <h3 className='arrival--title'>Our Newest Arrivals</h3>
        <div className='arrival--products--container'>
            <div className='arrival--products--item'><div className='arrival--products--img'><img src={BabyToys}/></div><div className='arrival--products--text'><p className='arrival--products--category'>TODDLERS</p><p className='arrival--products--name'>Wooden Baby Toy</p><span className='arrival--products--price'>$17.00</span></div></div>
            <div className='arrival--products--item'><div className='arrival--products--img'><img src={WoodenBike}/></div><div className='arrival--products--text'><p className='arrival--products--category'>TODDLERS</p><p className='arrival--products--name'>Wooden Bike</p> <span className='arrival--products--price'>$68.00</span></div></div>
            <div className='arrival--products--item'><div className='arrival--products--img'><img src={WoodenChair}/></div><div className='arrival--products--text'><p className='arrival--products--category'>TODDLERS</p><p className='arrival--products--name'>Rocking Baby Chair</p> <span className='arrival--products--price'>$73.00</span><span className='color--choice'><div></div>
            <div></div>
            <div></div></span></div></div>
            <div className='arrival--products--item'><div className='arrival--products--img'><img src={Bunny}/></div><div className='arrival--products--text'><p className='arrival--products--category'>TODDLERS</p><p className='arrival--products--name'>Bunny Rattle</p> <span className='arrival--products--price'>$10.00</span><span className='color--choice'><div></div>
            <div></div>
            <div></div>
            <div></div></span></div></div>
            <div className='arrival--products--item'><div className='arrival--products--img'><img src={Giraffe}/></div><div className='arrival--products--text'><p className='arrival--products--category'>TODDLERS</p><p className='arrival--products--name'>Waving Giraffe</p> <span className='arrival--products--price'>$32.00</span></div></div>
            
            
            
        </div>
        <div className='arrival--ad--container'>
          <div className='arrival--ad'>
            <img src={Avocado}/>
            <div style={{display:'flex',gap:'1rem', flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
              <h4 style={{fontSize:'30px', fontWeight:'600'}}>-50% Off Plushies</h4>
              <p>Avocado Plushies</p>
              <button style={{background:'none',border:'none', textDecoration:'underline'}}>SHOP NOW</button>
            </div>
            
          </div>
          <div className='arrival--ad'>
          <div style={{display:'flex',gap:'1rem', flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
              <h4 style={{fontSize:'30px', fontWeight:'600'}}>EXPLORE OUR HANDMADE COLLECTION</h4>
              <p>Avocado Plushies</p>
              <button style={{background:'none',border:'none', textDecoration:'underline'}}>SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Arrivals
