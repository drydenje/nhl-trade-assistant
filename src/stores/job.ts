// import { $currentJob } from '@/stores/job';
import { createFetcherStore } from "./fetcher";
import { atom } from "nanostores";

export type Job = {
  by: string;
  id: number;
  score: number;
  text: string;
  time: number;
  title: string;
  type: string;
  url: string;
};
//https://hacker-news.firebaseio.com/v0/item/192327.json?print=pretty
export const $currentJobId = atom(192327);
export const $currentJob = createFetcherStore<Job>([
  "/api/post/",
  $currentJobId,
]);
