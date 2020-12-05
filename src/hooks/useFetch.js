import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const func = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);

        if (res.ok) {
          const new_data = await res.json();
          setLoading(false);
          setData([new_data]);
        } else {
          setLoading(false);
          setData([]);
        }
      } catch (error) {
        setLoading(false);
        setData(null);
      }
    };
    func();

    return () => setData({});
  }, [url]);

  return [loading, data];
};

export default useFetch;
