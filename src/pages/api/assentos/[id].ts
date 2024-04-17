import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    eventoId: string | string[] | undefined;
    assentos: string[]
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    const { id } = req.query;
    if (req.method === 'GET') {
        res.status(200).json({ eventoId: id, assentos: ['A1', 'A2', 'B1', 'B2'] });
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
