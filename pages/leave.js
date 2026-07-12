class leave {
    constructor(page) {
        this.page = page;
        this.leave = page.locator('(//*[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[3]');
        this.myLeave = page.locator('//*[@class="oxd-main-menu-item active"]');
        this.calender_view = page.locator('(//*[@placeholder="yyyy-dd-mm"])[1]');
        this.month_view = page.locator('.oxd-calendar-selector-month-selected');
        this.month_selection = page.locator(
            '.oxd-calendar-dropdown--option',
            {
                hasText: 'January'
            }
        );
        this.year = page.locator('.oxd-calendar-selector-year-selected');
        this.year_selection = page.locator(
            '.oxd-calendar-dropdown--option',
            {
                hasText: '2023'
            }
        );
        this.date_selection = page.locator(
            '.oxd-calendar-date',
            {
                hasText: '21'
            }
        );
        this.to_date = page.locator('(//*[@placeholder="yyyy-dd-mm"])[2]');
        this.leave_type = page.locator('(//*[@class="oxd-select-text oxd-select-text--active"])[2]');
        this.leave_type_selection = page.locator('.oxd-select-option', {
    hasText: 'US - FMLA'});

        this.assign_leave = page.getByRole('link', { name: 'Assign Leave' });
        this.employee_name = page.locator('//*[@placeholder="Type for hints..."]');
        this.Lleavetype = page.locator('//*[@class="oxd-select-text oxd-select-text--active"]');
        this.leavetype_selection = page.locator('//*[@class="oxd-select-option"]', { hasText: 'CAN - Matternity' });
        this.leavetype_fromdate = page.locator('(//*[@placeholder="yyyy-dd-mm"])[1]');
        this.leavetype_fromedate_month = page.locator('//*[@class="oxd-calendar-selector-month"]');
        this.leavetype_fromdate_month_selection = page.locator('//*[@class="oxd-calendar-dropdown--option"]', { hasText: 'April' });
        this.leavetype_fromdate_year = page.locator('//*[@class="oxd-calendar-selector-year"]');
        this.leavetype_fromdate_year_selection = page.locator('.oxd-calendar-dropdown--option', { hasText: "2021" });
        this.leavetype_dateselect = page.locator('.oxd-calendar-date', { hasText: '28' });
        this.leavetype_todate = page.locator('(//*[@placeholder="yyyy-dd-mm"])[2]');
        this.comments = page.locator('//*[@class="oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical"]');
        this.assignButton = page.getByRole('button', { name: 'Assign' });
        this.ok_button = page.getByRole('button', { name: 'Ok' });
    }

    async leave_actions() {
        await this.leave.click();
        await this.myLeave.click();
        await this.calender_view.click();
        await this.month_view.click();
        await this.month_selection.click();
        await this.year.click();
        await this.year_selection.click();
        await this.date_selection.click();
        await this.to_date.fill('2026-12-10');
        await this.leave_type.click();
        await this.leave_type_selection.click();
        await this.assign_leave.click();
        await this.employee_name.fill('a');
        await this.page.waitForTimeout(2000);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.Lleavetype.click();
        await this.leavetype_selection.click();
        await this.leavetype_fromdate.click();
        await this.leavetype_fromedate_month.click();
        await this.leavetype_fromdate_month_selection.click();
        await this.leavetype_fromdate_year.click();
        await this.leavetype_fromdate_year_selection.click();
        await this.leavetype_dateselect.click();
        await this.leavetype_todate.fill('2022-21-10');
        await this.comments.fill("It is a good one");
        await this.assignButton.click();
        await this.ok_button.click();
        await this.page.pause();
        
        
    }
}

module.exports = leave;