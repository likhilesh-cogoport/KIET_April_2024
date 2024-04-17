const express = require('express');
const fsPromises = require('fs/promises');
const productRouter = require('./routes/productRoute.js');
const userRouter = require('./routes/userRoute.js');

const app = express();

app.use(express.json());

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

app.listen(1400);

//2nd way 

// userRouter
//     .get(usersController.getUser)
//     .put(usersController.addUser)
//     .post(usersController.replaceUser)
//     .delete(usersController.deleteUser);

// app.route('/api/products')
//     .get(productController.getAllProducts)
//     .post(productController.addProduct);

// app.route('/api/products/:id')
//     .put(productController.replaceProduct)
//     .delete(productController.deleteProduct);

// app.route('/api/users')
//     .get(usersController.getUser)
//     .put(usersController.addUser)
//     .post(usersController.replaceUser)
//     .delete(usersController.deleteUser);



//1st way 

// app.get('/api/products', productController.getAllProducts);

// app.post('/api/products', productController.addProduct);

// app.put('/api/products/:id', productController.replaceProduct);

// app.delete('/api/products/:id', productController.deleteProduct);

// app.get('/api/users',usersController.getUser);

// app.post('/api/users', usersController.addUser);

// app.put('/api/users', usersController.replaceUser);

// app.delete('/api/users', usersController.deleteUser);

