import React from 'react'
import './Home.css'
import Banner from '../../components/banner/Banner'
import Products from '../../components/products/Products'

function Home() {
  return (
    <div>
      <div className="home_banner">
      </div>
        <Products/>
      <Banner/>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quasi, eos, quidem sapiente dolor illo voluptate officiis omnis nihil praesentium voluptates maxime odio quos pariatur quae esse eaque! Consequatur, expedita facere, rem nostrum quisquam consectetur reiciendis commodi voluptas debitis, recusandae voluptate vero dicta nemo culpa quo quibusdam ratione blanditiis perferendis. Repellendus error voluptate mollitia nemo voluptates laborum possimus rem sapiente suscipit nostrum quasi molestias dolorem explicabo, sed iusto deleniti maxime, neque quos autem alias ducimus. Aperiam aut consectetur incidunt! Iure optio nobis eveniet iste similique ducimus odit nesciunt, repellat et possimus sequi repellendus asperiores ipsum, omnis dolore eos. Quas, numquam!</h1>
    </div>
  )
}

export default Home