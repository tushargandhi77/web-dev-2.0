import {useRef} from 'react'

export default function MessageForm({addMessage}) {
    const messageRef = useRef(null)

    function handlesubmit(e){
        e.preventDefault()
        const message = {
            message : messageRef.current.value
        }
        addMessage(message)
        messageRef.current.value=''
    }
  return (
    <div>
      <div className="row">
            <form action="" method='post' onSubmit={handlesubmit}>
                <div className="col mb-2">
                    <input type="text" ref={messageRef} className='form-control' required/>
                </div>
                <div className="col mb-2">
                    <input type="submit" className='btn btn-primary w-100' value="submit"/>
                </div>
            </form>
      </div>
    </div>
  )
}
