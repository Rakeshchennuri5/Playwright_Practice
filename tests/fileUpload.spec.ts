import {expect, test} from '@playwright/test';

test('file upload test', async ({page}) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php/');
    await page.getByRole('button', { name: 'Choose File' }).setInputFiles(['Files_To_Upload/Excel.csv', 'Files_To_Upload/Pdf.pdf', 'Files_To_Upload/Word.docx']);
    await page.getByRole('button', { name: 'Choose File' }).setInputFiles([]);
})

test('file upload with drag and drop', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.locator('#drag-drop-upload').click();
    const filechooserResolver = await fileChooserPromise;
    await filechooserResolver.setFiles(['Files_To_Upload/Excel.csv', 'Files_To_Upload/Pdf.pdf', 'Files_To_Upload/Word.docx']);
})