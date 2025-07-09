export const SiteConfig: SiteConfig = {
  site: "https://foo.com/",
  title: "Panchant's Blog!",
  description: "It's a personal blog about my life, study and thoughts.",
  localSearch: true,
  markdownMath: false,
  i18n: {
    default: "en",
    languages: ["zh", "en"],
  },
};

interface SiteConfig {
  site: string;
  title: string;
  description: string;
  localSearch: boolean;
  markdownMath: "Katex" | "Mathjax" | false;
  i18n: {
    default: string;
    languages: string[];
  };
}
