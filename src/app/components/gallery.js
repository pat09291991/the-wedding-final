"use client"

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useEffect, useState } from "react";
import photos from "./photos";
import { motion, useAnimation } from 'framer-motion';
import PatShePhotos from "./patshephotos";

export default function Gallery({progress, setProgress}) {
    const [index, setIndex] = useState(-1);
    const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];


    const [isCounting, setIsCounting] = useState(false);

    useEffect(() => {
        let interval;

        if (isCounting) {
            interval = setInterval(() => {
                if (progress < 100) {
                    setProgress((prevProgress) => prevProgress + 1);
                } else {
                    clearInterval(interval);
                    setIsCounting(false);
                }
            }, 30); // Adjust the interval duration as needed for the desired speed
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isCounting, progress]);

    const handlePress = () => {
        setIsCounting(true);
    };

    const handleRelease = () => {
        setIsCounting(false);
    };

    return (
        <>
            <div className="flex justify-center items-center">
                <div style={{ textAlign: 'center' }}>
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onMouseDown={handlePress}
                        onMouseUp={handleRelease}
                        onTouchStart={handlePress}
                        onTouchEnd={handleRelease}
                        style={{
                            width: '200px',
                            height: '200px',
                            background: 'transparent',
                            border: 'none',
                            outline: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        <svg width="200" height="200" viewBox="0 0 200 200">
                            <circle
                                cx="100"
                                cy="100"
                                r="90"
                                fill="transparent"
                                stroke="#ccc"
                                strokeWidth="8" // Adjust the stroke width for thinner/thicker circle
                            />
                            <circle
                                cx="100"
                                cy="100"
                                r="90"
                                fill="transparent"
                                stroke="#0073e6"
                                strokeWidth="8" // Adjust the stroke width for thinner/thicker progress
                                strokeLinecap="round"
                                strokeDasharray="565.48"
                                strokeDashoffset={565.48 - (565.48 * progress) / 100}
                            />
                            <text x="50%" y="50%" fontSize="32" textAnchor="middle" dominantBaseline="middle">
                                Gallery
                            </text>
                        </svg>
                    </motion.button>
                </div>
                <p>
                    Experience more of our adventures<br /> together by clicking and holding.
                </p>
            </div>

            {/* <PhotoAlbum photos={photos} layout="rows" targetRowHeight={500} onClick={({ index }) => setIndex(index)} />
            <Lightbox
                slides={photos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Zoom]}
            /> */}
        </>
    )
}