import Grid from "./Grid";

const Pants = ({ items }) => {
  return (
    <div>
      <h1 className="text-center mt-3">Pants</h1>
      <Grid items={items} />
    </div>
  );
};

Pants.defaultProps = {
  items: [],
};

export default Pants;
