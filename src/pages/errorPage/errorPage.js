import React from 'react'
import { 
    Layout,
    Center,
    Image,
    Subtitle,
    HomeButton,
    SubContent,
    BlandLink
} from './errorPageStyles'

const About = () => (
    <Layout class='css-selector'>
        <Center>
            <Image>404</Image>
            <Subtitle>
                <SubContent>
                    Sorry! This page is currently unavailable.
                    <BlandLink href="/">
                        <HomeButton>
                            Go to Home
                        </HomeButton>  
                    </BlandLink>
                </SubContent>
            </Subtitle>
        </Center>
    </Layout>
)

export default About