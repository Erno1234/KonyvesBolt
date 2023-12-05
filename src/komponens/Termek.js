function Termek(props) {
    function kattintasKezelo(){
        props.kattintasKezelo(props)
    }
  return (
    <div className="col-md-6 mb-4">
    <div className="termek">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{props.konyvcim}</h4>
          <p className="card-text">{props.szerzo}</p>
          <p className="card-text">{props.ar}</p>
          <button onClick={kattintasKezelo}>Ok</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Termek;
