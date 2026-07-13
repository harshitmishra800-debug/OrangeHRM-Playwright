class job {
    constructor(page) {
        this.page = page;
        this.joboption = page.getByText('Job', { exact: true });
        this.jobtitle = page.getByText('Job Titles', { exact: true });
        this.job_add = page.locator('//*[@class="oxd-button oxd-button--medium oxd-button--secondary"]');
        this.job_title = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]');
        this.job_description = page.getByPlaceholder('Type description here');
        this.job_specification = page.locator('input[type="file"]');
        this.note = page.getByPlaceholder('Add note');
        this.submit = page.locator('//*[@type="submit"]');

    }



    async job_actions() {
        await this.joboption.click();
        await this.jobtitle.click();
        await this.job_add.click();
        await this.job_title.fill('Software QAEngineer11');
        await this.job_description.fill('Responsible for developing and maintaining software applications.');
        await this.job_specification.setInputFiles('/Users/chandraprakashmishra/Downloads/Chandra_Prakash_Mishra_QA_Resume.pdf');
        await this.note.fill('Additional notes for the job posting.');
        await this.submit.click();
     
    }
}

module.exports = job;