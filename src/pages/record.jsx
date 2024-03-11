import Records from "@/components/Records";
import Layout from "@/layout/Layout";
import Header from "@/components/Header";
export default function record() {
  return (
    <div className=" max-w-[1440px] m-auto ">
      <Header />
      <Records />
    </div>
  );
}
record.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
