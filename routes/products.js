const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get('/:id', (req, res) => {
    console.log('query_id',typeof req.params.id)
    db.query(
      `
    SELECT products.id as product_id, products.name as product_name, products.description, products.price, products.condition, products.category, products.main_photo, products.sub_photo1, products.sub_photo2, products.sub_photo3, products.sub_photo4, products.seller_id, products.seller_id, users.id as user_id, users.name as user_name, users.profile_photo
    FROM products
    JOIN users ON users.id = products.seller_id
    WHERE products.id = ${req.params.id}`
    )
    .then(data =>{
      console.log(data.rows, 'this is data')
      res.json(data.rows)})
  });

  return router;
};

