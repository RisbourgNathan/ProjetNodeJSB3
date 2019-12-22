import { createTask, listTasks, getTask, updateTask, deleteTask } from "../controllers/taskController.js";

export const taskRoutes = (app) => {
    app.route('/task/create')
        .post(createTask);

    app.route('/task/list')
        .get(listTasks);

    app.route('/task/get/:id')
        .get(getTask);

    app.route('/task/update/:id')
        .put(updateTask);

    app.route('/task/delete/:id')
        .delete(deleteTask);
}