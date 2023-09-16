function FinderBox({
  ProfilePic,
  ProfileName,
  Location,
  Twitter,
  Repos,
  Followers,
  Following,
  Bio,
  Blog,
  Org,
  Create,
}) {
  return (
    <div className="flex bg-gray-900 border border-black h-[30rem] rounded-xl">
      <img
        src={ProfilePic}
        className="w-[10rem] di h-[10rem] flex ml-[3rem] mt-[2rem] rounded-[50%]"
      ></img>
      <div className=" h-[10rem] w-[30rem] mt-[2rem] ml-[3rem]">
        <div className="flex">
          <div className="">
            <h2 className=" flex text-white text-[1.5rem]">{ProfileName}</h2>
            <p className="text-blue-700 text-sm">@{ProfileName}</p>
          </div>
          <h3 className="flex text-white ml-[16rem] mt-[0.5rem]">ID: {Create}</h3>
        </div>

        <div className="flex">
          <p className="text-gray-700  mt-7">{Bio}</p>
        </div>

        <div className="flex mt-[2rem] bg-gray-950 rounded-xl text-gray-400 h-[6rem] pt-2 justify-around">
          <div className="flex flex-col">
            <h4>Repos</h4>
            <h4 className="font-[Source Code Pro] text-[1.5rem] text-white">
              {Repos}
            </h4>
          </div>
          <div className="flex flex-col">
            <h4 className="">Followers</h4>
            <h4 className="font-[Source Code Pro] text-[1.5rem] text-white">
              {Followers}
            </h4>
          </div>
          <div className="flex flex-col">
            Following
            <h4 className="font-[Source Code Pro] text-[1.5rem] text-white">
              {Following}
            </h4>
          </div>
        </div>

        <div className="flex mt-[2rem]">
          <div className="flex w-[40rem]">
            <div className="flex w-[14.5rem]">
              <svg
                className="flex w-[1.5rem]"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 11.5C11.933 11.5 13.5 9.933 13.5 8C13.5 6.067 11.933 4.5 10 4.5C8.067 4.5 6.5 6.067 6.5 8C6.5 9.933 8.067 11.5 10 11.5ZM10 6.5C10.8284 6.5 11.5 7.17157 11.5 8C11.5 8.82843 10.8284 9.5 10 9.5C9.17157 9.5 8.5 8.82843 8.5 8C8.5 7.17157 9.17157 6.5 10 6.5Z"
                    fill="#ffffff"
                  />{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.5 8.12313C2.5 12.3656 6.88183 19.5 10 19.5C13.1182 19.5 17.5 12.3656 17.5 8.12313C17.5 3.91715 14.1464 0.5 10 0.5C5.85362 0.5 2.5 3.91715 2.5 8.12313ZM15.5 8.12313C15.5 11.4027 11.7551 17.5 10 17.5C8.24487 17.5 4.5 11.4027 4.5 8.12313C4.5 5.0134 6.96668 2.5 10 2.5C13.0333 2.5 15.5 5.0134 15.5 8.12313Z"
                    fill="#ffffff"
                  />{" "}
                </g>
              </svg>
              <p className="flex pl-[0.6rem]  text-white">{Location}</p>
            </div>

            <div className="flex">
              <svg
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                className="flex w-[1.5rem]"
                viewBox="0 0 31.812 26"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M20.877,2.000 C22.519,2.000 24.382,2.652 25.426,3.738 C26.724,3.486 27.949,3.025 29.050,2.386 C28.625,3.687 27.718,4.779 26.540,5.469 C27.693,5.332 28.797,5.035 29.820,4.590 C29.054,5.707 28.087,6.690 26.971,7.477 C26.981,7.715 26.987,7.955 26.987,8.195 C26.987,15.562 21.445,24.000 10.939,24.000 C7.715,24.000 4.507,23.133 1.982,21.551 C2.428,21.605 2.883,21.631 3.343,21.631 C6.019,21.631 8.482,20.740 10.439,19.242 C7.937,19.199 5.827,17.586 5.103,15.373 C5.450,15.437 5.810,15.473 6.178,15.473 C6.696,15.473 7.203,15.406 7.681,15.277 C5.068,14.768 3.100,12.514 3.100,9.813 C3.100,9.787 3.100,9.764 3.100,9.740 C3.871,10.158 4.750,10.410 5.687,10.440 C4.154,9.437 3.147,7.734 3.147,5.799 C3.147,4.777 3.428,3.818 3.919,2.998 C6.735,6.367 10.945,8.588 15.693,8.822 C15.594,8.414 15.543,7.984 15.543,7.553 C15.543,4.473 17.721,2.000 20.877,2.000 M29.820,4.590 L29.825,4.590 M20.877,-0.000 C17.033,-0.000 14.060,2.753 13.614,6.552 C10.425,5.905 7.524,4.204 5.440,1.711 C5.061,1.257 4.503,0.998 3.919,0.998 C3.867,0.998 3.815,1.000 3.763,1.004 C3.123,1.055 2.547,1.413 2.216,1.966 C1.525,3.122 1.159,4.447 1.159,5.799 C1.159,6.700 1.321,7.579 1.625,8.400 C1.300,8.762 1.113,9.238 1.113,9.740 L1.113,9.813 C1.113,11.772 1.882,13.589 3.160,14.952 C3.087,15.294 3.103,15.655 3.215,15.998 C3.657,17.348 4.459,18.510 5.499,19.396 C4.800,19.552 4.079,19.631 3.343,19.631 C2.954,19.631 2.577,19.609 2.222,19.565 C2.141,19.556 2.061,19.551 1.981,19.551 C1.148,19.551 0.391,20.078 0.108,20.886 C-0.202,21.770 0.140,22.753 0.932,23.249 C3.764,25.023 7.318,26.000 10.939,26.000 C17.778,26.000 22.025,22.843 24.383,20.195 C27.243,16.984 28.907,12.718 28.972,8.455 C29.899,7.682 30.717,6.790 31.410,5.792 C31.661,5.458 31.810,5.041 31.810,4.590 C31.810,3.909 31.473,3.308 30.958,2.946 C31.181,2.176 30.925,1.342 30.303,0.833 C29.940,0.537 29.496,0.386 29.049,0.386 C28.708,0.386 28.365,0.474 28.056,0.654 C27.391,1.040 26.680,1.344 25.931,1.562 C24.555,0.592 22.688,-0.000 20.877,-0.000 L20.877,-0.000 Z" />{" "}
                </g>
              </svg>
              <p className="flex pl-[1rem] text-white">{"@" + Twitter}</p>
            </div>
          </div>
        </div>

        <div className="flex mt-[2.5rem] text-white">
          <div className="flex w-[40rem]">
            <div className="flex w-[14.5rem]">
              <svg
                className="flex w-[1.7rem]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9.16488 17.6505C8.92513 17.8743 8.73958 18.0241 8.54996 18.1336C7.62175 18.6695 6.47816 18.6695 5.54996 18.1336C5.20791 17.9361 4.87912 17.6073 4.22153 16.9498C3.56394 16.2922 3.23514 15.9634 3.03767 15.6213C2.50177 14.6931 2.50177 13.5495 3.03767 12.6213C3.23514 12.2793 3.56394 11.9505 4.22153 11.2929L7.04996 8.46448C7.70755 7.80689 8.03634 7.47809 8.37838 7.28062C9.30659 6.74472 10.4502 6.74472 11.3784 7.28061C11.7204 7.47809 12.0492 7.80689 12.7068 8.46448C13.3644 9.12207 13.6932 9.45086 13.8907 9.7929C14.4266 10.7211 14.4266 11.8647 13.8907 12.7929C13.7812 12.9825 13.6314 13.1681 13.4075 13.4078M10.5919 10.5922C10.368 10.8319 10.2182 11.0175 10.1087 11.2071C9.57284 12.1353 9.57284 13.2789 10.1087 14.2071C10.3062 14.5492 10.635 14.878 11.2926 15.5355C11.9502 16.1931 12.279 16.5219 12.621 16.7194C13.5492 17.2553 14.6928 17.2553 15.621 16.7194C15.9631 16.5219 16.2919 16.1931 16.9495 15.5355L19.7779 12.7071C20.4355 12.0495 20.7643 11.7207 20.9617 11.3787C21.4976 10.4505 21.4976 9.30689 20.9617 8.37869C20.7643 8.03665 20.4355 7.70785 19.7779 7.05026C19.1203 6.39267 18.7915 6.06388 18.4495 5.8664C17.5212 5.3305 16.3777 5.3305 15.4495 5.8664C15.2598 5.97588 15.0743 6.12571 14.8345 6.34955"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                  />{" "}
                </g>
              </svg>
              <p className="flex pl-2 text-white">{Blog}</p>
            </div>

              <div className="flex w-[20rem]">
                <svg
                  className="flex w-[1.5rem]"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g fill="#ffffff">
                      {" "}
                      <path
                        fill-rule="evenodd"
                        d="M1 3.25A2.25 2.25 0 013.25 1h6.5A2.25 2.25 0 0112 3.25v2.112l2.05 1.453A2.25 2.25 0 0115 8.65v5.1c0 .69-.56 1.25-1.25 1.25h-2.5a.748.748 0 01-.75-.751v-11a.75.75 0 00-.75-.75h-6.5a.75.75 0 00-.75.75v11a.75.75 0 01-1.5 0v-11zM12 13.5V7.2l1.184.839a.75.75 0 01.316.612v4.85H12z"
                        clip-rule="evenodd"
                      />{" "}
                      <path d="M4.75 10.55a.7.7 0 00-.7.7v3a.7.7 0 101.4 0v-2.3h2.1v2.3a.7.7 0 101.4 0v-3a.7.7 0 00-.7-.7h-3.5zM4.25 4.75A.75.75 0 015 4h.25a.75.75 0 010 1.5H5a.75.75 0 01-.75-.75zM7.75 4a.75.75 0 000 1.5H8A.75.75 0 008 4h-.25zM4.25 6.75A.75.75 0 015 6h.25a.75.75 0 010 1.5H5a.75.75 0 01-.75-.75zM7.75 6a.75.75 0 000 1.5H8A.75.75 0 008 6h-.25zM4.25 8.75A.75.75 0 015 8h.25a.75.75 0 010 1.5H5a.75.75 0 01-.75-.75zM7.75 8a.75.75 0 000 1.5H8A.75.75 0 008 8h-.25z" />{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p className="flex pl-[1rem] text-white">{Org}</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default FinderBox;
