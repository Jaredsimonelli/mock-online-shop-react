import Grid from "./Grid";

const Shirts = ({ items }) => {
  return (
    <div>
      <h1 className="text-center mt-3">SHIRTS</h1>
      <Grid items={items} />
    </div>
  );
};

Shirts.defaultProps = {
  items: [],
};

export default Shirts;
