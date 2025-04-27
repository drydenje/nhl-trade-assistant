import { useStore } from "@nanostores/react";
import { $currentJob } from "@/stores/job";

export const Job = () => {
  const { data, loading } = useStore($currentJob);
  // console.log(loading);
  // if (data) console.log(data);
  if (data) return <div>{data.title}</div>;
  if (loading) return <>Loading...</>;
};
