//picture of face
import Avatar from '../assets/images/ID2.jpeg'
import home from './home.css'


const Home = () => {
    

    return (
        <div className='home-container'>
            <div className='circle-image' >
                <img 
                    src={Avatar} 
                    alt='Riley O cover photo' />
            </div>
            <div className='home-text'>
                <h1>Hi, I'm Riley O'Neil</h1>
                <h2>Full Stack Web Developer</h2>
                <p>
                    I am a full stack web developer with a background in
                    customer service and sales. I have a passion for
                    problem solving and learning new things. I am
                    currently looking for a position as a full stack web
                    developer.
                </p>
            </div>
        </div>
    )
}

export default Home