let express = require('express');
let app = express();
let postRoute = require('./routes/post');

// middleware
app.use((req, res, next) => {
	console.log(`${new Date().toString()} => ${req.originalUrl}
`);
	next();
});
app.use(postRoute);
app.use(express.static('public'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server has started on ${PORT}`));
