module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: `Lollies`,
        // This is the field under which it's accessible
        fieldName: `Lolly`,
        // URL to query from
        url: `https://lolly-pop.netlify.app//.netlify/functions/LollyPop`,
      },
    },
  ],
};