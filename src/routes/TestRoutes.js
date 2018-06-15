import Upload from '../views/Test/Upload';
import InfiniteScroll from '../views/Test/InfiniteScroll';
import ReactTable from '../views/Test/ReactTable';
import ReactDataGrid from '../views/Test/ReactDataGrid';
import HandsonTable from '../views/Test/HandsonTable';
import DragAndDrop from '../views/Test/DragAndDrop';

const TestRoutes = [
    { path: `/upload`, component: Upload },
    { path: `/infinite-scroll`, component: InfiniteScroll },
    { path: `/react-table`, component: ReactTable },
    { path: `/react-data-grid`, component: ReactDataGrid },
    { path: `/handson-table`, component: HandsonTable },
    { path: `/DND`, component: DragAndDrop },
    { path: `/`, component: Upload, exact: true, redirect: `/upload` }
];

export default TestRoutes;