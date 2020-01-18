module.exports = plop =>
  plop.setGenerator('fh', {
    description: 'Create a frontend Hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your hook name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/frontend/hooks/use{{pascalCase name}}.ts',
        templateFile: 'frontend/hook/hook.ts.txt'
      }
    ]
  });
