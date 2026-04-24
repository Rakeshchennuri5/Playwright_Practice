import{test, expect, chromium} from"@playwright/test"

test("Locator test", async({page, browserName})=>{
    await page.goto("https://sauce-demo.myshopify.com/");
    await page.locator("//a[text() = 'Sign up']").click();
    await page.locator("input#first_name").fill("Rakesh");
    await page.locator("input[name='customer[last_name]']").fill("Last Name");
    // await page.locator("clearfix large_form",{has:page.locator("input#last_name")}).click();
    //await page.locator("clearfix large_form",{has:page.locator("input#last_name")}).pressSequentially("Chennuri");
    await page.locator("input[id='email']").fill("rakesh.c@techouts.com");
    await page.locator("input[id='password']").fill("Rakesh@123");

    //await page.locator("clearfix large_form",{has:page.locator("input#last_name")})
})

test("Locator Methods", async({page})=>{
    await page.goto("https://demo.nopcommerce.com/login");
    await page.getByRole('button',{name :'Log in'}).click();
    const emailError = await page.getByText('Please enter your email').textContent;
    console.log(`Error; ${emailError}`)
    await page.getByLabel("Email:").fill("rakesh.c@techouts.com");
    await page.getByLabel("Password:").fill("Rakesh@123")   
    await page.locator('.password-eye').first().click();
    //await page.locator('password-eye password-eye-open').click();
    await page.getByRole('link',{ name: 'Forgot password?'}).click(); 
    
    
    // await page.getByPlaceholder('Enter mobile number')
    // await page.locator('.product-card',{hasText : 'Samsung S24'}).getByRole('button',{name :'Add to cart'})
    // await page.getByRole('button',{name: 'Submit'}).click();
    // await expect(page.locator('.toast success')).toBeVisible
    // await page.locator('li',{hasText :'Order #123'}).getByRole('button', {name :'VIew'}).click();
    // await page.getByLabel('Mobile Number').fill("8688191693");
    // await page.getByPlaceholder('Enter your email').fill('rakesh.c@gmail.com')
    // await page.getByRole('link', {name : 'My Profile'}).click();
    // await page.getByLabel('Receive Offers').click();
    // await page.locator("input #offers").click();
    // await expect(page.locator('.Invalid OTP')).toBeVisible();
    // await page.locator('.card', {hasText :'Premium Plan'}).getByRole('button',{name : 'Subscribe'}).click();
    // await page.locator('li',{hasText : 'Ticket #222'}).getByRole('link',{name : 'Details'}). click();
    // await page.locator('.icon-close').click();
    // await page.getByRole('button', {name :'Settings'}).click();
    // await page.getByRole('button', {name :'Pay ₹'}).getByText('499').click();
    // await page.getByPlaceholder('Enter value').nth(1).fill('Rakesh')
    // await page.getByRole('button',{name : 'Menu'}).click();
    // await page.getByRole('link',{name : 'Logout'}).click();
    // await page.getByRole('button',{name : 'Download'}).click();
    // await expect(page.locator('error',{has:page.getByText('OTP expired.')})).toBeVisible
    // await expect(page.locator('.loader')).toBeHidden();
    // await expect(page.locator('.error')).toContainText('OTP expired');
    // await expect(page.getByRole('button',{name:'Pay Now'})).toBeEnabled();
    // await expect(page.getByLabel('Email')).toHaveText('test@gmail.com');
    // await expect(page.getByRole('img',{name : 'User Profile'})).toHaveAttribute('alt', 'User Profile')
    // await expect(page.locator('.msg')).toHaveText('Payment Failed')
    // await expect(page.locator('.toast success')).toContainText('toast success');
})