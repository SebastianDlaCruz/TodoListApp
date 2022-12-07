import StateModel from "./State.model";
class TaskModel {
    constructor(check, paragraph, stateTask) {
        this.check = check;
        this.paragraph = paragraph;
        this.stateTask = StateModel[stateTask];
    }
}

export default TaskModel;  