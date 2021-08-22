const app = require('./app');
const PORT = 5000;
const server = app.listen(PORT, () => {
    console.log(`Listening to PORT - ${PORT}`);
})