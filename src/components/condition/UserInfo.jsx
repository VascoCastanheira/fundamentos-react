import React from "react";
import If from "./if";

export default props => {
    const user = props.user || {}
    return(
        <div>
            <If test={user && user.name}>
                Welcome user: <strong>{props.user.name}</strong>!
            </If>
            <If test={!user || !user.name}>
                Welcome user: <strong>Brother</strong>!
            </If>
        </div>
    )
}