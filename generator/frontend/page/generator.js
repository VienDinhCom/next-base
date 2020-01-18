module.exports = plop =>
  plop.setGenerator('fp', {
    description: 'Create a frontend Page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?'
      },
      {
        type: 'input',
        name: 'parent',
        message: 'What is its parent folder?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{#if parent}}/{{lowerCase parent}}{{/if}}/{{lowerCase name}}.tsx',
        templateFile: 'frontend/page/page.tsx.txt'
      }
    ]
  });
