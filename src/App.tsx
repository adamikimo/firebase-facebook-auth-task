import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import firebaseConfig from './firebase.config';
import { handleClick } from './utils/handleClick';
import { logout } from './utils/logout';

// init the app
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

const App: React.FC = () => {
  // states
      const [user, setUser] = useState<any>();
      // JSX
    return (
    <>
    {/* navbar */}
    <header
      style={{
        display: 'flex',
        width: '100%',
        height: '7vh',
        background: 'dodgerblue',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 2,
        paddingBottom: 2
      }}
    >
        <div>

        </div>
        <div
          style={{
            color: '#fff',
            fontSize: 24,
            marginRight: 15
          }}
        >
          {user ? user.displayName : null}
          {user ? (
              <button
                style={{
                  background: '#000',
                  width: 150,
                  height: 30,
                  color: '#fff',
                  border: 'none',
                  outline: 'none',
                  cursor: 'pointer',
                  borderRadius: 5
                }}
                onClick={() => {
                  logout(setUser);
                }}
              >
                logout
              </button>
            ) : null}
        </div>
    </header>
    {/* the body of the page */}
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '90vh',
      }}
    >
      {/* login btn */}
      <button
        style={{
          background: 'dodgerblue',
          width: 150,
          height: 30,
          color: '#fff',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          borderRadius: 5
        }}
        // @ts-ignore
        onClick={() => {
          handleClick(setUser)
        }}
      >
        login with facebook
      </button>
    </div>
    </>
  );
}

export default App;
