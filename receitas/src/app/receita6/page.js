"use client";

import useSWR from 'swr'

import {useState} from 'react'

export function TheForm(){

    return (

        <div>

            <form>

                <label htmlFor="titleSearchString">Filtro de Título</label>

                <input className='text-red-500' id="titleSearchString" name="titleSearchString" type="text" autoComplete="true"/>

            </form>

        </div>

    )

}

export function TheMovies({data,show}){

    if (!show) return (<div></div>)

    if (!data) return (<div></div>)

    if (data.error) return (<div>falha na pesquisa</div>)

    if (data.Search === '' ) return (<div>carregando...</div>)

    return (

        <div>

            { data.Search.map( (m) => <div key={m.imdbID}>{m.Title} --- {m.Year}</div>  ) }            

        </div>

    )

}



export function TheLink({url, handler}){

    return (

        <div>

            <a href="/receita6" onClick={handler}> {url === '' ? 'Mostrar' : 'Ocultar'} </a>

        </div>

    )

}

export default function Movies33() {
    const [state, setState] = useState({ url: '', titleSearchString: '' });
  
    const { data, error } = useSWR(state.url, async (u) => {
      if (!state.url || !state.titleSearchString) return { Search: '' };
  
      const res = await fetch(`${state.url}/?apiKey=${process.env.NEXT_PUBLIC_MYKEY}=${state.titleSearchString}`);
      const json = await res.json();
  
      return json;
    });
  
    const onClickHandler = (e) => {
      e.preventDefault();
  
      let s = document.getElementById('titleSearchString').value;
  
      if (state.url === '') {
        setState({ url: 'http://www.omdbapi.com', titleSearchString: s });
      } else {
        setState({ url: '', titleSearchString: s });
      }
    };
  
    return (
      <div>
        <TheForm />
        <TheLink url={state.url} handler={onClickHandler} />
        <TheMovies data={data ? data : { Search: '' }} show={state.url !== ''} />
        {state.url !== '' && data && data.Search.length === 0 && <p>Nenhum resultado encontrado.</p>}
      </div>
    );
  }