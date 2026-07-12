# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: myinfo.spec.js >> my info section
- Location: tests/myinfo.spec.js:5:1

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1  | const { test, expect } = require("@playwright/test");
  2  | const myinfo = require("../pages/myinfo");
  3  | const login = require("../pages/login");
  4  | 
  5  | test('my info section', async ({ page }) => {
> 6  |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
     |                ^ Error: page.goto: Target page, context or browser has been closed
  7  |     const Login = new login(page);
  8  |     await Login.LoginUser();
  9  |     const MyInfo = new myinfo(page);
  10 |     await MyInfo.myinfoupdate();
  11 | 
  12 | 
  13 | 
  14 | 
  15 | })
```