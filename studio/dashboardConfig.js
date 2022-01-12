export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events-studio-ziy5goh3',
                  apiId: '4f4fc5af-7b89-41ca-b1a7-c7bdc3ab7b6b'
                },
                {
                  buildHookId: '61df212efdbe312287116e4b',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events-web-d8pd915k',
                  apiId: '6735dac9-8077-44cf-b294-e1ace32bcd0b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/malefs/sanity-nuxt-events_',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events-web-d8pd915k.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
