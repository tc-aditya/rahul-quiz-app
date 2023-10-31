import React from "react";
import Button from "react-bootstrap/Button";
import ProfileIcon from "../images/profile-icon.svg";
import PrimaryCard from "../components/Card/PrimaryCard";
import { useNavigate } from "react-router-dom";

const MyProjects = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="pt-5 mb-3">
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ position: "relative" }}
        >
          <img
            src={ProfileIcon}
            style={{ position: "absolute", right: "10px" }}
            alt="profile_icon"
            onClick={() => navigate("/my-account")}
          />
          <h1 className="m-0 main-heading">My Projects</h1>
        </div>

        <div className="mt-5">
          <div onClick={() => navigate("/issues")}>
            <PrimaryCard
              title="Site 1"
              info="Created 23/10/23"
              btnBgColor=""
              btnColor=""
              btnText="10 issues"
              btnShow={true}
            />
          </div>

          <div onClick={() => navigate("/issues")}>
            <PrimaryCard
              title="Site 2"
              info="Created 23/10/23"
              btnBgColor=""
              btnColor=""
              btnText="25 issues"
              btnShow={true}
            />
          </div>

          <div onClick={() => navigate("/issues")}>
            <PrimaryCard
              title="Site 3"
              info="Created 23/10/23"
              btnBgColor=""
              btnColor=""
              btnText="12 issues"
              btnShow={true}
            />
          </div>

          <div onClick={() => navigate("/issues")}>
            <PrimaryCard
              title="Site 4"
              info="Created 23/10/23"
              btnBgColor=""
              btnColor=""
              btnText="50 issues"
              btnShow={true}
            />
          </div>
        </div>
      </div>

      <div className="pb-5 mx-auto text-center" style={{ width: "90%" }}>
        <div className="d-grid mb-3">
          <Button
            variant="primary"
            size="lg"
            className="custom-block-btn"
            onClick={() => navigate("/create-project")}
          >
            Create New Project
          </Button>
        </div>
      </div>
    </>
  );
};

export default MyProjects;
