const styles = {
    root: {
        flexGrow: 10,
    },
    control: {
        padding: 2,
    },
    project: {
        maxHeight:500,
        margin:10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        textAlign: 'center',
        color: 'black',
        '&:hover $img': {
            opacity: 0.5
        },
        '&:hover $description': {
            opacity: 1
        }


    },
    description: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: 0,
    },
    centered: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',

    },
    img: {
        width: '100%',
        flexShrink: 0,
        minWidth: '100%',
        minHeight: '100%',

    }
}
export default styles;