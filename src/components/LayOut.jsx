import React from 'react'
import Banner from './layout/Banner'
import Footer from './layout/Footer'
import Header from './layout/Header'

function LayOut(props) {
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner />
            {props.children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default LayOut