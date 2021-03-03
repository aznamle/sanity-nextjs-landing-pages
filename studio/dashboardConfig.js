export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603ee4665ea3197ae46b7355',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-kms9z99f',
                  apiId: '3b5a10ea-f3a7-47b7-89d3-6597242c43f8'
                },
                {
                  buildHookId: '603ee466ce1ae36bed12e382',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qc9jbzav',
                  apiId: 'b32c0cf6-030e-4718-808b-bf6838aca306'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aznamle/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qc9jbzav.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
