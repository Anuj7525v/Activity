 express = require("express");
const router = express.Router();
const {createTodo,getAllTodo,updateTodo,DeleteTodo} = require("../controllers/todo");




router.get('/',(req,res) => {
    res.send(200).send("Todo Route!");
});


router.post("/create",createTodo);
router.get("/all",getAllTodo);
//router.get("/view/:jobnumber",getTodoById);
router.patch("/update/:jobnumber",updateTodo);
router.delete('/delete/:jobnumber',DeleteTodo);

module.exports = router;