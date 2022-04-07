import { NextApiHandler } from 'next';
import { generate } from '../../utils/generate';

const v1: NextApiHandler = async (req, res) => {
  res.json(generate);
};

export default v1;
