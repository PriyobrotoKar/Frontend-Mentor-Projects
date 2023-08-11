const Result = ({ age }: any) => {
  return (
    <div className="text-5xl lg:text-8xl font-extrabold italic lg:space-y-2">
      <div>
        <span className="text-Purple">{age ? age.years : "--"}</span> years
      </div>
      <div>
        <span className="text-Purple">{age ? age.months : "--"}</span> months
      </div>
      <div>
        <span className="text-Purple">{age ? age.days : "--"}</span> days
      </div>
    </div>
  );
};

export default Result;
