import styled from "styled-components";
import ContentStoryToggle from "./ContentStoryToggle";

const Profile_bg = styled.div`
  position: relative;
  top: 0;
  left: 0;
  padding: 50px 50px 0 50px;
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
  @media (max-width: 767.98px) {
    padding: 25px 25px 0 25px;

    h2 {
      font-size: 30px;
      margin-bottom: 20px;
    }
  }
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
