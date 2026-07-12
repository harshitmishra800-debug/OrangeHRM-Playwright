# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: myinfo.spec.js >> my info section
- Location: tests/myinfo.spec.js:5:1

# Error details

```
TimeoutError: locator.click: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('//input[@value="1"]')
    - locator resolved to <input value="1" type="radio" data-v-7ef819fd=""/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <span data-v-13cf171c="">Single</span> from <div data-v-d7b71de4="" data-v-6653c066="" class="oxd-grid-3 orangehrm-full-width-grid">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <span data-v-13cf171c="">Single</span> from <div data-v-d7b71de4="" data-v-6653c066="" class="oxd-grid-3 orangehrm-full-width-grid">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    58 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <span data-v-13cf171c="">Single</span> from <div data-v-d7b71de4="" data-v-6653c066="" class="oxd-grid-3 orangehrm-full-width-grid">…</div> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "PIM" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: Ahmad Doe
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - button "" [ref=e133] [cursor=pointer]:
            - generic [ref=e134]: 
  - generic [ref=e135]:
    - generic [ref=e139]:
      - generic [ref=e140]:
        - generic [ref=e141]:
          - heading "Ahmad Doe" [level=6] [ref=e143]
          - img "profile picture" [ref=e146] [cursor=pointer]
        - tablist [ref=e147]:
          - tab "Personal Details" [ref=e148]:
            - link "Personal Details" [ref=e149] [cursor=pointer]:
              - /url: /web/index.php/pim/viewPersonalDetails/empNumber/7
          - tab "Contact Details" [ref=e150]:
            - link "Contact Details" [ref=e151] [cursor=pointer]:
              - /url: /web/index.php/pim/contactDetails/empNumber/7
          - tab "Emergency Contacts" [ref=e152]:
            - link "Emergency Contacts" [ref=e153] [cursor=pointer]:
              - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/7
          - tab "Dependents" [ref=e154]:
            - link "Dependents" [ref=e155] [cursor=pointer]:
              - /url: /web/index.php/pim/viewDependents/empNumber/7
          - tab "Immigration" [ref=e156]:
            - link "Immigration" [ref=e157] [cursor=pointer]:
              - /url: /web/index.php/pim/viewImmigration/empNumber/7
          - tab "Job" [ref=e158]:
            - link "Job" [ref=e159] [cursor=pointer]:
              - /url: /web/index.php/pim/viewJobDetails/empNumber/7
          - tab "Salary" [ref=e160]:
            - link "Salary" [ref=e161] [cursor=pointer]:
              - /url: /web/index.php/pim/viewSalaryList/empNumber/7
          - tab "Report-to" [ref=e162]:
            - link "Report-to" [ref=e163] [cursor=pointer]:
              - /url: /web/index.php/pim/viewReportToDetails/empNumber/7
          - tab "Qualifications" [ref=e164]:
            - link "Qualifications" [ref=e165] [cursor=pointer]:
              - /url: /web/index.php/pim/viewQualifications/empNumber/7
          - tab "Memberships" [ref=e166]:
            - link "Memberships" [ref=e167] [cursor=pointer]:
              - /url: /web/index.php/pim/viewMemberships/empNumber/7
      - generic [ref=e168]:
        - generic [ref=e169]:
          - heading "Personal Details" [level=6] [ref=e170]
          - separator [ref=e171]
          - generic [ref=e172]:
            - generic [ref=e176]:
              - generic [ref=e178]: Employee Full Name*
              - generic [ref=e179]:
                - textbox "First Name" [ref=e182]: Cp
                - textbox "Middle Name" [ref=e185]: Mishra
                - textbox "Last Name" [ref=e188]: Mishra Ji
            - separator [ref=e189]
            - generic [ref=e190]:
              - generic [ref=e191]:
                - generic [ref=e193]:
                  - generic [ref=e195]: Employee Id
                  - textbox [ref=e197]: "12345"
                - generic [ref=e199]:
                  - generic [ref=e201]: Other Id
                  - textbox [ref=e203]: "4957589"
              - generic [ref=e204]:
                - generic [ref=e206]:
                  - generic [ref=e208]: Driver's License Number
                  - textbox [ref=e210]: abcdeddd
                - generic [ref=e212]:
                  - generic [ref=e214]: License Expiry Date
                  - generic [ref=e217]:
                    - textbox "yyyy-dd-mm" [ref=e218]: 2023-18-10
                    - generic [ref=e219] [cursor=pointer]: 
            - separator [ref=e220]
            - generic [ref=e221]:
              - generic [ref=e222]:
                - generic [ref=e224]:
                  - generic [ref=e226]: Nationality
                  - generic [ref=e229] [cursor=pointer]:
                    - generic [ref=e230]: Algerian
                    - generic [ref=e232]: 
                - generic [ref=e234]:
                  - generic [ref=e236]: Marital Status
                  - generic [ref=e238]:
                    - generic [ref=e239] [cursor=pointer]:
                      - generic [active] [ref=e240]: Married
                      - generic [ref=e242]: 
                    - listbox [ref=e243]:
                      - option "-- Select --" [ref=e244] [cursor=pointer]
                      - option "Single" [ref=e245] [cursor=pointer]:
                        - generic [ref=e246]: Single
                      - option "Married" [ref=e247]:
                        - generic [ref=e248]: Married
                      - option "Other" [ref=e249] [cursor=pointer]:
                        - generic [ref=e250]: Other
              - generic [ref=e251]:
                - generic [ref=e253]:
                  - generic [ref=e255]: Date of Birth
                  - generic [ref=e258]:
                    - textbox "yyyy-dd-mm" [ref=e259]: 2026-12-12
                    - generic [ref=e260] [cursor=pointer]: 
                - generic [ref=e262]:
                  - generic [ref=e264]: Gender
                  - generic [ref=e265]:
                    - generic [ref=e269] [cursor=pointer]:
                      - radio "Male" [checked] [ref=e270]
                      - text: Male
                    - generic [ref=e275] [cursor=pointer]:
                      - radio "Female" [ref=e276]
                      - text: Female
            - separator [ref=e278]
            - generic [ref=e279]:
              - paragraph [ref=e280]: "* Required"
              - button "Save" [ref=e281] [cursor=pointer]
        - generic [ref=e282]:
          - separator [ref=e283]
          - generic [ref=e284]:
            - heading "Custom Fields" [level=6] [ref=e285]
            - separator [ref=e286]
            - generic [ref=e287]:
              - generic [ref=e289]:
                - generic [ref=e291]:
                  - generic [ref=e293]: Blood Type
                  - generic [ref=e296] [cursor=pointer]:
                    - generic [ref=e297]: A+
                    - generic [ref=e299]: 
                - generic [ref=e301]:
                  - generic [ref=e303]: qualifications
                  - generic [ref=e306] [cursor=pointer]:
                    - generic [ref=e307]: "-- Select --"
                    - generic [ref=e309]: 
                - generic [ref=e311]:
                  - generic [ref=e313]: Test_Field
                  - textbox [ref=e315]: "445"
              - separator [ref=e316]
              - button "Save" [ref=e318] [cursor=pointer]
        - generic [ref=e319]:
          - separator [ref=e320]
          - generic [ref=e322]:
            - heading "Attachments" [level=6] [ref=e323]
            - button " Add" [ref=e324] [cursor=pointer]:
              - generic [ref=e325]: 
              - text: Add
          - generic [ref=e326]:
            - separator [ref=e327]
            - generic [ref=e329]: (1) Record Found
          - table [ref=e331]:
            - rowgroup [ref=e332]:
              - row " File Name Description Size Type Date Added Added By Actions" [ref=e333]:
                - columnheader "" [ref=e334]:
                  - generic [ref=e336] [cursor=pointer]:
                    - checkbox "" [ref=e337]
                    - generic [ref=e339]: 
                - columnheader "File Name" [ref=e340]
                - columnheader "Description" [ref=e341]
                - columnheader "Size" [ref=e342]
                - columnheader "Type" [ref=e343]
                - columnheader "Date Added" [ref=e344]
                - columnheader "Added By" [ref=e345]
                - columnheader "Actions" [ref=e346]
            - rowgroup [ref=e347]:
              - row " test.png test 53.16 kB image/png 2024-06-02 Admin   " [ref=e349]:
                - cell "" [ref=e350]:
                  - generic [ref=e353] [cursor=pointer]:
                    - checkbox "" [ref=e354]
                    - generic [ref=e356]: 
                - cell "test.png" [ref=e357]:
                  - generic [ref=e358]: test.png
                - cell "test" [ref=e359]:
                  - generic [ref=e360]: test
                - cell "53.16 kB" [ref=e361]:
                  - generic [ref=e362]: 53.16 kB
                - cell "image/png" [ref=e363]:
                  - generic [ref=e364]: image/png
                - cell "2024-06-02" [ref=e365]:
                  - generic [ref=e366]: 2024-06-02
                - cell "Admin" [ref=e367]:
                  - generic [ref=e368]: Admin
                - cell "  " [ref=e369]:
                  - generic [ref=e370]:
                    - button "" [ref=e371] [cursor=pointer]:
                      - generic [ref=e372]: 
                    - button "" [ref=e373] [cursor=pointer]:
                      - generic [ref=e374]: 
                    - button "" [ref=e375] [cursor=pointer]:
                      - generic [ref=e376]: 
    - generic [ref=e377]:
      - paragraph [ref=e378]: OrangeHRM OS 5.9
      - paragraph [ref=e379]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e380] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | class myinfo {
  2  |     constructor(page) {
  3  |         this.page = page;
  4  |         this.myinfo_option = page.getByRole('link', { name: 'My Info' });
  5  |         this.addPhotoButton = page.locator('(//*[@class="employee-image"])[1]');
  6  |         this.uploadInput = page.locator('input[type="file"]');
  7  |         this.personal_details = page.getByText('Personal Details', { exact: true });
  8  |         this.personal_details_firstname = page.getByPlaceholder('First Name');
  9  |         this.personal_details_middlename = page.getByPlaceholder('Middle Name');
  10 |         this.personal_details_lastname = page.getByPlaceholder('Last Name');
  11 |         this.personal_details_employeeid = page.locator('(//*[@class="oxd-input oxd-input--active"])[2]');
  12 |         this.personal_details_otherid = page.locator('(//*[@class="oxd-input oxd-input--active"])[3]');
  13 |         this.personal_details_driverliscensenumber = page.locator('(//*[@class="oxd-input oxd-input--active"])[4]');
  14 |         this.personal_details_liscense_expiry_date = page.locator('(//*[@class="oxd-input oxd-input--active"])[5]');
  15 |         this.nationality = page.locator('(//*[@class="oxd-select-text oxd-select-text--active"])[1]');
  16 |         this.nationality_selection = page.locator('.oxd-select-option', { hasText: 'Algerian' });
  17 |         this.marital_status = page.locator('(//*[@class="oxd-select-text oxd-select-text--active"])[2]');
  18 |         this.gender_selection = page.locator('//input[@value="1"]');
  19 |         this.save = page.getByRole('button', { name: ' Save ' });
  20 |     }
  21 | 
  22 |     async myinfoupdate() {
  23 |         await this.myinfo_option.click();
  24 |         await this.addPhotoButton.click();
  25 |         await this.uploadInput.setInputFiles('/Users/chandraprakashmishra/Downloads/images.jpeg');
  26 |         await this.personal_details.click();
  27 |         await this.personal_details_firstname.fill('Cp');
  28 |         await this.personal_details_middlename.fill('Mishra');
  29 |         await this.personal_details_lastname.fill('Mishra Ji');
  30 |         await this.personal_details_employeeid.fill('12345');
  31 |         await this.personal_details_otherid.fill('abcdeddd');
  32 |         await this.personal_details_driverliscensenumber.fill('2023-18-10');
  33 |         await this.personal_details_liscense_expiry_date.fill('2026-12-12');
  34 |         await this.nationality.click();
  35 |         await this.nationality_selection.click();
  36 |         await this.marital_status.click();
  37 |         await this.page.keyboard.press('ArrowDown');
  38 |         await this.page.keyboard.press('ArrowDown');
  39 |         await this.page.keyboard.press('Enter');
> 40 |         await this.gender_selection.click();
     |                                     ^ TimeoutError: locator.click: Timeout 30000ms exceeded.
  41 |         await this.save.click();
  42 | 
  43 |     }
  44 | 
  45 | 
  46 | 
  47 | 
  48 | }
  49 | module.exports = myinfo;
```