import CoreConcept from './CoreConcept/CoreConcept.jsx';
import { CORE_CONCEPTS } from '../data.js';
export default function CoreConcepts(){
    return (
        <section id='core-concepts'>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=><CoreConcept key={conceptItem.title} {...conceptItem} />)}
          </ul>
        </section>
    )
}