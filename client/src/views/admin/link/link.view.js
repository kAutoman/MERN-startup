import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './link.view.css';
import { connect } from 'react-redux';
import {
  getCurrentProfile,
  deleteLink,
  getProfileByParams
} from '../../../store/actions/profile';
import defalut_avatar from '../../../image/default.png';
const Admin = ({
  profile: { profile },
  profile: { other_profile },
  getCurrentProfile,
  deleteLink,
  isDark,
  auth,
  getProfileByParams
}) => {
  const { username } = useParams('username');
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  useEffect(() => {
    getProfileByParams(username);
  }, [getProfileByParams, username]);

  const navigate = useNavigate();

  var guestLink = (
    <div className={`${isDark && 'dark'}`}>
      <div className="pt-[150px] flex flex-col items-center p-10 min-h-[calc(100vh-265px)] dark:bg-[#2d364eed]">
        <div className="bg-yellow-400 p-5 w-full">
          <div className="p-5 bg-[#443608] rounded-xl w-full relative">
            <button
              onClick={() => {
                navigate(`/appearance/${auth.user?.username}`);
              }}
              className="absolute z-15  right-2 top-2 p-2 bg-gray-100 rounded-full"
              title='Edit Profile'
            >
              <svg fill="#000000" width="30px" height="30px" viewBox="0 0 23.00 32.00" version="1.1" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" strokeLinejoin="round" stroke="#CCCCCC" stroke-width="0.44800000000000006"></g><g id="SVGRepo_iconCarrier"> <title>pencil</title> <path d="M18.344 4.781l-3.406 3.063s1.125 0.688 2.156 1.656c1 0.969 1.719 2.063 1.719 2.063l2.906-3.469s-0.031-0.625-1.406-1.969c-1.406-1.344-1.969-1.344-1.969-1.344zM7.25 21.938l-0.156 1.5 10.813-11.25s-0.719-1-1.594-1.844c-0.906-0.875-1.938-1.563-1.938-1.563l-10.813 11.25 1.688-0.094 0.188 1.813zM0 26.719l2.688-5.5 1.5-0.125 0.125 1.719 1.813 0.25-0.188 1.375-5.438 2.75z"></path> </g></svg>
            </button>
            <img
              src={`${
                other_profile && other_profile.avatar
                  ? '/img/upload/' + other_profile.avatar
                  : defalut_avatar
              }`}
              className="rounded-full m-auto w-20 broder border-2 border-white"
              alt=""
            />
            <p className="text-center text-base text-white font-semibold mt-2">{`${
              '@' + username
            }`}</p>
            <p className="text-center text-base text-white mt-2">
              {other_profile && other_profile.title ? other_profile.title : ''}
            </p>
            <p
              className="text-left text-base text-white mt-2"
              dangerouslySetInnerHTML={{
                __html:
                  other_profile && other_profile.bio
                    ? other_profile.bio.replace(
                        /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
                        '$1' + '<br />' + '$2'
                      )
                    : ''
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
  return <>{guestLink}</>;
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
  isDark: state.darkMode.isDark
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  deleteLink,
  getProfileByParams
})(Admin);
