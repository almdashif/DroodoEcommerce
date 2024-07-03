import React from 'react'
import WeddingCollection from './Modules/WeddingCollection/WeddingCollection'
import NewCollections from './Modules/Collections/NewCollections'
import Category from './Modules/Categories/Category'
import Footer from './Modules/Footer/Footer'
import RightsandCopy from './Modules/Footer/RightsandCopy'
const App = () => {
  return (
    <div>
      <NewCollections />
      <WeddingCollection />
      <Category />
      <Footer />
      <RightsandCopy />
    </div>
  )
}

export default App

