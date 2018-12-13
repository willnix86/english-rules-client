import React from 'react';
import WordTypeForm from './WordTypeForm';
import PrepositionsForm from './PrepositionsForm';

import './EditGames.css';

export default function EditGames() {

        return (
            <div className="edit__wrapper">
                <WordTypeForm />
                <PrepositionsForm />
            </div>
        )
        
};