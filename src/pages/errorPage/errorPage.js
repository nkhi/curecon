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
    EmailLink,
    IconDiv,
    IconDiv2
} from './errorPageStyles'
import { ArrowLeft, ChatsCircle } from 'phosphor-react'

const ErrorPage = () => (
    <Layout class='css-selector'>
        <Center>
            <Image>404</Image>
            <Subtitle>
                <SubContent>
                    Sorry! This page is currently unavailable.
                    <BlandLink to="/">
                        <HomeButton>
                            <IconDiv> <ArrowLeft size={20} weight='bold'/> </IconDiv>
                            Go Back
                        </HomeButton>  
                    </BlandLink>
                </SubContent>
            </Subtitle>
            <Contact>
                Need help?
                <IconDiv2><ChatsCircle size={24} weight="duotone" /></IconDiv2>
                <EmailLink href="mailto:hey@curecon.org?subject=Support%20Request%3A">hey@curecon.org</EmailLink>
            </Contact>
        </Center>
    </Layout>
)

export default ErrorPage