import clientPromise from '../../lib/mongodb'
import { ObjectId } from 'mongodb';

export default async function handler(req, res){
    const query = req.query.movie_id;   
    const client = await clientPromise;    

    // console.log(query);
    const db = client.db("sample_mflix");
    const data = await db.collection("movies").findOne({_id: query})

    const movies = JSON.parse(JSON.stringify(data))
    console.log("here")
    console.log(movies)
    res.json(data);
}
