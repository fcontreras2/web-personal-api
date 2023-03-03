module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 10, // Default is 5
    },
  },
  "drag-drop-content-types": {
    enabled: true,
  },
});
