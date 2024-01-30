import app from "../app";
const port = 9000; 

export default app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

