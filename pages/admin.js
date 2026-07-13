class admin {

    constructor(page) {
        this.page = page;
        this.admin_option = page.locator('a[href="/web/index.php/admin/viewAdminModule"]');
        this.add_button = page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]');
        this.user_role = page.locator('(//div[@class="oxd-select-text-input"])[1]');
        this.userrole_option_selection = page.locator('(//div[@class="oxd-select-option"])[2]');

        this.employee_name = page.getByPlaceholder('Type for hints');
        this.employee_option = page.locator('.oxd-autocomplete-option').first();

        this.status = page.locator('(//*[@class="oxd-select-text oxd-select-text--active"])[2]');
        this.status_selection = page.locator('(//div[@class="oxd-select-option"])[2]');

        this.username = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]');
        this.password = page.locator('(//*[@type="password"])[1]');
        this.confirm_password = page.locator('(//*[@type="password"])[2]');
        this.submit_button = page.locator('//*[@type="submit"]');
    }

    async Admin_action() {

        await this.admin_option.click();
        await this.add_button.click();

        await this.user_role.click();
        await this.userrole_option_selection.click();
        await this.employee_name.fill("A");
        await this.page.waitForTimeout(2000);

        await this.page.keyboard.press("ArrowDown");
        await this.page.keyboard.press("Enter");
        await this.status.click();
        await this.status_selection.click();
        await this.username.fill("Cp Mishra1");
        await this.password.fill("Welcome@123");
        await this.confirm_password.fill("Welcome@123");

        await this.submit_button.click();
    }
}

module.exports = admin;