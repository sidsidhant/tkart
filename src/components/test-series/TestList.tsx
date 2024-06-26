import TestCard from "@components/test-cards/TestCard";
import { Title } from "@styles/shared.style";
import SeriesCreator from "./SeriesCreator";

export default function TestList(props: any) {
 
  const tests = props?.data?.tests;
  const test_series = props?.data?.test_series;

  const free_tests = tests?.slice(0, test_series?.free_tests);

  const paid_tests = tests?.slice(test_series?.free_tests);

  return (
    <section className="pb-0">
      {tests?.map((item: any, index: number) => (
        <TestCard
          type={item.is_paid === 0 ? "FREE" : "PAID"}
          test={item}
          key={index}
          test_series={test_series}
          alreadyBuy={test_series?.alreadyBuy}
        />
      ))}
      <SeriesCreator data={test_series?.academy} />
    </section>
  );
}
