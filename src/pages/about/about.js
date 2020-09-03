import React from 'react'

// page components
import Header from '../homepage/header'
import AboutContent from './aboutContent'
import Footer from '../homepage/footer'

import { Layout } from './aboutStyles'

const About = () => (
    <Layout>
      <Header />
      <AboutContent />
      <Footer /> 
    </Layout>
)

export default About