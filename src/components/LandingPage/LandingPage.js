import React from 'react';
import {SignUpForm} from '../SignUpForm/SignUpForm';
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
                <h3 className="landing__subtitle">English Rules reinforces lessons through fun and interactive mini-games that help solidify learning through gamification</h3>
                <img className="landing__image" src={window.location.origin + "/landingpage1.png"} alt="Screenshot of Compound Sentences Game" />
                <img className="landing__image" src={window.location.origin + "/landingpage2.png"} alt="Screenshot of Word Types Game" />
            </section>
            <section className="landing__wrapper">
                <h2 className="landing__title">Customize Games and Build on the Basics</h2>
                <h3 className="landing__subtitle">Each game can be adapted to fit what students are currently learning, ensuring unlimited variety and maintaining repeatability</h3>
            </section>
            <section className="landing__wrapper">
                <h2 className="landing__title">Add New Games from the English Rules Library</h2>
                <h3 className="landing__subtitle">Coming Soon!</h3>
            </section>
            <section className="landing__wrapper">
                <SignUpForm />
            </section>
        </div>
    )
    
}