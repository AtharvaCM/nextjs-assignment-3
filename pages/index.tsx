import type { NextPage } from "next";

// custom components
import Layout from "@/components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <section id="cars-for-sale" className="mx-[10%]">
        <div className="mx-auto max-w-[1024px]">
          {/* Title */}
          <div className="my-6 flex items-center justify-center">
            <h1 className="text-4xl font-extrabold text-black" role="heading">
              All Cars For Sale
            </h1>
          </div>
          {/* Cars List */}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
