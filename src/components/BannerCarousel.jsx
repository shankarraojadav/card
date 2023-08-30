
import { Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const BannerCarousel = () => {
  return (
    <Box my={4}>
      <Carousel autoPlay interval={3000} showStatus={false} showThumbs={false} infiniteLoop>
        <div>
          <img
            src="https://www.indusind.com/iblogs/wp-content/uploads/Pl_inner_website-banner.jpg"
            alt="Banner Image 1"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div>
          <img
            src="https://www.indusind.com/iblogs/wp-content/uploads/bloginnerimg-1024x386.jpg"
            alt="Banner Image 2"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        {/* Add more carousel items as needed */}
      </Carousel>
    </Box>
  );
};

export default BannerCarousel;
