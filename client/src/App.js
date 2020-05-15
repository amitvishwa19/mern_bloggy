import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

//Components
import Home from './components/Home';
import Blog from './components/post/Posts';
import AddPost from './components/post/AddPost';


//Auth Components
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import SinglePost from './components/post/SinglePost';
import EditPost from './components/post/EditPost';
import Header from './components/layouts/Header';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authAction';



export class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Header />
                        <Route exact path="/" render={props => (
                            <Home />
                        )} />

                        <Route exact path="/posts" component={Blog} />
                        <Route path="/post/add" component={AddPost} />
                        <Route path="/post/show/:id" component={SinglePost} />
                        <Route path="/post/edit/:id" component={EditPost} />



                        <Route path="/auth/login" component={Login} />
                        <Route path="/auth/register" component={Register} />

                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App
