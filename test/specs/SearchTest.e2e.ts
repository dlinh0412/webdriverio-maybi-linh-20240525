describe ('Search Test', () => {
    beforeEach(async () => {
        await browser.reloadSession();
    });
    it ('SP01', async() => {
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/`);
        (await $("//span[contains(text(),'Tìm kiếm')]")).click();
        await expect($("//input[@class='input-group-field auto-search form-control ']")).toBeExisting();
        await expect($("//button[@aria-label='search']")).toBeExisting();


    });
    it ('SP02', async() => {
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/`);
        await $("//span[contains(text(),'Tìm kiếm')]").click();
        await $("//input[@class='input-group-field auto-search form-control ']").setValue('Chân váy');
        await browser.pause(3000);
        await expect($("//strong[contains(text(),'Kết quả tìm kiếm cho ')]")).toHaveTextContaining(
            'Kết quả tìm kiếm cho ');
    });
    it ('SP03', async() => {
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/`);
        await $("//span[contains(text(),'Tìm kiếm')]").click();
        await $("//input[@class='input-group-field auto-search form-control ']").setValue('Text');
        await browser.pause(3000);
        await expect($("//div[contains(text(),'Không tìm thấy kết quả ')]")).toHaveTextContaining(
            'Không tìm thấy kết quả');
    });
   
    it ('SP04', async() => {
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/`);
        await $("//span[contains(text(),'Tìm kiếm')]").click();
        await $("//input[@class='input-group-field auto-search form-control ']").setValue('Chân váy ôm nhung xẻ tà');
        await browser.pause(3000);
        await expect($("//h4[contains(text(),'Chân váy ôm nhung xẻ tà')]")).toHaveTextContaining(
            'Chân váy ôm nhung xẻ tà');
    });
    it ('SP05', async() => {
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/`);
        await $("//span[contains(text(),'Tìm kiếm')]").click();
        await $("//button[@aria-label='search']").click();
        await browser.pause(3000);
        await expect($("//input[@class='input-group-field auto-search form-control ' and @required]")).toBeExisting();
    });



});