import React, { Component } from 'react';
import "../App.css";

const Socials = () => { 
     return(
        <div className="socials-wrapper">
            <div className="email-text" onClick={(e) => (window.location.href = 'mailto:samuel01hsu@gmail.com')}>
                <div className="link" onClick={(e) => (window.location.href = 'mailto:samuel01hsu@gmail.com')}><span>email</span></div>
            </div>
            <br></br>
            <div className="social-text" onClick={(e) => (window.location = 'https://www.linkedin.com/public-profile/in/samuel-hsu/?challengeId=AQE_AMo5qx5jxgAAAXd6AD3MP0jNRdNvc6vr4clbyLym5Z_SjYCJ_7UB1C0_68OdfYB5Iq1B_pd2_Hju7QBSZBGbx_lQMXClAg&submissionId=3db3771f-5651-6116-5c7d-fc1322ec4c17')}>
                <div className="link" onClick={(e) => (window.location = 'https://www.linkedin.com/public-profile/in/samuel-hsu/?challengeId=AQE_AMo5qx5jxgAAAXd6AD3MP0jNRdNvc6vr4clbyLym5Z_SjYCJ_7UB1C0_68OdfYB5Iq1B_pd2_Hju7QBSZBGbx_lQMXClAg&submissionId=3db3771f-5651-6116-5c7d-fc1322ec4c17')}>linkedin</div>
            </div>
            <br></br>
            <div className="social-text">
                <div className="link" onClick={(e) => (window.location = 'https://github.com/samchsu')}>github</div>
            </div>
            <br></br>
        </div>
  )
}

export default Socials