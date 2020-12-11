const path = require("path");
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query MyQuery {
      Lolly {
        getLollies {
          id
          colorTop
          colorMiddle
          colorBottom
          recipient
          message
          sender
          lollyPath
        }
      }
    }
  `);

  console.log(result);
  console.log(JSON.stringify(result));
  result.data.Lolly.getLollies.map((data) => {
    createPage({
      path: `${data.lollyPath}`,
      component: path.resolve("./src/Template/Template.tsx"),
      context: {
        data: data,
      },
    });
  });
};
