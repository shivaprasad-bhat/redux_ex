import React from 'react';
import { Provider } from 'react-redux';
import Posts from './components/Posts';
import Postform from './components/Postform';
import './App.css';
import store from './store';
function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <Postform />
                    <hr />
                    <Posts />
                </header>
            </div>
        </Provider>
    );
}

export default App;
