import React from 'react';
import SignUpForm from '../@SignUpForm/SignUpForm';
import './LandingPage.css';

export function LandingPage(props) {

    return (
        <div>
            <section className="hero__wrapper">
                <header>
                    <h1 className="hero__title">English Rules</h1>
                </header>
            </section>
            <section className="landing__wrapper">
                <h2 className="landing__title">Learning</h2>
                <h3 className="landing__subtitle">English Rules reinforces lessons through fun and interactive exercises that help solidify learning through gamification.</h3>
                <img className="landing__image" src={window.location.origin + "/landingpage1.png"} alt="Screenshot of Compound Sentences Game" />
                <img className="landing__image" src={window.location.origin + "/landingpage2.png"} alt="Screenshot of Word Types Game" />
                <img className="landing__image" src={window.location.origin + "/landingpage3.png"} alt="Screenshot of Prepositions Game" />
            </section>
            <section className="landing__wrapper">
                    <h2 className="landing__title">Customization</h2>
                    <h3 className="landing__subtitle">Exercises can be adapted to fit what students are currently learning, ensuring unlimited variety and maintaining repeatability.</h3>
            </section>
            <section className="landing__wrapper">
                <h2 className="landing__title">Feedback</h2>
                <h3 className="landing__subtitle">Receive a breakdown of student progress so you can assess how your class is doing.</h3>
                <p><b>Coming Soon!</b></p>
                <img className="feedbackImg" src={window.location.origin + "/feedback.png"} alt="screenshot of student answers and scores" />
            </section>
            <section className="landing__wrapper">
                <SignUpForm />
            </section>
        </div>
    )
    
}