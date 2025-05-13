// import { Job } from "./job";
// import { nanoquery } from "@nanostores/query";

// export const [createFetcherStore, createMutatorStore] = nanoquery({
//   // fetcher: async (id) => {
//   fetcher: async (url: string) => {
//     console.log(url);
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`Failed to fetch item ${url}`);
//     }

//     return response.json();
//   },
//   onErrorRetry: null,
// });
