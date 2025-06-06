const express = require('express');
const router = express.Router();

const sampleListings = [
  { id: 1, address: '123 Maple St, Omaha, NE', price: '$250,000', description: 'Charming 3 bed 2 bath.' },
  { id: 2, address: '789 Oak St, Omaha, NE', price: '$320,000', description: 'Spacious 4 bed 3 bath.' }
];

router.get('/', (req, res) => {
  res.render('listings', { title: 'Listings', listings: sampleListings });
});

module.exports = router;
