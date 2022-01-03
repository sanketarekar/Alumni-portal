import react from "react";
import ReactDOM from "react-dom";
import "./Message.css";

const Message = () => {
  return (
    <div>
      <div className="Message-section">
        <h1 className="Message-heading">
          Message from Rakesh Jain , Director , RSCOE
        </h1>
        <div className="Message-information">
          <img
            className="Directors-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh5Gk-2gZ86KWovhBOC9VzTUW-z5BpZwEHr4vMHEbK1B-Q27j_Af1_68AFmTJYxjvmg6s&usqp=CAU"
            alt="Rakesh-Jain"
          />

          <div className="Message-description">
            <br />
            <h2>Rakesh Jain</h2>
            <br />
            <h4>Dear Friends,</h4>
            <br />
            <p>
              An institute is known by its Alumni. Alumni are ambassadors of IIT
              Jodhpur. We are proud of you. Whatever you achieve glorifies your
              Alma mater. We are launching this portal to be in close touch with
              you, to know how you are dealing with challenges of professional
              life, to connect you to your batch mates and your hostel friends.
              Please intimate us about any achievement of yours and we shall
              love to put it up on this portal.
              <br /> Please feel free to contribute a sketch of your personal
              life. You and your family are part of our IIT Jodhpur family. You
              are welcome to visit our campus with your family. We shall be
              happy to provide free hospitality. You are always in our mind. For
              any support that may be required do not hesitate to approach us.
              We have started an Incubation Centre (TISC) and a Technology park.
              As a policy, we have decided to give preference to Alumni driven
              start-ups and an Alumni led enterprises for on campus hosting and
              support.
              <br />
              <br />
              We shall endeavor to give preference to you to the maximum extent
              possible if you want to come back to us for further studies.
              Further, we welcome our Alumni as Faculty Members if their
              qualifying degree (Ph.D.) is from an institute other than IIT
              Jodhpur. We are initiating observance of an Annual Alumni day when
              we shall invite all our Alumni to visit the campus and experience
              the changes as well as to have nostalgic recollection of bygone
              days. On that day we would like you to interact with current
              students and Faculty Members.
              <br />
              <br /> We shall also felicitate distinguished achievers among our
              Alumni during this occasion. In summary, what I want to emphasize
              is that the institute deeply values it's Alumni and would like to
              have close relationship with Alumni across the world. You are also
              our avenue to build strong institutional connect with Pan-IIT
              Alumni. We look forward to your valuable inputs for growth of the
              institute. Remember that Alumni are major stake holders for an
              academic institute. Without your active support we cannot reach
              newer heights. Please think about your alma mater and contribute
              in whatever way you like to.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
