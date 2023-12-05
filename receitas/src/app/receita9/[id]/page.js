export const dynamicParams = true

export async function generateStaticParams() {
  return [
            {id: "tt0095801"},

            {id: "tt0033152"},

            {id: "tt0015400"},

            {id: "tt0041149"},

            {id: "tt0044388"},

            {id: "tt0098746"},

            {id: "tt0046322"},

            {id: "tt0046497"},

            {id: "tt0044389"},
        ]
}

export default async function TheMovie({ params }){


    const data = await fetcher(`https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_MYKEY}&i=${params.id}`)

    if (!data) return <div className="text-white font-bold">Carregando...</div>

    if (data.Error) return <div className="text-white font-bold">Erro</div>

    if (!data.Title) {
        return <div className="text-red-600 text-6xl font-bold flex items-center justify-center h-screen">Não encontrado na base de dados</div>;
      }

    return (
        <div className='flex flex-col justify-center m-60 items-center'>
            <h1 className='text-red-600 flex justify-center text-3xl py-6'>{data.Title} ({data.Year})</h1>
            <img className='border-red-600 border-8 rounded-xl justify-center w-56' src={data.Poster} alt={data.Title} />
            <p className='flex justify-center text-3xl py-6'>imDB Note: {data.imdbRating}</p>
        </div>
    ); 

}

async function fetcher(url) {

    const res = await fetch(url);

    const json = await res.json();

    return json;

}