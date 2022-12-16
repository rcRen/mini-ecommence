const CategoryModel = require('../../model/category');

export default (req, res) => {
  console.info('22222',CategoryModel);;
if(req.method === 'POST'){
  const { slug } = req.body;
  console.log('1111',slug);
  // res.status(200).json(CategoryModel[slug] || {});
}else{
  res.status(200).json(CategoryModel);
}
};
