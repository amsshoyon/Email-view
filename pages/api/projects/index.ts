import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const token = JSON.parse(req.cookies.accessToken);
    const id = req.query?.id;
    const method = req.method;

    if( method === 'GET'){
        await fetch(`${process.env.API_BASE_URL}/project/${id ? id : ''}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                res.status(200).json(data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    if( method === 'POST'){
        await fetch(`${process.env.API_BASE_URL}/project`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(req.body)
        })
            .then(res => res.json())
            .then(data => {
                res.status(200).json(data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    
    
}
