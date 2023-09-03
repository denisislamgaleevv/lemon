
import './Preview.css'
import logo from '../../images/logo.png';
export const Preview = () =>{
    return(
        <div className='preview-container'>  
        <div className="gallery autoplay items-3">
          <div id="item-1" className="control-operator"></div>
          <div id="item-2" className="control-operator"></div>
          <div id="item-3" className="control-operator"></div>
          <figure className="item">
            <div className='preview2'>
              <div className='preview-text-container'>
                <img src={logo} width="220px"/>
                <h2>Spaghetti With Shrimps</h2>
                <div className='text-container'>  
                  <p>Indulge in the ultimate culinary delight with our exquisite Spaghetti With Shrimps. Elevate your taste experience as tender shrimp intertwine with perfectly cooked pasta, creating a harmonious dance of flavors.</p>
                </div>
                <button className='preview-btn' onClick={() =>alert("We don't have this recipe")}>GET IT RECIPE</button>
              </div>
            </div>
          </figure>
          <figure className="item">
            <div className='preview1'>
              <div className='preview-text-container'>
                <img src={logo} width="220px"/>
                <h2>Bananas Foster Ice Cream Cake</h2>
                <div className='text-container'>  
                  <p>If you're looking for decadence, look no further — you've found the Holy Grail of desserts. Honestly, this cake makes us wonder why Bananas Foster hasn't always been served on top of ice cream cake.</p>
                </div>
                <button className='preview-btn' onClick='click1()'>GET IT RECIPE</button>
              </div>
            </div>
          </figure>
          <figure className="item">
            <div className='preview3'>
              <div className='preview-text-container'>
                <img src={logo} width="220px"/>
                <h2>Traditional Russian Borscht</h2>
                <div className='text-container'>  
                  <p>Embark on a journey of flavor with our iconic Beet Soup. Delight in the heartwarming embrace of tender beets, hearty vegetables, and succulent meat, all expertly blended in a rich, aromatic broth.</p>
                </div>
                <button className='preview-btn'>GET IT RECIPE</button>
              </div>
            </div>
          </figure>
          <div className="controls">
            <a className="control-button">•</a>
            <a className="control-button">•</a>
            <a className="control-button">•</a>
          </div>
        </div>
        <div className='shadow'></div>
      </div>
    )
}

