import {useState} from 'react'
import PersonDetails from '../components/PersonDetails'
import PersonForm from '../components/PersonForm'

export default function One() {
  const [person,setPerson] = useState([])

  function addPerson(newPerson){
    setPerson([newPerson,...person])
  }


  return (

    <div className='row'>
           <div className="col">
              <h1 className='text-center text-primary display'>Person Details</h1>
              <PersonForm addPerson={addPerson}/>
              <PersonDetails person={person}/>
           </div>
    </div>
  )
}
