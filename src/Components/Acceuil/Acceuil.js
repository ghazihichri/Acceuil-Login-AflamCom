import React, { useEffect, useState } from 'react'
import './Acceuil.css'
import { Link } from 'react-router-dom';

function Acceuil() {
    const [email, setEmail] = useState('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Adresse e-mail:', email);
    };  
    const [langue, setLangue] = useState('fr');

    const handleLangueChange = (e) => {
        setLangue(e.target.value);
    };
    useEffect(() => {
        const paragraphs = document.getElementsByClassName('break-line');
        for (let i = 0; i < paragraphs.length; i++) {
          const paragraph = paragraphs[i];
          const text = paragraph.innerText;
          const newText = text.replace(/(.{43})/g, '$1\n');
          paragraph.innerText = newText;
        }
      }, []);
  return (
    <div className="background-container">
      <div className='header_Acc'>
            <h1 id='titrePg'>AflamCom</h1>
            <div className='droite_Header'>
            <select value={langue} onChange={handleLangueChange} id='selectLg'>
                <option value="fr">Français</option>
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="ar">العربية</option>
            </select>
                <button id='Btn_Cnx'><Link to='/AflamCom_Identification' id='LinkLinkConf'>S'identfier</Link></button>
            </div>
      </div>
      <div className='Body_Acc'>
        <p className='Pgr_AflamCom'>
          Films , séries , mangas et bien plus en illimité
        </p>
        <p className='break-line'>
        Prêt à regarder AflamCom ? Saisissez votre adresse e-mail pour vous abonner.
        </p>
        <form onSubmit={handleSubmit} className='pageACCSID'>
            <input
              placeholder="Adresse E-mail"
              type="email"
              id="emailAcc"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button id='btnSident' type="submit"><Link to='/AflamCom_Creation_Du_Compte' id='LinkLinkConf'>Confirmer</Link></button>
        </form>    
      </div>
    </div>
  )
}

export default Acceuil