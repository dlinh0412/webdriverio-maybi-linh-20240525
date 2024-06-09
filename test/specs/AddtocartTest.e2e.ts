import keys from "webdriverio/build/commands/browser/keys";
describe('Addtocart test', () => {
    beforeEach(async () => {
        await browser.reloadSession();
    });
    it('ATC01', async () => {
        // verify button them vao gio hang
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/`);
        await expect($("//a[@class='icon_hd header-icon cart-count ega-color--inherit']")).toBeExisting();
        await browser.pause(3000);
    });
    it('ATC02', async () => {
        // them vao gio hang thanh cong
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/`);
        await $("(//a[@title='Đầm midi xòe pho xéo nhún hai bên tùng'])[1]").scrollIntoView();
        await browser.pause(3000);
        await $("(//a[@title='Đầm midi xòe pho xéo nhún hai bên tùng'])[1]").click();
        await browser.pause(3000);
        await $("//strong[contains(text(),'Các mã giảm có thể áp dụng ở bước thanh toán')]").scrollIntoView();
        await browser.pause(1000);
        await $("(//button[contains(text(),'THÊM VÀO GIỎ')])[1]").click();
        await browser.pause(1000);
        await expect($("//h3[@class='modal-title']")).toHaveTextContaining(
            'Thêm vào giỏ hàng thành công');
        await $("//a[contains(text(),'Xem giỏ hàng')]").click();
        await browser.pause(1000);
        await expect(browser).toHaveUrl('https://maybi.com/cart');
        await browser.pause(2000);

       
    });
    it ('ATC03', async() => {
        // them so luong san pham vao gio hang
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/`);
        await $("(//a[@title='Đầm midi xòe pho xéo nhún hai bên tùng'])[1]").scrollIntoView();
        await browser.pause(3000);
        await $("(//a[@title='Đầm midi xòe pho xéo nhún hai bên tùng'])[1]").click();
        await browser.pause(3000);
        await $("//strong[contains(text(),'Các mã giảm có thể áp dụng ở bước thanh toán')]").scrollIntoView();
        await browser.pause(1000);
        await $("(//button[@class='btn btn_num num_2 button button_qty'])[1]").click();
        await browser.pause(1000);
        await $("(//button[@class='btn btn_num num_2 button button_qty'])[1]").click();
        await browser.pause(1000);
        await $("(//button[contains(text(),'THÊM VÀO GIỎ')])[1]").click();
        await browser.pause(1000);
        await expect($("//h3[@class='modal-title']")).toHaveTextContaining(
            'Thêm vào giỏ hàng thành công');
        await $("//a[contains(text(),'Xem giỏ hàng')]").click();
        await browser.pause(1000);
        await expect(browser).toHaveUrl('https://maybi.com/cart');
        await browser.pause(2000);
    });
    it ('ATC04', async() => {
        // the cac san pham khac nhau
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/`);
        await $("(//a[@title='Đầm midi xòe pho xéo nhún hai bên tùng'])[1]").scrollIntoView();
        await browser.pause(3000);
        await $("(//a[@title='Đầm midi xòe pho xéo nhún hai bên tùng'])[1]").click();
        await browser.pause(3000);
        await $("//strong[contains(text(),'Các mã giảm có thể áp dụng ở bước thanh toán')]").scrollIntoView();
        await browser.pause(1000);
        await $("(//button[contains(text(),'THÊM VÀO GIỎ')])[1]").click();
        await browser.pause(1000);
        await expect($("//h3[@class='modal-title']")).toHaveTextContaining(
            'Thêm vào giỏ hàng thành công');
        await $("//a[contains(text(),'Xem giỏ hàng')]").click();
        await browser.pause(1000);
        await expect(browser).toHaveUrl('https://maybi.com/cart');
        await browser.pause(2000);
        // tro ve trang chu
        await $("(//img[@class='img-fluid'])[1]").click();
        await browser.pause(1000);
        // them san pham thu 2
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/`);
        await $("(//a[@title='Đầm midi xòe pho xéo nhún hai bên tùng'])[1]").scrollIntoView();
        await browser.pause(3000);
        await $("(//a[@title='Áo kiểu tơ xốp xếp ly vai'])[2]").click();
        await browser.pause(3000);
        await $("//strong[contains(text(),'Các mã giảm có thể áp dụng ở bước thanh toán')]").scrollIntoView();
        await browser.pause(1000);
        await $("(//button[contains(text(),'THÊM VÀO GIỎ')])[1]").click();
        await browser.pause(1000);
        await expect($("//h3[@class='modal-title']")).toHaveTextContaining(
            'Thêm vào giỏ hàng thành công');
        await $("//a[contains(text(),'Xem giỏ hàng')]").click();
        await browser.pause(1000);
        await expect(browser).toHaveUrl('https://maybi.com/cart');
        await browser.pause(2000);
    });
    it ('ATC05', async() => {
        // the cac san pham khac nhau
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/`);
        await $("(//a[@title='Đầm midi xòe pho xéo nhún hai bên tùng'])[1]").scrollIntoView();
        await browser.pause(3000);
        await $("(//a[@title='Đầm midi xòe pho xéo nhún hai bên tùng'])[1]").click();
        await browser.pause(3000);
        await $("//strong[contains(text(),'Các mã giảm có thể áp dụng ở bước thanh toán')]").scrollIntoView();
        await browser.pause(1000);
        await $("(//button[contains(text(),'THÊM VÀO GIỎ')])[1]").click();
        await browser.pause(1000);
        await expect($("//h3[@class='modal-title']")).toHaveTextContaining(
            'Thêm vào giỏ hàng thành công');
        await $("//a[contains(text(),'Xem giỏ hàng')]").click();
        await browser.pause(1000);
        await expect(browser).toHaveUrl('https://maybi.com/cart');
        await browser.pause(2000);
        // tro ve trang chu
        await $("(//img[@class='img-fluid'])[1]").click();
        await browser.pause(1000);
        // chon mau chon size
        await $("(//a[@title='Đầm midi xòe pho xéo nhún hai bên tùng'])[1]").scrollIntoView();
        await browser.pause(3000);
        await $("(//a[@title='Đầm midi xòe pho xéo nhún hai bên tùng'])[1]").click();
        await browser.pause(3000);
        await $("//strong[contains(text(),'Các mã giảm có thể áp dụng ở bước thanh toán')]").scrollIntoView();
        await browser.pause(1000);
        await $("//input[@id='swatch-0-den']").click();
        await browser.pause(1000);
        await $("//input[@id='swatch-1-m']").click();
        await browser.pause(1000);
        await $("(//button[contains(text(),'THÊM VÀO GIỎ')])[1]").click();
        await browser.pause(1000);
        await expect($("//h3[@class='modal-title']")).toHaveTextContaining(
            'Thêm vào giỏ hàng thành công');
        await $("//a[contains(text(),'Xem giỏ hàng')]").click();
        await browser.pause(1000);
        await expect(browser).toHaveUrl('https://maybi.com/cart');
        await browser.pause(2000);
    });
    it('ATC06', async () => {
        // them qua so luong ton kho
        console.log("i. Launch Browser :'https://maybi.com/'");
        await browser.url(`https://maybi.com/`);
        await $("(//a[@title='Đầm midi xòe pho xéo nhún hai bên tùng'])[1]").scrollIntoView();
        await browser.pause(3000);
        await $("(//a[@title='Áo kiểu tơ xốp xếp ly vai'])[2]").click();
        await browser.pause(3000);
        await $("//strong[contains(text(),'Các mã giảm có thể áp dụng ở bước thanh toán')]").scrollIntoView();
        await browser.pause(1000);
        await $("(//button[contains(text(),'THÊM VÀO GIỎ')])[1]").click();
        await browser.pause(1000);
        await $("//a[contains(text(),'Xem giỏ hàng')]").click();
        await browser.pause(1000);
        await $("(//input[@type='text'])[2]").setValue('100');
        await browser.pause(1000);
        await $("(//input[@type='text'])[2]");
        // cần enter và verify alert cảnh báo        
    });
});