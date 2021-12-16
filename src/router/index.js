import {
  createRouter,
  createWebHistory,
} from 'vue-router';
import Homepage from '../home/Homepage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import RobotBases from '../parts/RobotBases.vue';
import SidebarStandard from '../sidebars/SidebarStandard.vue';
import SidebarBuild from '../sidebars/SidebarBuild.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: Homepage,
      sidebar: SidebarStandard,
    },
  }, {
    path: '/build',
    name: 'Build',
    components: {
      default: RobotBuilder,
      sidebar: SidebarBuild,
    },
  }, {
    path: '/parts/browse',
    name: 'BrowseParts',
    component: BrowseParts,
    children: [
      {
        name: 'BrowseHeads',
        path: 'heads',
        component: RobotHeads,
      }, {
        name: 'BrowseArms',
        path: 'arms',
        component: RobotArms,
      }, {
        name: 'BrowseTorsos',
        path: 'torsos',
        component: RobotTorsos,
      }, {
        name: 'BrowseBases',
        path: 'heads',
        component: RobotBases,
      },
    ],
  },
  {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo,
    props: true,
    beforeEnter(to, from, next) {
      const isValidId = Number.isInteger(Number(to.params.id));
      next(isValidId);
    },
  }],

});
