import "dotenv/config";
import express from "express";
import { router } from "./routes";

const app = express();

app.use(router)

app.get("/github", (request, response) => {
  response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
});

app.get("/signin/cb", (request, response) => {
  const { code } = request.query;

  return response.json({ code: code})
})

app.listen(4000, () => {
  console.log(`🚀 - server is running on PORT 4000`);
}); 