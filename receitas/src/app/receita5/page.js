"use client";

import useSWR from 'swr'

import {useState} from 'react'

import Link from "next/link";



export default function Movies3(){

    const [url, setUrl] = useState('')

    const {data, error} = useSWR(url, theFetcher)



    const onClickHandler = (e) => {

        e.preventDefault()

        if (url === '') setUrl(`https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_MYKEY}&s=bagdad`)

        else setUrl('')

    }



    return (

        <div>

            <TheLink url={url} handler={onClickHandler}/>

            <TheMovies data={ error?{error:'Erro na pesquisa'}: data ? data: {Search:''} } show={url !== ''}/>

        

        </div>

    )

}


async function theFetcher(url) {

    if (url === null || url === '') return {Search:''}

    const res = await fetch(url);

    const json = await res.json();

    return json;

}

export function TheMovies({data,show}){

    if (!show) return (<div></div>)    

    if (data.error) return (<div>falha na requisição</div>)

    if (data.Search === '' ) return (<div>carregando...</div>)

    return (
        <div className='flex flex-col justify-center'>
          {data.Search.map((m) => (
            <div className='flex justify-center m-2' key={m.imdbID}>
              <Link href={`/receita5/${m.imdbID}`}>
                <p className='bg-red-600 rounded-lg p-3' >{m.Title}</p>
              </Link>
            </div>
          ))}
        </div>
      );

}

export function TheLink({url, handler}){    

    return (

        <div className='flex justify-center'>

            <a className='bg-blue-500 rounded-lg p-3' href="/receita5" onClick={handler}> {url === '' ? 'Mostrar' : 'Ocultar'} </a>

        </div>

    )

}