import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
     <div className='footer__bg' >
      <div className='footer__container container grid'>
        <div>
            <h1 className='footer__title'>Diego Cascavita</h1>
            <span className='footer__subtitle'>Frontend Dev</span>
        </div>
        <ul className='footer__link'>
            <li>
                <a href='#services' className='footer__link'></a>
            </li>
            <li>
                <a href='#services' className='footer__link'></a>
            </li>
            <li>
                <span href='#services' className='footer__link'></span>
            </li>
            <a className='email'>diegocascavita@gmail.com</a>
        </ul>

        <div className='footer socials'>
            <a href="https://www.linkedin.com/in/diego-alejandro-cascavita-poveda-890524124/" className='footer__social'>
                <i class="uil uil-linkedin"></i>
            </a>
            {/* link del portfolio aqui */}
            <a href="" className='footer__social'>
                <i class="uil uil-bag"></i>
            </a>
            <a href="https://github.com/DiegoCascavita" className='footer__social'>
                <i class="uil uil-github"></i>
            </a>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Footer