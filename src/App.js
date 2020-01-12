import React, {useState} from 'react';

import service from './services'

import Header from './components/Header'
import Form from './components/Form'
import Resume from './components/Resume'
import Footer from './components/Footer/index';
import Loader from './components/Loader/index'

import './App.css';

const queryService = new service();

const App = () => {

  console.log(Loader());

  const [state, setState] = useState(
    {
      userError:false,
      userLoading:false,
      reposError:false,
      data:{}
    }
    );

  const createResume = async (userName) => {
    setState({...state, userLoading:true, data:{}});
    let data = {};
    const results = await Promise.all([queryService.getUser(userName), queryService.getRepos(userName)]);
    if(results[0]!=="error" && results[1]!=="error")
    {
      data = {...results[0], repos:[...results[1]]};
      setState({...state, userLoading:false, userError:false, data:{...data}});
    }
    else
    {
      setState({...state, userLoading:false, userError:true});
    }
    
    
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
          Object.keys(state.data).length!==0
          ?<Resume 
            login={state.data.login}
            bio={state.data.bio}
            html_url={state.data.html_url}
            created_at={state.data.created_at}
            location={state.data.location}
            repos={state.data.repos}
            followers={state.data.followers}
            country={state.data.country}
          /> 
          : null
        }
        {
         state.userLoading&&<Loader />
        }
        {
          state.userError&&<h3 className="error">OOOPS! Github don't find this user! </h3>
        }
      </main>
      <Footer />
      
    </>
  );
}

export default App;
