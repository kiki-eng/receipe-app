import axios from "axios";
import { APP_ID, APP_KEYS, BASE_URL,} from "../apis/constants";

export const getAllRecipes = async () =>{  
    const apiUrl =`${BASE_URL}?type=any&q=chicken&app_id=${APP_ID}&app_key=${APP_KEYS}`
    try {
      const response = await axios.get(apiUrl);
      return response;

    } catch (error) {
      alert(error)
    }
    }
