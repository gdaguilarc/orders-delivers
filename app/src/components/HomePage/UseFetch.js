import Axios from "axios";
import { useState, useEffect } from "react";

const useFetchTasks = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await Axios.get("http://localhost:4000/");
        setOrders(res.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { orders, error, isLoading, setOrders };
};

export default useFetchTasks;
