// Generated from: features\amazon.feature
import { test } from "playwright-bdd";

test.describe('Amazon Website Functionality Tests', () => {

  test.describe('Multiple products search karna', () => {

    test('Example #1', { tag: ['@smoke', '@regression'] }, async ({ Given, When, Then, And, page }) => { 
      await Given('Main Amazon website open karta hu', null, { page }); 
      await When('Search box me "laptop" type karke search button click karta hu', null, { page }); 
      await Then('Search results list display honi chahiye', null, { page }); 
      await And('Page ke title me "laptop" hona chahiye', null, { page }); 
    });

    test('Example #2', { tag: ['@smoke', '@regression'] }, async ({ Given, When, Then, And, page }) => { 
      await Given('Main Amazon website open karta hu', null, { page }); 
      await When('Search box me "mobile" type karke search button click karta hu', null, { page }); 
      await Then('Search results list display honi chahiye', null, { page }); 
      await And('Page ke title me "mobile" hona chahiye', null, { page }); 
    });

    test('Example #3', { tag: ['@smoke', '@regression'] }, async ({ Given, When, Then, And, page }) => { 
      await Given('Main Amazon website open karta hu', null, { page }); 
      await When('Search box me "headphones" type karke search button click karta hu', null, { page }); 
      await Then('Search results list display honi chahiye', null, { page }); 
      await And('Page ke title me "headphones" hona chahiye', null, { page }); 
    });

  });

  test('Today\'s Deals page par navigate karna', { tag: ['@smoke'] }, async ({ Given, When, Then, page }) => { 
    await Given('Main Amazon website open karta hu', null, { page }); 
    await When('Main navigation me "Deals" link par click karta hu', null, { page }); 
    await Then('Deals page display hona chahiye', null, { page }); 
  });

  test('Shopping Cart page open karke check karna', { tag: ['@regression'] }, async ({ Given, When, Then, page }) => { 
    await Given('Main Amazon website open karta hu', null, { page }); 
    await When('Main Cart icon par click karta hu', null, { page }); 
    await Then('Shopping Cart page display hona chahiye', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\amazon.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":13,"tags":["@smoke","@regression"],"steps":[{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Main Amazon website open karta hu","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When Search box me \"laptop\" type karke search button click karta hu","stepMatchArguments":[{"group":{"start":14,"value":"\"laptop\"","children":[{"start":15,"value":"laptop","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Search results list display honi chahiye","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And Page ke title me \"laptop\" hona chahiye","stepMatchArguments":[{"group":{"start":17,"value":"\"laptop\"","children":[{"start":18,"value":"laptop","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":14,"tags":["@smoke","@regression"],"steps":[{"pwStepLine":16,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Main Amazon website open karta hu","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When Search box me \"mobile\" type karke search button click karta hu","stepMatchArguments":[{"group":{"start":14,"value":"\"mobile\"","children":[{"start":15,"value":"mobile","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Search results list display honi chahiye","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And Page ke title me \"mobile\" hona chahiye","stepMatchArguments":[{"group":{"start":17,"value":"\"mobile\"","children":[{"start":18,"value":"mobile","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":15,"tags":["@smoke","@regression"],"steps":[{"pwStepLine":23,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Main Amazon website open karta hu","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When Search box me \"headphones\" type karke search button click karta hu","stepMatchArguments":[{"group":{"start":14,"value":"\"headphones\"","children":[{"start":15,"value":"headphones","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Search results list display honi chahiye","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And Page ke title me \"headphones\" hona chahiye","stepMatchArguments":[{"group":{"start":17,"value":"\"headphones\"","children":[{"start":18,"value":"headphones","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":31,"pickleLine":19,"tags":["@smoke"],"steps":[{"pwStepLine":32,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given Main Amazon website open karta hu","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When Main navigation me \"Deals\" link par click karta hu","stepMatchArguments":[{"group":{"start":19,"value":"\"Deals\"","children":[{"start":20,"value":"Deals","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then Deals page display hona chahiye","stepMatchArguments":[]}]},
  {"pwTestLine":37,"pickleLine":26,"tags":["@regression"],"steps":[{"pwStepLine":38,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given Main Amazon website open karta hu","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When Main Cart icon par click karta hu","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then Shopping Cart page display hona chahiye","stepMatchArguments":[]}]},
]; // bdd-data-end