import { createProject, listProjects, getProject, updateProject, deleteProject } from "../controllers/projectController";

export const projectRoutes = (app) => {
    app.route('/project/create')
        .post(createProject);

    app.route('/project/list')
        .get(listProjects);

    app.route('/project/get/:id')
        .get(getProject);

    app.route('/project/update/:id')
        .put(updateProject);

    app.route('/project/delete/:id')
        .delete(deleteProject);
}