import logo from './logo.svg';

function App(props) {
  const subject = props.subject;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Django and {subject}!
        </p>
      </header>
    </div>
  );
}

export default App;
