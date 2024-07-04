import React from 'react'
import WeddingCollection from './Modules/WeddingCollection/WeddingCollection'
import NewCollections from './Modules/Collections/NewCollections'
import Category from './Modules/Categories/Category'
import Footer from './Modules/Footer/Footer'
import RightsandCopy from './Modules/Footer/RightsandCopy'
import Homepage from './Modules/Homepage/Homepage'
import OfferSection from './Modules/Navbar/OfferSection'
import Navbar from './Modules/Navbar/Navbar'
const App = () => {
  return (
    <div>
      <OfferSection />
      <Navbar />
      <Homepage />
      <NewCollections />
      <WeddingCollection />
      <Category />
      <Footer />
      <RightsandCopy />
    </div>
  )
}

export default App

