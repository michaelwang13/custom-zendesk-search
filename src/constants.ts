import algoliasearch from 'algoliasearch/lite';

import type { Source, SourceId } from './types';

export const SEARCH_INPUT_SELECTOR: string = '#query';
export const REQUEST_INPUT_SELECTOR: string = '#request_subject';

export const AUTOCOMPLETE_PLACEHOLDERS: string[] = [
  'articles',
  'docs'
];

export const AUTOCOMPLETE_PLACEHOLDER_TEMPLATE = (
  placeholder: string
): string => `Search for ${placeholder}`;

export const SOURCES: Source[] = [
  {
    sourceId: 'documentation',
    indexName: 'docs',
    client: algoliasearch('REDACTED', 'REDACTED'),
    answerParams: { attributesForPrediction: ['title', 'content'] },
    searchUrl: 'YOUR SEARCH URL HERE',
  }
];

export const titleAttribute = (item): string | string[] => {
  switch (item.sourceId) {
    default:
      return 'title';
  }
};

export const contentAttribute = (
  item
): 'content' | 'description' | 'body_safe' => {
  switch (item.sourceId) {
    case 'documentation':
      return 'content';
    default:
      return 'content';
  }
};

export const BASE_URLS: Record<SourceId, string> = {
  documentation: 'https://aptible.com'
};

const basePath = {
  development: '/',
  demo: '/custom-zendesk-search/',
  production: '/',
};

// eslint-disable-next-line no-warning-comments
export const PATHNAMES =
  process.env.NODE_ENV === 'production'
    ? {
        search: `${basePath.production}hc/en-us`,
        form: `${basePath.production}hc/en-us/requests/new`,
      }
    : {
        search: basePath[process.env.NODE_ENV],
        form: basePath[process.env.NODE_ENV],
      };
