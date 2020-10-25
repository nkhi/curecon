import React from 'react'
import { 
    Layout,
    Center,
    Image,
    Subtitle,
    HomeButton,
    SubContent,
    BlandLink,
    Contact,
    EmailLink
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
            <Contact>
                Wanna chat? 
                <EmailLink href="mailto:hey@curecon.org?subject=Support%20Request%3A">hey@curecon.org</EmailLink>
            </Contact>
        </Center>
    </Layout>
)

export default About