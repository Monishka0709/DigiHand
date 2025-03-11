import React from 'react'
import '../App.css'
import BannerImg from '../assets/banner.png'
import Dinosaur from '../assets/dinosaur.png'
import Interactive from '../assets/interactive.png'
import BabyToys from '../assets/babytoys.png'
import Gifts from '../assets/gifts.png'
import Handmade from '../assets/handmade.png'
import Diy from '../assets/diy.png'
import Rattles from '../assets/rattles.png'
import Avocado from '../assets/avocado.png'

const Hero = () => {
  return (
    <section className="hero--container" >
        <div className="heroImg--container"  >
      <img src={BannerImg} className="hero--image" alt="" style={{ padding:'0', width:'100%', height:'auto'}} />
      </div>
      <div className='hero--content--section'>
        <h3 className='hero--title'>Shop By Products</h3>
        <div className='hero--products--container'>
            <div className='hero--products--item'><div className='hero--products--img' style={{backgroundColor:'#e4f6f8'}}><img src={Dinosaur}/></div><div className='hero--products--text'>Plushies</div></div>
            <div className='hero--products--item'><div className='hero--products--img' style={{backgroundColor:'#e4f9f2'}}><img src={Interactive}/></div><div className='hero--products--text'>Interactive</div></div>
            <div className='hero--products--item'><div className='hero--products--img' style={{backgroundColor:'#fce3da'}}><img src={BabyToys}/></div><div className='hero--products--text'>Baby Toys</div></div>
            <div className='hero--products--item'><div className='hero--products--img' style={{backgroundColor:'#e6e6fa'}}><img src={Diy}/></div><div className='hero--products--text'>DIY & Crafts</div></div>
            <div className='hero--products--item'><div className='hero--products--img' style={{backgroundColor:'#f4ddd5'}}><img src={Handmade}/></div><div className='hero--products--text'>Handmade</div></div>
            <div className='hero--products--item'><div className='hero--products--img' style={{backgroundColor:'#e4f6f8'}}><img src={Gifts}/></div><div className='hero--products--text'>Gifts</div></div>
            <div className='hero--products--item'><div className='hero--products--img' style={{backgroundColor:'#fff1e6'}}><img src={Rattles} style={{height:'6rem'}}/></div><div className='hero--products--text'>Rattles</div></div>
            
        </div>
    
      </div>
    </section>
  )
}

export default Hero
