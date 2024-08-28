import React, { useState } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from 'apollo-boost'
import { PokemonsContainer } from './containers/PokemonsContainer'

  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/',
    cache: new InMemoryCache(),
  });

  
  function App() {
  return (
    <ApolloProvider client={client}>
      
        <PokemonsContainer />
            </ApolloProvider>
  )
}
  /*[count, setCount] = useState(0)
  
    return
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
} */

export default App;
