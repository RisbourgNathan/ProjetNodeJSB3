import { createService, listServices, getService, updateService, deleteService } from "../controllers/serviceController.js";

export const serviceRoutes = (app) => {
    app.route('/service/create')
        .post(createService);

    app.route('/service/list')
        .get(listServices);

    app.route('/service/get/:id')
        .get(getService);

    app.route('/service/update/:id')
        .put(updateService);

    app.route('/service/delete/:id')
        .delete(deleteService);
}