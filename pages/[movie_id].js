import Head from 'next/head'

export default function MovieDetails({movie}) {

    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {movie && (
                <>
                    <div>
                        <h1>Movie Details for: {movie.title}</h1>
                    </div>
                    <div>
                        <img src={movie.poster}/>
                    </div>  
                </>   
                )}           
        </div>            
    )
}

export async function getServerSideProps(context) {
    const query = context.query.movie_id;
    const data = await fetch(`http://localhost:3000/api/moviedetails?movie_id=${query}`)
    const movie = await data.json();   

    // console.log(data);
    return {
        props: {movie},
    }
}