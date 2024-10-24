import road from "./assets/images/adrian-williams-jyd1S0QLpfE-unsplash.jpg";
export const MainSection = () => {
  return (
    <>
      <section>
        <div className="section-title">
          <h1>
            Help us fix your <span>community!</span>
          </h1>
        </div>
      </section>

      <div className="section-2">
        <div className="explanation">
          <p>
            CivicSpot empowers communities by enabling citizens to report and
            discuss local issues like road damage, public safety, and
            infrastructure problems. Users can post reports and comments,
            driving civic engagement and keeping residents and authorities
            informed. By streamlining communication, CivicSpot fosters quicker
            responses, greater accountability, and a stronger, more connected
            community.
          </p>
        </div>

        <div className="road-image">
          <img src={road} alt="Roads" />
        </div>
      </div>

      <div className="cards-title">
        <h2>Why should we be aware of our communities' saftey?</h2>
      </div>

      <div className="cards-section">
        <div className="card">
          <div className="content">
            <p className="heading">Road Maintenance</p>
            <p className="para">
              According to the American Society of Civil Engineers (ASCE), 43%
              of U.S. public roads are in poor or mediocre condition. Poor road
              conditions cost U.S. drivers $130 billion annually in vehicle
              repairs.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <p className="heading">Potholes </p>
            <p className="para">
              On average, potholes cause about $3 billion in damages to vehicles
              in the U.S. annually, with the average cost of vehicle repair
              after hitting a pothole being around $306.{" "}
            </p>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <p className="heading">Urban Challenges</p>
            <p className="para">
              The World Bank estimates that globally, cities lose $1 trillion
              annually in productivity due to infrastructure inefficiencies.
              Reporting platforms can help highlight and address these issues
              more quickly.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <p className="heading">Citizen Involvement</p>
            <p className="para">
              Research shows that only 35% of U.S. adults feel "very confident"
              that local government officials make decisions that serve their
              community well (Pew Research Center). Platforms like CivicSpot can
              improve transparency and engagement between citizens and local
              authorities.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <p className="heading">Environmental Issues</p>
            <p className="para">
              70% of global CO2 emissions are produced in urban areas. CivicSpot
              could help residents report environmental hazards (like pollution
              or illegal dumping) to improve urban sustainability.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <p className="heading">Road Safety</p>
            <p className="para">
              Globally, road traffic accidents claim approximately 1.35 million
              lives each year, according to the World Health Organization (WHO).
              Inadequate road conditions contribute to many of these accidents.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
