import React from 'react'

// dependancies
import SelectSearch from 'react-select-search';

//styles
import {
    Layout
} from './landingStyles'
import './searchStyles.css';

const Landing = ({}) => {
//   const optionsList = [
//                         {
//                             name: 'Food',
//                             type: 'group',
//                             items: [{
//                                 value: 'hamburger',
//                                 name: 'Hamburger',
//                             }, {
//                                 value: 'pizza',
//                                 name: 'Pizza',
//                             }]
//                         },
//                         {
//                             name: 'Drinks',
//                             type: 'group',
//                             items: [{
//                                 value: 'soft',
//                                 name: 'Soft drink',
//                             }, {
//                                 value: 'beer',
//                                 name: 'Beer',
//                             }]
//                         }
//                     ]

  return(
    // <SelectSearch
    //     options={optionsList}
    // />
    <Layout>
        <div>Hi this is the landing!</div>
    </Layout>
  )
}

export default Landing
