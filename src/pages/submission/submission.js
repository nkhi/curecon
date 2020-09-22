import React from 'react'

// page components
import Header from '../homepage/header'
import SubmissionContent from './submissionContent'
import Footer from '../homepage/footer'

import { Layout } from './submissionStyles'

const Submission = () => (
  <Layout>
    <Header />
    <SubmissionContent />
    <Footer /> 
  </Layout>
)

export default Submission