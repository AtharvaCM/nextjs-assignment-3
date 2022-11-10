import type { GetStaticProps, NextPage } from "next";

import { GET_DEALER_LISTINGS } from "@/queries/get-dealer-listings";

// custom components
import Layout from "@/components/layout";
import client from "apollo-client";

type DealerListingsType = {
  colour: string;
  engineSize: number;
  fuelType: string;
  id: number;
  image: string;
  kms: number;
  listType: string;
  makeName: string;
  modelName: string;
  price: number;
  region: { regionName: string; __typename: string };
  seat_capacity: number;
  state: string;
  transmission: string;
  variant: string;
  vehicleKey: string;
  year: number;
  __typename: "DealerListing";
};

type HomePagePropsType = {
  data: DealerListingsType[];
};

const Home: NextPage<HomePagePropsType> = ({ data }) => {
  console.log("data: ", data);
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

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query(GET_DEALER_LISTINGS);

  return {
    props: {
      data: data.DealerListings.results,
    },
  };
};
