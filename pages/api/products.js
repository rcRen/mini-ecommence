import { lastIndexOf } from '../../model/product';

const p_model = require('../../model/product');

export default (req, res) => {
  const { page } = req.body;

  const products = p_model.sort((a, b) => 0.5 - Math.random());

  const eachPageDisplayNum = 20;

  const totalPage = Math.ceil(products.length / eachPageDisplayNum);

  const displayProducts = products.slice(page * 2, page * 2 + eachPageDisplayNum);
  // if (page * 2 + eachPageDisplayNum) > lastIndexOf={()}

  res.status(200).json({ displayProducts, totalPage });
};
