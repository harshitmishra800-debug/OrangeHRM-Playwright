class pim {

    constructor(page) {
        this.page = page;
        this.pim = page.locator('(//*[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[2]');
        this.employee_name = page.locator('(//*[@placeholder="Type for hints..."])[1]');
        this.employee_name_optionx = page.locator('//div[@class="oxd-autocomplete-option"]').first();
        this.employee_id = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]');
        this.employement_status = page.locator('(//*[@class="oxd-select-text oxd-select-text--active"])[1]');
        this.employement_status_option = page.getByText('Part-Time Internship', { exact: true });
        this.include = page.getByText('Current Employees Only', { exact: true });
        this.include_optionselection = page.getByText('Current and Past Employees', { exact: true });
        this.supervisor_name = page.locator('(//*[@placeholder="Type for hints..."])[2]');
        this.supervisorname_selection = page.locator('//*[@class="oxd-autocomplete-option"]').first();
        this.jobtitle = page.locator('(//*[@class="oxd-select-text-input"])[3]');
        this.jobtitle_selection = page.getByText('QA Lead', { exact: true });
        //this.sabunit = page.locator('(//*[@class="oxd-select-text-input"])[4]');
       // this.sabunit_selection = page.getByText('Human Resources', { exact: true });
        this.search = page.locator('//*[@type="submit"]');
    }
    async pimsearch() {
        await this.pim.click();
        await this.employee_name.fill('a');
        await this.page.waitForTimeout(1000);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.employee_id.fill('300');
        await this.employement_status.click();
        await this.employement_status_option.click();
        await this.include.click();
        await this.include_optionselection.click();
        await this.supervisor_name.fill('a');
        await this.page.waitForTimeout(2000);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.jobtitle.click();
        await this.jobtitle_selection.click();
        //await this.sabunit.click()
        //await this.sabunit_selection.click();

        await this.search.click();


    }
}
module.exports = pim;
