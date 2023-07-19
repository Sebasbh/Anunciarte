import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (extension, Host) => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const url = Host(extension);
          const response = await axios.get(url);
          setData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, [extension, Host]);
  
    return { data };
  };
  
  export default useFetch;