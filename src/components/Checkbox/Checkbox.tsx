import { FC } from "react";
import {
  checkboxDivStyle,
  checkboxIconStyle,
  checkboxMainStyle,
} from "./Checkbox.style";

const Checkbox: FC = () => {
  return (
    <div className={checkboxMainStyle}>
      <span className={checkboxDivStyle}>
        <i className={checkboxIconStyle}></i>
      </span>
    </div>
  );
};

export default Checkbox;
