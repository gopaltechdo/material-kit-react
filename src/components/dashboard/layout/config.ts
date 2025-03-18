import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'Dashboard', title: 'Dashboard', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'Camera', title: 'Camera', href: paths.dashboard.camera, icon: 'chart-pie' },

  { key: 'Rover', title: 'Rover', href: paths.dashboard.rover, icon: 'users' },
  { key: 'Arms', title: 'Arms', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  { key: 'Tools', title: 'Tools', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'CAN', title: 'CAN', href: paths.dashboard.account, icon: 'user' },
  { key: 'BMS', title: 'BMS', href: paths.errors.notFound, icon: 'x-square' },
  { key: 'Communication', title: 'Communication', href: paths.errors.notFound, icon: 'x-square' },
  { key: 'Cooling System', title: 'Cooling System', href: paths.errors.notFound, icon: 'x-square' },
  { key: 'Dignose', title: 'Dignose', href: paths.errors.notFound, icon: 'x-square' },
  { key: 'Phone', title: 'Phone', href: paths.errors.notFound, icon: 'x-square' },
  { key: 'Sensor', title: 'Sensor', href: paths.errors.notFound, icon: 'x-square' },


] satisfies NavItemConfig[];
