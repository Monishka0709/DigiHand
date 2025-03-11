import React from 'react'
import { 
  Bookmark as BookmarkIcon,
  Home as HomeIcon,
  ShoppingBagOutlined as BagIcon, 
  Star as StarIcon,
  FilterVintage as FlowerIcon,
  FavoriteBorderOutlined as HeartIcon, 
  Search as SearchIcon, 
  PersonOutlineOutlined as PersonIcon } from '@mui/icons-material';
import Logo from '../assets/Lynna_logo.png';
import '../App.css'


const Header = () => {
  return (
    <header className="header--container" >
      <div className="topbar" style={{
        color:'black',
        // fontFamily: 'Helvetica',
        width:'100%',
        // margin:'0 1.5rem',
        padding: ' 0.4rem 2rem',
        backgroundColor:'#dad2fc',
        display:'flex',
        alignItems: 'center',
        fontSize: '0.9rem',
        fontWeight: '600',
        justifyContent: 'center'


      }}> WEEKEND SALE UPTO 50% OFF</div>
       <nav className="nav--container" style={{display:'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap',/*margin:'0 1.5rem',*/
        padding: ' 0.2rem 5rem',
        height:'4rem',
        width:'90vw',
        }}>
        <div style={{display:'flex', alignItems: 'center', justifyContent: 'space-between',/*margin:'0 1.5rem',*/
        // padding: ' 0.2rem 2rem',
        height:'4rem',
        }}>
        <div className="Lynna--logo--container" style={{height:'inherit', width:'inherit',  }} >
          <img src={Logo} style={{height:'inherit', width:'initial', }} alt="" />
        </div>
        <div className='nav--list--container'>
       <div className="nav--list" style={{display:'flex', alignItems: 'center', justifyContent: 'space-between', gap:'1rem'}}>
         <a href='#'><HomeIcon fontSize='1rem' style={{color:'skyblue'}} />Home</a>
         <a href='#'><FlowerIcon fontSize='1rem' style={{color:'green'}} />Pages</a>
         <a href='#'><StarIcon fontSize='1rem' style={{color:'#ff5c00'}} />Shop</a>
         <a href='#'><FlowerIcon fontSize='1rem' style={{color:'#fdd017'}} />Blog</a>
         <a href='#'><BookmarkIcon fontSize='1rem' style={{color:'pink'}}/>Landing</a>
       </div>
       </div>
       </div>
       <div className="othernav--items" style={{display:'flex', alignItems: 'center', justifyContent: 'space-between', gap:'0.5rem'}}>
        <div><SearchIcon/></div>
        <div><PersonIcon/></div>
        <div><HeartIcon/></div>
        <div><BagIcon/></div>
        </div>
       </nav>
    </header>
  )
}

export default Header
