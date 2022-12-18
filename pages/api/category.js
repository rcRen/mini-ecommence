const c_model = require('../../model/category');
const p_model = require('../../model/product');

export default (req, res) => {
  const { slug , page} = req.body;

  const eachPageDisplayNum = 2;

  const category = c_model.filter((data) => data.slug === slug)[0];

  const products = p_model.filter((data) => data.category === category.id);

  const totalPage = products.length/eachPageDisplayNum;

  const displayProducts = products.slice(page * 2, (page * 2 + eachPageDisplayNum));

  res.status(200).json({displayProducts,totalPage});
};
