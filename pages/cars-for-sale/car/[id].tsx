import { GET_CAR_INFO_BY_ID } from "@/queries/get-car-info";
import { GET_DEALER_LISTINGS_ID_LIST } from "@/queries/get-dealer-listings";
import client from "apollo-client";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";

type CarPagePropsType = {
  data: {
    DealerListing: {
      __typename: string;
      id: string;
      DealerListingImages: [any];
      RedbookVehicle: any;
    };
  };
};

const Car: React.FC<CarPagePropsType> = ({ data }) => {
  console.log("data: ", data);
  return <div>Car</div>;
};

export default Car;

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query(GET_DEALER_LISTINGS_ID_LIST);
  const arr: { id: string }[] = data.DealerListings.results;
  const paths = arr.map((listing) => {
    return {
      params: { id: listing.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  const { data } = await client.query({
    query: GET_CAR_INFO_BY_ID.query,
    variables: {
      id: id,
    },
  });

  const props = { data };

  return { props };
};
