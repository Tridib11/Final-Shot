const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
  const userResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);

  if (!userResponse.success || !passwordResponse.success) {
    return null;
  }
  const signature = jwt.sign(
    {
      userResponse,
    },
    jwtPassword
  );
  return signature;
}

function decodeJwt(token) {
  const decoded = jwt.decode(token);
  if (decoded) {
    return true;
  } else {
    return false;
  }
}

function verifyJwt(token) {
  let ans = true;
  try {
    jwt.verify(token, jwtPassword);
  } catch (e) {
    ans = false;
  }
  return ans;
}
