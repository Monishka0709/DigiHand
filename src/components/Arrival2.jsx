import React from 'react'
import RockGiraffe from '../assets/rockinggiraffe.png'
import Stack from '../assets/stacksun.png'
import WoodenBike from '../assets/woodenbike.png'
import Interactive from '../assets/interactive.png'
import Diy from '../assets/diy.png'
import Mystery from '../assets/mysterypuzzle.png'
import FlowerIcon from '@mui/icons-material/FilterVintage';
import Fox from '../assets/fox.png'
import Teddy from '../assets/teddy.png'
import Dinosaur from '../assets/dinosaur.png'
import Cradle from '../assets/cradle.png'


const Arrival2 = () => {
  return (
    <section className="arrival2--container">
          <div className='arrival2--content--section'>
            <h5 className='arrival2--subtitle'>CREATIVE TOYS</h5>
            <h3 className='arrival2--title'>Our Newest Arrivals</h3>
            
            <div className='arrival2--products--container'>


                <div className='arrival2--products--item'><div className='arrival2--products--img'><img src={Mystery}/></div><div className='arrival--products--text'><p className='arrival--products--category'>INTERACTIVE TOYS</p><p className='arrival--products--name'>Mystery Puzzle</p><span className='arrival--products--price'>$87.00</span></div></div>
                <div className='arrival2--products--item'><div className='arrival2--products--img'><img src={Teddy}/></div><div className='arrival--products--text'><p className='arrival--products--category'>INTERACTIVE TOYS</p><p className='arrival--products--name'>Teddy Bear</p> <span className='arrival--products--price'>$34.00</span></div></div>
                <div className='arrival2--products--item'><div className='arrival2--products--img'><img src={Interactive}/></div><div className='arrival--products--text'><p className='arrival--products--category'>INTERACTIVE TOYS</p><p className='arrival--products--name'>Interactive Puzzle</p> <span className='arrival--products--price'>$82.00</span></div></div>
                <div className='arrival2--products--item'><div className='arrival2--products--img'><img src={Fox}/></div><div className='arrival--products--text'><p className='arrival--products--category'>INTERACTIVE TOYS</p><p className='arrival--products--name'>Handmade Fox</p> <span className='arrival--products--price'>$55.00</span></div></div>
                <div className='arrival2--products--item arrival2--ad'><h6>LYNNA TOY COLLECTION</h6><button className='arrival2--button' style={{display:'flex',alignItems:'center',gap:'5px'}}><FlowerIcon fontSize='1rem' style={{color:'#fff'}} /> SHOP NOW</button></div>
                <div className='arrival2--products--item'><div className='arrival2--products--img'><img src={RockGiraffe}/></div><div className='arrival--products--text'><p className='arrival--products--category'>INTERACTIVE TOYS</p><p className='arrival--products--name'>Rolling Giraffe</p><span className='arrival--products--price'>$29.00</span></div></div>
                <div className='arrival2--products--item'><div className='arrival2--products--img'><img src={Diy}/></div><div className='arrival--products--text'><p className='arrival--products--category'>INTERACTIVE TOYS</p><p className='arrival--products--name'>Stacking Rainbow</p> <span className='arrival--products--price'>$49.00</span></div></div>
                <div className='arrival2--products--item'><div className='arrival2--products--img'><img src={Stack}/></div><div className='arrival--products--text'><p className='arrival--products--category'>INTERACTIVE TOYS</p><p className='arrival--products--name'>Colorful Stacking Toy</p> <span className='arrival--products--price'>$49.00</span></div></div>
                <div className='arrival2--products--item'><div className='arrival2--products--img'><img src={WoodenBike}/></div><div className='arrival--products--text'><p className='arrival--products--category'>INTERACTIVE TOYS</p><p className='arrival--products--name'>Toy Bike</p> <span className='arrival--products--price'>$77.00</span></div></div>
                
                
                
            </div>

            <div className='arrival2--ad--container'>
              <div className='arrival2--adbox'>
                          
                          <div style={{display:'flex',gap:'1rem', flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
                          <p>Discount 30%</p>
                            <h4 style={{fontSize:'20px', fontWeight:'600'}}>Interactive Toys For Kids</h4>
                            
                            <button style={{background:'none',border:'none', textDecoration:'underline'}}>SHOP NOW</button>
                          </div>
                          <img src={Mystery}/>
                          
                        </div>
                        <div className='arrival2--adbox'>
                          
                          <div style={{display:'flex',gap:'1rem', flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
                          <p>Discount 25%</p>
                            <h4 style={{fontSize:'20px', fontWeight:'600'}}>Our Toys For Best Nursery</h4>
                            <button style={{background:'none',border:'none', textDecoration:'underline'}}>SHOP NOW</button>
                            
                          </div>
                          <img src={Cradle}/>
                          
                        </div>
                        <div className='arrival2--adbox'>
                          
                          <div style={{display:'flex',gap:'1rem', flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
                          <p>Discount 40%</p>
                            <h4 style={{fontSize:'20px', fontWeight:'600'}}>Soft Plushies for Babies</h4>
                            
                            <button style={{background:'none',border:'none', textDecoration:'underline'}}>SHOP NOW</button>
                            
                            </div>
                            <img src={Dinosaur}/>
                          
                        </div>
    </div>
          </div>
        </section>
  )
}

export default Arrival2
