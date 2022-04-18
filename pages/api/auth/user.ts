import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

type Data = {
    name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const token = JSON.parse(req.cookies.accessToken);
    await fetch(`${process.env.API_BASE_URL}/auth/get-user`, {
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
