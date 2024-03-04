export const folderNames = {
    main: "content/",
    albums: "content/albums/",
}

export const ImportantVariables = {
    fixedFooterHeight: 80, // 80vh
}

export const albumCategories = [
    "all",
    "cars",
    "nature",
    "people",
]

export const buttonClickAnimationProps = {
    scaleWhileTap: 0.94,
    scaleDuration: 0.15,
}

export const ALBUM_ARCHIVE_VIEWS = {
    portretGrid: "portret-grid",
    numberedList: "numbered-list",
}

export const ALBUMS_ARCHIVE_ALBUM_ANIMATION = {
    initial: {
        opacity: 0,
        y: 40,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .55,
            ease: [0.33, 1, 0.68, 1],
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3,
        },
    },
}