
import { Helmet } from 'react-helmet-async';


const Header = () => {
    return(<Helmet>
        <meta name="og:title" content="FMCanvas | Movement of Tactical Roles in Football"/>
        <meta name="og:description" content="This react based WebApp, tries to replicate movement of the available Roles in Football Manager"/>
        <meta name="twitter:title" content="FMCanvas | Movement of Tactical Roles in Football"/>
        <meta name="twitter:description" content="This react based WebApp, tries to replicate movement of the available Roles in Football Manager"/>
        <meta name="og:image" content="https://wp.dossis.ch/wp-content/uploads/2021/02/Unbenannt-10.png"/>
        <meta name="twitter:image" content="https://wp.dossis.ch/wp-content/uploads/2021/02/Unbenannt-10.png"/>
        <meta name="twitter:card" content="summary_large_image" data-react-helmet="true"></meta>
        <meta name="og:url" content="https://fm-canvas.vercel.app" data-react-helmet="true"></meta>
        </Helmet>)
}




export default Header;