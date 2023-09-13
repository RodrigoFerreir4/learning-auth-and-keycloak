import express from "express";

const app = express();

app.get("/login", (req, res) => {
  const loginParams = new URLSearchParams({
    client_id: "test-client",
    redirect_uri: "http://localhost:3000/callback",
    response_type: "code",
    scope: "openid",
  });

  const url = `http://localhost:8080/realms/realm-for-test/protocol/openid-connect/auth?${loginParams.toString()}`;
  console.log(url);
  res.redirect(url);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
