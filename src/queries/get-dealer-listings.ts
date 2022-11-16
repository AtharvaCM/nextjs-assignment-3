import { gql, OperationVariables, QueryOptions } from "@apollo/client";

export const GET_DEALER_LISTINGS: QueryOptions<OperationVariables, any> = {
  query: gql`
    query GetDealerListings {
      DealerListings(paginate: { page: 1, pageSize: 9 }) {
        results {
          id
          colour
          vehicleKey: vehicle_key
          listType: list_type
          year
          price: price_excluding_government_charges
          kms: odometer
          variant
          fuelType: fuel_type
          transmission
          engineSize: engine_size
          seat_capacity
          image: main_image
          state: location_state
          makeName: make
          modelName: model
          region: Region {
            regionName: region_name
          }
        }
        pageInfo {
          hasNextPage
          currentPage
          pageCount
          itemCount
        }
      }
    }
  `,
};

export const LOAD_MORE_DEALER_LISTINGS: QueryOptions<OperationVariables, any> =
  {
    query: gql`
      query GetMoreDealerListings($page: Int) {
        DealerListings(paginate: { page: $page, pageSize: 9 }) {
          results {
            id
            colour
            vehicleKey: vehicle_key
            listType: list_type
            year
            price: price_excluding_government_charges
            kms: odometer
            variant
            fuelType: fuel_type
            transmission
            engineSize: engine_size
            seat_capacity
            image: main_image
            state: location_state
            makeName: make
            modelName: model
            region: Region {
              regionName: region_name
            }
          }
          pageInfo {
            hasNextPage
            currentPage
            pageCount
            itemCount
          }
        }
      }
    `,
  };
