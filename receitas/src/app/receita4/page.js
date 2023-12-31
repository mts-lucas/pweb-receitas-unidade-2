"use client"; 
import useSWR from 'swr'
import Link from "next/link";

export default function Movies2(){

    const {data, error} = useSWR(`https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_MYKEY}&s=bagdad`, fetcher)    

    if (error) return <div>falha na requisição...</div>

    if (!data) return <div>carregando...</div>

    return (
        <div className='flex flex-col justify-center m-32'>
          {data.Search.map((m) => (
            <div key={m.imdbID} className='p-4 border-2 border-red-500 rounded-xl my-4 flex justify-center'>
              <Link href={`/receita4/${m.imdbID}`}>
                <p>{m.Title}</p>
              </Link>
            </div>
          ))}
        </div>
      );  

}



async function fetcher(url) {

    const res = await fetch(url);

    const json = await res.json();

    return json;

}