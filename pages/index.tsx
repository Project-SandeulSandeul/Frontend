import { Fragment } from 'react';
import Search from '@/components/common/Search';
import useEmblaCarousel, {
    EmblaCarouselType,
    EmblaOptionsType,
    EmblaPluginType,
    EmblaEventType,
    UseEmblaCarouselType,
} from 'embla-carousel-react';
import styles from '../../styles/index.module.scss';

export default function Home() {
    const [emblaRef] = useEmblaCarousel();

    return (
        <Fragment>
            <main>
                <Search />
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        <div className="embla__slide">Slide 1</div>
                        <div className="embla__slide">Slide 2</div>
                        <div className="embla__slide">Slide 3</div>
                    </div>
                </div>
            </main>
        </Fragment>
    );
}
