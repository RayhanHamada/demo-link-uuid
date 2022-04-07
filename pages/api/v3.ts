import { NextApiHandler } from 'next';
import { v3 as uuidV3 } from 'uuid';
import { generate } from '../../utils/generate';

const v3: NextApiHandler = async (req, res) => {
  res.json(generate(uuidV3 as any));
};

export default v3;
