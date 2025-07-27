export function TwitterFollowCard ({formatUserName,userName,name, isFollowing}) {

const imageSrc = `https://unavatar.io/${userName}`


    return(
          <article className= 'tw-followCard' >

            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar'
                alt= "El avar" 
                src= {imageSrc} // es una expresion  y la expresion se evalua con {}
                />
          
                <div className='tw-followCard-info'>   
                    <strong>{name}</strong>
                    <span> {formatUserName(userName)}</span>
                </div>

            </header>

            <aside>

                <button className='tw-followCard-button'>
                    Seguir
                </button>

            </aside>

        </article>


    )

}