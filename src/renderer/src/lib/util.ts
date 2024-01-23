import Home from '../routes/Home.svelte'
import Settings from '../routes/Settings.svelte'
import Search from '../routes/Search.svelte'
import Support from '../routes/Support.svelte'

import { IconHelp, IconHome, IconSearch, IconSettings } from '@tabler/icons-svelte'

export const APP_ROUTES: { path: string; name: string; component: unknown; icon: unknown }[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    icon: IconHome
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    icon: IconSearch
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    icon: IconSettings
  },
  {
    path: '/support',
    name: 'Support',
    component: Support,
    icon: IconHelp
  }
]
