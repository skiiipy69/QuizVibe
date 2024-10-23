import React from 'react';
import './LandingPage.css'; // Link to your CSS file

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to QuizVibe</h1>
        <p>Explore, Learn, and Challenge Yourself with Engaging Quizzes!</p>
        <div className="cta-buttons">
          <button className="start-quiz">Start a Quiz</button>
          <button className="learn-more">Learn More</button>
        </div>
      </header>
      <section className="features">
        <h2>Why Choose QuizVibe?</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Variety of Topics</h3>
            <p>From history to pop culture, we have quizzes for everyone.</p>
          </div>
          <div className="feature-item">
            <h3>Challenge Your Friends</h3>
            <p>Compete with friends and see who tops the leaderboard!</p>
          </div>
          <div className="feature-item">
            <h3>Track Your Progress</h3>
            <p>Earn badges and track your knowledge growth over time.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
