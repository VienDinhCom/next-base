module.exports = plop =>
  plop.setGenerator('fc', {
    description: 'Create a frontend Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
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
        path: 'src/frontend/components{{#if parent}}/{{pascalCase parent}}{{/if}}/{{pascalCase name}}/index.ts',
        templateFile: 'frontend/component/index.ts.txt'
      },
      {
        type: 'add',
        path:
          'src/frontend/components{{#if parent}}/{{pascalCase parent}}{{/if}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'frontend/component/component.tsx.txt'
      },
      {
        type: 'add',
        path:
          'src/frontend/components{{#if parent}}/{{pascalCase parent}}{{/if}}/{{pascalCase name}}/{{pascalCase name}}.module.css',
        templateFile: 'frontend/component/component.module.css.txt'
      }
    ]
  });
