import axios from "axios";
import { api } from "../../config/index";


export const getRelatedDoctors = async ({expert,id }) => {
    const response = await axios.get(`${api}/doctors?expert=${expert}`);
    return response.data;
}