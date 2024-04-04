const client = require('./client');


async function createOrder(body){
  const {cart_id, customer_id, order_date, total_price, processed} = body;
  try {
      const { rows: [ order ] } = await client.query(`
      INSERT INTO orders(cart_id, customer_id, order_date, total_price, processed)
      VALUES($1, $2, $3, $4, $5) 
      RETURNING *;
      `, [cart_id, customer_id, order_date, total_price, processed]);


      return order;
  } catch (error) {
      throw error;
  }
}


module.exports = {createOrder}