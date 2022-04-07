import { NextApiHandler } from 'next';
import { v4 as uuidV4 } from 'uuid';
import { generate } from '../../utils/generate';

const v4: NextApiHandler = async (req, res) => {
  res.json(generate(uuidV4));
};

export default v4;
