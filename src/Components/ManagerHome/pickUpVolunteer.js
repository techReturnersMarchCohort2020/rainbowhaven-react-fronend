import React, { useState, useEffect } from "react";
import axios from "axios";

import ListPickUpVolunteer from "./ListPickUpVolunteer";
import "../VolunteerHome/VolunteerHome.css";

function PickUpVolunteer() {
  const [volunteer, setVolunteers] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://qrk4yg29wg.execute-api.eu-west-2.amazonaws.com/dev/volunteers"
      )
      .then(
        //request is successful
        (response) => {
          console.log(response.data);
          const volunteers = response.data.volunteer;
          setVolunteers(volunteers);
        }
      )
      .catch(
        // an error
        (error) => {
          console.log("Error getting volunteers", error);
        }
      )
      .finally(() => console.log("I am done"));
  }, []);

  return (
    <div className="pickUpVolunteer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="text-center">The Existing Volunteers are:</h3>

            {volunteer.map((volunteer) => (
              <ListPickUpVolunteer
                key={volunteer.volunteer_Id}
                volunteer_Id={volunteer.volunteer_Id}
                full_name={volunteer.full_name}
              />
            ))}
            <button
              type="submit"
              className="btn btn-primary btn-block btn-login"
              // onClick={handleSubmitClick}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PickUpVolunteer;
