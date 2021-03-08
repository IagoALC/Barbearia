import React from 'react';
import Picture404 from "../../assets/images/page-404.png";
import "./style.css";

const Page404 = () => {
    return (
        <>
            <img src={Picture404} alt="page-error-404" className="page404-img"/>
        </>
    );
}

export default Page404;