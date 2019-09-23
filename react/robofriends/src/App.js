1. import React from 'react';
2. import logo from './logo.svg';
3. import './App.css';
4.  
5. class App extends Component {
6.   render() {
7.     return (
8.       <div className="App">
9.         <header className="App-header">
10.           <img src={logo} className="App-logo" alt="logo" />
11.           <p>
12.             Edit <code>src/App.js</code> and save to reload.
13.           </p>
14.           <a
15.             className="App-link"
16.             href="https://reactjs.org"
17.             target="_blank"
18.             rel="noopener noreferrer"
19.           >
20.             Learn React
21.           </a>
22.         </header>
23.       </div>
24.     );
25.   }
26. }
27.  
28. export default App;