const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (filename) => `images/${filename}`;

const unsplashPhotos = [
    { filename: "1.jpg", width: 1080, height: 720 },
    { filename: "2.JPG", width: 1080, height: 720 },
    { filename: "3.jpg", width: 1080, height: 260 },
    { filename: "4.jpg", width: 1080, height: 1549 },
    { filename: "5.jpg", width: 1080, height: 720 },
    { filename: "6.jpg", width: 1080, height: 720 },
    { filename: "7.jpg", width: 1080, height: 1620 },
    { filename: "8.jpg", width: 1080, height: 720 },
    { filename: "9.jpg", width: 1080, height: 1440 },
    { filename: "10.jpg", width: 1080, height: 1620 },
];

const photos = unsplashPhotos.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: unsplashLink(photo.filename),
        width,
        height,
        srcSet: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: unsplashLink(photo.filename),
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;
