export const siteConfig = {
  name: "Muscular America",
  description:
    "A practical fitness publishing platform for books, field guides, calculators, courses, and community resources.",
  url: "https://muscularamerica.com",
} as const;

export const baseMetadata = {
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};
