import React from 'react'
import './Home.css'
import Navpro from "../../components/navpro/Navpro"

import stroller from '../../assets/stroller.png'
import key from '../../assets/key.png'
import car from '../../assets/car.png'
import bag from '../../assets/bag.png'
import dog from '../../assets/dog.png'
import chair from '../../assets/chair.png'
import phone from '../../assets/phone.png'
import paint from '../../assets/paint.png'
import dress from '../../assets/dress.png'
import ball from '../../assets/ball.png'
import discount from '../../assets/discount.png'
import Products from '../../components/products/Products'





function Home() {
  return (
    <div className='home'> <br /> <br /> <br />


    <div className='search-bar'>

    <div className="search-elon">
    <ion-icon name="search-outline"></ion-icon>
    <h1>1 144 209 e'lonlar yoningizda</h1>
    </div>

    <div className="search-manzil">
    <ion-icon name="location-outline"></ion-icon>
    <h1>Butun O'zbekiston</h1>
    </div>

    <div className="search-qidiruv">
        <h1>Qidiruv</h1>
        <ion-icon name="search-outline"></ion-icon>
    </div>
    </div>

    <div className="main-product">
        <h1 className='bosh-toifa'>Bosh toifalar</h1>
    <Navpro
        url={stroller}
        kat="Bolalar dunyosi"
        bg="#FFCE32"
        />
        <Navpro
        url={key}
        kat="Ko'chmas mulk"
        bg="#3A77FF"
        />
        <Navpro
        url={car}
        kat="Transport"
        bg="#23E5DB"
        />
        <Navpro
        url={bag}
        kat="Ish"
        bg="#FF5636"
        />
        <Navpro
        url={dog}
        kat="Hayvonlar"
        bg="#FFF6D9"
        />
        <Navpro
        url={chair}
        kat="Uy va bog'"
        bg="#CEDDFF"
        />
        <Navpro
        url={phone}
        kat="Elektron"
        bg="#FFF6D9"
        />
        <Navpro
        url={paint}
        kat="Xizmatlar"
        />
        <Navpro
        url={dress}
        kat="Moda va still"
        bg="#1F46D9"
        />
        <Navpro
        url={ball}
        kat="Sport"
        bg="#EE26D9"
        />
        <Navpro
        url={discount}
        kat="Tekin"
        />
</div>

    <div className="product-main">
    <Products/>
    </div>
</div>
  )
}

export default Home