import * as Immutable from 'immutable';

export interface RouteInfo {
    path: string;
    name: string;
}

export const ROUTE_INFOS: Immutable.List<RouteInfo> = Immutable.List([
    {
        path: "/dashboard",
        name: "Dashboard"
    },
    {
        path: "/settings",
        name: "Settings"
    },
    {
        path: "/autoqueue",
        name: "AutoQueue"
    }
]);
