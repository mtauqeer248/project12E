import { navigate } from "gatsby";
import React, { FC } from "react";

type Props = {
  recipient: string;
  message: string;
  sender: string;
  lollyPath: string;
  setSubmission: React.Dispatch<React.SetStateAction<boolean>>;
};

const LollyInfo: FC<Props> = ({
  recipient,
  message,
  sender,
  lollyPath,
  setSubmission,
}) => {
  return (
    <div className="infoall">
      <p className="share">Your lolly is freezing. Share it with this link: </p>
      <pre onClick={()=>
                navigate(`/${lollyPath}`)
             } className="link">{`${location.origin}/${lollyPath}`}</pre>
      <p></p>
      <div className="details">
        <p id="recipient" className="recipient">
          {recipient}
        </p>
        <div id="message" className="messagea">
          {message}
        </div>
        <p id="from" className="from">
        ----— {sender}
        </p>
      </div>
      <div>
      
      <a className="btn" href="/createLolly" onClick={() => {
            navigate("/createLolly") ,setSubmission(false)
          }}>
            <i>Create new Lolly</i>
          </a>
      </div>
    </div>
  );
};

export default LollyInfo;
