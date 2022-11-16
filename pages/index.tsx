import type { GetStaticProps, NextPage } from "next";
import { useState } from "react";

import client from "apollo-client";

import {
  GET_DEALER_LISTINGS,
  LOAD_MORE_DEALER_LISTINGS,
} from "@/queries/get-dealer-listings";

import { useLazyQuery } from "@apollo/client";

// custom components
import Layout from "@/components/layout";
import Card from "@/components/UI/card";
import Button from "@/components/UI/button";
import Spinner from "@/components/UI/spinner";

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

type PageInfoType = {
  __typename: string;
  hasNextPage: boolean;
  currentPage: number;
  pageCount: number;
  itemCount: number;
};

type HomePagePropsType = {
  data: DealerListingsType[];
  pageInfo: PageInfoType;
};

const Home: NextPage<HomePagePropsType> = ({ data, pageInfo }) => {
  const [listings, setListings] = useState<DealerListingsType[]>(data);
  const [pageInformation, setPageInformation] =
    useState<PageInfoType>(pageInfo);

  const [fetchMoreListings, { called, loading }] = useLazyQuery(
    LOAD_MORE_DEALER_LISTINGS.query,
    {
      onCompleted: (data) => {
        setListings((prevListings) => {
          return [...prevListings, ...data.DealerListings.results];
        });
        setPageInformation(data.DealerListings.pageInfo);
      },
    }
  );

  const handleLoadMore = () => {
    fetchMoreListings({ variables: { page: pageInformation.currentPage + 1 } });
  };

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
          <div className="grid grid-cols-1 gap-x-3 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
            {listings.map((car) => (
              <Card
                key={car.id}
                src={car.image}
                alt={""}
                href={`cars-for-sale/car/${car.id}`}
                price={+car.price}
                cardTitle={`${car.year} ${car.makeName} ${car.modelName}`}
                btnTitle={"Enquire Now"}
                btnOutlineTitle={"View Details"}
              >
                <div className="my-5 grid grid-cols-2 pl-4 text-lg">
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
          {/* Load More */}
          <div className="flex items-center justify-center py-7">
            {called && loading && <Spinner />}
            {!loading && pageInformation.hasNextPage && (
              <Button title="Load More" onClick={handleLoadMore} />
            )}
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
      pageInfo: data.DealerListings.pageInfo,
    },
  };
};
