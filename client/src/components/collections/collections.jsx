import Imager from '../image/imager'
import './collections.css'

const Collections = () => {
  return (
    <div className='collections'>
        {/* COLLECTION */}
        <div className="collection">
            <Imager src="/pins/pin1.jpeg" alt=""/>
            <div className="collectionInfo">
                <h1>Minimalist Bedrooms</h1>
                <span>12 Pins . 1w</span>
            </div>
        </div>
        {/* COLLECTION */}
        <div className="collection">
            <Imager src="/pins/pin1.jpeg" alt=""/>
            <div className="collectionInfo">
                <h1>Minimalist Bedrooms</h1>
                <span>12 Pins . 1w</span>
            </div>
        </div>
        {/* COLLECTION */}
        <div className="collection">
            <Imager src="/pins/pin1.jpeg" alt=""/>
            <div className="collectionInfo">
                <h1>Minimalist Bedrooms</h1>
                <span>12 Pins . 1w</span>
            </div>
        </div>
    </div>
  )
}

export default Collections