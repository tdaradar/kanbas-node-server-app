import PathParameters from "./PathParameters";
export default function Lab5(app) {
    app.get("/lab5/welcome", (req, res) => {
      res.send("Welcome to Lab 5");
    });
  };
  PathParameters(app);
  