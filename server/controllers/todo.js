const Todo = require('../models/todo');


const createTodo = async (req, res, next) => {
    try {
        const { title, priority, checklist, dueDate } = req.body;
        if (!title) {
            return res.status(400).send("Title is required");
        }
        const todo = new Todo({ title, priority, checklist, dueDate });
        await todo.save();
        res.status(200).send("Create Successfully");
    }
    catch (error) {
        next(error);
    }

};
const getAllTodo = async (req, res, next) => {
    try {
        const todos = await Todo.find();
        return res.status(200).send(todos);
    }
    catch (error) {
        next(error);
    }
};
/*const getTodoById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findById(id);
        if (!todo) {
            return res.status(404).send("Todo not found");
        }
        res.status(200).send(todo);
    }
    catch (error) {
        next(error)
    }

}; */
const updateTodo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findById(id);
        const updatetodo = await Todo.findByIdAndUpdate(id,{
                title: req.body.title || todo.title,
                priority: req.body.priority || todo.priority,
                checklist: req.body.checklist || todo.checklist,
                dueDate: req.body.dueDate || todo.dueDate
            }, { new: true }); 
        res.status(200).send(updatetodo);
    }
    catch (error) {
        next(error)
    }
};
const DeleteTodo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findById(id);
        const deletetodo = await Todo.findByIdAndDelete(id);
        if (!deletetodo) {
            return res.status(400).send("Todo not Deleted");
        }
        res.status(200).send("Todo Deleted Successfully");

    }
    catch (error) {
        next(error)
    }
};


module.exports = { createTodo, getAllTodo, updateTodo, DeleteTodo };
