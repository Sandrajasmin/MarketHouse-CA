import './App.css';
import Header from './global/header';
// import Homepage from './pages/homepage';
import DetailPage from './pages/detailPage';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Homepage/> */}
      <DetailPage/>
    </div>
  );
}

export default App;
