const c_model = require('../../../model/category');

export default (req, res) => {
  const data = c_model.map((item) => {
    return {
      slug: item.slug,
      title: item.title,
    };
  });

  res.status(200).json({ status: 'succeeded', data });
};
