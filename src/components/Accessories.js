import Grid from "./Grid";

const Accessories = ({ items }) => {
  return (
    <div>
      <h1 className="text-center mt-3">Accessories</h1>
      <Grid items={items} />
    </div>
  );
};

Accessories.defaultProps = {
  items: [],
};

export default Accessories;
