import styled from "styled-components";
import ContentStoryToggle from "./ContentStoryToggle";

const Profile_bg = styled.div`
  position: relative;
  top: 0;
  left: 0;
  padding: 50px 50px 0 50px;
  background: #fff;
  border-radius: 15px;
  height: 600px;

  h2 {
    text-align: center;
    font-size: 50px;
    font-weight: 500;
    margin-bottom: 40px;
  }

  .TagCloudComponent {
    position: absolute;
    top: 0;
    left: 0;
  }
  z-index: 999;
`;
const Profile = () => {
  return (
    <div id="a">
      <Profile_bg>
        <h2 id="Profile.js">ABOUT ME</h2>
        <ContentStoryToggle />
      </Profile_bg>
    </div>
  );
};

export default Profile;
