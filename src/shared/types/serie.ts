export default interface Serie {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended?: string;
  officialSite?: string;
  rating: {
    average: number;
  };
  weight: number;
  schedule: {
    time: string;
    days: string[];
  };
  network?: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone?: string;
    };
    officialSite?: string;
  };
  webChannel?: string;
  dvdCountry?: string;
  externals?: {
    tvrage?: number;
    thetvdb?: number;
    imdb?: string;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode?: {
      href?: string;
    };
  };
}
