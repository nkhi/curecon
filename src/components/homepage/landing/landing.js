import React from 'react'

// dependancies
import SelectSearch from 'react-select-search';

//styles
import {

} from './landingStyles'
import './searchStyles.css';

const Landing = ({}) => {
  const optionsList = [
                        {
                            name: 'Food',
                            type: 'group',
                            items: [{
                                value: 'hamburger',
                                name: 'Hamburger',
                            }, {
                                value: 'pizza',
                                name: 'Pizza',
                            }]
                        },
                        {
                            name: 'Drinks',
                            type: 'group',
                            items: [{
                                value: 'soft',
                                name: 'Soft drink',
                            }, {
                                value: 'beer',
                                name: 'Beer',
                            }]
                        }
                    ]

  return(
    <SelectSearch
        options={optionsList}
    />

  )
}

export default Landing
