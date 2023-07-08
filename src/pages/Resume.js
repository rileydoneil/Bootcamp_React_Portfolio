//https://levelup.gitconnected.com/displaying-pdf-in-react-app-6e9d1fffa1a9
//for sdisplaying resume in browser with abilty to download


import resume from '../assets/files/Riley_ONeil_Resume.pdf'
import Button from '@mui/material/Button';

const Resume = () => {
    //add iframe style to horizontally center on page
    const iFrameStyle = {
        width: '80%',
        height: '80vh',
        margin: 'auto',
        display: 'block',
    };

    const centerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    };

    return (
        <div >
            <div style={centerStyle}>
                <h3>Click this button to download</h3>
                <Button 
                    variant="outlined" 
                    href={resume} 
                    download="Riley_ONeil_Resume.pdf" 
                    sx={{backgroundColor: '#84DCC6' }}
                    >Download
                </Button>
            <h3>Here is my Resume from a glance:</h3>
            </div>
            <iframe src={resume} style={iFrameStyle}></iframe>
        </div>
    )
};

export default Resume;