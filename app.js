const express =require('express');
const app = express();

//create a route    
app.get('/', (req, res) => {
    res.send('Hello World');
});

//Basic routing
app.get('/about', (req, res) => {
    res.send('About Page');
});

//create a route(Basic routing)
app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

//Route with query parameters (Dynamic segments)
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`); 
}); 

//Route with multiple parameters
app.get('/post/:postId/comment/:commentId', (req, res) => {
    const { postId, commentId } = req.params;
    res.send(`Post ID: ${postId}, Comment ID: ${commentId}`);
});

// Route with optional parameter
app.get('/user/:id?', (req, res) => {
    const { id } = req.params;

    if (id) {
        res.send(`User ID: ${id}`);
    } else {
        res.send('No User ID provided.');
    }
});

//creat simple server
//const PORT = process.env.PORT || 3000;
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
