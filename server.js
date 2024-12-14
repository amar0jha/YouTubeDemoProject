const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51QVS3b1lHcmCvGyovpFH7GuyNY0F8ZzJrAYViilIz0a4jFD2rpEfIwWPaknfQ0Xg4ypR5hAc6JcDYaNlEmuZ3QKX00Dzc18rv6');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});