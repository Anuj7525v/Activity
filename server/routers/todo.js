 express = require("express");
const router = express.Router();
const {createTodo,getAllTodo,updateTodo,DeleteTodo} = require("../controllers/todo");
const verifyAuth = require("../middleware/verifyAuth");



router.get('/',(req,res) => {
    res.send(200).send("Todo Route!");
});


router.post("/create", verifyAuth, createTodo);
router.get("/all",getAllTodo);
router.patch("/update/:jobnumber",verifyAuth,updateTodo);
router.delete('/delete/:jobnumber',DeleteTodo);

module.exports = router;