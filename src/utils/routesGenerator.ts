import { TRoute, TUserPath } from "../types/sidebar.type"

export const routeGenerators = (itmes : TUserPath[])=> {
    const routes = itmes.reduce((acc : TRoute[], item) => {
        if(item.path && item.element) {
            acc.push({
                path: item.path!,
                element: item.element,
            })
        }
        if(item.children){
            item.children.forEach((child) => {
                return acc.push({
                    path: child.path!,
                    element: child.element,
                });
            })
        }
        return acc;
    },[])

    return routes;
}