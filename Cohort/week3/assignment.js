const jwt=require("jsonwebtoken")
const jwtPassword="secret"


function signJwt(username,password){
    const signature=jwt.sign({
        username
    },jwtPassword)
    return signature
}

