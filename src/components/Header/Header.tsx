import { FC, useCallback, useMemo } from "react";
import { ClickHandler } from "../../types";
import { headerStyle, headerItemStyle, headerTitleStyle } from "./Header.style";

type Item = {
  index: number;
  handleClick: ClickHandler<number>;
};

const ItemsList: FC<Item> = ({ index, handleClick }) => {
  const click = useCallback(() => handleClick(index), [index, handleClick]);
  return useMemo(
    () => (
      <span className={headerItemStyle} onClick={click}>
        {index}
      </span>
    ),
    [index, click]
  );
};

const Header: FC<{
  selectedElements: number[];
  handleClick: ClickHandler<number>;
}> = ({ selectedElements, handleClick }) => {
  const hasItems = selectedElements.length > 0;
  console.log("renderer Header");
  return (
    <h1 className={headerStyle}>
      {hasItems ? (
        <div>
          Selected items:{" "}
          {selectedElements.map((e) => (
            <ItemsList index={e} handleClick={handleClick} />
          ))}
        </div>
      ) : (
        <h1 className={headerTitleStyle}>Click on an item to select it</h1>
      )}
    </h1>
  );
};

export default Header;
