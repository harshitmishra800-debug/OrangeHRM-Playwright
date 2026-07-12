class myinfo {
    constructor(page) {
        this.page = page;
        this.myinfo_option = page.getByRole('link', { name: 'My Info' });
        this.addPhotoButton = page.locator('(//*[@class="employee-image"])[1]');
        this.uploadInput = page.locator('input[type="file"]');
        this.photupload_save = page.getByRole('button', { name: ' Save ' });
        this.personal_details = page.getByText('Personal Details', { exact: true });
        this.personal_details_firstname = page.getByPlaceholder('First Name');
        this.personal_details_middlename = page.getByPlaceholder('Middle Name');
        this.personal_details_lastname = page.getByPlaceholder('Last Name');
        this.personal_details_employeeid = page.locator('(//*[@class="oxd-input oxd-input--active"])[2]');
        this.personal_details_otherid = page.locator('(//*[@class="oxd-input oxd-input--active"])[3]');
        this.personal_details_driverliscensenumber = page.locator('(//*[@class="oxd-input oxd-input--active"])[4]');
        this.personal_details_liscense_expiry_date = page.locator('(//*[@class="oxd-input oxd-input--active"])[5]');
        this.nationality = page.locator('(//*[@class="oxd-select-text oxd-select-text--active"])[1]');
        this.nationality_selection = page.locator('.oxd-select-option', { hasText: 'Algerian' });
        this.marital_status = page.locator('(//div[@class="oxd-select-text oxd-select-text--active"])[2]');
        this.marital_status_selection = page.locator('.oxd-select-option', { hasText: 'Single' });
        this.gender_selection = page.locator('//input[@value="1"]');
        this.save = page.locator('(//*[@type="submit"])[1]');
    }

    async myinfoupdate() {
        await this.myinfo_option.click();
        await this.addPhotoButton.click();
        await this.uploadInput.setInputFiles('/Users/chandraprakashmishra/Downloads/images.jpeg');
        await this.photupload_save.click();
        await this.personal_details.click();
        await this.personal_details_firstname.fill('Cp');
        await this.personal_details_middlename.fill('Mishra');
        await this.personal_details_lastname.fill('Mishra Ji');
        await this.personal_details_employeeid.fill('12345');
        await this.personal_details_otherid.fill('abcdeddd');
        await this.personal_details_driverliscensenumber.fill('2023-18-10');
        await this.personal_details_liscense_expiry_date.fill('2026-12-12');
        await this.nationality.click();
        await this.nationality_selection.click();
        await this.marital_status.click();
        await this.marital_status_selection.click();
        await this.gender_selection.check();
        await this.save.click();
}}
module.exports = myinfo;