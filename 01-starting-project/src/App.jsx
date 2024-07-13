import React from 'react';
import Header from './components/Header.jsx';
import {CORE_CONCEPTS} from './data.js';
import CoreConcept from './components/CoreConcept.jsx';
function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id='core-concepts'>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

      </main>
    </div>
  );
}

export default App;
