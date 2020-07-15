/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateWebpackConfig = ({ stage, loaders, plugins, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-ace/,
            use: loaders.null(),
          },
          {
            test: /react-datepicker/,
            use: loaders.null(),
          },
          {
            test: /react-beautiful-dnd/,
            use: loaders.null(),
          },
        ],
      },
      plugins: [
        plugins.define({
          HTMLElement: class {},
          window: {
            matchMedia: () => '()',
          },
          document: {
            createElement: () => null,
          },
          localStorage: {
            getItem: () => null,
            setItem: () => null,
          },
        }),
      ],
    });
  }
};
