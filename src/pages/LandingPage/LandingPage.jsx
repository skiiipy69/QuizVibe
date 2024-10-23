import React from 'react';
import './LandingPage.css';
const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="landing-header">
        <h1 className="title">Bienvenue sur <span>QuizVibe</span></h1>
        <p className="subtitle">Testez vos connaissances avec des quiz interactifs amusants !</p>
        <div className="cta-buttons">
          <button className="cta start-quiz">Commencez un Quiz</button>
          <button className="cta learn-more">En savoir plus</button>
        </div>
      </header>

      {/* Description Section */}
      <section className="about">
        <h2>Découvrez QuizVibe</h2>
        <p>
          QuizVibe est une plateforme de quiz conçue pour tester et améliorer vos connaissances. Avec une variété
          de thèmes, des niveaux de difficulté et des défis amusants, vous pouvez jouer seul ou avec des amis.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Pourquoi choisir QuizVibe ?</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Différents Thèmes</h3>
            <p>Explorez des quiz dans divers domaines, de l'histoire à la culture pop.</p>
          </div>
          <div className="feature-item">
            <h3>Défis Amicaux</h3>
            <p>Invitez vos amis à participer et voyez qui est le meilleur !</p>
          </div>
          <div className="feature-item">
            <h3>Suivi de Progrès</h3>
            <p>Gagnez des badges et suivez vos progrès à mesure que vous apprenez.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2024 QuizVibe - Tous droits réservés</p>
      </footer>
    </div>
  );
};

export default LandingPage;
