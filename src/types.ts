import type {
  FindAnswersOptions,
  FindAnswersResponse,
  SearchOptions,
} from '@algolia/client-search';
import type { SearchClient } from 'algoliasearch/lite';

export type DocHit = {
  title: string;
  page_title: string;
  description: string;
  tags: string[];
  details: {
    questions: string[];
    is_token: boolean;
  };
  level: number;
  variations: string[];
  languages: string[];
  url: string;
  base_url: string;
  hierarchy_level: number;
  hierarchy: string[];
  anchor: string;
  toc: Array<{
    anchor: string;
    title: string;
  }>;
  snippets: Record<string, unknown>;
  content_structure: {
    lvl0: string;
    lvl1?: string;
    lvl2?: string;
    lvl3?: string;
    lvl4?: string;
    lvl5?: string;
  };
  content_type: string;
  type: string;
  type_level: number;
  category: string;
  objectID: string;
};

export type FederatedHits = DocHit;

export type SourceId =
  | 'documentation'
export interface Source {
  sourceId: SourceId;
  answerParams?: any;
  indexName: string;
  client: SearchClient;
  searchParams?: SearchOptions;
  searchUrl: string;
}

export type HitWithAnswer<T> = FindAnswersResponse<T>['hits'][0];
