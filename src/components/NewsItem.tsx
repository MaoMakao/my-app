import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";

interface NewsItemProps {
  title: string;
  body: string;
  id: number;
  deleteNews: (id: string | number) => void;
}
const NewsItem: FC<NewsItemProps> = ({ title, body, deleteNews, id }) => {
  return (
    <Card sx={{ borderRadius: 12, boxShadow: 6, m: 2, display: "grid" }}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>

        <Typography variant="body2">
          {body}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions sx={{ flexDirection: "column" }}>
        <Button size="small" onClick={() => deleteNews(id)}>delete news</Button>
      </CardActions>
    </Card>
  );
};

export default NewsItem;
