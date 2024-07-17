import {useState} from 'react';
import {EXAMPLES} from '../data-with-examples.js';
import TabButton from './TabButton/TabButton.jsx';
import Section from './Section.jsx'
import Tabs from './Tabs.jsx';
export default function Examples (){
    const [Counter,setCounter] = useState();
    let tabContent = <p>Please click a button</p>;
    if (Counter) {
      tabContent = (
        <div id='tab-content'>
          <h3>{EXAMPLES[Counter].title}</h3>
          <p>{EXAMPLES[Counter].description}</p>
          <pre>
            <code>
              {EXAMPLES[Counter].code}
            </code>
          </pre>
        </div>
      );
    }
    function handleSelect(clickedButton){
        setCounter(clickedButton);
     }
    return (
        <Section title="Examples" id='examples'>
          <Tabs ButtonsContainer='menu' buttons={
            <>
            <TabButton isSelect={Counter === 'components'} onClick={()=>handleSelect('components')}>Components</TabButton>
            <TabButton isSelect={Counter === 'jsx'} onClick={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelect={Counter === 'props'} onClick={()=>handleSelect('props')}>Props</TabButton>
            <TabButton isSelect={Counter === 'state'} onClick={()=>handleSelect('state')}>States</TabButton>
            </>}>
            {tabContent}
          </Tabs>
          
        </Section>
    )
}