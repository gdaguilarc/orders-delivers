import Axios from "axios";
import { useState, useEffect } from "react";

const useFetchTasks = () => {
  const [orders, setOrders] = useState({
    init: [],
    delCenter: [],
    delProc: [],
    complete: [],
    failed: [],
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await Axios.get("http://localhost:4000/");

        const tmp = {
          init: data.filter((e) => e.location_id === 1),
          delCenter: data.filter((e) => e.location_id === 2),
          delProc: data.filter((e) => e.location_id === 3),
          complete: data.filter((e) => e.location_id === 4),
          failed: data.filter((e) => e.location_id === 5),
        };

        console.log(tmp);

        setOrders(tmp);
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
