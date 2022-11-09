const express = require('express');
const cors = require('cors');
const app  = express();
const PORT  = 4000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) =>{
    res.json({message: "Hello World"})
})


app.post("/api/register", (req, res) => {
    // get user credentials
    const {email, password, tel, username} = req.body;
    console.log({email, password, tel, username});

    const users = [];
    const generateID = () => Math.random().toString(36).substring(2, 10);
    //  check if there is an existing user with the same email or password
    let result = users.filter((user) => user.email === email || user.tel === tel)
    // no user exist
    if(result.length === 0){
        // create a new user
        const newUser = {id:generateID(), email, password, username, tel}
        users.push(newUser);
        // return a message
        return res.json({
            message: "Account created successfully",
        })
    }
         // Run if a user exist
         res.json({
            error_message: "User already exists",
         })
})

// Login route
app.post("/api/login", (req, res) => {
    // Accept users credentials
    const {email, password} = req.body;
    // Check for users with the same email and password
    let result = users.filter((user) => user.email === email && user.password === password)
    // If no user exists , it returns an error message
    if(result.lenghth !== 1){
    return res.json({
        error_message: "Incorrect credentials",
    })
    }
    // Retruns username of the user after a succesful login
     res.json({
        message: "Login succesfully",
        data: {
            username: result[0].username,
        }
     })
})



app.listen(PORT, () =>{
    console.log(`Server listening on ${PORT}`)
})