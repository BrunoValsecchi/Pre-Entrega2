import { Button } from "@mui/material";
<link rel="stylesheet" href="Counter.css" />
const Counter = ({ counter, setCounter, agregarAlCarrito, stock }) => {
  return (
    <div className="counterCarri">
      <div style={{ display: "flex" }} className="divCard">
        <Button 
          disabled={counter <= 1}
          variant="contained"
          onClick={() => setCounter(counter - 1)}
        >
          -
        </Button>
        <h2>{counter}</h2>
        <Button
          disabled={counter >= stock}
          variant="contained"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </Button>
      </div>
      <br />
      <Button
        variant="contained"
        color="secondary"
        onClick={() => agregarAlCarrito(counter)}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Counter;
