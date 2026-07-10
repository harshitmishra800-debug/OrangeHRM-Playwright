class login{
    
constructor(page){
    this.page=page;
    this.username=page.locator('//input[@placeholder="Username"]');
    this.password=page.locator('//input[@name="password"]');
    this.loginButton=page.locator('//button[@type="submit"]');
}
async LoginUser(){
 await this.username.fill('Admin');
 await this.password.fill('admin123');
 await this.loginButton.click();

}



}
module.exports=login;