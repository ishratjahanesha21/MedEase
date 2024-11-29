import axios from "axios";
import { api } from "../../config/index";
export const getFilterMedicine = async (search) => {
    let queryString = '';
     if (search !== '') {
        queryString += `&keyword=${search}`;
    }
    const response = await axios.get(`${api}/get/medicine/?${queryString}`);
    return response.data;
}