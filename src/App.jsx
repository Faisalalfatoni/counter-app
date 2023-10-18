import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function tambah() {
    if (count < 10) {
      setCount(count + 1);
      console.log(count);
    }
  }
  function kurang() {
    if (count > 0) {
      setCount(count - 1);
      console.log(count);
    }
  }
  function reset() {
    setCount(0);
  }

  return (
    <>
      <div className="container w-50 vh-100 d-flex justify-content-center align-items-center flex-column">
        <h1 className="tex-center fw-bold" maxlength="10">
          {count}
        </h1>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <button className="btn btn-danger" onClick={kurang} max="10">
            kurang
          </button>
          <button className="btn btn-primary" onClick={reset}>
            Reset
          </button>
          <button className="btn btn-success" onClick={tambah}>
            Tambah
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
