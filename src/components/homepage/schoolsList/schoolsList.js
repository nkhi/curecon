import React from 'react'

// dependancies
import SelectSearch from 'react-select-search';

//styles
import { 
  Layout,
  Head
 } from './schoolsListStyles'

const SchoolsList = ({}) => {
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
    <Layout>
      <Head>
        Institutions List
        <SelectSearch options={optionsList} />
      </Head>
      <div>This will be a list of schools</div>
    </Layout>
  ) 
}

export default SchoolsList
