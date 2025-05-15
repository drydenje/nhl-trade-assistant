// import { useStore } from "@nanostores/react";
// import { $currentJob } from "@/stores/job";

type Props = {
  title: string;
  isActive: boolean;
};

export const Job = ({ title, isActive }: Props) => {
  // const { data, loading } = useStore($currentJob);
  // // console.log(loading);
  // // if (data) console.log(data);
  // if (data) return <div>{data.title}</div>;
  // if (loading) return <>Loading...</>;

  return (
    <div>
      <h1>{title}</h1>
      {isActive && <h3>Active</h3>}
    </div>
  );
};
