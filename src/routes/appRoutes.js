// views
import ProblemsContainer from 'pages/Problems/ProblemsContainer';
import DatasetsContainer from 'pages/Datasets/DatasetsContainer';
import ModelsContainer from 'pages/Models/ModelsContainer';

const routes = {
  createProblem: {
    showInSideBar: false,
    path: '/app/problems/edit/:source/',
    component: ProblemsContainer,
    navbarName: 'Problems',
    sidebarName: 'Problems'
  },
  problemByID: {
    showInSideBar: false,
    path: '/app/problems/:id/',
    component: ProblemsContainer,
    navbarName: 'Problems',
    sidebarName: 'Problems'
  },
  problems: {
    showInSideBar: true,
    path: '/app/problems',
    component: ProblemsContainer,
    navbarName: 'Problems',
    sidebarName: 'Problems'
  },
  datasets: {
    showInSideBar: true,
    path: '/app/datasets',
    component: DatasetsContainer,
    navbarName: 'Datasets',
    sidebarName: 'Datasets'
  },
  models: {
    showInSideBar: true,
    path: '/app/models',
    component: ModelsContainer,
    navbarName: 'Models',
    sidebarName: 'Models'
  },
  redirect: {
    showInSideBar: false,
    redirect: true,
    path: '/app',
    to: '/app/problems'
  }
};

export default routes;
