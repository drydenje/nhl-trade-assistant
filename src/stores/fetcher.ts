import { nanoquery } from "@nanostores/query";

export const [createFetcherStore, createMutatorStore] = nanoquery({
  fetcher: async (id) => {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch item ${id}`);
    }

    return response.json();
  },
  onErrorRetry: null,
});
