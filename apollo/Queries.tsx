import { gql } from "@apollo/client";

const GET_BUSINESSES = gql`
  query search($term: String!, $location: String!) {
    search(term: $term, location: $location, limit: 10) {
      total
      business {
        id
        name
        rating
        review_count
        photos
        display_phone
        location {
          address1
          city
          state
          country
        }
      }
    }
  }
`;

const GET_BUSINESSES_BY_ID = gql`
  query business($id: String!) {
    business(id: $id) {
      id
      name
      rating
      review_count
      photos
      display_phone
      price
      is_closed
      location {
        address1
        city
        state
        country
      }
    }
  }
`;

const GET_BUSINESSES_HOURS = gql`
  query business($id: String!) {
    business(id: $id) {
      hours {
        open {
          is_overnight
          end
          start
          day
        }
      }
    }
  }
`;

const GET_BUSINESSES_REVIEWS = gql`
  query business($id: String!) {
    reviews(business: $id) {
      total
      review {
        rating
        text
        user {
          name
          image_url
        }
      }
    }
  }
`;

const Queries = (query: any) => {
  switch (query) {
    case "getBusinesses":
      return GET_BUSINESSES;
    case "getBusinessById":
      return GET_BUSINESSES_BY_ID;
    case "getBusinessHours":
      return GET_BUSINESSES_HOURS;
    case "getBusinessReviews":
      return GET_BUSINESSES_REVIEWS;
    default:
      return null;
  }
};

export default Queries;
