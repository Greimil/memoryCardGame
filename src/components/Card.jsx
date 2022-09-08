import React from 'react'

export function Card  (props) {
  const {name,imgLink, setcharacterActive, caractherActive, score, setScore} = props
  
  const obj = {...caractherActive, [name]: true }

    
  return (
    <div  onClick={()=> {
        if (caractherActive[name]) {
            setcharacterActive({
                Auntie: false,
                Diaz: false,
                Diego: false,
                Mercedes: false,
                One: false,
                Paul: false,
                Lance: false,
                Tommy: false,})
            setScore(0)

            alert("Perdiste :(((((")

        } else {
            setcharacterActive(obj) 
            setScore(score + 1)
        }
        
    }}  className='h-[45%] w-1/5 border-primary border-2 rounded-lg cursor-pointer'>

    <img src={imgLink} alt={name}  className="h-4/5 w-full" />

        <div className=' h-1/5 text-center text-base flex items-center justify-center bg-primary'> <strong>{name}</strong>  </div>
    </div>
  )
}
