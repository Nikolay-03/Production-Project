import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config";
import {PageLoader} from "widgets/PageLoader";

export const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}) => {
                    return (
                        <Route
                            key={path}
                            path={path}
                            element={(
                                <div className='page-wrapper'>
                                    {element}
                                </div>
                            )}
                        />
                    )
                })}
            </Routes>
        </Suspense>
    );
};

