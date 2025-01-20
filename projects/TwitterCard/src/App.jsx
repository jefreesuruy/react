import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    const formatUserName = (userName) => `@${userName}`

    // cambiar el estado [valoractual,valoractualizado]
    const [name,setName] = useState('jefreesuruy')

    return(
        <section className='App'>
            <TwitterFollowCard 
            formatUserName={formatUserName}
            initialIsFollowing={true} // valor inicial del boton
            userName={name} //valor a actualizar
            name="Jefree Suruy"/>

        <TwitterFollowCard 
            formatUserName={formatUserName} 
            userName="FCBarcelona" 
            name="FC Barcelona"/>

        <TwitterFollowCard 
            formatUserName={formatUserName} 
            userName="leomessisite" 
            name="Leo Messi"/>

        <button onClick={()=> setName('fredysuruy')}>
            Cambiar Nombre
        </button>
        </section>
    )
}
