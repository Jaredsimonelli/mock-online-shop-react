import { Link } from "react-router-dom";
import { getIcon } from "../helpers/getIcon";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { resetDuplicate } from "../redux/actions";

const Grid = ({ items, title }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetDuplicate());
  }, []);

  return (
    <div className="container">
      <h1 className="text-center mt-3">{title}</h1>

      <div className="grid">
        {items.map((item) => (
          <div className="box-wrapper" key={`${item.name} + ${item.color}`}>
            <div className="box">
              {item.msg && (
                <div
                  className="topcorner"
                  style={{
                    color: item.msg === "NEW" ? "#ffc0be" : "#83d082",
                  }}
                >
                  {item.msg}
                </div>
              )}
              <Link to={`/${item.type}/${item.id}`}>
                <img
                  className={`icon ${item.color}`}
                  style={{ marginTop: item.margin }}
                  src={getIcon(item.icon)}
                  alt={item.name}
                  width={item.gridSize[1] || "256px"}
                  height={item.gridSize[0] || "256px"}
                ></img>
              </Link>
            </div>

            <div className="label">
              {item.name}: {item.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
