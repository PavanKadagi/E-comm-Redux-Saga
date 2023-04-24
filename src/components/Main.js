import { Diversity2Outlined } from "@mui/icons-material";
import { Box, Button, Stack, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../Redux/Action";
import { AddToCart, RemovFromCart } from "../Redux/ActionClick";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productList());
  }, []);
  const data = useSelector((state) => state.productData);
  console.log("Main", data);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr"
      }}
    >
      {data.map((item, index) => (
        <Paper
          key={index}
          sx={{
            margin: "20px",
            float: "left",
            borderRadius: "10px"
          }}
          // component='span'
          elevation={3}
          maxWidth="300px"
        >
          <img
            src={item.photo}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "auto",
              height: "150px",
              margin: "0 auto",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px"
            }}
          />
          <Typography sx={{ padding: "5px", textAlign: "center" }}>
            Name : {item.name}
          </Typography>
          <Typography sx={{ padding: "5px", textAlign: "center" }}>
            Color : {item.color}
          </Typography>
          <Typography sx={{ padding: "5px", textAlign: "center" }}>
            Category : {item.category}
          </Typography>
          <Typography sx={{ padding: "5px", textAlign: "center" }}>
            Price : {item.price}
          </Typography>
          <Stack spacing={1.4} mt={1.3} mb={1} sx={{ padding: "5px" }}>
            <Button
              onClick={() => dispatch(AddToCart(item))}
              variant="contained"
            >
              Add To Cart
            </Button>
            <Button
              onClick={() => dispatch(RemovFromCart(item.id))}
              variant="contained"
            >
              Remove From Cart
            </Button>
          </Stack>
        </Paper>
      ))}
    </div>
  );
};
export default Main;
