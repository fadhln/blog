import type {
  PageObjectResponse,
  PartialPageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

const isPageObjectResponse = (
  res: PageObjectResponse | PartialPageObjectResponse
): res is PageObjectResponse => {
  return 'properties' in res;
};

export { isPageObjectResponse };
