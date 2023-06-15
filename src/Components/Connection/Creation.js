import React, { useEffect, useState } from 'react';
import './Connection.css'; // Fichier CSS pour les styles de la composante
import { Link } from 'react-router-dom';

const Creation = () => {
  useEffect(() => {
    // Mettre à jour la taille de la composante lorsque la fenêtre est redimensionnée
    const handleResize = () => {
      const fullPageComponent = document.querySelector('.full-page-component');
      if (fullPageComponent) {
        fullPageComponent.style.height = `${window.innerHeight}px`;
      }
    };

    // Appeler la fonction de redimensionnement lors du chargement initial de la composante
    handleResize();

    // Ajouter un écouteur d'événement pour redimensionner la composante lorsque la fenêtre est redimensionnée
    window.addEventListener('resize', handleResize);

    // Nettoyer l'écouteur d'événement lorsque la composante est démontée
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour traiter les données du formulaire, comme la validation, l'envoi du formulaire, etc.
    console.log('Adresse e-mail:', email);
    console.log('Mot de passe:', password);
  };

  return (
    <div className="full-page-component background-image">
      <h1 ><Link to='/'id="page-title">AflamCom</Link></h1>
      <div className='page_identification'>
        <h1 id='identfier'>Création du compte</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              placeholder="Adresse E-mail"
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <input
              placeholder="Mot de passe"
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button id='btnSident' type="submit">Confirmer</button>
        </form>
        {/* <p className='motPforg'>Besoin d'aide?</p> */}
        {/* <p className='pgrPemierfoissur'>Vous avez déjà un compte AflamCom?<span id='AflemCom'><Link to='/AflamCom_Identification'>Identifiez-vous</Link></span></p> */}
        <p className='pgrPemierfoissur'>Vous avez déjà un compte AflamCom?</p>
        
        <p id='linkIde'><Link to='/AflamCom_Identification' id='AflemComCrea'>Identifiez-vous</Link></p>    
        
      </div>
    </div>
  );
};

export default Creation;