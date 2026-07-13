class buzz {
    constructor(page) {
        this.page = page;
        this.buzz = page.locator('(//*[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[12]');
        this.buzz_text = page.getByPlaceholder("What's on your mind?");
        this.share_photo = page.locator('(//*[@class="oxd-glass-button"])[1]');
        this.share_photo_addphoto = page.locator('//*[@class="oxd-file-div oxd-file-div--active"]');
        this.share_done = page.locator('(//*[@class="oxd-button oxd-button--medium oxd-button--main"])[3]');
    }

    async buzzactions() {
        await this.buzz.clcik();
        await this.buzz_text.fill('Description of something that i have intrest as per my journey ');
        await this.share_photo.click();
        await this.share_photo_addphoto.setInputFiles('/Users/chandraprakashmishra/tree-8175062_1280.jpg');
        await this.share_done.click();
        await this.page.waitForTimeout(3000);
    }

}