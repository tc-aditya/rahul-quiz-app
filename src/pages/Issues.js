import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import Button from "react-bootstrap/Button";
import PrimaryCard from "../components/Card/PrimaryCard";
import { useNavigate } from "react-router-dom";

const Issues = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="pt-5">
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ position: "relative" }}
        >
          <MdArrowBackIosNew
            size={20}
            style={{ position: "absolute", left: "10px" }}
            onClick={() => navigate(-1)}
          />
          <h1 className="m-0 main-heading" style={{}}>
            Issues
          </h1>
        </div>

        <div className="mt-5">
          <div onClick={() => navigate("/edit-issue")}>
            <PrimaryCard
              title="Blocked Drain"
              info="Last edited 23/10/2023"
              btnShow={true}
              btnText="Medium"
              btnBgColor="#ffa800"
            />
          </div>

          <div onClick={() => navigate("/edit-issue")}>
            <PrimaryCard
              title="Waste needs clearing"
              info="Last edited 23/10/2023"
              btnShow={true}
              btnText="Medium"
              btnBgColor="#ffa800"
            />
          </div>

          <div onClick={() => navigate("/edit-issue")}>
            <PrimaryCard
              title="Wall needs repairing."
              info="Last edited 23/10/2023"
              btnShow={true}
              btnText="High"
              btnBgColor="#d21c1c"
            />
          </div>

          <div onClick={() => navigate("/edit-issue")}>
            <PrimaryCard
              title="Door is broken"
              info="Last edited 23/10/2023"
              btnShow={true}
              btnText="Low"
              btnBgColor="#00A991"
            />
          </div>

          <div onClick={() => navigate("/edit-issue")}>
            <PrimaryCard
              title="Door is broken"
              info="Last edited 23/10/2023"
              btnShow={true}
              btnText="Low"
              btnBgColor="#00A991"
            />
          </div>
        </div>
      </div>

      <div className="pb-5 mx-auto text-center mt-5" style={{ width: "90%" }}>
        <div className="d-grid mb-3">
          <Button
            variant="primary"
            size="lg"
            className="custom-block-btn"
            onClick={() => navigate("/add-issue")}
          >
            Create New Issue
          </Button>
        </div>
      </div>
    </>
  );
};

export default Issues;
