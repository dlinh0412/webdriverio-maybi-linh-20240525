describe('Register', () => {
    beforeEach(async () => {
        await browser.reloadSession();
    });
    it('RG01', async () => {
        
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/account/register`);
        await browser.pause(1000);
        // lien ket dang nhap
        await expect($("(//a[contains(@href,'/account/login')])[2]")).toHaveTextContaining(
            'tại đây');
        await browser.pause(1000);
        const elem = await $("//h2[@class='text-center']");
        await elem.scrollIntoView();
        await browser.pause(1000);
        // Textbox Ho
        await expect($("//input[@id='lastName']")).toBeExisting();
        // Textbox Ten
        await expect($("//input[@id='firstName']")).toBeExisting();
        // Textbox Sdt
        await expect($("//input[@id='Phone']")).toBeExisting();
        // Texbox Email
        await expect($("//input[@id='email']")).toBeExisting();
        // Textbox Mat khau
        await expect($("//input[@id='password']")).toBeExisting();
        // Button Dang Ky
        await expect($("//button[@value='Đăng ký']")).toBeExisting();
        await browser.pause(3000);

    });
    it('RG02', async () => {
        // De trong textbox
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/account/register`);
        await browser.pause(1000);
        const elem = await $("//h2[@class='text-center']");
        await elem.scrollIntoView();
        await browser.pause(1000);
        await $("//button[@value='Đăng ký']").click();
        await browser.pause(1000);        
        await expect($("//input[@id='lastName'and @required]")).toBeExisting();
        await browser.pause(1000);
    });
    it('RG03', async () => {
        // Sai dinh dang email
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/account/register`);
        await browser.pause(1000);
        const elem = await $("//h2[@class='text-center']");
        await elem.scrollIntoView();
        await browser.pause(1000);
        await $("//input[@id='lastName']").setValue("TEST");
        await browser.pause(1000);
        await $("//input[@id='firstName']").setValue("01");
        await browser.pause(1000);
        await $("//input[@id='Phone']").setValue("0374404395");
        await browser.pause(1000);
        await $("//input[@id='email']").setValue("TEST");
        await browser.pause(1000);
        await $("//input[@id='password']").setValue("Maybi00.vn");
        await browser.pause(1000);
        await $("//button[@value='Đăng ký']").click();
        await browser.pause(1000);        
        await expect($("//input[@id='email'and @required]")).toBeExisting();
        await browser.pause(1000);
    });
    it('RG04', async () => {
        // Sai dinh dang sdt lan 1
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/account/register`);
        await browser.pause(1000);
        const elem = await $("//h2[@class='text-center']");
        await elem.scrollIntoView();
        await browser.pause(1000);
        await $("//input[@id='lastName']").setValue("TEST");
        await browser.pause(1000);
        await $("//input[@id='firstName']").setValue("01");
        await browser.pause(1000);
        await $("//input[@id='Phone']").setValue("037");
        await browser.pause(1000);
        await $("//input[@id='email']").setValue("dieulinhhtk@gmail.com");
        await browser.pause(1000);
        await $("//input[@id='password']").setValue("Maybi00.vn");
        await browser.pause(1000);
        await $("//button[@value='Đăng ký']").click();
        
        await browser.pause(1000);        
        await expect($("//li[contains(text(),'Số điện thoại không hợp lệ')]")).toBeExisting();
        await browser.pause(1000);
        
    });
    it('RG05', async () => {
        // Sai dinh dang sdt lan 2
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/account/register`);
        await browser.pause(1000);
        const elem = await $("//h2[@class='text-center']");
        await elem.scrollIntoView();
        await browser.pause(1000);
        await $("//input[@id='lastName']").setValue("TEST");
        await browser.pause(1000);
        await $("//input[@id='firstName']").setValue("01");
        await browser.pause(1000);
        await $("//input[@id='Phone']").setValue("Test");
        await browser.pause(1000);
        await $("//input[@id='email']").setValue("dieulinhhtk@gmail.com");
        await browser.pause(1000);
        await $("//input[@id='password']").setValue("Maybi00.vn");
        await browser.pause(1000);
        await $("//button[@value='Đăng ký']").click();
        
        await browser.pause(1000);        
        await expect($("//input[@id='Phone'and @required]")).toBeExisting();
        await browser.pause(1000);
        
    });
    it('RG06', async () => {
        // Sai dinh dang mat khau
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/account/register`);
        await browser.pause(1000);
        const elem = await $("//h2[@class='text-center']");
        await elem.scrollIntoView();
        await browser.pause(1000);
        await $("//input[@id='lastName']").setValue("TEST");
        await browser.pause(1000);
        await $("//input[@id='firstName']").setValue("01");
        await browser.pause(1000);
        await $("//input[@id='Phone']").setValue("0374404395");
        await browser.pause(1000);
        await $("//input[@id='email']").setValue("dieulinhhtk@gmail.com");
        await browser.pause(1000);
        await $("//input[@id='password']").setValue("TEST");
        await browser.pause(1000);
        await $("//button[@value='Đăng ký']").click();
        
        await browser.pause(1000);        
        await expect($("//li[contains(text(),'Mật khẩu quá ngắn (tối thiểu 5 ký tự).')]")).toBeExisting();
        await browser.pause(1000);
    });
    it('RG07', async () => {
        //Báo lỗi khi nhập email đã được sử dụng
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/account/register`);
        await browser.pause(1000);
        const elem = await $("//h2[@class='text-center']");
        await elem.scrollIntoView();
        await browser.pause(1000);
        await $("//input[@id='lastName']").setValue("TEST");
        await browser.pause(1000);
        await $("//input[@id='firstName']").setValue("01");
        await browser.pause(1000);
        await $("//input[@id='Phone']").setValue("0374404395");
        await browser.pause(1000);
        await $("//input[@id='email']").setValue("dieulinhthieuthi@gmail.com");
        await browser.pause(1000);
        await $("//input[@id='password']").setValue("TEST");
        await browser.pause(1000);
        await $("//button[@value='Đăng ký']").click();
        
        await browser.pause(1000);        
        await expect($("//a[@href='/account/login#recover']")).toBeExisting();
        await browser.pause(1000);
    });
    it('RG08', async () => {
        //Điều hướng đến trang đặt lại mật khẩu
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/account/register`);
        await browser.pause(1000);
        const elem = await $("//h2[@class='text-center']");
        await elem.scrollIntoView();
        await browser.pause(1000);
        await $("//input[@id='lastName']").setValue("TEST");
        await browser.pause(1000);
        await $("//input[@id='firstName']").setValue("01");
        await browser.pause(1000);
        await $("//input[@id='Phone']").setValue("0374404395");
        await browser.pause(1000);
        await $("//input[@id='email']").setValue("dieulinhthieuthi@gmail.com");
        await browser.pause(1000);
        await $("//input[@id='password']").setValue("TEST");
        await browser.pause(1000);
        await $("//button[@value='Đăng ký']").click();
        await browser.pause(1000);
        await $("//a[@href='/account/login#recover']").click();
        await browser.pause(1000);        
        await expect(browser).toHaveUrl('https://maybi.com/account/login#recover');
        await browser.pause(1000);
    });
    it('RG09', async () => {
        //Điều hướng đến trang đăng nhập
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/account/register`);
        await browser.pause(1000);
        await $("(//a[contains(@href,'/account/login')])[2]").click();
        await browser.pause(1000);        
        await expect(browser).toHaveUrl('https://maybi.com/account/login');
        await browser.pause(1000);
    });

});
