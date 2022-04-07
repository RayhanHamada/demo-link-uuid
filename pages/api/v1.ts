import { NextApiHandler } from 'next';
import { v1 as uuidV1 } from 'uuid';
import { generate } from '../../utils/generate';

const v1: NextApiHandler = async (req, res) => {
  res.json(generate(uuidV1));
};

export default v1;
