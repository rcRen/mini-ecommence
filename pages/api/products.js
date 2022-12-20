const p_model = require('../../model/product');

export default (req, res) => {
  const { page } = req.body;

  const products = p_model.sort((a, b) => 0.5 - Math.random());

  const eachPageDisplayNum = 20;

  const totalPage = parseInt(products.length / eachPageDisplayNum);

  const displayProducts = products.slice(page * 2, page * 2 + eachPageDisplayNum);

  res.status(200).json({ displayProducts, totalPage });
};
