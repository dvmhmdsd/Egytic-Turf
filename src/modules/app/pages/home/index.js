import React, { Component } from 'react'
import Layout from '../../../../shared/layout'
import Intro from './components/intro'
import Info from './components/info'
import Map from './components/map'
import Services from './components/services'
import Testimonials from './components/testimonials'

export default class Home extends Component {
  render() {
    return (
      // inHome prop is to style the navbar according to the page
      <Layout inHome={true}>
        <Intro />
        <main>
          <Info />
          <Map />
          <Services />
          <Testimonials />
        </main>
      </Layout>
    )
  }
}
