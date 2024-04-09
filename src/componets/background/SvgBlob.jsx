import React from "react";
import "../../css/svgBlob.css"

const SvgBlob = ({
  fill,
  opacity,
  dur,
  repeat,
  path,
  blobName
}) => {
  return (
    <svg className={blobName}
    style={{ position: "absolute" }}
    width="100"
    height="100"
    viewBox="0 0 100 100"
    >
    <path fill={fill} opacity={opacity}>
      <animate attributeName="d" dur={dur} repeatCount={repeat} values={path}/>
    </path>
  </svg>
  )
}
export default SvgBlob