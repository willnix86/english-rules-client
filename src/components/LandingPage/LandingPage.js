import React from 'react';
import SignUpForm from '../SignUpForm/SignUpForm';
import './LandingPage.css';

export function LandingPage(props) {

    return (
        <div>
            <section className="hero__wrapper">
                <header>
                    <h1 className="hero__title">English Rules</h1>
                    <h3 className="hero__subtitle">Grammar, gamified</h3>
                </header>
            </section>
            <section className="landing__wrapper">
                <h2 className="landing__title">Learning Through Play</h2>
                <h3 className="landing__subtitle">English Rules reinforces lessons through fun and interactive exercises that help solidify learning through gamification</h3>
                <img className="landing__image" src={window.location.origin + "/landingpage1.png"} alt="Screenshot of Compound Sentences Game" />
                <img className="landing__image" src={window.location.origin + "/landingpage2.png"} alt="Screenshot of Word Types Game" />
                <img className="landing__image" src={window.location.origin + "/landingpage3.png"} alt="Screenshot of Prepositions Game" />
            </section>
            <section className="landing__wrapper">
                <h2 className="landing__title">Customize Exercises and Build on the Basics</h2>
                <h3 className="landing__subtitle">Each exercise can be adapted to fit what students are currently learning, ensuring unlimited variety and maintaining repeatability</h3>
            </section>
            <section className="landing__wrapper">
                <h2 className="landing__title">Get Feedback About Your Students' Progress</h2>
                <h3 className="landing__subtitle">English Rules stores a record of each students' answers so you can track who's still to complete an exercise and how well they've done when they have</h3>
            </section>
            <section className="landing__wrapper">
                <SignUpForm />
            </section>
        </div>
    )
    
}