import React from 'react';

function GenUserCards(usersArray) {
  const UserCards = usersArray.map((user, key) =>
    <div className="col-md-offset-1 col-lg-offset-2">
      <div className="card fluid" id={`user_${user.login.username}`}>
        <div className="section row">
          <div className="col-sm-2 col-md-1">
            <img src={user.picture.medium} alt={user.login.username} className="user-image" />
          </div>
          <div className="col-sm">
            <h4 className="user-name">
              {user.name.title} {user.name.first} {user.name.last}
              <small>{user.login.username}</small>
            </h4>
          </div>
        </div>
        <div className="section">
          <p className="user-email">
            {' '}<SvgMail />&nbsp;&nbsp;{user.email}
          </p>
        </div>
        <div className="section">
          <p className="user-birth">
            {' '}<SvgCalendar />&nbsp;&nbsp;{user.dob.split(' ')[0].split('-').reverse().join('/')}
          </p>
        </div>
        <div className="section">
          <p className="user-location">
            {' '}<SvgMapPin />&nbsp;&nbsp;{user.location.city}, {user.location.state}
          </p>
        </div>
      </div>
    </div>
  );
  return UserCards;
}

export default function UserCard({ usersArray }) {
  console.log('userarr', usersArray);
  const UserCards = GenUserCards(usersArray);
  return (
    <div>
      <h1>
        {UserCards}
      </h1>
    </div>
  );
}

/*
  Application entry point / document has been loaded.
  Get the #content area stored in its respective variable.
  Send a request to the API, process data once the response is received.
*/
// document.addEventListener('DOMContentLoaded', event => {
//   contentArea = document.getElementById('content-area');
//   httpGetAsync(usersEndpoint, getUsers);
// });

// Functional component for the mail icon.
function SvgMail(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#424242"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

// Functional component for the calendar icon.
function SvgCalendar(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#424242"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

// Functional component for the map pin icon.
function SvgMapPin(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#424242"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

// Functional component for the user card.
// function UserCard(props) {
//   console.log(props);
//   console.log('user card');
//   const user = props.user;
//   return (
//     <div className="col-md-offset-1 col-lg-offset-2">
//       <div className="card fluid" id={`user_${user.login.username}`}>
//         <div className="section row">
//           <div className="col-sm-2 col-md-1">
//             <img src={user.picture.medium} alt={user.login.username} className="user-image" />
//           </div>
//           <div className="col-sm">
//             <h4 className="user-name">
//               {user.name.title} {user.name.first} {user.name.last}
//               <small>{user.login.username}</small>
//             </h4>
//           </div>
//         </div>
//         <div className="section">
//           <p className="user-email">
//             {' '}<SvgMail />&nbsp;&nbsp;{user.email}
//           </p>
//         </div>
//         <div className="section">
//           <p className="user-birth">
//             {' '}<SvgCalendar />&nbsp;&nbsp;{user.dob.split(' ')[0].split('-').reverse().join('/')}
//           </p>
//         </div>
//         <div className="section">
//           <p className="user-location">
//             {' '}<SvgMapPin />&nbsp;&nbsp;{user.location.city}, {user.location.state}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function User() {
//   console.log('user');
//   return (
//     <div>
//       <UserCard />
//     </div>
//   );
// }
