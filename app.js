const express = require('express');
const path = require('path');
const app = express();

const indexRouter = require('./routes/index');
const listingsRouter = require('./routes/listings');
const aboutRouter = require('./routes/about');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/listings', listingsRouter);
app.use('/about', aboutRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
