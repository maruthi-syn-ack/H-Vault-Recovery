import { create, globSource } from 'ipfs-http-client';
// import fetc
h from 'node-fetch';
import { insert, update } from './database.js'
import fs from "fs"
const client = create();
console.log(client.getEndpointConfig());


export async function insertIPFS(path, firstName, lastName, DOB, bloodGroup, phoneNumber, email, gender, martialStatus) {

    //  read the file from the path given
    const f = fs.readFileSync(path);

    // ipfs api to add the file into the ipfs 
    const file = await client.add(
        {
            content: f
        });

    console.log(String(file.cid));
    
}
