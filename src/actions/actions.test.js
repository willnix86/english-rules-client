import { TOGGLE_MODAL, toggleModal, registerUser, userLogin, SET_USER_DATA, setUserData } from './userActions';
import { CLEAR_AUTH, clearAuth, AUTH_SUCCESS, authSuccess, storeAuthInfo, setAuthToken } from './auth';
import { UPDATE_SENTENCE, updateSentence, SHOW_RESPONSE, showResponse, RESET_GAME, resetGame } from './conjunctionsActions';
import { ADD_WORD, addWord, DROP_WORD, dropWord, RESET_GAME as RESET_GAME_WORDTYPES, resetGame as resetGameWordTypes } from './wordTypeActions';
import { SET_SENTENCE, setSentence, SET_ANSWER, setAnswer, ADD_POINTS, addPoints, LOSE_LIFE, loseLife, RESET_GAME as RESET_GAME_PREPOSITIONS, resetGame as resetGamePrepositions } from './prepositionsActions';
import { API_BASE_URL } from '../config';

describe('User Actions', () => {

    describe('registerUser', () => {
        it('should dispatch nothing', () => {

            const user = {
                username: 'billynix',
                password: 'someid',
                firstName: 'Billy',
                lastName: 'Nix'
            };
    
            global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
                ok: true,
                json() {
                    return user;
                }
            }))
    
            const dispatch = jest.fn();
            return registerUser(user)(dispatch).then(() => {
                expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/users`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                });
                expect(dispatch).not.toHaveBeenCalledWith();
            })

        })
    });

    describe('userLogin', () => {
        it('should dispatch setUserData', () => {

            const userId= '35sdkl23';
            const authToken = 'sdaf324afjks90v';

            global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
                ok: true,
                json() {
                    return userId;
                }
            }))

            const dispatch = jest.fn();
            return userLogin(userId, authToken)(dispatch).then(() => {
                expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/users/protected/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + authToken
                    }
                });
                expect(dispatch).toHaveBeenCalledWith(setUserData(userId));
            })
        })
        
    });

    describe('setUserData', () => {
        it('Should return the action', () => {
            const user = {
                username: 'billynix',
                userId: 'someid'
            };
            const action = setUserData(user);
            expect(action.type).toEqual(SET_USER_DATA);
            expect(action.user).toEqual(user);
        });
    });

    describe('toggleModal', () => {
        it('Should return the action', () => {
            const action = toggleModal();
            expect(action.type).toEqual(TOGGLE_MODAL);
        });
    });

});

describe('Auth Actions', () => {

    describe('storeAuthInfo', () => {
        it('should dispatch setAuthToken', () => {

            const user = {
                userId: '35sdkl23',
                authToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWMxMWVhYzQ0OTdlNmMyMmJhNTJjODRiIiwidXNlcm5hbWUiOiJ0ZXNzLnRpbmdAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiVGVzcyIsImxhc3ROYW1lIjoiVGluZyJ9LCJpYXQiOjE1NDQ3Mzc5NDMsImV4cCI6MTU0NTE2OTk0Mywic3ViIjoidGVzcy50aW5nQGdtYWlsLmNvbSJ9.wOThpWJy4YaaVeHR8v7muJVFvNyxOsBQiWHUXRPKf5Y'
            };
    
            const dispatch = jest.fn();
            return storeAuthInfo(user.authToken, user.userId, dispatch).then(() => {
                expect(dispatch).toHaveBeenCalledWith(setAuthToken(user.authToken, user.userId));
            })

        })
    });

    describe('clearAuth', () => {
        it('Should return the action', () => {
            const action = clearAuth();
            expect(action.type).toEqual(CLEAR_AUTH);
        });
    });

    describe('authSuccess', () => {
        it('Should return the action', () => {
            const action = authSuccess();
            expect(action.type).toEqual(AUTH_SUCCESS);
        });
    });

});

describe('Conjunctions Actions', () => {
    
    describe('updateSentence', () => {
        it('Should return the action', () => {
            const sentence = "I like football, but my brother doesn't";
            const action = updateSentence(sentence);
            expect(action.type).toEqual(UPDATE_SENTENCE);
            expect(action.sentence).toEqual(sentence);
        });
    });
    
    describe('showResponse', () => {
        it('Should return the action', () => {
            const message = 'A message about the sentence';
            const mood = 'happy';
            const action = showResponse(message, mood);
            expect(action.type).toEqual(SHOW_RESPONSE);
            expect(action.message).toEqual(message);
            expect(action.mood).toEqual(mood);
        });
    });

    describe('resetGame', () => {
        it('Should return the action', () => {
            const action = resetGame();
            expect(action.type).toEqual(RESET_GAME);
        });
    });

});

describe('Word Type Actions', () => {
    
    describe('addWord', () => {
        it('Should return the action', () => {
            const word = {
                word: 'cheese',
                wordType: 'noun',
                target: 'Container',
                answer: ''
            };
            const action = addWord(word);
            expect(action.type).toEqual(ADD_WORD);
            expect(action.word).toEqual(word);
        });
    });
    
    describe('dropWord', () => {
        it('Should return the action', () => {
            const word = 'house';
            const target = 'Verbs';
            const answer = 'incorrectType';
            const action = dropWord(word, target, answer);
            expect(action.type).toEqual(DROP_WORD);
            expect(action.word).toEqual(word);
            expect(action.target).toEqual(target);
            expect(action.answer).toEqual(answer);
        });
    });

    describe('resetGame', () => {
        it('Should return the action', () => {
            const action = resetGameWordTypes();
            expect(action.type).toEqual(RESET_GAME_WORDTYPES);
        });
    });

});

describe('Prepositions Actions', () => {

    const sentence = 'I had a great time tonight looking _____ at the sky.';
    const answer = 'up';

    describe('setSentence', () => {
        it('Should return the action', () => {
            const action = setSentence(sentence);
            expect(action.type).toEqual(SET_SENTENCE);
            expect(action.sentence).toEqual(sentence);
        });
    });

    describe('setAnswer', () => {
        it('Should return the action', () => {
            const action = setAnswer(answer);
            expect(action.type).toEqual(SET_ANSWER);
            expect(action.answer).toEqual(answer);
        });
    });

    describe('addPoints', () => {
        it('Should return the action', () => {
            const action = addPoints();
            expect(action.type).toEqual(ADD_POINTS);
        });
    });

    describe('addPoints', () => {
        it('Should return the action', () => {
            const action = addPoints();
            expect(action.type).toEqual(ADD_POINTS);
        });
    });

    describe('loseLife', () => {
        it('Should return the action', () => {
            const action = loseLife();
            expect(action.type).toEqual(LOSE_LIFE);
        });
    });

    describe('resetGame', () => {
        it('Should return the action', () => {
            const action = resetGamePrepositions();
            expect(action.type).toEqual(RESET_GAME_PREPOSITIONS);
        });
    });
});
