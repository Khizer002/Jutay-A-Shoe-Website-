import './Home.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import data from "../shoes.json"
import Context from './Context'

const Home = () => {
  const { favIds, setFavIds, setFav } = useContext(Context)

  const newArrivals = data.filter(shoe => shoe.type === "new-arrival1")
  const slides = data.filter(shoe => shoe.type === "slides")
  const skechers = data.filter(shoe => shoe.type === "skechers")
  const runners = data.filter(shoe => shoe.type === "runners")
  const spezial = data.filter(shoe => shoe.type === "spezial")
  const shirts = data.filter(shoe => shoe.type === "t-shirts")

  // Toggle favorite
  const toggleFavorite = (e, shoeId) => {
    e.preventDefault() // Prevent navigation
    e.stopPropagation() // Stop event bubbling
    
    let updatedFavIds
    
    if (favIds.includes(shoeId)) {
      // Remove from favorites
      updatedFavIds = favIds.filter(id => id !== shoeId)
    } else {
      // Add to favorites
      updatedFavIds = [...favIds, shoeId]
    }
    
    setFavIds(updatedFavIds)
    setFav(updatedFavIds.length)
    localStorage.setItem("favIds", JSON.stringify(updatedFavIds))
  }

  // Check if shoe is favorited
  const isFavorite = (shoeId) => favIds.includes(shoeId)

  // Reusable shoe card component
  const ShoeCard = ({ shoe }) => (
    <div className='shoe-card-wrapper'>
      <Link
        to={`/product/${shoe.name}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <div className='shoe-card'>
          <img src={shoe.image} alt={shoe.name} style={{ width: "240px", height: "220px" }} />
          <h4>{shoe.name.toUpperCase()}</h4>
          <p>Rs. {shoe.price}</p>
          <span>{shoe.sizes.join(', ')}</span>

          <div className='shoe-actions'>
            <span className='add-cart'>Add To Cart</span>
            <span 
              className='fav-icon'
              onClick={(e) => toggleFavorite(e, shoe.id)}
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              {isFavorite(shoe.id) ? (
                <FavoriteIcon style={{ color: 'red', fontSize: '24px' }} />
              ) : (
                <FavoriteBorderIcon style={{ fontSize: '24px' }} />
              )}
            </span>
          </div>
        </div>
      </Link>
    </div>
  )

  return (
    <div className='homeFirst'>
      <div className='homeInner'>
        <Link to='/major-loafors' className='img-link'>
          <img
            src='https://jutay.co/cdn/shop/files/1_copy_5_326273d6-1833-449b-8cbd-efeef43d9fa8.webp?v=1744279321&width=2000'
            alt='img-loafors'
          />
        </Link>
        <div className='new'>
          <p>New Arrivals</p>
          <p
            style={{
              color: 'grey',
              textDecoration: 'underline',
              fontSize: 'small',
              transform: 'translateY(-25px)',
            }}
          >
            Fresh Picks
          </p>
        </div>

        <div className='shoes'>
          {newArrivals.map((shoe, index) => (
            <ShoeCard key={index} shoe={shoe} />
          ))}
        </div>
        <div className='new-btn'>
          <button>
            <Link to='/new-arrival' className='new-link'>View All</Link>
          </button>
        </div>

        <div className='second-link'>
          <Link to='/men'>
            <img src='https://jutay.co/cdn/shop/files/Slides.webp?v=1746612762&width=2000' alt='men-link' />
          </Link>
          <div className='new'>
            <p>Slides</p>
            <p
              style={{
                color: 'grey',
                textDecoration: 'underline',
                fontSize: 'small',
                transform: 'translateY(-25px)',
              }}
            >
              Easy Wear
            </p>
          </div>
          <div className='shoes'>
            {slides.map((shoe, index) => (
              <ShoeCard key={index} shoe={shoe} />
            ))}
          </div>
          <div className='new-btn'>
            <button>
              <Link to='/men' className='new-link'>View All</Link>
            </button>
          </div>
        </div>

        <div className='third-link'>
          <Link to='/men'>
            <img src='https://jutay.co/cdn/shop/files/Skechers_category_Banner_d84979e0-4808-4197-bc8c-383aa35f31a0.webp?v=1749628911&width=2000' alt='men-link' />
          </Link>
          <div className='new'>
            <p>Skechers</p>
            <p
              style={{
                color: 'grey',
                textDecoration: 'underline',
                fontSize: 'small',
                transform: 'translateY(-25px)',
              }}
            >
              Comfort Fit
            </p>
          </div>
          <div className='shoes'>
            {skechers.map((shoe, index) => (
              <ShoeCard key={index} shoe={shoe} />
            ))}
          </div>
          <div className='new-btn'>
            <button>
              <Link to='/men' className='new-link'>View All</Link>
            </button>
          </div>
        </div>

        <div className='fourth-link'>
          <Link to='/men'>
            <img src='https://jutay.co/cdn/shop/files/Runner_Category_Banner.webp?v=1745413238&width=20000' alt='men-link' />
          </Link>
          <div className='new'>
            <p>Runners</p>
            <p
              style={{
                color: 'grey',
                textDecoration: 'underline',
                fontSize: 'small',
                transform: 'translateY(-25px)',
              }}
            >
              Speed Ready
            </p>
          </div>
          <div className='shoes'>
            {runners.map((shoe, index) => (
              <ShoeCard key={index} shoe={shoe} />
            ))}
          </div>
          <div className='new-btn'>
            <button>
              <Link to='/men' className='new-link'>View All</Link>
            </button>
          </div>
        </div>

        <div className='fourth-link'>
          <Link to='/men'>
            <img src='https://jutay.co/cdn/shop/files/1_53.webp?v=1750228525&width=2000' alt='men-link' />
          </Link>
          <div className='new'>
            <p>Spezial</p>
            <p
              style={{
                color: 'grey',
                textDecoration: 'underline',
                fontSize: 'small',
                transform: 'translateY(-25px)',
              }}
            >
              Bold Style
            </p>
          </div>
          <div className='shoes'>
            {spezial.map((shoe, index) => (
              <ShoeCard key={index} shoe={shoe} />
            ))}
          </div>
          <div className='new-btn'>
            <button>
              <Link to='/men' className='new-link'>View All</Link>
            </button>
          </div>
        </div>

        <div className='fourth-link'>
          <Link to='/t-shirts'>
            <img src='https://jutay.co/cdn/shop/files/Tshirt_Banner_1.webp?v=1750757482&width=2000' alt='men-link' />
          </Link>
          <div className='new'>
            <p>T-Shirts</p>
            <p
              style={{
                color: 'grey',
                textDecoration: 'underline',
                fontSize: 'small',
                transform: 'translateY(-25px)',
              }}
            >
              Trend Ready
            </p>
          </div>
          <div className='shoes'>
            {shirts.map((shoe, index) => (
              <ShoeCard key={index} shoe={shoe} />
            ))}
          </div>
          <div className='new-btn'>
            <button>
              <Link to='/t-shirts' className='new-link'>View All</Link>
            </button>
          </div>
        </div>

        <div className="jutay-sizes-hero">
          <h1 className="jutay-sizes-heading">Your Perfect Match</h1>
          <div className="sizes_section">
            <div className="size_box">
              <a href="https://jutay.co/collections/all?filter.v.availability=1&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;filter.v.option.size=38&amp;sort_by=created-descending"><span>EUR</span>38</a>
            </div>
            <div className="size_box">
              <a href="https://jutay.co/collections/all?filter.v.availability=1&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;filter.v.option.size=39&amp;sort_by=created-descending"><span>EUR</span>39</a>
            </div>
            <div className="size_box">
              <a href="https://jutay.co/collections/all?filter.v.availability=1&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;filter.v.option.size=40&amp;sort_by=created-descending"><span>EUR</span>40</a>
            </div>
            <div className="size_box">
              <a href="https://jutay.co/collections/all?filter.v.availability=1&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;filter.v.option.size=41&amp;sort_by=created-descending"><span>EUR</span>41</a>
            </div>
            <div className="size_box">
              <a href="https://jutay.co/collections/all?filter.v.availability=1&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;filter.v.option.size=42&amp;sort_by=created-descending"><span>EUR</span>42</a>
            </div>
            <div className="size_box">
              <a href="https://jutay.co/collections/all?filter.v.availability=1&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;filter.v.option.size=43&amp;sort_by=created-descending"><span>EUR</span>43</a>
            </div>
            <div className="size_box">
              <a href="https://jutay.co/collections/all?filter.v.availability=1&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;filter.v.option.size=44&amp;sort_by=created-descending"><span>EUR</span>44</a>
            </div>
            <div className="size_box">
              <a href="https://jutay.co/collections/all?filter.v.availability=1&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;filter.v.option.size=45&amp;sort_by=created-descending"><span>EUR</span>45</a>
            </div>
            <div className="size_box">
              <a href="https://jutay.co/collections/all?filter.v.availability=1&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;filter.v.option.size=46&amp;sort_by=created-descending"><span>EUR</span>46</a>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
      <hr />
    </div>
  )
}

export default Home