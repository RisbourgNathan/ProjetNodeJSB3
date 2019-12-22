import { createResource, listResources, getResource, updateResource, deleteResource } from "../controllers/resourceController";

export const resourceRoutes = (app) => {
    app.route('/resource/create')
    .post(createResource);

    app.route('/resource/list')
        .get(listResources);

    app.route('/resource/get/:id')
        .get(getResource);

    app.route('/resource/update/:id')
        .put(updateResource);

    app.route('/resource/delete/:id')
        .delete(deleteResource);
};