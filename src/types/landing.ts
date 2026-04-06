export type LandingSection = {
  heading: string;
  body: string;
};

export type LandingFaq = {
  q: string;
  a: string;
};

export type LandingPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  referenceNote: string;
  retailNote: string;
  ctaLabel: string;
  ctaHref: string;
  sections: LandingSection[];
  faqs: LandingFaq[];
};
