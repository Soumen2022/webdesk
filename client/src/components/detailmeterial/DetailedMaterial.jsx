import React from "react";
import "./style.scss";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";

const DetailedMaterial = ({
  title,
  postedBy,
  timeOfPosting,
  subject,
  filename,
}) => {
  return (
    <div className="detailed-material">
      <h1 className="title">{title}</h1>
      <div className="name-time">
        <h5>{postedBy}</h5>
        <h5 className="Postingtime">{timeOfPosting}</h5>
      </div>

      <h5 className="subjects">{subject}</h5>
      <div className="filename">
        <DescriptionOutlinedIcon className="icon" />
        <h3>{filename}</h3>
      </div>
    </div>
  );
};

export default DetailedMaterial;