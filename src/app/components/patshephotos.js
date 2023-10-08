"use client"

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";
import photos from "./photos";

export default function PatShePhotos({toggleGallery}) {
    const [index, setIndex] = useState(-1);
    const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];
    // const photos = [
    //     { src: "/images/bridge.jpg", width: 1600, height: 900 },
    //     { src: "/images/homeImage2.jpg", width: 800, height: 600 },
    //     { src: "/images/homeImage3.jpg", width: 800, height: 600 },
    // ];

    return (
        <>
            <PhotoAlbum photos={photos} layout="rows" targetRowHeight={500} onClick={({ index }) => setIndex(index)} />
            <Lightbox
                slides={photos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Zoom]}
            />
            <div
            onClick={toggleGallery}
            className="fixed bottom-4 left-1/2 flex items-center justify-center w-20 h-20 rounded-full bg-gray-200 bg-opacity-70 cursor-pointer">
                <p className="text-3xl text-gray-900">X</p>
            </div>
        </>
    )
}