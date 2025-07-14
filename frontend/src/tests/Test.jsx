import { useEffect, useState } from 'react';

function Test (){
    const [message, setMessage] = useState("");

    useEffect(()=>{
        fetch("/backend/test")
            .then(res => res.text())
            .then( m=> setMessage(m))
    }, [])

    console.log("테스트")

    return (
      <div>
        <p>
          Hi! {message}
        </p>
      </div>
    )
}

export default Test;