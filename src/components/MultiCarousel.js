import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '@mui/material/Card';
import Box from "@mui/material/Box"

export default function MultiCarousel({ autoPlaySpeed, rtl, row }) {

    const IMAGES1 = [
        "https://firebasestorage.googleapis.com/v0/b/monkemotion.appspot.com/o/c01%2Fc01_01.png?alt=media&token=f3c4c201-85ff-4ef2-9142-e1e5dea37bb8",
        "https://firebasestorage.googleapis.com/v0/b/monkemotion.appspot.com/o/r18%2Fr18_08.png?alt=media&token=d175c910-a5fe-447f-ae22-0e0d6e869cdd",
        "https://firebasestorage.googleapis.com/v0/b/monkemotion.appspot.com/o/r18%2Fr18_18.png?alt=media&token=6c7afa58-51ef-4da8-a82d-af1427a67b08",
        "https://firebasestorage.googleapis.com/v0/b/monkemotion.appspot.com/o/j08%2Fj08_01.png?alt=media&token=6ae348af-b875-4765-be3f-e6dd1d96c403",
        "https://firebasestorage.googleapis.com/v0/b/monkemotion.appspot.com/o/r11%2Fr11_05.png?alt=media&token=ea7ce883-53fd-404c-91c0-868025738478",
        "https://firebasestorage.googleapis.com/v0/b/monkemotion.appspot.com/o/j10%2Fj10_01.png?alt=media&token=563f8024-e094-4033-9064-3b3b9134a78c",
    ]

    const IMAGES2 = [
        "https://firebasestorage.googleapis.com/v0/b/monkemotion.appspot.com/o/r09%2Fr09_01.png?alt=media&token=ce0080ba-5378-4f4f-8916-76ad0ef7af76",
    "https://firebasestorage.googleapis.com/v0/b/monkemotion.appspot.com/o/c09%2Fc09_05.png?alt=media&token=b5dcf09f-5c33-4c8b-8e36-7da473231e1c",
    "https://firebasestorage.googleapis.com/v0/b/monkemotion.appspot.com/o/j19%2Fj19_04.png?alt=media&token=892b6121-272c-4194-93dc-7abf77305f8f",
    "https://firebasestorage.googleapis.com/v0/b/monkemotion.appspot.com/o/j01%2Fj01_29.png?alt=media&token=7ca952c0-b32c-4212-9f5e-ee977992336f",
    "https://firebasestorage.googleapis.com/v0/b/monkemotion.appspot.com/o/r35%2Fr35_04.png?alt=media&token=d6480ff6-39c9-483f-bc19-174318faab87",
    "https://firebasestorage.googleapis.com/v0/b/monkemotion.appspot.com/o/r28%2Fr28_04.png?alt=media&token=41948361-c7d3-4eaa-b574-03c7bf3cbec3",
    ]

    const IMAGES3 = [
        "https://firebasestorage.googleapis.com/v0/b/monkemotion.appspot.com/o/c09%2Fc09_20.png?alt=media&token=a567a8af-c4ca-4e1b-9a27-f5abe9411602",
    "https://firebasestorage.googleapis.com/v0/b/monkemotion.appspot.com/o/j16%2Fj16_04.png?alt=media&token=8d596e74-dc05-45ac-99b3-da1615e70ecf",
    "https://firebasestorage.googleapis.com/v0/b/monkemotion.appspot.com/o/r33%2Fr33_19.png?alt=media&token=0fe67602-a642-4074-9a71-512b013d6f97",
    "https://firebasestorage.googleapis.com/v0/b/monkemotion.appspot.com/o/c06%2Fc06_05.png?alt=media&token=ce2e9569-7418-4037-8f2e-191547c35c0f",
    "https://firebasestorage.googleapis.com/v0/b/monkemotion.appspot.com/o/c01%2Fc01_10.png?alt=media&token=c34de047-e27e-4e40-9860-8a6cb5e13a2c",
    "https://firebasestorage.googleapis.com/v0/b/monkemotion.appspot.com/o/j19%2Fj19_18.png?alt=media&token=529313fe-87ff-4220-a8b7-a12827eafe0e",
    ]

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Box >

            <Carousel responsive={responsive}
                arrows={false}
                swipeable={true}
                showDots={false}
                draggable={true}
                infinite={true}
                autoPlay={true}
                rewind={false}
                autoPlaySpeed={autoPlaySpeed}
                rtl={rtl}
            >

{
    row == 0 ?
        IMAGES1.map((img, idx) => (
    // <Card sx={{ height: 75, width: 75 }}>
        <img src={img} alt={idx} width="75"></img>
    //  </Card>
    ))
:
    row == 1 ?
        IMAGES2.map((img, idx) => (
    // <Card sx={{ height: 75, width: 75 }}>
        <img src={img} alt={idx} width="75"></img>
    //  </Card>
    ))
:
    IMAGES3.map((img, idx) => (
    // <Card sx={{ height: 75, width: 75 }}>
        <img src={img} alt={idx} width="75"></img>
    //  </Card>
    ))
}


              



            </Carousel>

        </Box>
    );


}