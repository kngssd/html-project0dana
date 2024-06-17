import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>The Green Mile</h1>
    </header>
    <div className="container">
        <section className="intro">
            <h2>Introduction</h2>
            <p><em>The Green Mile</em> is a 1999 American fantasy drama film written and directed by Frank Darabont and based on Stephen King's 1996 novel of the same name.</p>
            <img src="https://movies-b26f.kxcdn.com/wp-content/uploads/2020/07/thegreenmile2.jpg" alt="The Green Mile Banner" />
        </section>
        <section className="plot">
            <h2>Plot Summary</h2>
            <p>The film is set in the 1930s and follows the story of Paul Edgecomb, a death row corrections officer, and his encounters with John Coffey, an enigmatic inmate who exhibits inexplicable healing powers.</p>
        </section>
    </div>
    <section class="rating">   
            <h2>Rating:</h2>
                <div className="rating">
                    <p> 8.6 out of 10 on <a target="_blank" href="https://www.imdb.com/title/tt0120689/">IMDb.</a> </p>
                </div>
                <div className="rating">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Ki4haFrqSrw?si=fVAumxrGjXBKFHYi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
        </section>
    </>
  )
}

export default App
