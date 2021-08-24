import React, { Fragment } from "react";
import CourseBox from "../CourseBox";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./style.css";

function CourseSection(props) {
    const { data, title, limitForMobile } = props;
    const isMobile = useMediaQuery("(max-width: 600px)");
    let renderCourses = () => {
        let result;
        if (isMobile) {
            if (limitForMobile) {
                result = data.map((course, index) => {
                    const { img, name } = course;
                    if (index < 3) {
                        return <CourseBox img={img} name={name} key={index} />;
                    }
                });
            } else {
                result = data.map((course, index) => {
                    const { img, name } = course;
                    return <CourseBox img={img} name={name} key={index} />;
                });
            }
        } else {
            result = data.map((course, index) => {
                const { img, name } = course;
                return <CourseBox img={img} name={name} key={index} />;
            });
        }

        return result;
    };
    return (
        <Fragment>
            <div className="title">{title}</div>
            <div className="course-section">{renderCourses()}</div>
        </Fragment>
    );
}

export default CourseSection;
