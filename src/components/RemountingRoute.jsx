import React from "react";
import {Route} from "react-router-dom";

export const RemountingRoute = (props) => {
    const { component, ...other } = props
    const Component = component
    return (
        <Route {...other} render={p => <Component key={p.location.pathname + p.location.search}
            history={p.history}
            location={p.location}
            match={p.match} />}
        />)
}