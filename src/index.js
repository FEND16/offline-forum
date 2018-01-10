import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import fakePosts from './fakePosts';
import App from './components/App';
import './style.css';

const postsInLocalStorage = localStorage.getItem('posts');
if(!postsInLocalStorage){
  localStorage.setItem('posts', JSON.stringify(fakePosts.data));
}

const mountPoint = document.getElementById('root');

ReactDOM.render(<App />, mountPoint);

registerServiceWorker();
