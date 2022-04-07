import { NextApiHandler } from 'next';
import { v5 as uuidV5 } from 'uuid';
import { generate } from '../../utils/generate';

const v5: NextApiHandler = async (req, res) => {
  res.json(generate(uuidV5 as any));
};

export default v5;
