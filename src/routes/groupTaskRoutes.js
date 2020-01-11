import { createGroupTask, listGroupTasks, getGroupTask, updateGroupTask, deleteGroupTask } from "../controllers/groupTaskController.js";

export const groupTaskRoutes = (app) => {
    app.route('/groupTask/create')
        .post(createGroupTask);

    app.route('/groupTask/list')
        .get(listGroupTasks);

    app.route('/groupTask/get/:id')
        .get(getGroupTask);

    app.route('/groupTask/update/:id')
        .put(updateGroupTask);

    app.route('/groupTask/delete/:id')
        .delete(deleteGroupTask);
}