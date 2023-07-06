import { BsLinkedin, BsGithub, BsTwitter} from "react-icons/bs";
import './footer.css'


const Footer = () => {
    const style = { color: 'black', fontSize: '2.5rem' }


    return (
        <div className="footer">
            <div className="footer_icons">
                <a href="https://www.linkedin.com/in/riley-oneil/" target="_blank" rel="noreferrer"><BsLinkedin style={style}/></a>
                <a href="https://github.com/rileydoneil?tab=repositories" target="_blank" rel="noreferrer"><BsGithub style={style}/></a>
                <a href="https://twitter.com/riri_oneil22" target="_blank" rel="noreferrer"><BsTwitter style={style}/></a>
            </div>
        </div>
    )
};

export default Footer;