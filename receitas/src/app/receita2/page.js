import SocialMedias from './components/social';
import MyTable from './components/table';

export default function Principal(){

    let name = 'Skol';
    let mark = 'Redonda';
    return (
 
       <div>
 
          <h1>Nova Página</h1>
            
          <MariaPrea/>
          <MyTable nome={name} marca={mark}/>
          <SocialMedias/>
 
       </div>
 
    );
 
 }

export function MariaPrea(){

    return (
    
        <h2>Morreu Maria Preá...</h2>
    
    )
    
}