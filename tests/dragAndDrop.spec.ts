import {test, expect} from '@playwright/test'

test('Drag and Drop Practice', async ({page})=>{

// Approach 1 : using mouse actions

    await page.goto('https://demoqa.com/droppable')
    // await page.getByLabel('Simple').getByText('Drag Me').hover()
    // await page.mouse.down()
    // await page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable').hover()
    // await page.mouse.up()
    // await expect(page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable')).toHaveText('Dropped!')


// Approach 2 : using drag and drop method

    await page.getByLabel('Simple').getByText('Drag Me').dragTo(page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable'),{
        sourcePosition : {x: 10, y: 10},
        targetPosition : {x: 10, y: 10}
     })
     await expect(page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable')).toHaveText('Dropped!')
})


