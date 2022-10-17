
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'HI! IM BEAU';
  // const person = { name: 'yoshi', age: 30}
const link = "##"

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
