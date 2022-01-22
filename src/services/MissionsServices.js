import { useQuery } from "@apollo/client";
import { apolloClient } from "./ApolloClient";
import { allMissionQuery } from "./queries";

export const getAllMissions = async () => {
  console.log("Entered");
  return await apolloClient
    .query({ query: await allMissionQuery() })
    .then((result) => {
      return result;
    })
    .catch((err) => console.log(err));
};
