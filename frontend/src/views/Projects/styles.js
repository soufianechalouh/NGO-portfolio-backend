const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    gridList: {
        width: 1200,
    },
    control: {
        padding: '2px',
    },
    project_class: {
        height:450,
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
        flexShrink: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        },
}
export default styles;