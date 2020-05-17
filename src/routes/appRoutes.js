// views
import ProblemsContainer from 'pages/Problems/ProblemsContainer';
import DatasetsContainer from 'pages/Datasets/DatasetsContainer';
import ModelsContainer from 'pages/Models/ModelsContainer';

const routes = {
  problems: {
    path: '/app/problems',
    component: ProblemsContainer,
    navbarName: 'Problems',
    sidebarName: 'Problems'
  },
  datasets: {
    path: '/app/datasets',
    component: DatasetsContainer,
    navbarName: 'Datasets',
    sidebarName: 'Datasets'
  },
  models: {
    path: '/app/models',
    component: ModelsContainer,
    navbarName: 'Models',
    sidebarName: 'Models'
  },
  redirect: {
    redirect: true,
    path: '/app',
    to: '/app/problems'
  }
};

export default routes;
