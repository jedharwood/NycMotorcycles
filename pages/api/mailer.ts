import { NextApiResponse, NextApiRequest } from 'next'

const mailer = (req: NextApiRequest, res: NextApiResponse): void => {
  const data = req.body
  console.log('data', data)

  try {
    res.status(200).json({ message: 'Post success' });
  } catch (error) {
    res.status(500).json({ message: 'Post fail' });
  }
};

export default mailer;

