const MyCard = (props) => {
  const { id, name, src } = props;
  return (
    <div className="row ">
      <div className="card bg-dark col col-sm-6 col-md-4 col-md-6">
        <div id={id} className="card-body">
          <h2 className="card-text mb-2">{name}</h2>
        </div>
        <img src={src} className="card-img-top m-1" alt="img" />
      </div>
    </div>
  );
};
export default MyCard;
