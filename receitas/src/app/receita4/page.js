"use client"; 
import useSWR from 'swr'
import Link from "next/link";

export default function Movies2(){

    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_MYKEY}&s=bagdad`, fetcher)    

    if (error) return <div>falha na requisição...</div>

    if (!data) return <div>carregando...</div>

    return (
        <div>
          {data.Search.map((m) => (
            <div key={m.imdbID}>
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