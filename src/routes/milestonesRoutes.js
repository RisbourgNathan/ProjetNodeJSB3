import { createMilestones, listMilestoness, getMilestones, updateMilestones, deleteMilestones } from "../controllers/milestonesController.js";

export const milestonesRoutes = (app) => {
    app.route('/milestones/create')
        .post(createMilestones);

    app.route('/milestones/list')
        .get(listMilestoness);

    app.route('/milestones/get/:id')
        .get(getMilestones);

    app.route('/milestones/update/:id')
        .put(updateMilestones);

    app.route('/milestones/delete/:id')
        .delete(deleteMilestones);
}