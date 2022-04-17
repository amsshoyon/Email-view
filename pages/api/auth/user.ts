import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    console.log('req.cookies.accessToken:', req.cookies.accessToken)
    await fetch(`${process.env.API_BASE_URL}/auth/get-user`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${req.cookies.accessToken}`
        }   
    })
        .then(res => res.json())
        .then(data => {
            console.log('data:', data)
            res.status(200).json(data)
        })
        .catch(error => {
            console.log(error)
        })
}
