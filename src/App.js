import './App.css';
import Row from './Row';
import { tmdbDetails } from './Request';
import Banner from './Banner';
import { Navbar } from './Navbar';

function App() {

  const netflixOriginals = tmdbDetails.find(item => item.name === 'Netflix Originals');
  return (
    <div className="App">
      {/* nav */}
      <Navbar />

      {/* banner */}
      <Banner
        key={netflixOriginals.id}
        bannerTitle={netflixOriginals.name}
        bannerFetchURL={netflixOriginals.url}
        netflixOriginals={netflixOriginals}
      />

      {/* rows */}
      {tmdbDetails.map((detail) => (
        <Row key={detail.id} title={detail.name} fetchURL={detail.url} />
      ))}

    </div>
  );
}

export default App;