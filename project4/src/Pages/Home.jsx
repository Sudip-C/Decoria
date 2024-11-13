import React from 'react'
import "../CSS/Home.css"


import customer from "../image/Customer.png"
import Carousals from '../component/carousal';

const cards = [
    "https://www.ulcdn.net/media/Slideshow/Spring-into-sale-Slideshow.jpg?1676664267",
    "https://www.ulcdn.net/media/Slideshow/Beds-2.jpg?1676877037",
    "https://www.ulcdn.net/media/Slideshow/Dining-3.jpg?1676877042",
    "https://www.ulcdn.net/media/Slideshow/Shoeracks4.jpg?1676894369",
    "https://www.ulcdn.net/media/Slideshow/UI-Feb-slideshow.jpg?1676622712"
    ];
    
function Home() {


 



    return (
        <>
        <div className='Banner'>
       <Carousals pictures={cards} height={"700px"}/>
      </div>
      <div>
        <h1>Explore Our Furniture Range</h1>
        <div className='badges'>          
        </div>
      </div>
      <div>
        <h1 style={{fontSize:"30px"}}>Value Buys In Furniture</h1>
        <div className='furniture'>
         <img src='https://www.ulcdn.net/media/Collection/listings/Sofa_Beds_taxon_4.png?1675918246' alt=''/>
         <img src='https://www.ulcdn.net/media/Collection/listings/Bookshelves-taxon_5.png?1675918252' alt='name'/>
         <img src='https://www.ulcdn.net/media/Collection/listings/Dining-taxon_6.jpg?1675918258'alt=''/>
        </div>
      </div>
    
      <div>
        <h1 style={{fontSize:"30px"}}>Value Buys In Decor</h1>
        <div className='furniture'>
         <img src='https://www.ulcdn.net/media/Collection/listings/Lamps___Lighting-taxon_1.png?1675922995' alt=''/>
         <img src='https://www.ulcdn.net/media/Collection/listings/Bedsheets-taxon_2.png?1675922999' alt='name'/>
         <img src='https://www.ulcdn.net/media/Collection/listings/Carpets-taxon_3.png?1675923006'alt=''/>
        </div>
      </div>

      <div>
        <h1 style={{fontSize:"30px"}}>Popular Across Site</h1>
        <div className='furniture_third_banner'>

         <img  src='https://www.ulcdn.net/images/products/201632/product/Larsson_Study_Table_TK_00_LP.jpg?1533033869' alt=''/>
         <img  src='https://www.ulcdn.net/images/products/201808/product/Truman_Study_Table__Creamy_Crust_Finish_Teak_LP.jpg?1624608812' alt='name'/>
         <img  src='https://www.ulcdn.net/images/products/82584/product/1956_Lounge___Ottoman_Replica_Black_LP.jpg?1519629745'alt=''/>
         <img  src='https://www.ulcdn.net/images/products/159172/product/Thorpe_Upholstered_Storage_Bed_Queen_LP.jpg?1510822520'alt=''/>
        </div>
      </div>

      <div>
        <h1 style={{fontSize:"30px"}}>Customer Stories</h1>
        <div className='customers'>
       
            <div>
                <div className='profile_pic'>
                <img src={customer} alt=''/>
                </div>
                <p>SHEEKA CHINNAPARA</p>
                <p>via Facebook</p>
                <div className='product_image'>
                  <img src='https://www.ulcdn.net/testimonials/250x300/2647_20160821075017.jpg' alt=""/>
                </div>
                <button className='view_product'>VIEW PRODUCT</button>
                <p><i>"Having beautiful furniture in your homes...</i></p>
            </div>
            <div>
                <div className='profile_pic'>
                <img src={customer} alt=''/>
                </div>
                <p>SHEEKA CHINNAPARA</p>
                <p>via Facebook</p>
                <div className='product_image'>
                  <img src='https://www.ulcdn.net/testimonials/250x300/2647_20160821075017.jpg' alt=""/>
                </div>
                <button className='view_product'>VIEW PRODUCT</button>
                <p><i>"Having beautiful furniture in your homes...</i></p>
            </div>
            <div>
                <div className='profile_pic'>
                <img src={customer} alt=''/>
                </div>
                <p>SHEEKA CHINNAPARA</p>
                <p>via Facebook</p>
                <div className='product_image'>
                  <img src='https://www.ulcdn.net/testimonials/250x300/2647_20160821075017.jpg' alt=""/>
                </div>
                <button className='view_product'>VIEW PRODUCT</button>
                <p><i>"Having beautiful furniture in your homes...</i></p>
            </div>

        </div>
      </div>
      </>
    );
  }

export default Home
