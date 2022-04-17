// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    await fetch(`${process.env.API_BASE_URL}/auth/signin`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
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
