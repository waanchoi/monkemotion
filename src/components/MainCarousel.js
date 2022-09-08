import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function MainCarousel() {

    return (
        <Carousel
            autoPlay={true} emulateTouch={true} infiniteLoop={true} showThumbs={false} showStatus={false}>
            <div>
                <img
                    height={400}
                    style={{ objectFit: "cover" }}
                    src="https://www.awf.org/sites/default/files/SpeciesPage_AfricanWildDog01_Hero_0.jpg" />
                <p className="legend" style={{ backgroundColor: "#613f16" }}>Olive Baboons (Papio Anubis) that are located at the Seneca Park Zoo are used for this study.</p>
            </div>
            <div>
                <img style={{ objectFit: "cover" }}
                    height={400} src="https://www.mpalalive.org/uploads/gallery/olive-baboon_gallery_4.jpg" />
                <p className="legend" style={{ backgroundColor: "#613f16" }}>Olive Baboons live in groups, also known as "troops", in the wild.</p>
            </div>
            <div>
                <img style={{ objectFit: "cover" }}
                    height={400} src="https://journals.plos.org/plosone/article/figure/image?download&size=large&id=10.1371/journal.pone.0263314.g001" />
                <p className="legend" style={{ backgroundColor: "#613f16" }}>Olive Baboons are commonly encountered in Africa.</p>
            </div>
        </Carousel>
    );
};