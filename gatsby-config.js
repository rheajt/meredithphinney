module.exports = {
    plugins: [
        {
            resolve: "gatsby-theme-portfolio-minimal",
            options: {
                siteUrl: "https://meredithphinney.com", // Used for sitemap generation
                manifestSettings: {
                    favicon: "./content/images/favicon.png", // Path is relative to the root
                    siteName: "Meredith Phinney", // Used in manifest.json
                    shortName: "Portfolio", // Used in manifest.json
                    startUrl: "/", // Used in manifest.json
                    backgroundColor: "#FFFFFF", // Used in manifest.json
                    themeColor: "#610873", // Used in manifest.json
                    display: "minimal-ui", // Used in manifest.json
                },
                contentDirectory: "./content",
                blogSettings: {
                    path: "/blog", // Defines the slug for the blog listing page
                    usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
                },
            },
        },
    ],
};
