import { Button } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const News = () => {
  const [res, setRes] = useState<any>([]);

  const getNews = async () => {
    try {
      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${res.length/10+1}&_limit=10`
      );
      setRes([...res, ...result.data]);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  const deleteNews = (id: string | number) => {
    setRes(res.filter((item: { id: string | number }) => item.id !== id));
  };

  

  return (
    <Box sx={{ w: 1 / 2 }}>
      {res.map((item: any) => (
        <NewsItem
          key={item.id}
          title={item.title}
          body={item.body}
          id={item.id}
          deleteNews={deleteNews}
        />
      ))}
      <Button onClick={getNews}>More News </Button>
    </Box>
  );
};

export default News;
