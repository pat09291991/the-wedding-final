const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id, width, height) =>
    `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
    { id: "-heLWtuAN3c", width: 1080, height: 608 },
    { id: "xOigCUcFdA8", width: 1080, height: 720 },
    { id: "X48pUOPKf7A", width: 1080, height: 160 },
    { id: "1azAjl8FTnU", width: 1080, height: 1549 },
    { id: "ALrCdq-ui_Q", width: 1080, height: 720 },
    { id: "twukN12EN7c", width: 1080, height: 694 },
    { id: "9UjEyzA6pP4", width: 1080, height: 1620 },
    { id: "sEXGgun3ZiE", width: 1080, height: 720 },
    { id: "S-cdwrx-YuQ", width: 1080, height: 1440 },
    { id: "q-motCAvPBM", width: 1080, height: 1620 },
];

const photos = unsplashPhotos.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: unsplashLink(photo.id, width, height),
        width,
        height,
        srcSet: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: unsplashLink(photo.id, breakpoint, height),
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;