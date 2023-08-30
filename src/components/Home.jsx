import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Rating,
  Button,
} from "@mui/material";
import BannerCarousel from "./BannerCarousel";
import { Link } from "react-router-dom";

const HomePage = () => {
  const productData = [
    {
      title: "Loan Option 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Loan Option 2",
      description: "Pellentesque ut mi id ante gravida vestibulum.",
    },
    {
      title: "Loan Option 3",
      description: "Vestibulum ac metus eu felis bibendum ullamcorper.",
    },
    {
      title: "Loan Option 4",
      description:
        "Aliquam sagittis ex ut odio fermentum, et tristique enim aliquet.",
    },
    {
      title: "Loan Option 5",
      description:
        "In hac habitasse platea dictumst. Sed malesuada urna ac nisl convallis, et tincidunt quam blandit.",
    },
    {
      title: "Loan Option 6",
      description:
        "Suspendisse potenti. Maecenas facilisis odio a leo bibendum vestibulum.",
    },
  ];

  const partnersData = [
    {
      companyName: "Company A",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      companyName: "Company B",
      description: "Pellentesque ut mi id ante gravida vestibulum.",
    },
    {
      companyName: "Company C",
      description: "Vestibulum ac metus eu felis bibendum ullamcorper.",
    },
    {
      companyName: "Company D",
      description:
        "Aliquam sagittis ex ut odio fermentum, et tristique enim aliquet.",
    },
    {
      companyName: "Company E",
      description:
        "In hac habitasse platea dictumst. Sed malesuada urna ac nisl convallis, et tincidunt quam blandit.",
    },
    {
      companyName: "Company F",
      description:
        "Suspendisse potenti. Maecenas facilisis odio a leo bibendum vestibulum.",
    },
    {
      companyName: "Company G",
      description: "Vestibulum eu metus nec ante feugiat venenatis.",
    },
    {
      companyName: "Company H",
      description:
        "Aenean ut urna vel velit fermentum sollicitudin a vel orci.",
    },
  ];

  const ratingsData = [
    {
      name: "John Doe",
      rating: 4.5,
      review: "Great service and easy application process.",
    },
    {
      name: "Jane Smith",
      rating: 5,
      review: "I got approved quickly! Excellent experience.",
    },
    {
      name: "Robert Johnson",
      rating: 3,
      review: "Average service. Could be better.",
    },
  ];

  return (
    <Container maxWidth="md">
      {/* Banner Section */}
      <BannerCarousel />
      {/* Product Cards Section */}
      <Box my={4}>
        <Typography variant="h5" gutterBottom>
          Our Products
        </Typography>
        <Grid container spacing={2}>
          {productData.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{textAlign:"center"}}>
              <Card sx={{padding:"20px"}}>
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography variant="body2">{product.description}</Typography>
                </CardContent>
                <Box>
                <Link to="/eligibilty">
                    <Button variant="contained">Check Eligibilty</Button>
                </Link>
              </Box>
              </Card>
              
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Our Partners Section */}
      <Box my={4}>
        <Typography variant="h5" gutterBottom>
          Our Partners
        </Typography>
        <Grid container spacing={2}>
          {partnersData.map((partner, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: 3,
                }}
              >
                <CardContent>
                  <Typography variant="h6">{partner.companyName}</Typography>
                  <Typography variant="body2">{partner.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Customer Rating Section */}
      <Box my={4}>
        <Typography variant="h5" gutterBottom>
          Customer Ratings
        </Typography>
        <Grid container spacing={2}>
          {ratingsData.map((rating, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: 3,
                }}
              >
                <CardContent>
                  <Typography variant="h6">{rating.name}</Typography>
                  <Rating value={rating.rating} precision={0.5} readOnly />
                  <Typography variant="body2">{rating.review}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer Section */}
      <Box my={4}>
      <footer style={{ backgroundColor: '#333', color: 'white', padding: '20px 0' }}>
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6">Contact Us</Typography>
                <Typography variant="body2">Email: info@example.com</Typography>
                <Typography variant="body2">Phone: (123) 456-7890</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6">Follow Us</Typography>
                <Box>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                  {/* Add more social media links */}
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body2">
                  Disclaimer: This is a sample website for demonstration purposes only. All content and images are placeholders.
                </Typography>
                <Typography variant="body2">© 2023 Your Company. All rights reserved.</Typography>
              </Grid>
            </Grid>
          </Container>
        </footer>
      </Box>
    </Container>
  );
};

export default HomePage;
