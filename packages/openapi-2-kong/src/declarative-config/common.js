// @flow

import { reorderObjectMembers } from '../common';

export function reorderService(service: DCService): DCService {
  const first: Array<string> = ['name', 'protocol', 'host', 'port', 'path'];
  const last: Array<string> = ['tags', 'plugins', 'routes'];
  return reorderObjectMembers(service, first, last);
}

export function reorderUpstream(upstream: DCUpstream): DCUpstream {
  const first: Array<string> = ['name'];
  const last: Array<string> = ['tags', 'targets'];
  return reorderObjectMembers(upstream, first, last);
}

export function reorderRoute(route: DCRoute): DCRoute {
  const first: Array<string> = ['name', 'paths', 'methods'];
  const last: Array<string> = ['tags', 'plugins'];
  return reorderObjectMembers(route, first, last);
}

export function reorderPlugins(plugins: Array<DCPlugin>): Array<DCPlugin> {
  const first: Array<string> = ['name'];
  const last: Array<string> = ['tags', 'config'];
  const pluginsOut: Array<DCPlugin> = [];
  plugins.forEach(plugin => {
    pluginsOut.push(reorderObjectMembers(plugin, first, last));
  });
  return pluginsOut;
}
