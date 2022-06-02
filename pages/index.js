import Head from 'next/head'
import clientPromise from '../lib/mongodb'

export default function Home({movies}) {
    console.log(movies)
    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div>
                <h1>Building Modern Apps with Nextjs and Mongodb</h1>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {

    const client = await clientPromise;
    const db = client.db("sample_mflix");

    const data = await db.collections("movies").find({});
    const movies = JSON.parse(JSON.stringify(data));

    return {
        props: {movies},
    }
}

