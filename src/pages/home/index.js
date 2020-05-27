import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Cadastro from '../cadastro';
import Lista from '../lista';
import Registro from '../registro';
import Edit from '../edit';
function Home() {
    return (
        <Router>
            <div className="nav-lateral">
                <header className="header-nav">
                    <h2>Exclaim</h2>
                    <nav>
                        <ul>
                            <li><NavLink to={'/'}>Cadastro</NavLink></li>
                            <li><NavLink to={'/lista'}>Listagem</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route exact path='/' component={Cadastro}></Route>
                    <Route  path='/lista' component={Lista}></Route>
                    <Route path='/registro/:token' component={Registro} />
                    <Route path='/edit/:token' component={Edit} />
                </Switch>
            </div>
        </Router>
    );
}

export default Home;