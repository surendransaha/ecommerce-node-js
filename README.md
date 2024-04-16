# Application Run Steps
1) npm i
2) npm start

# Api Details

# Auth: Register
    1. api : http://localhost:3000/api/v1/auth/register
    2. method : POST
    3. body: {
        "username" : "Raj",
        "email" : "raj@gmail.com",
        "password" : "Raj@123"
        }


![Auth - login](https://github.com/surendransaha/ecommerce-node-js/assets/71213725/8c96a3aa-3969-4e8d-9591-0c2d7e50fb85)



# Auth: Login

    1. api : http://localhost:3000/api/v1/auth/login
    2. method : POST
    3. body: {
        "username" : "Raj",
        "password" : "Raj@123"
        }


![Auth - register](https://github.com/surendransaha/ecommerce-node-js/assets/71213725/33f410f8-27e7-4545-b9aa-6dda7dad47f3)


------------------------------------------------------------------------------------------------------------------------

# User : Get All
    
    1. api: http://localhost:3000/api/v1/users
    2. method : GET

![User - get all user](https://github.com/surendransaha/ecommerce-node-js/assets/71213725/6480cc51-3936-497a-ba79-8fecdf648f99)



# User: Get user by id
    1. api: http://localhost:3000/api/v1/users/661d5ae6d5b99c8cd1ece9c1
    2. method : GET

![User - get  user by id](https://github.com/surendransaha/ecommerce-node-js/assets/71213725/5dd55846-f510-4626-82ce-5defcc954e9c)


# User: Delete user by id
    1. api: http://localhost:3000/api/v1/users/661ecc8ad7df614a6589495f
    2. method: DELETE

![User - delete user by id](https://github.com/surendransaha/ecommerce-node-js/assets/71213725/1553653e-ecbb-4933-b19b-aa91cd450ca0)


# User: Update user by id
    1. api: http://localhost:3000/api/v1/users/661ecc8ad7df614a6589495f
    2. method: PUT
    3. body: {
        "isAdmin": true
        }

![User - update user by id](https://github.com/surendransaha/ecommerce-node-js/assets/71213725/8fea7e5b-5045-4fb7-8467-828a4d7e670a)


------------------------------------------------------------------------------------------------------------------------

# Product : Create
    1. api: http://localhost:3000/api/v1/products
    2. method : POST
    3. body: {
        "title" : "pen",
        "description": "description text",
        "image":"https://berrythought.com/wp-content/uploads/2022/09/berrythoughtpng.png",
        "categories": "stationery",
        "price": "10"
        }

![Product - create](https://github.com/surendransaha/ecommerce-node-js/assets/71213725/66665fe9-0cd6-4642-815d-d4bd4d944a96)



# Product :  List all products
    1. api: http://localhost:3000/api/v1/products
    2. method: GET

![Product - all list](https://github.com/surendransaha/ecommerce-node-js/assets/71213725/ae314b81-bb22-4945-b7eb-7c9dd24a43b6)



# Product :  List product by id
    1. api: http://localhost:3000/api/v1/products/661ed32895495bc9463e2b5d
    2. method: GET

![Product - list by id](https://github.com/surendransaha/ecommerce-node-js/assets/71213725/a45f551d-2a8e-4998-848a-9fbfc6a4c56b)



# Product : Update product by id
    1. api: http://localhost:3000/api/v1/products/661ed32895495bc9463e2b5d
    2. method: PUT
    3. body: {
        "price": "15"
        }


![Product - update](https://github.com/surendransaha/ecommerce-node-js/assets/71213725/a5722113-cabb-460a-bc51-c4e18aa8ebfe)

------------------------------------------------------------------------------------------------------------------------


# Card - add card
    1. api : http://localhost:3000/api/v1/carts
    2. method : POST
    3. body: {
        "userId": "661d5ae6d5b99c8cd1ece9c1",
        "products" : [
            {"productId": "661ed32895495bc9463e2b5d", "quantity": 2}
            ]
        }

![Card - add](https://github.com/surendransaha/ecommerce-node-js/assets/71213725/18cf8fb2-6f0b-4333-956d-7e09d852fe27)



# Card - list card by user id
    1. api: http://localhost:3000/api/v1/carts/661d5ae6d5b99c8cd1ece9c1
    2. method : GET

![Card - list by user id](https://github.com/surendransaha/ecommerce-node-js/assets/71213725/26921ef4-d0ae-48ea-8b2d-bf630e1ec5ab)



# Card - update card by user id
    1. api: http://localhost:3000/api/v1/carts/661ee191868a537a9234bea9
    2. method: PUT
    3. body: {
        "userId": "661d5ae6d5b99c8cd1ece9c1",
        "products" : [
            {"productId": "661ed32895495bc9463e2b5d", "quantity": 2},
            {"productId": "661ee316ed0ba1dd0ab8dab6", "quantity": 5}
            ]
        }

![Card - update by card id](https://github.com/surendransaha/ecommerce-node-js/assets/71213725/09f9d46d-58c6-4411-bc5e-7909ac1aaeae)



# Card - delete card by card id
    1. api: http://localhost:3000/api/v1/carts/661ee191868a537a9234bea9
    2. method : GET

![Card - delete](https://github.com/surendransaha/ecommerce-node-js/assets/71213725/f7a769eb-08c9-4041-a6c5-edea8447b88e)

------------------------------------------------------------------------------------------------------------------------


# Order - Create
    1. api: http://localhost:3000/api/v1/orders 
    2. method : POST
    3. body: {
        "userId": "661d5ae6d5b99c8cd1ece9c1",
        "products" : [
            {"productId": "661ed32895495bc9463e2b5d", "quantity": 2},
            {"productId": "661ee316ed0ba1dd0ab8dab6", "quantity": 5}
            ],
        "amount" : 50,
        "address": "6A, Gandhi St, Cbe, India"
        }

![Order - Create](https://github.com/surendransaha/ecommerce-node-js/assets/71213725/3c082fc0-42ea-46a0-b213-e05d3519c7b0)



# Order - All List
    1. api: http://localhost:3000/api/v1/orders 
    2. method : GET

![Order - all list](https://github.com/surendransaha/ecommerce-node-js/assets/71213725/4fa937a8-8284-4ad5-abe2-52aaef629609)



# Order - List by user id
    1. api: http://localhost:3000/api/v1/orders/661d5ae6d5b99c8cd1ece9c1
    2. method : GET

![Order - list by user id](https://github.com/surendransaha/ecommerce-node-js/assets/71213725/62a5d3f1-ac32-49ba-9d0e-06e5ced4a633)



# Order -  Update by order id
    1. api: http://localhost:3000/api/v1/orders/661eeb0ae6ad74b50de3537e
    2. method : PUT
    3. body: {
        "status" : "deliverd"
        }

![Order - Status Update](https://github.com/surendransaha/ecommerce-node-js/assets/71213725/518a352a-974d-4c43-8957-2396ce319216)



# Order -  Delete by order id
    1. api: http://localhost:3000/api/v1/orders/661eeb0ae6ad74b50de3537e
    2. method : DELETE

![Order - Delete](https://github.com/surendransaha/ecommerce-node-js/assets/71213725/3baef968-cb19-48bb-8c57-a4fc2b79da36)
