import './App.css'
import Row from './Row.js'
import Banner from './Banner.js'
import requests from './requests.js'
function App() {
  return (
    <div className="App">
      {/* <h1>NETFLIX</h1> */}
      {/* NAV BAR */}
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Dcoumentaries" fetchUrl={requests.fetchDocumantaries} />
    </div>
  )
}

export default App
