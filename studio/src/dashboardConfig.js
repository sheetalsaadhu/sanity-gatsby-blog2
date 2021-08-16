export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "611a2d228c68219fe759f675",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-2-studio-nncz2bcu",
                  apiId: "3d587885-b09d-489a-93fd-8bddb69483c5",
                },
                {
                  buildHookId: "611a2d228af9b5078c84a7d0",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-2-web-7iou4nsw",
                  apiId: "79f24df1-bf88-4f01-b200-b6eaac287d34",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/sheetalsaadhu/sanity-gatsby-blog2",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-2-web-7iou4nsw.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
