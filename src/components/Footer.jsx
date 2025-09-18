import React from 'react'
import './style/footer.scss'

const Footer = () => {
  return (
    <div>
    <div className='footer_container'>
      <div className='email_div'>
      <p>Ready to watch? Enter your email to create or restart your membership.</p>
      <input type="email" placeholder="Email address"className='footer_email_input'/>
      <button className='email_btn'><span>Get Started</span></button>
    
      </div>
      <div className='footer_col'>
      <table>
      <tbody>
      <tr>
      <td><span>FAQ</span></td>
      <td><span>Help Centre</span></td>
      <td>Accounts<span></span></td>
      <td><span>Media Centre</span></td>
      </tr>
      <tr>
      <td><span>Investor Relations</span></td>
      <td><span>Jobs</span></td>
      <td><span>Ways to Watch</span></td>
      <td><span>Terms of Use</span></td>
      </tr>


      <tr>
      <td><span>Privacy</span></td>
      <td><span>Cookie Preferences
      </span></td>
      <td><span>Contact Us</span></td>
      <td><span>Legal Notices</span></td>
      </tr>
      </tbody>
      </table>
      </div>
      <p className='copyrights'>All rights are reserve</p>
    </div>
   
    </div>
  )
}

export default Footer
