import React from 'react';
import Header from './components/Header/Header.jsx';
import {CORE_CONCEPTS} from './data.js';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx'

function App(){
 function handleSelect(clickedButton){
    console.log(clickedButton);
 }
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
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=>handleSelect('Components')}>Components</TabButton>
            <TabButton onSelect={()=>handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={()=>handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={()=>handleSelect('States')}>States</TabButton>
          </menu>
          Kontent
        </section>

      </main>
    </div>
  );
}

export default App;
