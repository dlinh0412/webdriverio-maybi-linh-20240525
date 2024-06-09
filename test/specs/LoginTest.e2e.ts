describe('Login Test', () => {
    beforeEach(async () => {
        await browser.reloadSession();
    });
    it('LG01', async () => {
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/account/login`);

        await expect($("//input[@id='customer_email']")).toBeExisting();
        await expect($("//input[@id='customer_password']")).toBeExisting();
        await expect($("//button[contains(text(),'Đăng nhập')]")).toBeExisting();
    });


    it('LG02', async () => {
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/account/login`);

        await $("//input[@id='customer_email']").setValue('dieulinhthieuthi@gmail.com');
        await $("//input[@id='customer_password']").setValue('Maybi00.vn');
        await browser.pause(3000);
        await $("//button[contains(text(),'Đăng nhập')]").click();
        await browser.pause(3000);

        await expect($("//h5[@class='title-account']")).toHaveTextContaining(
            'TRANG TÀI KHOẢN');
    });
    it('LG03', async () => {
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/account/login`);

        await $("//input[@id='customer_email']").setValue('dieulinhthieuthitest@gmail.com');
        await $("//input[@id='customer_password']").setValue('Maybi00.vn');
        await browser.pause(3000);
        await $("//button[contains(text(),'Đăng nhập')]").click();

        await expect($("//div[@class='form-signup margin-bottom-15']")).toHaveTextContaining(
            'Thông tin đăng nhập không hợp lệ.');
    });
    it('LG04', async () => {
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/account/login`);

        await $("//input[@id='customer_email']").setValue('dieulinhthieuthi@gmail.com');
        await $("//input[@id='customer_password']").setValue('Maybi01.vn');
        await browser.pause(3000);
        await $("//button[contains(text(),'Đăng nhập')]").click();

        await expect($("//div[@class='form-signup margin-bottom-15']")).toHaveTextContaining(
            'Thông tin đăng nhập không hợp lệ.');

    });
    it('LG05', async () => {
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/account/login`);
        await $("//button[contains(text(),'Đăng nhập')]").click();

        await browser.pause(5000);
        
        await expect($("//input[@id='customer_email' and @required]")).toBeExisting();
        
    });

});
