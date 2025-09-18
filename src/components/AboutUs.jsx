import React from 'react'
import Navbar from './Navbar';
import './style/about.scss';
import Footer from './Footer';



const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className='about_container'>
        <h1>About Us</h1>

        <div className='about_desc one'>
          <p>{"We believe that great stories deserve great platforms. Whether you're into heart-pounding thrillers, soul-stirring dramas, or laugh-out-loud comedies, our mission is simple: to bring the magic of cinema closer to you, anytime, anywhere."}</p>
        </div>
        <div className="about_section">
          <div className='about_desc two'>
            <h2>🌟 What We Offer</h2>
            <p>{"The Movie App is more than just a movie app. It’s your companion for discovering, streaming, and sharing the films you love. From blockbuster hits to indie gems, trailers to reviews, we’ve built a space where movie lovers can explore without limits."}</p>
            <ul>
              <li> Personalized recommendations based on your taste
              </li>
              <li> Watchlists to keep track of what’s next
              </li>
              <li> Sneak peeks with trailers and behind-the-scenes content
              </li>
            </ul>
          </div>
          <img src='../images/about_img1.jpeg' className='about_img' />
        </div>

        <div className="about_section">
          <img src='../images/about_img2.jpeg' className='about_img' />
          <div className='about_desc three'>
            <h2>💡 Why The Movie App?</h2>
            <p>{"We’re not just another movie app—we’re built by fans, for fans. Our sleek design, smart features, and curated content make it easier than ever to find your next favorite film. No clutter, no confusion—just pure movie magic."}</p>
          </div>
        </div>

        <div className="about_section">
          <div className='about_desc four'>
            <h2>🎥 Our Story</h2>
            <p>{"The Movie App was born from a simple idea: movie discovery should be effortless and exciting. Frustrated by clunky interfaces and endless scrolling, we set out to build something better. Today, we’re proud to be a growing community of film enthusiasts who believe in the power of storytelling."}</p>
          </div>
          <img src='../images/about_img4.webp' className='about_img' />
        </div>

        <div className="about_section">
          <img src='../images/about_img3.jpeg' className='about_img' />
          <div className='about_desc five'>
            <h2>🤝 Our Values </h2>
            <p>{"We celebrate diversity in cinema and believe every voice matters. From global releases to local treasures"}</p>
          </div>

        </div>
        <Footer />
      </div>
      </div>
      )
}

      export default AboutUs
