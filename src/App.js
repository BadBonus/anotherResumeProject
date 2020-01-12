import React, {useState} from 'react';

import service from './services'

import Header from './components/Header'
import Form from './components/Form'
import Resume from './components/Resume'
import Footer from './components/Footer/index';

import './App.css';

const queryService = new service();

const App = () => {

  const [state, setState] = useState({});

  const createResume = async (userName) => {
    // const data = await queryService.getUser(userName);
    // const repos = await queryService.getRepos(userName);
    let data = {};
    const results = await Promise.all([queryService.getUser(userName), queryService.getRepos(userName)]);
    data = {...results[0], repos:[...results[1]]};
    setState(data);
  };

  return (
    <>
      <Header />
      <main>
        <h1>
          My Github Resumé
        </h1>
        <Form createResume={createResume}/>
        {
          Object.keys(state).length!==0
          ?<Resume 
            login={state.login}
            bio={state.bio}
            html_url={state.html_url}
            created_at={state.created_at}
            location={state.location}
            repos={state.repos}
            followers={state.followers}
            country={state.country}
          /> 
          : null
        }
      </main>
      <Footer />
      
    </>
  );
}

export default App;
