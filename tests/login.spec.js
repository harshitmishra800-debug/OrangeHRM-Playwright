const { test, expect } = require("@playwright/test");
const login = require("../pages/login");
const admin = require("../pages/admin");
const job = require("../pages/job");
const pim = require("../pages/pim");
const leave = require("../pages/leave");

test("Action Performed", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const Login = new login(page);
    await Login.LoginUser();
    const Admin = new admin(page);
    await Admin.Admin_action();
    const Job = new job(page);
    await Job.job_actions();
    const PIM = new pim(page);
    await PIM.pimsearch();
    const Leave = new leave(page);
    await Leave.leave_actions();
})