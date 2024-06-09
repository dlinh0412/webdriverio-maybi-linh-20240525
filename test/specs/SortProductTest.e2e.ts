describe('Sort Product', () => {
    beforeEach(async () => {
        await browser.reloadSession();
    });
    it('S01', async () => {
        // hien thi dropdown menu sap xep
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/collections/all`);
        await browser.pause(1000);
        await $("//select[@class='content_ul']").click();
        await browser.pause(1000);
        await expect($("//option[contains(text(),'Tùy chọn')]")).toBeExisting();
        await expect($("//option[contains(text(),'Tên A → Z')]")).toBeExisting();
        await expect($("//option[contains(text(),'Tên Z → A')]")).toBeExisting();
        await expect($("//option[contains(text(),'Giá tăng dần')]")).toBeExisting();
        await expect($("//option[contains(text(),'Giá giảm dần')]")).toBeExisting();
        await expect($("//option[contains(text(),'Hàng mới')]")).toBeExisting();
        await browser.pause(1000);
    });
    it('S02', async () => {
        //sap xep san pham tu A -> Z
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/collections/all`);
        await browser.pause(1000);
        await $("//select[@class='content_ul']").click();
        await browser.pause(1000);
        await $("//option[contains(text(),'Tên A → Z')]").click();
        await browser.pause(1000);
        await expect(browser).toHaveUrl('https://maybi.com/collections/all?q=filter=(!(collectionid:product=0))&page=1&sortby=title:product=asc&view=grid');
        await browser.pause(2000);
           
    });
    it('S03', async () => {
        //sap xep san pham tu Z -> A
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/collections/all`);
        await browser.pause(1000);
        await $("//select[@class='content_ul']").click();
        await browser.pause(2000);
        await $("//option[contains(text(),'Tên Z → A')]").click();
        await browser.pause(1000);
        await expect(browser).toHaveUrl('https://maybi.com/collections/all?q=filter=(!(collectionid:product=0))&page=1&sortby=title:product=desc&view=grid');
        await browser.pause(2000);
    });

    it('S04', async () => {
        // sap xep san pham theo gia tang dan
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/collections/all`);
        await browser.pause(1000);
        await $("//select[@class='content_ul']").click();
        await browser.pause(2000);
        await $("//option[contains(text(),'Giá tăng dần')]").click();
        await browser.pause(1000);
        await expect(browser).toHaveUrl('https://maybi.com/collections/all?q=filter=(!(collectionid:product=0))&page=1&sortby=price:product=asc&view=grid');
        await browser.pause(2000);
    });
    it('S05', async () => {
        // sap xep san pham theo gia giam dan
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/collections/all`);
        await browser.pause(1000);
        await $("//select[@class='content_ul']").click();
        await browser.pause(2000);
        await $("//option[contains(text(),'Giá giảm dần')]").click();
        await browser.pause(1000);
        await expect(browser).toHaveUrl('https://maybi.com/collections/all?q=filter=(!(collectionid:product=0))&page=1&sortby=price:product=desc&view=grid') ; 
        await browser.pause(2000);
    });
    it('S06', async () => {
        // hien thi hang moi
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/collections/all`);
        await browser.pause(1000);
        await $("//select[@class='content_ul']").click();
        await browser.pause(2000);
        await $("//option[contains(text(),'Hàng mới')]").click();
        await browser.pause(1000);
        await expect(browser).toHaveUrl('https://maybi.com/collections/all');
        await browser.pause(2000);
    });
   
});