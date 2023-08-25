import './Footer.css'


import logo from '../../images/logo.png'
import { SocialIcon } from 'react-social-icons';
export const Footer = () =>{
     
    return( 
   
     
        <div className='footer-container'> 
          <div className='footer'>
            <img width = '160px' src={logo} alt='logo'/>
            <div className='icons-network-wrapper'> 
            <p style = {{fontSize: '20px', paddingBottom: '10px'}}>All rights reserved</p>
            <p style = {{fontSize: '20px'}}>(c) Feel Good Inc. 2023</p>
            </div>   
            <div className='icons-network-wrapper'> 
            <div>   
            <p style = {{fontSize: '20px', paddingBottom: '10px'}}>Follow us on social media</p>
            </div>
            <div class = 'icons-network-container'>
            <SocialIcon url="https://facebook.com/jaketrent"  style = {{marginLeft: '10px', width: '40px', height: '40px'}}/>
            <SocialIcon url="https://vk.com/jaketrent"        style = {{marginLeft: '10px', width: '40px', height: '40px'}}/>
            <SocialIcon url="https://twitter.com/jaketrent"   style = {{marginLeft: '10px', width: '40px', height: '40px'}}/>
            <SocialIcon url="https://instagram.com/jaketrent" style = {{marginLeft: '10px', width: '40px', height: '40px'}}/>
            </div>
            </div>
          </div>
        
        </div>
      
    )
}