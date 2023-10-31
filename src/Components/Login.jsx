	
import React from "react";
import { useWindowWidth } from "../../breakpoints";
import "./App.css";

export const LogInPage = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="log-in-page">
      <div className="div">
        <div
          className="overlap"
          style={{
            height: screenWidth < 1280 ? "832px" : screenWidth >= 1280 ? "593px" : undefined,
            left: screenWidth < 1280 ? "0" : screenWidth >= 1280 ? "838px" : undefined,
            top: screenWidth < 1280 ? "0" : screenWidth >= 1280 ? "92px" : undefined,
            width: screenWidth < 1280 ? "732px" : screenWidth >= 1280 ? "371px" : undefined,
          }}
        >
          {screenWidth < 1280 && <div className="rectangle" />}

      <div
        className="loginimg"
        style={{
          height: screenWidth < 1280 ? "832px" : screenWidth >= 1280 ? "50px" : undefined,
          top: screenWidth < 1280 ? "0" : screenWidth >= 1280 ? "82px" : undefined,
          width: screenWidth < 1280 ? "732px" : screenWidth >= 1280 ? "369px" : undefined,
        }}
      >
        <div
          className="overlap-group"
          style={{
            backgroundColor: screenWidth >= 1280 ? "#ffffff" : undefined,
            backgroundImage:
              screenWidth < 1280
                ? "url(https://cdn.animaapp.com/projects/653f8f99f1019fcb4e7ffd35/releases/6540a0e7707ea87aae582df8/img/loginimg-1.png)"
                : undefined,
            backgroundPosition: screenWidth < 1280 ? "50% 50%" : undefined,
            backgroundSize: screenWidth < 1280 ? "cover" : undefined,
            borderRadius: screenWidth >= 1280 ? "5px" : undefined,
            boxShadow: screenWidth >= 1280 ? "0px 4px 4px #00000040" : undefined,
            height: screenWidth < 1280 ? "832px" : screenWidth >= 1280 ? "50px" : undefined,
            width: screenWidth < 1280 ? "728px" : screenWidth >= 1280 ? "367px" : undefined,
          }}
        >
          {screenWidth < 1280 && (
            <>
              <div className="LOGO">Jiseti</div>
              <p className="corruption-is-the">
                “Corruption is the mother of all poverty”
                <br />
                <br />
                Desmond Tutu
              </p>
            </>
          )}

          {screenWidth >= 1280 && <div className="text-wrapper">Full Name</div>}
        </div>
      </div>
      {screenWidth >= 1280 && (
        <>
          <div className="email">
            <div className="div-wrapper">
              <input className="input" placeholder="Email" type="email" />
            </div>
          </div>
          <div className="username">
            <div className="div-wrapper">
              <div className="text-wrapper">Username</div>
            </div>
          </div>
          <div className="password">
            <div className="div-wrapper">
              <div className="text-wrapper">Password</div>
            </div>
          </div>
          <div className="confirm-password">
            <div className="div-wrapper">
              <div className="text-wrapper">Confirm Password</div>
            </div>
          </div>
          <button className="signupbtn">
            <div className="overlap-2">
              <div className="text-wrapper-2">Sign Up</div>
            </div>
          </button>
          <div className="text-wrapper-3">Sign Up</div>
          <p className="already-have-an">
            <span className="span">Already have an account?&nbsp;&nbsp;</span>
            <span className="text-wrapper-4">Log In</span>
          </p>
        </>
      )}
    </div>
    <div
      className="loginpageform"
      style={{
        height: screenWidth < 1280 ? "404px" : screenWidth >= 1280 ? "832px" : undefined,
        left: screenWidth < 1280 ? "834px" : screenWidth >= 1280 ? "0" : undefined,
        top: screenWidth < 1280 ? "163px" : screenWidth >= 1280 ? "0" : undefined,
        width: screenWidth < 1280 ? "377px" : screenWidth >= 1280 ? "732px" : undefined,
      }}
    >
      {screenWidth < 1280 && <div className="text-wrapper-5">Log In</div>}

      {screenWidth >= 1280 && <div className="rectangle" />}

      <div
        className="username-email"
        style={{
          height: screenWidth < 1280 ? "50px" : screenWidth >= 1280 ? "832px" : undefined,
          left: screenWidth < 1280 ? "4px" : screenWidth >= 1280 ? "0" : undefined,
          top: screenWidth < 1280 ? "123px" : screenWidth >= 1280 ? "0" : undefined,
          width: screenWidth < 1280 ? "369px" : screenWidth >= 1280 ? "732px" : undefined,
        }}
      >
        <div
          className="overlap-group-2"
          style={{
            backgroundColor: screenWidth < 1280 ? "#ffffff" : undefined,
            backgroundImage:
              screenWidth >= 1280
                ? "url(https://cdn.animaapp.com/projects/653f8f99f1019fcb4e7ffd35/releases/6540a0e7707ea87aae582df8/img/imgsignup-1.png)"
                : undefined,
            backgroundPosition: screenWidth >= 1280 ? "50% 50%" : undefined,
            backgroundSize: screenWidth >= 1280 ? "cover" : undefined,
            borderRadius: screenWidth < 1280 ? "5px" : undefined,
            boxShadow: screenWidth < 1280 ? "0px 4px 4px #00000040" : undefined,
            height: screenWidth < 1280 ? "50px" : screenWidth >= 1280 ? "832px" : undefined,
            width: screenWidth < 1280 ? "367px" : screenWidth >= 1280 ? "728px" : undefined,
          }}
        >
          {screenWidth < 1280 && <div className="text-wrapper">Username or Email</div>}

          {screenWidth >= 1280 && (
            <>
              <div className="LOGO">Jiseti</div>
              <div className="flexcontainer">
                <p className="text">
                  <span className="text-wrapper-6">
                    &#34;Corruption is the enemy of development, and it <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-6">
                    undermines <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-6">
                    democratic institutions, social cohesion, <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-6">
                    and economic growth.&#34;
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-6">
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-6">Kofi Annan</span>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      {screenWidth < 1280 && (
        <>
          <div className="overlap-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper">Password</div>
            </div>
          </div>
          <button className="overlap-group-wrapper">
            <div className="overlap-3">
              <div className="text-wrapper-7">Sign Up</div>
            </div>
          </button>
          <div className="text-wrapper-8">Welcome Back!</div>
          <div className="rememberme">
            <div className="rectangle-2" />
            <div className="text-wrapper-9">Remember Me</div>
          </div>
          <p className="don-t-have-an">
            <span className="span">Don’t have an account?</span>
            <span className="text-wrapper-4">&nbsp;&nbsp;Sign Up</span>
          </p>
        </>
      )}
    </div>
  </div>
</div>
  );
};