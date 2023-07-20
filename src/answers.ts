import type { SearchOptions } from '@algolia/client-search';
import type { SearchIndex } from 'algoliasearch/lite';

import type { FederatedHits, HitWithAnswer, SourceId } from './types';

interface FindAnswersParams {
  index: SearchIndex;
  query: string;
  lang?: string;
  searchParams?: SearchOptions;

  sourceId: SourceId;
}

export const customFindAnswers = ({
  index,
  query,
  lang = 'en',
  searchParams,

  sourceId,
}: FindAnswersParams): Promise<
  HitWithAnswer<FederatedHits> & { sourceId: SourceId }
> =>
  index
    .search<FederatedHits>(query, {
        hitsPerPage: 4,
        page: 0,
        optionalWords: query,
        highlightPreTag: '<mark>',
       highlightPostTag: '</mark>',


    })
    .then(({ hits }) =>
      hits.map((hit) => ({
        ...hit,
        sourceId,
      }))
    )
    .catch((err) => err);
