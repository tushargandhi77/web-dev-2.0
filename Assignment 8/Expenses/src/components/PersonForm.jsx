import {useRef} from 'react'

export default function PersonForm({addPerson}) {
    const personnameref = useRef(null)
    const  personageref = useRef(null)

    function handleSubmit(e){
        e.preventDefault()
        const person_to_add ={
            personname: personnameref.current.value,
            personage: personageref.current.value,
        }

        addPerson(person_to_add)
        personnameref.current.value = ""
        personageref.current.value = ""
    }
  return (
    <div className='row m-2'>
        <form action="" method='post' onSubmit={handleSubmit}>
            <div className="col my-2">
                <input ref={personnameref} type="text" className='form-control' placeholder='Person Name' required />
            </div>
            <div className="col my-2">
                <input type="text" ref={personageref} className='form-control' placeholder='Person Age' required/>
            </div>
            <div className="col my-2">
                <input type="submit" className='btn btn-primary w-100' value="submit" />
            </div>
        </form>
      
    </div>
  )
}
