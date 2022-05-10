import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const token = JSON.parse(req.cookies.accessToken);
    const { name } = req.query;
    const response = await fetch(`${process.env.API_BASE_URL}/file/${name ? name : ''}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${name}`);
    res.send(response.body);
}
