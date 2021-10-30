Api details

create a mysql scheme called userdb in locally
run 'npm install' inorder to install necessary packages
run 'node server.js' to run the project
api details
    get-> 
        http://localhost:8080/api/v1/users/ -> all user data
        http://localhost:8080/api/v1/users/:id-> get specific user data

    post->
        http://localhost:8080/api/v1/users/ -> create user
        {
            "first_name":"user1",
            "last_name":"",
            "email":"user1@mail.com",
            "mobile":"0099887760",
            "age":"10",
            "experience":"10",
            "introduction":"abc",
            "achievement":"achievement"
        }

    put->
        http://localhost:8080/api/v1/users/:id -> update user
        {
            "first_name":"user1",
            "last_name":"",
            "email":"user1@mail.com",
            "mobile":"0099887760",
            "age":"10",
            "experience":"10",
            "introduction":"abc",
            "achievement":"achievement"
        }

    delete
        http://localhost:8080/api/v1/users/ -> delete all users
        http://localhost:8080/api/v1/users/:id -> delete user by id
