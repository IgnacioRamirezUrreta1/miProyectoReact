import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

const formatUserName = (userName) => `@${userName}`


    return (
       
     <section className="App">
      <TwitterFollowCard formatUserName={formatUserName} userName="midudev" name= "Miguel Angel" isFollowing={true} />
      <TwitterFollowCard formatUserName={formatUserName} userName="pheralb" name= "Pablo" isFollowing={false} />
      <TwitterFollowCard formatUserName={formatUserName} userName="elonmusck" name= "Elon" isFollowing />
    </section>
    )
}



/* Le estoy pasando una funcion como parametro: 
Solo a través de props, como en este ejemplo:
*/

//min 1.20