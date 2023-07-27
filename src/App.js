import './App.css';
import Row from './components/Row';
import { tmdbDetails } from './Request';
import Banner from './components/Banner';
import { Navbar } from './components/Navbar';

function App() {

  const animatedMovies = tmdbDetails.find(item => item.name === 'Animation Movies');


  return (
    <div className="App">
      {/* nav */}
      <Navbar />

      {/* banner */}
      <Banner
        key={animatedMovies.id}
        bannerTitle={animatedMovies.name}
        bannerFetchURL={animatedMovies.url}
        animatedMovies={animatedMovies}
      />

      {/* rows */}
      {tmdbDetails.map((detail) => (
        <Row key={detail.id} title={detail.name} fetchURL={detail.url} />
      ))}

    </div>
  );
}

export default App;