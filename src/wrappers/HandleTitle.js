import React from 'react'

export default function HandleTitle(props) {
    // console.log(props);
    document.title = props.route.title;

    return props.children;
}
