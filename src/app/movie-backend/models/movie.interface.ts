export interface Movie {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface MovieDetail {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: object;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: Company[];
  production_countries: Country[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: Language[];
  status: string;
  tagline: string | null;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Company {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
}

interface Country {
  iso_3166_1: string;
  name: string;
}

interface Language {
  iso_639_1: string;
  name: string;
}
interface Genre {
  id: number;
  name: string;
}

export interface PaginatedResponse<T> {
  total_results: number;
  total_pages: number;
  page: number;
  results: T[];
}
