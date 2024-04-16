# ecommerce-node-js

# Application Run Steps
npm i
npm start

# Api Details

// Auth: Register
api : http://localhost:3000/api/v1/auth/register
method : POST
{
    "username" : "Raj",
    "email" : "raj@gmail.com",
    "password" : "Raj@123"
}

// Auth: Login
method : POST
api : http://localhost:3000/api/v1/auth/login
{
    "username" : "Raj",
    "password" : "Raj@123"
}

----------------------------------------------------------------------------

//User : Get All
api: http://localhost:3000/api/v1/users
method : GET


//User: Get user by id
api: http://localhost:3000/api/v1/users/661d5ae6d5b99c8cd1ece9c1
method : GET

//User: Delete user by id
api: http://localhost:3000/api/v1/users/661ecc8ad7df614a6589495f
method: DELETE

//User: Update user by id
api: http://localhost:3000/api/v1/users/661ecc8ad7df614a6589495f
method: PUT
{
    "isAdmin": true
}

----------------------------------------------------------------------------

// Product : Create
api: http://localhost:3000/api/v1/products
method : POST
{
    "title" : "pen",
    "description": "description text",
    "image":"https://berrythought.com/wp-content/uploads/2022/09/berrythoughtpng.png",
    "categories": "stationery",
    "price": "10"
}

// Product :  List all products
api: http://localhost:3000/api/v1/products
method: GET

// Product :  List product by id
api: http://localhost:3000/api/v1/products/661ed32895495bc9463e2b5d
method: GET

// Product : Update product by id
api: http://localhost:3000/api/v1/products/661ed32895495bc9463e2b5d
method: PUT
{
    "price": "15"
}

----------------------------------------------------------------------------


// Card - add card
api : http://localhost:3000/api/v1/carts
method : POST
{
    "userId": "661d5ae6d5b99c8cd1ece9c1",
    "products" : [
        {"productId": "661ed32895495bc9463e2b5d", "quantity": 2}
    ]
}


// Card - list card by user id
api: http://localhost:3000/api/v1/carts/661d5ae6d5b99c8cd1ece9c1
method : GET


// Card - update card by user id
api: http://localhost:3000/api/v1/carts/661ee191868a537a9234bea9
method: PUT
{
    "userId": "661d5ae6d5b99c8cd1ece9c1",
    "products" : [
        {"productId": "661ed32895495bc9463e2b5d", "quantity": 2},
        {"productId": "661ee316ed0ba1dd0ab8dab6", "quantity": 5}
    ]
}


// Card - delete card by card id
api: http://localhost:3000/api/v1/carts/661ee191868a537a9234bea9
method : GET


--------------------------------------------------------------------------

// Order - Create
api: http://localhost:3000/api/v1/orders 
method : POST
{
    "userId": "661d5ae6d5b99c8cd1ece9c1",
    "products" : [
        {"productId": "661ed32895495bc9463e2b5d", "quantity": 2},
        {"productId": "661ee316ed0ba1dd0ab8dab6", "quantity": 5}
    ],
    "amount" : 50,
    "address": "6A, Gandhi St, Cbe, India"
}


// Order - All List
api: http://localhost:3000/api/v1/orders 
method : GET


// Order - List by user id
api: http://localhost:3000/api/v1/orders/661d5ae6d5b99c8cd1ece9c1
method : GET

// Order -  Update by order id
api: http://localhost:3000/api/v1/orders/661eeb0ae6ad74b50de3537e
method : PUT
{
    "status" : "deliverd"
}

// Order -  Delete by order id
api: http://localhost:3000/api/v1/orders/661eeb0ae6ad74b50de3537e
method : DELETE
