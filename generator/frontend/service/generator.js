module.exports = plop =>
  plop.setGenerator('fs', {
    description: 'Create a frontend Service',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your service name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/frontend/services/{{camelCase name}}Service.ts',
        templateFile: 'frontend/service/service.ts.txt'
      }
    ]
  });
