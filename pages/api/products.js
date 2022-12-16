import ProductModel from '../../model/product';


export default (req, res) => {
  const data = res.status(200).json(ProductModel);
};