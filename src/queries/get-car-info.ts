import { gql, OperationVariables, QueryOptions } from "@apollo/client";

export const GET_CAR_INFO_BY_ID: QueryOptions<OperationVariables, any> = {
  query: gql`
    query GetCarInfoById($id: BigInt!) {
      DealerListing(id: $id) {
        id
        colour
        vin
        odometer
        DealerListingImages {
          image_location
        }
        RedbookVehicle {
          RedbookMake {
            make: make_description
          }
          RedbookFamily {
            model: family_description
          }
          makeCode: vehicle_make_code
          makeName: vehicle_make_code
          familyCode: vehicle_family_code
          modelCode: vehicle_model_code
          modelName: vehicle_model_code
          yearGroup: vehicle_year_group
          vehicle_series_model_year
          seriesModelYear: vehicle_series_model_year
          badgeDescription: vehicle_badge_description
          badgeSecondaryDescription: vehicle_badge_secondary_description
          badgeCode: vehicle_badge_code
          manufacturerBodyStyle: vehicle_manufacturer_body_style
          bodyStyleDescription: vehicle_body_style_description
          manufacturerBodyConfig: vehicle_manufacturer_body_config
          bodyConfigDescription: vehicle_body_config_description
          limitedEdition: vehicle_limited_edition
          buildCountryOriginDescription: vehicle_build_country_origin_description
          seriesPublic: vehicle_series_public
          #Engine & Performace Section
          engineDescription: vehicle_engine_description
          inductionDescription: vehicle_induction_description
          engineConfigurationDescription: vehicle_engine_configuration_description
          cylinders: vehicle_cylinders
          camDescription: vehicle_cam_description
          fuelDeliveryDescription: vehicle_fuel_delivery_description
          power: vehicle_power
          torque: vehicle_torque
          powerRpmFrom: vehicle_power_rpmfrom
          powerRpmTo: vehicle_power_rpmto
          acceleration: vehicle_acceleration
          altEngTorque: vehicle_alt_eng_torque
          engineLocation: vehicle_engine_location
          torqueRpmFrom: vehicle_torque_rpmfrom
          # Transmission
          driveCode: vehicle_drive_code
          gearNum: vehicle_gear_num
          gearTypeDescription: vehicle_gear_type_description
          gearLocationDescription: vehicle_gear_location_description
          # Dimenssions
          manufacturerWheelBaseConfig: vehicle_manufacturer_wheel_base_config
          wheelBaseConfig: vehicle_wheel_base_config
          wheelBase: vehicle_wheel_base
          vehicle_roofline
          vehicle_height
          vehicle_length
          vehicle_width
          frontRimDesc: vehicle_front_rim_desc
          frontTyreSize: vehicle_front_tyre_size
          rearRimDesc: vehicle_rear_rim_desc
          rearTyreSize: vehicle_rear_tyre_size
          kerbWeight: vehicle_kerb_weight
          tareMass: vehicle_tare_mass
          grossVehicleMass: vehicle_gross_vehicle_mass
          grossCombinationMass: vehicle_gross_combination_mass
          vehicle_fuel_type_description
          vehicle_fuel_capacity
          vehicle_fuel_urban
          vehicle_fuel_combined
          vehicle_average_km
          vehicle_drive_description
          vehicle_c_manufacturer_drive
          vehicle_warranty_years
          vehicle_warranty_km
        }
      }
    }
  `,
};
