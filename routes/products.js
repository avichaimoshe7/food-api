import express from "express";
const router = express.Router();

//POST
router.post("/addproduct", (req, res) => {
  const { prodname, prodprice, prodimage, proddesc } = req.body;
  return res.status(200).json({
    massege: `the prodacte is ${prodname},  the price is ${prodprice}, the img is ${prodimage}, end discription is ${proddesc}`,
  });
});

export default router;
