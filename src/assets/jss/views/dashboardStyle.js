import { container, conatinerFluid } from '../recon-dashboard';

const dashboardstyle = theme => ({
    conatinerFluid: {
        ...conatinerFluid
    },
    container: {
        ...container,
        zIndex: 2,
        position: 'relative',
        // padding: '20vh',
        // color: '#FFFFFF'
    },
    gridPadding: {
        padding: "15px"
    }
});

export default dashboardstyle;