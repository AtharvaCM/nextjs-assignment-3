import type { GetStaticProps, NextPage } from "next";

import { GET_DEALER_LISTINGS } from "@/queries/get-dealer-listings";

// custom components
import Layout from "@/components/layout";
import client from "apollo-client";
import Card from "@/components/UI/card";

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
  // console.log("data: ", data);
  return (
    <Layout>
      <section id="cars-for-sale" className="mx-[5%]">
        <div className="mx-auto max-w-[1440px]">
          {/* Title */}
          <div className="my-6 flex items-center justify-center">
            <h1 className="text-4xl font-extrabold text-black" role="heading">
              All Cars For Sale
            </h1>
          </div>
          {/* Cars List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-6">
            {data.map((car) => (
              <Card
                key={car.id}
                src={car.image}
                alt={""}
                href={car.vehicleKey}
                price={+car.price}
                cardTitle={`${car.year} ${car.makeName} ${car.modelName}`}
                btnTitle={"Enquire Now"}
                btnOutlineTitle={"View Details"}
              >
                <div className="my-5 pl-4 grid grid-cols-2 text-lg">
                  {/* COl 1 */}
                  <ul className="list-disc">
                    <li>{car.kms} KM</li>
                    <li>{car.colour}</li>
                  </ul>
                  {/* COl 2 */}
                  <ul className="list-disc">
                    <li>{car.fuelType}</li>
                    <li>{car.transmission}</li>
                  </ul>
                </div>
              </Card>
            ))}
          </div>
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
