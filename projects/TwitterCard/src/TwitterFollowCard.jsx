import { useState } from "react"

export function TwitterFollowCard ({formatUserName,userName,name,initialIsFollowing}){

    const imageSrc = `https://unavatar.io/${userName}`
    
    // cambiar el estado follow o unfollow pasandole el estado inicial
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    
    // cambiar el texto del boton
    const text = isFollowing ? 'Unfollow' : 'Follow'
    
    // cambiar la clase del boton
    const buttonClassName = isFollowing 
    ? 'twittercard-btnfollow is-following' 
    : 'twittercard-btnfollow'

    // pasarle una funcinon al boton
    const handleclick = () =>{
        setIsFollowing(!isFollowing)
    }

    return(
        <article className='twittercard'>
            <header className='twittercard-header'>
                <img className='twittercard-avatar' src={imageSrc} alt="avatar" />
                <div className='twittercard-info'>
                    <strong className='twittercard-nombre'>{name}</strong>
                    <span className='twittercard-usuario'>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleclick} /*funcion*/ >
                    {text}
                </button>
            </aside>
        </article>
    )
}