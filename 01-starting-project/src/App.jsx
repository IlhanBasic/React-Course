import React from 'react';
import {useState} from 'react';
import Header from './components/Header/Header.jsx';
import {CORE_CONCEPTS} from './data.js';
import {EXAMPLES} from './data-with-examples.js';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx'

function App(){
  const [Counter,setCounter] = useState();
 function handleSelect(clickedButton){
    setCounter(clickedButton);
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
            <TabButton isSelect={Counter === 'components'} onSelect={()=>handleSelect('components')}>Components</TabButton>
            <TabButton isSelect={Counter === 'jsx'} onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelect={Counter === 'props'} onSelect={()=>handleSelect('props')}>Props</TabButton>
            <TabButton isSelect={Counter === 'state'} onSelect={()=>handleSelect('state')}>States</TabButton>
          </menu>
          {!Counter && <p>Please click a button</p>}
          {Counter && <div id='tab-content'>
            <h3>{EXAMPLES[Counter].title}</h3>
            <p>{EXAMPLES[Counter].description}</p>
            <pre>
              <code>
                {EXAMPLES[Counter].code}
              </code>
            </pre>
          </div>}
        </section>

      </main>
    </div>
  );
}

export default App;
