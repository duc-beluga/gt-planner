const BuiltCard = ({ plan, setPlanBuildChosen, setPlanDeleteChosen }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h3 className="card-title justify-center">{plan.name}</h3>
        <div className="stats shadow m-3">
          <div className="stat place-items-center">
            <div className="stat-title">Taken</div>
            <div className="stat-value text-primary">21</div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title">Rem</div>
            <div className="stat-value text-secondary">30</div>
          </div>
        </div>
        <div className="card-actions justify-between">
          <button
            className="btn btn-outline btn-error"
            onClick={() => {
              document.getElementById("confirmation-pop-up").showModal();
              setPlanDeleteChosen(plan.name);
            }}
          >
            Delete
          </button>
          <button
            className="btn btn-outline btn-info"
            onClick={() => {
              setPlanBuildChosen({
                name: plan.name,
                ...JSON.parse(plan.content),
              });
            }}
          >
            Build
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuiltCard;
