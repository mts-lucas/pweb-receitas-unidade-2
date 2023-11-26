import SocialMedias from './components/social';
import MyTable from './components/table';

export default function Principal(){

    let name = 'Skol';
    let mark = 'Redonda';
    return (
 
       <div className="flex flex-col justify-center items-center">
 
          <h1 className='text-gray-400 font-bold text-4xl'>Nova Página</h1>
            
          <MariaPrea/>
          <MyTable nome={name} marca={mark}/>
          <SocialMedias/>
 
       </div>
 
    );
 
 }

export function MariaPrea(){

    return (
    
        <h2 className='text-violet-500 font-bold text-4xl'>Morreu Maria Preá...</h2>
    
    )
    
}