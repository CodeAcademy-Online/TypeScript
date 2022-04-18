import formatLine from '../helpers/format-line.js';
class Job {
    constructor(title, pay) {
        this.title = title;
        this.pay = pay;
        this.finished = false;
        this.payed = false;
        this.completeJob = () => {
            this.finished = true;
            this.dateFinished = new Date();
        };
        this.setJobPayed = () => {
            this.payed = true;
        };
        this.getPay = () => this.pay;
        this.isFinished = () => this.finished;
        this.isPayed = () => this.payed;
        this.toString = () => {
            const { id, title, finished, pay, dateFinished, payed, } = this;
            return formatLine(`id: ${id}`, 2)
                + formatLine(`title: ${title}`, 2)
                + formatLine(`pay: ${pay}`, 2)
                + (finished ? formatLine(`finished: ${finished ? 'Yes' : 'No'}`, 2) : '')
                + (payed ? formatLine(`payed: ${payed ? 'Yes' : 'No'}`, 2) : '')
                + (dateFinished ? formatLine(`date finished: ${dateFinished.toLocaleDateString('lt-LT')}`, 2) : '');
        };
        Job.instanceCount += 1;
        this.id = `Job-${Job.instanceCount}`;
        this.finished = false;
        this.payed = false;
    }
}
Job.instanceCount = 0;
export default Job;
//# sourceMappingURL=job.js.map