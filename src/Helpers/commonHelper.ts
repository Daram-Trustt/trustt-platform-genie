import {lazy} from "react";

const LazyLoadComponent = (path : string) => {
    return lazy(() => import(path)) 
}

export default LazyLoadComponent;