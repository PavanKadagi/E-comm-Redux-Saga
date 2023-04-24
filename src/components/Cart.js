import { useSelector } from "react-redux";
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Box,
  Typography
} from "@mui/material";

export default function Cart() {
  const data = useSelector((state) => state.cartData);
  console.log("Cart", data);
  let amount =
    data.length && data.map((item) => item.price).reduce((n, p) => n + p);
  return (
    <>
      <Box sx={{ display: "flex", marginTop: "20px" }}>
        <Table sx={{ flex: "70%" }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Color</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow
                sx={{
                  "&:hover": {
                    boxShadow: "0 8px 16px 0px rgba(0,0,0,0.2)"
                  }
                }}
                key={index}
              >
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.color}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.price}</TableCell>
                <img
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "10px"
                  }}
                  src={item.photo}
                  width="40px"
                  height="40px"
                  alt="duumy"
                />
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box m={4} sx={{ flex: "30%" }}>
          <Typography
            sx={{
              // marginLeft: "10px",
              marginBottom: "15px",
              borderBottom: "1px solid #ddd",
              wordSpacing: "20px"
              // flexGrow: 1
            }}
          >
            Amount {amount}
          </Typography>
          <Typography
            sx={{
              // marginLeft: "10px",
              marginBottom: "15px",
              borderBottom: "1px solid #ddd",
              wordSpacing: "20px"
              // flexGrow: 1
            }}
          >
            Discount {amount / 10}
          </Typography>
          <Typography
            sx={{
              // marginLeft: "10px",
              marginBottom: "15px",
              borderBottom: "1px solid #ddd",
              // flexGrow: 1
              wordSpacing: "40px"
            }}
          >
            Tax 100
          </Typography>
          <Typography
            sx={{
              // marginLeft: "10px",
              marginBottom: "15px",
              borderBottom: "1px solid #ddd",
              wordSpacing: "30px"
            }}
          >
            Total {amount - amount / 10 + 100}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
