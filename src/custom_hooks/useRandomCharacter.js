import { useQuery } from "@apollo/client";
import { GET_RANDOM_CHARACTER } from "../queries/getRandomCharacter";

export const useRandomCharacter = () => {
    const result = useQuery(GET_RANDOM_CHARACTER, { enabled: false });
    
    return result;
};