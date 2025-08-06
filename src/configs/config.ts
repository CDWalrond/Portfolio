export const siteConfig: {
  baseUrl: string;
  domain: string;
  author: string;
  author_surname: string;
  titlePrefix: string;
  profile_image: string;
  form_id: string;
  github_org_name: string;
  country: string;
  social: {
    email: string;

    github: string;
    linkedin: string;
    discord: string;
  };

  metadata: {
    description: string;
    keywords: string;
    type: string;
  };
} = {
  baseUrl: 'https://cyrilwalrond.com',
  domain: 'cyrilwalrond.com',
  author: 'Cyril Walrond',
  author_surname: 'Walrond',
  titlePrefix: 'Cyril Walrond',
  github_org_name: 'Walrond Technologies',
  country: 'United States',
  profile_image:
    'https://avatars.githubusercontent.com/u/75434191?s=400&u=0aa88e4ae941c44425b2be4595cf92b68f578f8a&v=4',
  form_id: 'https://formspree.io/f/myzynpbr',
  social: {
    email: 'cyril.d.walrond',
    github: 'cyril-walrond',
    linkedin: 'https://www.linkedin.com/in/cyril-walrond-/',
    discord: 'https://discord.gg/mXMhy2EX'
  },
  metadata: {
    description: `Hi! I'm Cyril Walrond, a Full Stack developer passionate about building apps, exploring AI and ML, and collaborating on exciting projects. Let's connect!`,
    keywords:
      'Cyril Walrond, Full Stack Developer, Cyril Walrond portfolio, Cyril Walrond GitHub, Web Development, Mobile Applications, Machine Learning, Artificial Intelligence, Programming Languages, Open Source Developer, App Development',
    type: 'website'
  }
};
