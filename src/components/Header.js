
import { Helmet } from 'react-helmet-async';


const Header = () => {
    return(<Helmet>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@dossis"/>
    <meta name="twitter:title" content="FMCanvas"/>
    <meta name="twitter:description" content="Movement of Tactical Roles in Football"/>
    <meta name="twitter:image" content="https://wp.dossis.ch/wp-content/uploads/2021/02/Unbenannt-10.png"/>
        </Helmet>)
}




export default Header;