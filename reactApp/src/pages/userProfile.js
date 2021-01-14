import React from "react";
import UserProfile from "../components/userProf/index";
import{Container} from "react-bootstrap"

const UserProfPage = () => {

  return (
    <Container>
        <div>
            <UserProfile/>    
        </div>
    </Container>
      
  );
};

export default UserProfPage;