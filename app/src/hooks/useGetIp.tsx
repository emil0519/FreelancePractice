import { useCallback, useEffect, useState } from "react";

export const useGetIp = () => {
  useEffect(() => {
    getIp();
  }, []);

  const [country, setCountry] = useState<string>();
  const [getIPError, setGetIPError] = useState<boolean>(false);

  const getIp = useCallback(async () => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const jsonData = await response.json();
      setCountry(jsonData.country_name);
    } catch (err) {
      console.error(err);
      setGetIPError(true);
    }
  }, []);
  return { country, getIPError };
};
