import { Box, Heading, Img,} from '@chakra-ui/react';
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/bannerImg/img1.jpg'
import img2 from '../assets/bannerImg/img2.jpg'
import img3 from '../assets/bannerImg/img3.jpg'
import img4 from '../assets/bannerImg/img4.jpg'
import img5 from '../assets/bannerImg/img5.jpg'

const headingOptions={
  pos:"absolute",
  left:"50%",
  top:"50%",
  transform:"translate(-50%,-50%)",
  textTransform: "uppercase",
  p: "4",



}
const Slider = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={"2000"}
      showStatus={false}
      showThumbs={false}
      showArrows={false}

     >

      <Box w={'full'} h={'100vh'}>
        <Img src={img1} w={'full'} h={'full'} objectFit={'cover'}/>
        <Heading bgColor={'blackAlpha.600'}  color={'white'}{ ...headingOptions} >Secret About Golden Temple</Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Img src={img2} w={'full'} h={'full'} objectFit={'cover'}/>
        <Heading bgColor={'blackAlpha.600'}  color={'white'}{ ...headingOptions} >Facts About Ocean Life</Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Img src={img3} w={'full'} h={'full'} objectFit={'cover'}/>
        <Heading bgColor={'whiteAlpha.900'}  color={'black'}{ ...headingOptions} >Night Life in Egypt</Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Img src={img4} w={'full'} h={'full'} objectFit={'cover'}/>
        <Heading bgColor={'whiteAlpha.600'}  color={'black'}{ ...headingOptions} >Hidden Life in Egypt Pyramids</Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Img src={img5} w={'full'} h={'full'} objectFit={'cover'}/>
        <Heading bgColor={'blackAlpha.600'}  color={'white'}{ ...headingOptions} >I am the Future</Heading>
      </Box>

    </Carousel>
  )
}

export default Slider