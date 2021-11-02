// e2e-run-tests.js
const cypress = require('cypress');
const { sendMail } = require('./mailer');

cypress.run({ headless: true, browser: 'chrome' })
  .then(async(result) => {
    if (result.totalFailed > 0) {
      const statsWithError = result.runs.filter(e=>e.stats.failures>0)
      const testsWithError = statsWithError.map(e=>{
        console.log('e.tests',e.tests)
        return e.tests.filter(e=>e.state==='failed').map(e=>(
          `<li><h3 style='text-transform:capitalize;'> ${e.title[0]}</h3> <h4>test: ${e.title[1]}</h4></li>`))
      })
      const message ='<h1>These tests have failed</h1> '+`<ol>${testsWithError.join()}</ol>`
      await sendMail('badalmishr7035@gmail.com',result.totalFailed,message)
    } else {
        console.log('Awesome! all tests pased')
    }
    process.exit(0);
  })
  .catch(err => {
    console.log("Cypress didn't worked due to some error",err)
    process.exit(0);
  });