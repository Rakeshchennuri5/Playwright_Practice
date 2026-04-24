import{test} from "@playwright/test"

test('Test1', {tag:['@Smoke', '@Ui']}, async ({page})=>{
    console.log("This is test1")
})

test.describe('Regression Suite',{
    annotation : {
        type : 'Regressioon',
        description : "This is regression suite which contains all the regression test cases"
    }
,tag:'@Regression' },async()=>{

    test("Test2", {tag:[ '@Sanity']}, async()=>{
        console.log("This is test2")
    }) 
    test('Test3', {tag:['@Regression', "@Smoke"]}, async ()=>{
        console.log("This is test3")
    })   
})

test('Test4', {tag:['@Sanity']}, async ({page})=>{
    console.log("This is test4")
})

