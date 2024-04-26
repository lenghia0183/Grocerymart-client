// export const MegaMenuIcon = {

//     ),
// };

export const IncreaseIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="2.2rem"
      height="2.2rem"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M10.9996 7.32715V14.6535"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M14.6663 10.9904H7.33301"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

export const DecreaseIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="2.2rem"
      height="2.2rem"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M14.6663 10.9904H7.33301"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

export const EmptyStarIcon = ({ width = '2.1rem', height = '2rem', className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 21 20"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6043 2.17701L13.4317 5.82776C13.6108 6.18616 13.9565 6.43467 14.3573 6.49218L18.4453 7.08062C19.4554 7.22644 19.8573 8.45055 19.1263 9.15194L16.1702 11.9924C15.8797 12.2718 15.7474 12.6733 15.8162 13.0676L16.5138 17.0778C16.6856 18.0698 15.6298 18.8267 14.727 18.3574L11.0732 16.4627C10.715 16.2768 10.286 16.2768 9.92679 16.4627L6.273 18.3574C5.37023 18.8267 4.31439 18.0698 4.48724 17.0778L5.18385 13.0676C5.25257 12.6733 5.12033 12.2718 4.82982 11.9924L1.87368 9.15194C1.14272 8.45055 1.54464 7.22644 2.55466 7.08062L6.64265 6.49218C7.04354 6.43467 7.39028 6.18616 7.56937 5.82776L9.39574 2.17701C9.84765 1.27433 11.1523 1.27433 11.6043 2.17701Z"
      stroke="#FFB700"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MenuIcon = ({ width = '1.2rem', height = '1.6rem', className }) => (
  <svg
    className={className}
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 17"
    fill="none"
  >
    <path d="M13 1.5H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 9H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 16H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const LogoutIcon = () => {
  return (
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
    </svg>
  );
};

export const SendIcon = ({ width = '1.6rem', height = '1.6rem', className }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 487 450.9"
  >
    <g>
      <path
        d="M485.3,0.1L0.6,248.2c-0.9,0.5-0.8,1.8,0.2,2.1l167.4,53.1c0.4,0.1,0.8,0,1.1-0.2l207.8-186.6c1.1-0.9,2.5,0.5,1.6,1.6
		L208.9,314.9c-0.5,0.6-0.3,1.6,0.5,1.8l185.7,57.4c0.6,0.2,1.3-0.2,1.4-0.8L486.9,1.4C487.2,0.5,486.2-0.3,485.3,0.1z"
      />
      <path
        d="M273.4,358.8l-59.4-18c-0.7-0.2-1.5,0.3-1.5,1.1l1.3,108c0,1.1,1.5,1.5,2.1,0.6l58.1-89.9
		C274.4,359.9,274.1,359,273.4,358.8z"
      />
    </g>
  </svg>
);

export const InstagramIcon = ({ width = '1.8rem', height = '1.8rem', className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <g clipPath="url(#clip0_146_126)">
      <path
        d="M11.9968 7.9983C9.79333 7.9983 7.99515 9.79651 7.99515 12C7.99515 14.2035 9.79333 16.0017 11.9968 16.0017C14.2002 16.0017 15.9984 14.2035 15.9984 12C15.9984 9.79651 14.2002 7.9983 11.9968 7.9983ZM23.9987 12C23.9987 10.3429 24.0137 8.70077 23.9206 7.04665C23.8275 5.12536 23.3893 3.4202 21.9843 2.01525C20.5764 0.607302 18.8743 0.172008 16.953 0.0789456C15.2959 -0.0141173 13.6539 0.000892936 11.9998 0.000892936C10.3427 0.000892936 8.70061 -0.0141173 7.04652 0.0789456C5.12526 0.172008 3.42014 0.610305 2.01522 2.01525C0.607291 3.42321 0.172005 5.12536 0.0789442 7.04665C-0.014117 8.70377 0.000892919 10.3459 0.000892919 12C0.000892919 13.6541 -0.014117 15.2992 0.0789442 16.9533C0.172005 18.8746 0.610293 20.5798 2.01522 21.9847C3.42314 23.3927 5.12526 23.828 7.04652 23.9211C8.70361 24.0141 10.3457 23.9991 11.9998 23.9991C13.6569 23.9991 15.2989 24.0141 16.953 23.9211C18.8743 23.828 20.5794 23.3897 21.9843 21.9847C23.3923 20.5768 23.8275 18.8746 23.9206 16.9533C24.0167 15.2992 23.9987 13.6571 23.9987 12ZM11.9968 18.1572C8.58954 18.1572 5.83973 15.4073 5.83973 12C5.83973 8.5927 8.58954 5.84284 11.9968 5.84284C15.404 5.84284 18.1538 8.5927 18.1538 12C18.1538 15.4073 15.404 18.1572 11.9968 18.1572ZM18.406 7.02864C17.6105 7.02864 16.968 6.38621 16.968 5.59067C16.968 4.79513 17.6105 4.1527 18.406 4.1527C19.2015 4.1527 19.8439 4.79513 19.8439 5.59067C19.8442 5.77957 19.8071 5.96667 19.735 6.14124C19.6628 6.31581 19.5569 6.47442 19.4233 6.608C19.2897 6.74157 19.1311 6.84748 18.9565 6.91967C18.782 6.99185 18.5949 7.02888 18.406 7.02864Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_146_126">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const LinkedinIcon = ({ width = '1.8rem', height = '1.8rem', className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 2.838C1 2.35053 1.19365 1.88303 1.53834 1.53834C1.88303 1.19365 2.35053 1 2.838 1H21.16C21.4016 0.999608 21.6409 1.04687 21.8641 1.13907C22.0874 1.23127 22.2903 1.36661 22.4612 1.53734C22.6322 1.70807 22.7677 1.91083 22.8602 2.13401C22.9526 2.3572 23.0001 2.59643 23 2.838V21.16C23.0003 21.4016 22.9529 21.6409 22.8606 21.8642C22.7683 22.0875 22.6328 22.2904 22.462 22.4613C22.2912 22.6322 22.0884 22.7678 21.8651 22.8602C21.6419 22.9526 21.4026 23.0001 21.161 23H2.838C2.59655 23 2.35746 22.9524 2.1344 22.86C1.91134 22.7676 1.70867 22.6321 1.53798 22.4613C1.3673 22.2905 1.23193 22.0878 1.13962 21.8647C1.04731 21.6416 0.999869 21.4025 1 21.161V2.838ZM9.708 9.388H12.687V10.884C13.117 10.024 14.217 9.25 15.87 9.25C19.039 9.25 19.79 10.963 19.79 14.106V19.928H16.583V14.822C16.583 13.032 16.153 12.022 15.061 12.022C13.546 12.022 12.916 13.111 12.916 14.822V19.928H9.708V9.388ZM4.208 19.791H7.416V9.25H4.208V19.79V19.791ZM7.875 5.812C7.88105 6.08668 7.83217 6.35979 7.73124 6.61532C7.63031 6.87084 7.47935 7.10364 7.28723 7.30003C7.09511 7.49643 6.8657 7.65248 6.61246 7.75901C6.35921 7.86554 6.08724 7.92042 5.8125 7.92042C5.53776 7.92042 5.26579 7.86554 5.01255 7.75901C4.7593 7.65248 4.52989 7.49643 4.33777 7.30003C4.14565 7.10364 3.99469 6.87084 3.89376 6.61532C3.79283 6.35979 3.74395 6.08668 3.75 5.812C3.76187 5.27286 3.98439 4.75979 4.36989 4.38269C4.75539 4.00558 5.27322 3.79442 5.8125 3.79442C6.35178 3.79442 6.86961 4.00558 7.25512 4.38269C7.64062 4.75979 7.86313 5.27286 7.875 5.812Z"
      fill="white"
    />
  </svg>
);

export const FacebookIcon = ({ width = '1.8rem', height = '1.8rem', className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 12.067C0 18.033 4.333 22.994 10 24V15.333H7V12H10V9.333C10 6.333 11.933 4.667 14.667 4.667C15.533 4.667 16.467 4.8 17.333 4.933V8H15.8C14.333 8 14 8.733 14 9.667V12H17.2L16.667 15.333H14V24C19.667 22.994 24 18.034 24 12.067C24 5.43 18.6 0 12 0C5.4 0 0 5.43 0 12.067Z"
      fill="white"
    />
  </svg>
);

export const ArrowRight = ({ className }) => {
  return (
    <svg
      className={className}
      width="10"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 1L8.5 8L1.5 15"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const DeleteIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.3248 7.46875C16.3248 7.46875 15.7818 14.2037 15.4668 17.0407C15.3168 18.3957 14.4798 19.1898 13.1088 19.2148C10.4998 19.2618 7.88779 19.2648 5.27979 19.2098C3.96079 19.1828 3.13779 18.3788 2.99079 17.0478C2.67379 14.1858 2.13379 7.46875 2.13379 7.46875"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.708 4.24023H0.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4406 4.23998C13.6556 4.23998 12.9796 3.68498 12.8256 2.91598L12.5826 1.69998C12.4326 1.13898 11.9246 0.750977 11.3456 0.750977H7.11258C6.53358 0.750977 6.02558 1.13898 5.87558 1.69998L5.63258 2.91598C5.47858 3.68498 4.80258 4.23998 4.01758 4.23998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const FilterIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.33001 13.593H1.0293"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1406 3.90164H16.4413"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.72629 3.84625C5.72629 2.5506 4.66813 1.5 3.36314 1.5C2.05816 1.5 1 2.5506 1 3.84625C1 5.14191 2.05816 6.19251 3.36314 6.19251C4.66813 6.19251 5.72629 5.14191 5.72629 3.84625Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.9997 13.5533C16.9997 12.2576 15.9424 11.207 14.6374 11.207C13.3316 11.207 12.2734 12.2576 12.2734 13.5533C12.2734 14.8489 13.3316 15.8995 14.6374 15.8995C15.9424 15.8995 16.9997 14.8489 16.9997 13.5533Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DarkModeIcon = ({ className }) => {
  return (
    <svg className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </svg>
  );
};

export const LanguageIcon = ({ className }) => {
  return (
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
      <path d="M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z" />
    </svg>
  );
};

export const PlusCardIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4996 8.32715V15.6535"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.1663 11.9904H8.83301"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.1857 2H7.81429C4.54762 2 2.5 4.31208 2.5 7.58516V16.4148C2.5 19.6879 4.5381 22 7.81429 22H17.1857C20.4619 22 22.5 19.6879 22.5 16.4148V7.58516C22.5 4.31208 20.4619 2 17.1857 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PhoneIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.353 2.5C18.054 2.911 20.978 5.831 21.393 9.532"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.353 6.04303C16.124 6.38703 17.508 7.77203 17.853 9.54303"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0315 12.4724C15.0205 16.4604 15.9254 11.8467 18.4653 14.3848C20.9138 16.8328 22.3222 17.3232 19.2188 20.4247C18.8302 20.737 16.3613 24.4943 7.68447 15.8197C-0.993406 7.144 2.76157 4.67244 3.07394 4.28395C6.18377 1.17385 6.66682 2.58938 9.11539 5.03733C11.6541 7.5765 7.04254 8.48441 11.0315 12.4724Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const WarningIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.75009C17.108 2.75009 21.25 6.89109 21.25 12.0001C21.25 17.1081 17.108 21.2501 12 21.2501C6.891 21.2501 2.75 17.1081 2.75 12.0001C2.75 6.89109 6.891 2.75009 12 2.75009Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9951 8.20419V12.6232"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.995 15.7961H12.005"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const HelpIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.334 0.750092H5.665C2.644 0.750092 0.75 2.88909 0.75 5.91609V14.0841C0.75 17.1111 2.635 19.2501 5.665 19.2501H14.333C17.364 19.2501 19.25 17.1111 19.25 14.0841V5.91609C19.25 2.88909 17.364 0.750092 14.334 0.750092Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99414 14.0001V10.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99012 6.20419H10.0001"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ShieldIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="18"
      height="21"
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.98457 19.606C8.98457 19.606 16.6566 17.283 16.6566 10.879C16.6566 4.474 16.9346 3.974 16.3196 3.358C15.7036 2.742 9.99057 0.75 8.98457 0.75C7.97857 0.75 2.26557 2.742 1.65057 3.358C1.03457 3.974 1.31257 4.474 1.31257 10.879C1.31257 17.283 8.98457 19.606 8.98457 19.606Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.38574 9.87414L8.27774 11.7691L12.1757 7.86914"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const GiftIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 12V21H5V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 8H3V12H21V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 21V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12 8H8.14286C7.57454 8 7.02949 7.73661 6.62763 7.26777C6.22576 6.79893 6 6.16304 6 5.5C6 4.83696 6.22576 4.20107 6.62763 3.73223C7.02949 3.26339 7.57454 3 8.14286 3C11.1429 3 12 8 12 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8H15.8571C16.4255 8 16.9705 7.73661 17.3724 7.26777C17.7742 6.79893 18 6.16304 18 5.5C18 4.83696 17.7742 4.20107 17.3724 3.73223C16.9705 3.26339 16.4255 3 15.8571 3C12.8571 3 12 8 12 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DownloadIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.1223 13.4365L10.1223 1.39551"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0383 10.5088L10.1223 13.4368L7.20633 10.5088"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.7551 6.12793H15.6881C17.7231 6.12793 19.3721 7.77693 19.3721 9.81293V14.6969C19.3721 16.7269 17.7271 18.3719 15.6971 18.3719L4.55707 18.3719C2.52207 18.3719 0.87207 16.7219 0.87207 14.6869V9.80193C0.87207 7.77293 2.51807 6.12793 4.54707 6.12793H5.48907"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MessageIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.9024 6.85156L12.4591 10.4646C11.6196 11.1306 10.4384 11.1306 9.59895 10.4646L5.11816 6.85156"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9089 19C18.9502 19.0084 21 16.5095 21 13.4384V6.57001C21 3.49883 18.9502 1 15.9089 1H6.09114C3.04979 1 1 3.49883 1 6.57001V13.4384C1 16.5095 3.04979 19.0084 6.09114 19H15.9089Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AddressIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 8.50051C11.5 7.11924 10.3808 6 9.00051 6C7.61924 6 6.5 7.11924 6.5 8.50051C6.5 9.88076 7.61924 11 9.00051 11C10.3808 11 11.5 9.88076 11.5 8.50051Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99951 19C7.80104 19 1.5 13.8984 1.5 8.56329C1.5 4.38664 4.8571 1 8.99951 1C13.1419 1 16.5 4.38664 16.5 8.56329C16.5 13.8984 10.198 19 8.99951 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AccountIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.98468 13.3457C4.11707 13.3457 0.814209 13.9305 0.814209 16.2724C0.814209 18.6143 4.09611 19.22 7.98468 19.22C11.8523 19.22 15.1542 18.6343 15.1542 16.2933C15.1542 13.9524 11.8733 13.3457 7.98468 13.3457Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.98464 10.0059C10.5227 10.0059 12.5799 7.94779 12.5799 5.40969C12.5799 2.8716 10.5227 0.814453 7.98464 0.814453C5.44655 0.814453 3.38845 2.8716 3.38845 5.40969C3.37988 7.93922 5.42369 9.99731 7.95226 10.0059H7.98464Z"
        stroke="currentColor"
        strokeWidth="1.42857"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SelectInputArrow = ({ className }) => {
  return (
    <svg className={className} width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 1L8 8L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const PickupIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="21"
      height="22"
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5134 20.5003H6.16555C3.09919 20.5003 0.746786 19.3928 1.41498 14.9351L2.19301 8.89394C2.60491 6.66968 4.02367 5.81842 5.26852 5.81842H15.447C16.7102 5.81842 18.0466 6.73375 18.5225 8.89394L19.3006 14.9351C19.8681 18.8894 17.5797 20.5003 14.5134 20.5003Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6502 5.59873C14.6502 3.21265 12.716 1.27836 10.3299 1.27836V1.27836C9.18088 1.27349 8.07727 1.72652 7.26308 2.53727C6.44889 3.34803 5.9912 4.44971 5.99121 5.59873H5.99121"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.296 10.1021H13.2502"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.46492 10.1022H7.41916"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DeliveryIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.750122 1.24988L2.83012 1.60988L3.79312 13.0829C3.87012 14.0199 4.65312 14.7389 5.59312 14.7359H16.5021C17.3991 14.7379 18.1601 14.0779 18.2871 13.1899L19.2361 6.63188C19.3421 5.89888 18.8331 5.21888 18.1011 5.11288C18.0371 5.10388 3.16412 5.09888 3.16412 5.09888"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1251 8.7948H14.8981"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.15447 18.202C5.45547 18.202 5.69847 18.446 5.69847 18.746C5.69847 19.047 5.45547 19.291 5.15447 19.291C4.85347 19.291 4.61047 19.047 4.61047 18.746C4.61047 18.446 4.85347 18.202 5.15447 18.202Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.4347 18.202C16.7357 18.202 16.9797 18.446 16.9797 18.746C16.9797 19.047 16.7357 19.291 16.4347 19.291C16.1337 19.291 15.8907 19.047 15.8907 18.746C15.8907 18.446 16.1337 18.202 16.4347 18.202Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CompareIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.7161 14.2236H5.49609"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.7161 10.0371H5.49609"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25207 5.86035H5.49707"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.909 0.75C12.909 0.75 5.23198 0.754 5.21998 0.754C2.45998 0.771 0.750977 2.587 0.750977 5.357V14.553C0.750977 17.337 2.47298 19.16 5.25698 19.16C5.25698 19.16 12.933 19.157 12.946 19.157C15.706 19.14 17.416 17.323 17.416 14.553V5.357C17.416 2.573 15.693 0.75 12.909 0.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const NextIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="29"
      height="24"
      viewBox="0 0 29 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM28.0607 13.0607C28.6464 12.4749 28.6464 11.5251 28.0607 10.9393L18.5147 1.3934C17.9289 0.80761 16.9792 0.80761 16.3934 1.3934C15.8076 1.97918 15.8076 2.92893 16.3934 3.51472L24.8787 12L16.3934 20.4853C15.8076 21.0711 15.8076 22.0208 16.3934 22.6066C16.9792 23.1924 17.9289 23.1924 18.5147 22.6066L28.0607 13.0607ZM2 13.5L27 13.5L27 10.5L2 10.5L2 13.5Z"
        fill="#B9BABE"
      />
    </svg>
  );
};

export const GmailIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.20455 8.01826H17.9315C17.9765 8.40414 18 8.80004 18 9.20497C18 11.9452 16.9977 14.2525 15.2611 15.82C13.7424 17.1942 11.6632 18 9.18409 18C7.97795 18.0005 6.78353 17.7681 5.66909 17.316C4.55465 16.864 3.54204 16.2011 2.68912 15.3653C1.83621 14.5296 1.15971 13.5373 0.698297 12.4452C0.236883 11.353 -0.000402329 10.1825 9.12012e-07 9.0005C-0.000536741 7.81839 0.23665 6.64776 0.698003 5.55554C1.15936 4.46331 1.83583 3.47089 2.68876 2.63501C3.54169 1.79913 4.55435 1.13618 5.66886 0.68405C6.78336 0.231919 7.97787 -0.000526011 9.18409 8.93781e-07C11.6591 8.93781e-07 13.7383 0.892033 15.3286 2.34434L13.8334 3.80868C12.6491 2.68712 11.0485 2.00457 9.20455 2.00457C8.2644 2.00457 7.33346 2.18604 6.46488 2.53863C5.5963 2.89121 4.80709 3.40801 4.1423 4.0595C3.47752 4.71099 2.95019 5.48443 2.59041 6.33565C2.23063 7.18686 2.04546 8.0992 2.04546 9.02055C2.04546 9.9419 2.23063 10.8542 2.59041 11.7054C2.95019 12.5567 3.47752 13.3301 4.1423 13.9816C4.80709 14.6331 5.5963 15.1499 6.46488 15.5025C7.33346 15.8551 8.2644 16.0365 9.20455 16.0365C12.8107 16.0365 15.4882 13.4226 15.931 10.0228H9.20455V8.01826Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const PasswordIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4228 7.44804V5.30104C13.4228 2.78804 11.3848 0.750045 8.87176 0.750045C6.35876 0.739045 4.31276 2.76704 4.30176 5.28104V5.30104V7.44804"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.683 19.2498H5.042C2.948 19.2498 1.25 17.5528 1.25 15.4578V11.1688C1.25 9.07383 2.948 7.37683 5.042 7.37683H12.683C14.777 7.37683 16.475 9.07383 16.475 11.1688V15.4578C16.475 17.5528 14.777 19.2498 12.683 19.2498Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.8623 12.2031V14.4241"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const EmailIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.9024 6.85156L12.4591 10.4646C11.6196 11.1306 10.4384 11.1306 9.59895 10.4646L5.11816 6.85156"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9089 19C18.9502 19.0084 21 16.5095 21 13.4384V6.57001C21 3.49883 18.9502 1 15.9089 1H6.09114C3.04979 1 1 3.49883 1 6.57001V13.4384C1 16.5095 3.04979 19.0084 6.09114 19H15.9089Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BackArrow = ({ className }) => {
  return (
    <svg
      className={className}
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.25 12.2754L19.25 12.2754"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2998 18.299L4.2498 12.275L10.2998 6.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MoreIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 4.5H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const StartIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.1043 1.17701L11.9317 4.82776C12.1108 5.18616 12.4565 5.43467 12.8573 5.49218L16.9453 6.08062C17.9554 6.22644 18.3573 7.45054 17.6263 8.15194L14.6702 10.9924C14.3797 11.2718 14.2474 11.6733 14.3162 12.0676L15.0138 16.0778C15.1856 17.0698 14.1298 17.8267 13.227 17.3574L9.57321 15.4627C9.21502 15.2768 8.78602 15.2768 8.42679 15.4627L4.773 17.3574C3.87023 17.8267 2.81439 17.0698 2.98724 16.0778L3.68385 12.0676C3.75257 11.6733 3.62033 11.2718 3.32982 10.9924L0.37368 8.15194C-0.357285 7.45054 0.0446417 6.22644 1.05466 6.08062L5.14265 5.49218C5.54354 5.43467 5.89028 5.18616 6.06937 4.82776L7.89574 1.17701C8.34765 0.274331 9.65235 0.274331 10.1043 1.17701Z"
        fill="#FFB700"
      />
    </svg>
  );
};

export const Beverages = () => {
  return (
    <svg width="33" height="36" viewBox="0 0 33 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.5 0.866025C14.4282 0.330127 15.5718 0.330127 16.5 0.866025L26.4904 6.63397C27.4186 7.16987 27.9904 8.16025 27.9904 9.23205V20.768C27.9904 21.8397 27.4186 22.8301 26.4904 23.366L16.5 29.134C15.5718 29.6699 14.4282 29.6699 13.5 29.134L3.50962 23.366C2.58142 22.8301 2.00962 21.8397 2.00962 20.768V9.23205C2.00962 8.16025 2.58142 7.16987 3.50962 6.63397L13.5 0.866025Z"
        fill="#67B044"
      />
      <path
        d="M13.5 0.866025C14.4282 0.330127 15.5718 0.330127 16.5 0.866025L26.4904 6.63397C27.4186 7.16987 27.9904 8.16025 27.9904 9.23205V20.768C27.9904 21.8397 27.4186 22.8301 26.4904 23.366L16.5 29.134C15.5718 29.6699 14.4282 29.6699 13.5 29.134L3.50962 23.366C2.58142 22.8301 2.00962 21.8397 2.00962 20.768V9.23205C2.00962 8.16025 2.58142 7.16987 3.50962 6.63397L13.5 0.866025Z"
        fill="white"
        fillOpacity="0.5"
      />
      <path
        d="M12.577 22.4286H12.6634L14.889 34.56C14.9351 34.8115 15.1772 35 15.4598 35H24.6845C24.967 35 25.2092 34.8167 25.2554 34.56L27.3886 22.9368C27.4925 22.7639 27.5789 22.5859 27.6596 22.4077C27.9365 22.3658 28.144 22.1614 28.144 21.8996V19.8043C28.144 19.731 28.1266 19.6577 28.092 19.5947C27.9075 18.0966 27.0658 16.7557 25.7974 15.7395L26.979 14.0477H29.4234C29.7406 14.0477 30 13.812 30 13.5239C30 13.2357 29.7406 13 29.4234 13H26.6618C26.4659 13 26.2813 13.0944 26.1717 13.2462L24.8745 15.1111C23.5311 14.315 21.865 13.8383 20.0719 13.8383C15.9208 13.8383 12.4389 16.3631 12.0519 19.6001C12.0232 19.6628 12 19.7363 12 19.8096V21.9049C12.0002 22.1929 12.2596 22.4286 12.5768 22.4286L12.577 22.4286ZM24.194 33.9525H15.9438L13.8279 22.4286H26.3039L24.194 33.9525ZM20.0717 14.8857C21.6399 14.8857 23.0985 15.2944 24.2689 15.991L23.2657 17.4366C23.0985 17.6829 23.1734 18.0024 23.4445 18.1596C23.5425 18.212 23.6462 18.2381 23.75 18.2381C23.9404 18.2381 24.1305 18.1491 24.2402 17.9919L25.1799 16.6353C26.0331 17.3633 26.6385 18.2695 26.875 19.2806H13.2689C13.8453 16.7767 16.6991 14.8857 20.0717 14.8857L20.0717 14.8857ZM13.1533 20.3332H26.9902V21.3807H13.1533V20.3332Z"
        fill="#1A162E"
      />
    </svg>
  );
};

export const Cocktails = () => {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.5 27.9904C9.86806 29.3576 12.5648 30.0515 15.2987 29.997C18.0325 29.9426 20.6995 29.1419 23.0113 27.6815C25.323 26.2211 27.1916 24.1565 28.415 21.7111C29.6384 19.2656 30.17 16.5322 29.9524 13.8065C29.7349 11.0808 28.7764 8.46636 27.1806 6.24592C25.5848 4.02548 23.4123 2.2835 20.8982 1.20829C18.3841 0.133086 15.6238 -0.234428 12.916 0.145481C10.2081 0.525389 7.65554 1.63827 5.53434 3.3638L15 15L7.5 27.9904Z"
        fill="#F94545"
      />
      <path
        d="M7.5 27.9904C9.86806 29.3576 12.5648 30.0515 15.2987 29.997C18.0325 29.9426 20.6995 29.1419 23.0113 27.6815C25.323 26.2211 27.1916 24.1565 28.415 21.7111C29.6384 19.2656 30.17 16.5322 29.9524 13.8065C29.7349 11.0808 28.7764 8.46636 27.1806 6.24592C25.5848 4.02548 23.4123 2.2835 20.8982 1.20829C18.3841 0.133086 15.6238 -0.234428 12.916 0.145481C10.2081 0.525389 7.65554 1.63827 5.53434 3.3638L15 15L7.5 27.9904Z"
        fill="white"
        fillOpacity="0.6"
      />
      <path
        d="M30 20H31C32.0609 20 33.0783 20.4214 33.8284 21.1716C34.5786 21.9217 35 22.9391 35 24C35 25.0609 34.5786 26.0783 33.8284 26.8284C33.0783 27.5786 32.0609 28 31 28H30"
        stroke="#1A162E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 20H30V29C30 30.0609 29.5786 31.0783 28.8284 31.8284C28.0783 32.5786 27.0609 33 26 33H18C16.9391 33 15.9217 32.5786 15.1716 31.8284C14.4214 31.0783 14 30.0609 14 29V20Z"
        stroke="#1A162E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18 13V16" stroke="#1A162E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 13V16" stroke="#1A162E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 13V16" stroke="#1A162E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const Candy = () => {
  return (
    <svg width="33" height="36" viewBox="0 0 33 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.8519 0.475538C14.587 0.171056 15.413 0.171056 16.1481 0.475538L24.4586 3.91786C25.1936 4.22234 25.7777 4.80636 26.0821 5.54145L29.5245 13.8519C29.8289 14.587 29.8289 15.413 29.5245 16.1481L26.0821 24.4586C25.7777 25.1936 25.1936 25.7777 24.4586 26.0821L16.1481 29.5245C15.413 29.8289 14.587 29.8289 13.8519 29.5245L5.54145 26.0821C4.80636 25.7777 4.22234 25.1936 3.91786 24.4586L0.475538 16.1481C0.171056 15.413 0.171056 14.587 0.475538 13.8519L3.91786 5.54145C4.22234 4.80636 4.80636 4.22234 5.54145 3.91786L13.8519 0.475538Z"
        fill="#F94545"
      />
      <path
        d="M13.8519 0.475538C14.587 0.171056 15.413 0.171056 16.1481 0.475538L24.4586 3.91786C25.1936 4.22234 25.7777 4.80636 26.0821 5.54145L29.5245 13.8519C29.8289 14.587 29.8289 15.413 29.5245 16.1481L26.0821 24.4586C25.7777 25.1936 25.1936 25.7777 24.4586 26.0821L16.1481 29.5245C15.413 29.8289 14.587 29.8289 13.8519 29.5245L5.54145 26.0821C4.80636 25.7777 4.22234 25.1936 3.91786 24.4586L0.475538 16.1481C0.171056 15.413 0.171056 14.587 0.475538 13.8519L3.91786 5.54145C4.22234 4.80636 4.80636 4.22234 5.54145 3.91786L13.8519 0.475538Z"
        fill="white"
        fillOpacity="0.3"
      />
      <path
        d="M27.9226 34.9995C27.9083 34.9995 27.894 34.9995 27.8797 34.9987C27.5985 34.9866 27.3339 34.8569 27.153 34.6419C25.5902 32.7836 25.2925 30.5985 26.4456 29.4455C27.5984 28.2926 29.7848 28.5902 31.6422 30.1527C31.8569 30.3331 31.987 30.5981 31.9993 30.8795C32.0115 31.1615 31.9041 31.4376 31.7044 31.6373L31.6254 31.7166L31.5189 31.7502C31.2665 31.8303 30.9724 31.8343 30.6913 31.8298C30.4713 31.8329 30.1398 31.829 30.0449 31.8933C29.5424 32.2321 29.1102 32.6838 28.7945 33.1998C28.7828 33.2485 28.8056 33.4764 28.8191 33.6124C28.8462 33.8827 28.874 34.1625 28.79 34.4046L28.7117 34.6293L28.6374 34.7036C28.448 34.8932 28.1895 34.9996 27.9225 34.9996L27.9226 34.9995ZM27.0936 30.0938C26.3114 30.8761 26.6456 32.6145 27.8544 34.0522C27.8748 34.0764 27.9008 34.0822 27.919 34.0832C27.9212 34.0827 27.924 34.0827 27.9279 34.0832C27.937 34.0039 27.9187 33.8187 27.9071 33.7036C27.873 33.3617 27.8377 33.008 28.0126 32.7221C28.3965 32.0946 28.9217 31.5455 29.5322 31.1337C29.86 30.9121 30.3016 30.9099 30.6921 30.9134C30.8248 30.9126 30.9658 30.9139 31.0815 30.9036C31.0782 30.888 31.0703 30.87 31.0524 30.8549C29.615 29.6458 27.8763 29.3123 27.0936 30.0938L27.0936 30.0938Z"
        fill="#1A162E"
      />
      <path
        d="M13.7198 19.2546C12.6724 19.2546 11.4578 18.773 10.358 17.8479C10.1434 17.6675 10.0132 17.4025 10.0009 17.121C9.98879 16.8391 10.0962 16.563 10.2959 16.3633L10.3703 16.2885L10.5958 16.2107C10.8375 16.1274 11.1175 16.1546 11.3873 16.1816C11.5231 16.1954 11.7507 16.217 11.8204 16.1964C12.3162 15.8901 12.7682 15.4579 13.107 14.9562C13.1709 14.8612 13.1705 14.5296 13.1704 14.3103C13.1702 14.0272 13.17 13.7349 13.2502 13.4821L13.2839 13.3755L13.3629 13.2967C13.5625 13.097 13.84 12.9843 14.1207 13.0018C14.4018 13.0139 14.6665 13.1436 14.8473 13.3585C16.4101 15.2168 16.7079 17.402 15.5547 18.555C15.0844 19.0253 14.4417 19.2545 13.7198 19.2545L13.7198 19.2546ZM10.9168 17.0735V17.0815C10.9176 17.0994 10.9238 17.1254 10.9479 17.146C12.3856 18.3554 14.1245 18.6884 14.9067 17.9069C15.6889 17.1245 15.3547 15.3861 14.1459 13.9484C14.1306 13.9305 14.1125 13.9225 14.0969 13.9193C14.0867 14.0352 14.0871 14.178 14.0871 14.3092C14.0876 14.699 14.0879 15.1407 13.8668 15.4684C13.455 16.0785 12.9055 16.6038 12.2781 16.9879C11.993 17.1629 11.6387 17.1275 11.2966 17.0934C11.1825 17.0829 11.0003 17.0645 10.9169 17.0735L10.9168 17.0735ZM15.2307 18.2309H15.2352H15.2307Z"
        fill="#1A162E"
      />
      <path
        d="M24.3319 31.1301C22.2197 31.1301 19.6 29.8961 17.3524 27.6488C15.7554 26.0518 14.6099 24.1846 14.1275 22.3911C13.6208 20.5085 13.8974 18.9169 14.9059 17.9088C15.914 16.9003 17.5057 16.6237 19.3883 17.1304C21.1821 17.6134 23.0495 18.7588 24.6463 20.3557C26.2433 21.9527 27.3888 23.8199 27.8712 25.6134C28.3779 27.496 28.1013 29.0876 27.0928 30.0957C26.3931 30.7958 25.4306 31.1301 24.3315 31.1301H24.3319ZM17.6478 17.7994C16.7755 17.7994 16.0554 18.0554 15.5539 18.5567C14.7871 19.3234 14.5949 20.6008 15.0125 22.1531C15.4541 23.7939 16.5153 25.5157 18.0006 27.0009C20.9527 29.9531 24.8196 31.0731 26.445 29.4479C27.2118 28.6811 27.4039 27.4037 26.9863 25.8515C26.5447 24.2106 25.4835 22.4889 23.9983 21.0036C22.5131 19.5181 20.7913 18.4569 19.1502 18.0155C18.6131 17.8711 18.1091 17.7994 17.6476 17.7994L17.6478 17.7994Z"
        fill="#1A162E"
      />
    </svg>
  );
};

export const Snacks = () => {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 0C11.5297 -4.13833e-08 8.1667 1.20329 5.4841 3.40484C2.8015 5.6064 0.965248 8.67 0.288221 12.0736C-0.388807 15.4773 0.13528 19.0104 1.77118 22.071C3.40708 25.1315 6.05358 27.5302 9.25975 28.8582C12.4659 30.1862 16.0334 30.3615 19.3543 29.3541C22.6752 28.3467 25.544 26.219 27.472 23.3336C29.4001 20.4481 30.2679 16.9834 29.9278 13.5297C29.5876 10.0761 28.0605 6.84729 25.6066 4.39339L15 15V0Z"
        fill="#7644E1"
      />
      <path
        d="M15 0C11.5297 -4.13833e-08 8.1667 1.20329 5.4841 3.40484C2.8015 5.6064 0.965248 8.67 0.288221 12.0736C-0.388807 15.4773 0.13528 19.0104 1.77118 22.071C3.40708 25.1315 6.05358 27.5302 9.25975 28.8582C12.4659 30.1862 16.0334 30.3615 19.3543 29.3541C22.6752 28.3467 25.544 26.219 27.472 23.3336C29.4001 20.4481 30.2679 16.9834 29.9278 13.5297C29.5876 10.0761 28.0605 6.84729 25.6066 4.39339L15 15V0Z"
        fill="white"
        fillOpacity="0.7"
      />
      <path
        d="M22.9922 34.0429H15.6955L14.9145 19.6883H25.3924L25.2972 21.3343H25.2971C25.2866 21.4603 25.3273 21.5853 25.4097 21.6807C25.4923 21.7762 25.6097 21.8343 25.7353 21.8416C25.8618 21.858 25.9894 21.8192 26.0859 21.7351C26.1823 21.651 26.2384 21.5295 26.2401 21.4014L26.3449 19.6883H26.8497C26.9761 19.6883 27.0972 19.6379 27.1866 19.5481C27.2758 19.4585 27.3259 19.3367 27.3259 19.2099C27.3259 19.083 27.2758 18.9612 27.1866 18.8716C27.0972 18.7818 26.9761 18.7314 26.8497 18.7314H20.6297V16.1571C20.6302 15.8016 20.8094 15.4705 21.1059 15.2768L23.2396 13.8797V13.8795C23.3461 13.8111 23.4203 13.7023 23.4456 13.5778C23.4707 13.4533 23.4444 13.3239 23.373 13.2193C23.2306 12.9975 22.9368 12.9334 22.7157 13.0756L20.5535 14.4729C20.0001 14.8524 19.6716 15.4841 19.6771 16.1571V18.7314H13.4762C13.2133 18.7314 13 18.9455 13 19.2099C13 19.3367 13.0502 19.4585 13.1395 19.5482C13.2289 19.6379 13.35 19.6883 13.4762 19.6883H13.9621L14.7622 34.5406C14.7724 34.7974 14.9827 35.0002 15.2385 35H22.9825C23.1088 35 23.2299 34.9496 23.3192 34.8598C23.4086 34.77 23.4588 34.6484 23.4588 34.5214C23.4588 34.2609 23.2513 34.0481 22.992 34.0429L22.9922 34.0429Z"
        fill="#1A162E"
      />
      <path
        d="M31.4706 28.3011L34.9188 23.3056C35.066 23.0863 35.0085 22.7886 34.7901 22.6406C34.5718 22.4926 34.2755 22.5505 34.1282 22.7698L30.318 28.2724H28.3559C28.3241 28.131 28.3082 27.9865 28.3082 27.8416C28.303 27.2088 28.5479 26.5997 28.9887 26.1478C29.4298 25.6957 30.0311 25.4377 30.6609 25.4302C30.9108 25.4272 31.1593 25.4693 31.3943 25.5545C31.6466 25.6368 31.918 25.5005 32.0039 25.2483C32.0134 25.1817 32.0134 25.114 32.0039 25.0474V24.9805V24.9803C32.0347 23.7974 31.4347 22.6878 30.4304 22.0699C29.4259 21.4517 28.1696 21.4189 27.1346 21.9836C26.0996 22.5485 25.4431 23.6252 25.4124 24.8081C24.834 25.0806 24.3455 25.5138 24.0045 26.0565C23.6635 26.5992 23.4844 27.2287 23.4883 27.8704C23.4912 28.0951 23.5134 28.3194 23.555 28.5402C23.5109 28.629 23.4943 28.7291 23.5073 28.8274L24.4597 34.5693H24.4599C24.4971 34.7997 24.6943 34.9696 24.9267 34.9713H32.547C32.7794 34.9696 32.9766 34.7997 33.0138 34.5693L33.9662 28.8274C33.981 28.7218 33.9609 28.6142 33.9091 28.5212C33.9538 28.2973 33.9793 28.07 33.9853 27.8417C33.9842 27.4909 33.9295 27.1424 33.8234 26.8082C33.7445 26.544 33.4672 26.394 33.2043 26.4733C32.9411 26.5525 32.792 26.8311 32.8709 27.0952C32.9498 27.3364 32.9915 27.588 32.9946 27.8417C33.0117 27.9943 33.018 28.1478 33.0137 28.3012L31.4706 28.3011ZM28.7273 22.5593C29.2723 22.5623 29.7995 22.7544 30.2196 23.1031C30.6399 23.4521 30.9269 23.936 31.0324 24.4732H30.6609C29.953 24.4759 29.2661 24.7149 28.7082 25.1527C28.1563 24.7427 27.4896 24.5182 26.8032 24.5116H26.4316C26.5306 23.9697 26.8135 23.4791 27.2321 23.1231C27.6505 22.7672 28.1789 22.5679 28.7272 22.5592L28.7273 22.5593ZM26.8222 25.4301V25.4303C27.264 25.4298 27.6969 25.556 28.07 25.7939C27.6338 26.3725 27.3964 27.0778 27.3938 27.8035C27.383 27.9469 27.383 28.0907 27.3938 28.2341H24.4409C24.4311 28.1004 24.4311 27.9661 24.4409 27.8322C24.4384 27.2026 24.6829 26.5975 25.1216 26.1477C25.5601 25.6982 26.1576 25.4403 26.7842 25.4303L26.8222 25.4301ZM32.1755 34.0429H25.3172L24.5265 29.258H32.928L32.1755 34.0429Z"
        fill="#1A162E"
      />
    </svg>
  );
};

export const Frozen = () => {
  return (
    <svg width="35" height="36" viewBox="0 0 35 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.8787 2.12132C16.0503 0.949748 17.9497 0.949747 19.1213 2.12132L31.8787 14.8787C33.0503 16.0503 33.0503 17.9497 31.8787 19.1213L19.1213 31.8787C17.9497 33.0503 16.0503 33.0503 14.8787 31.8787L2.12132 19.1213C0.949748 17.9497 0.949747 16.0503 2.12132 14.8787L14.8787 2.12132Z"
        fill="#FFB700"
      />
      <path
        d="M14.8787 2.12132C16.0503 0.949748 17.9497 0.949747 19.1213 2.12132L31.8787 14.8787C33.0503 16.0503 33.0503 17.9497 31.8787 19.1213L19.1213 31.8787C17.9497 33.0503 16.0503 33.0503 14.8787 31.8787L2.12132 19.1213C0.949748 17.9497 0.949747 16.0503 2.12132 14.8787L14.8787 2.12132Z"
        fill="white"
        fillOpacity="0.5"
      />
      <path
        d="M32.9076 34.4612C32.9917 30.0729 30.2217 26.0365 26.3813 24.5387C22.5059 23.0304 17.9767 24.339 15.3649 27.7235C13.9179 29.5999 13.0508 32.0225 13.0954 34.4612C13.1103 35.1392 14.1013 35.1392 14.0864 34.4612C14.0121 30.5669 16.4551 26.8934 19.8844 25.5533C21.6586 24.8595 23.6061 24.7702 25.4244 25.3168C27.1737 25.8372 28.7348 26.9355 29.8942 28.4174C31.1975 30.0834 31.9558 32.2906 31.916 34.4612C31.9013 35.1339 32.8923 35.1339 32.9072 34.4612L32.9076 34.4612Z"
        fill="#1A162E"
      />
      <path
        d="M12.4793 34.9869H14.5755H19.6102H25.6759H30.9191C31.7715 34.9869 32.6338 35.0184 33.486 34.9869H33.5208C34.1601 34.9869 34.1601 33.9359 33.5208 33.9359H31.4246H26.3899H20.3242H15.0811C14.2286 33.9359 13.3664 33.9044 12.5141 33.9359H12.4793C11.8402 33.9359 11.8402 34.9869 12.4793 34.9869Z"
        fill="#1A162E"
      />
      <path
        d="M21.5283 20.1714C21.8802 19.3516 22.4105 18.474 22.2122 17.5384C22.1329 17.1601 21.9347 16.8131 21.687 16.5347C21.4986 16.3191 21.3253 16.1142 21.2857 15.8094C21.2411 15.4469 21.4293 15.0684 21.5484 14.7373C21.6771 14.3799 21.8061 14.0227 21.9348 13.6652C22.029 13.4024 21.8308 13.0871 21.588 13.0187C21.3104 12.9399 21.0726 13.1186 20.9784 13.3866C20.8743 13.681 20.7653 13.9752 20.6612 14.2695C20.5423 14.5954 20.3887 14.9318 20.3292 15.2733C20.2648 15.6464 20.2796 16.0301 20.4086 16.3873C20.5423 16.7605 20.7653 17.018 21.0081 17.3071C21.3203 17.6803 21.3154 18.1323 21.1321 18.5684C20.9784 18.9258 20.8248 19.283 20.6713 19.6351C20.5622 19.8926 20.602 20.2028 20.8496 20.3551C21.0676 20.492 21.4195 20.429 21.5284 20.1714L21.5283 20.1714Z"
        fill="#1A162E"
      />
      <path
        d="M24.9863 21.7535C25.3382 20.9336 25.8685 20.056 25.6702 19.1205C25.5909 18.7422 25.3927 18.3952 25.145 18.1167C24.9566 17.9012 24.7833 17.6963 24.7437 17.3914C24.6991 17.0289 24.8873 16.6504 25.0064 16.3193C25.1352 15.9619 25.2641 15.6047 25.3929 15.2472C25.487 14.9844 25.2888 14.6691 25.046 14.6008C24.7684 14.522 24.5306 14.7007 24.4364 14.9686C24.3323 15.263 24.2233 15.5572 24.1192 15.8516C24.0003 16.1774 23.8467 16.5138 23.7872 16.8553C23.7228 17.2285 23.7376 17.6121 23.8666 17.9693C24.0003 18.3425 24.2233 18.6 24.4661 18.8891C24.7783 19.2623 24.7734 19.7143 24.5901 20.1504C24.4364 20.5078 24.2828 20.865 24.1293 21.2171C24.0202 21.4747 24.06 21.7848 24.3076 21.9371C24.5206 22.074 24.8725 22.011 24.9864 21.7535L24.9863 21.7535Z"
        fill="#1A162E"
      />
    </svg>
  );
};

export const BakeryBread = () => {
  return (
    <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.5">
        <path
          d="M14.4019 4.5C15.5566 2.5 18.4434 2.5 19.5981 4.5L29.1244 21C30.2791 23 28.8357 25.5 26.5263 25.5H7.47372C5.16432 25.5 3.72094 23 4.87564 21L14.4019 4.5Z"
          fill="#0071DC"
        />
        <path
          d="M14.4019 4.5C15.5566 2.5 18.4434 2.5 19.5981 4.5L29.1244 21C30.2791 23 28.8357 25.5 26.5263 25.5H7.47372C5.16432 25.5 3.72094 23 4.87564 21L14.4019 4.5Z"
          fill="white"
          fillOpacity="0.6"
        />
      </g>
      <path
        d="M15.0298 17C13.3626 17 12 18.4323 12 20.1854C12 21.1901 12.4479 22.0863 13.1403 22.6677V31.3199V31.3197C13.1403 31.6954 13.4301 32 13.7873 32H32.2127C32.5699 32 32.8597 31.6954 32.8597 31.3197V22.668C33.5521 22.0866 34 21.1904 34 20.1857C34 18.4328 32.6376 17.0003 30.9702 17.0003L15.0298 17ZM15.0298 18.3606H23.2659C24.2388 18.3606 25.0016 19.1625 25.0016 20.1854C25.0016 20.8518 24.6709 21.4135 24.1704 21.7356C23.9783 21.8591 23.8613 22.0789 23.8613 22.3156V30.6393H14.4342V22.3156C14.4342 22.079 14.3171 21.8592 14.1252 21.7356C13.6247 21.4135 13.294 20.8518 13.294 20.1854C13.294 19.1625 14.0568 18.3606 15.0297 18.3606H15.0298ZM25.7464 18.3606H30.9704C31.9434 18.3606 32.7062 19.1625 32.7062 20.1854C32.7062 20.8518 32.3754 21.4135 31.875 21.7356H31.8748C31.6829 21.8591 31.5657 22.0789 31.5657 22.3156V30.6393H25.1557V22.6679C25.8481 22.0865 26.296 21.1903 26.296 20.1856C26.296 19.508 26.0924 18.8784 25.7464 18.3608L25.7464 18.3606ZM18.2226 21.7773H18.2224C18.0543 21.7824 17.8949 21.8563 17.7775 21.9831L16.0366 23.8134C15.9124 23.9404 15.8418 24.1142 15.8405 24.2965C15.8393 24.4787 15.9075 24.6537 16.0299 24.7824C16.1525 24.9113 16.319 24.983 16.4923 24.9817C16.6656 24.9804 16.831 24.9061 16.9518 24.7754L18.6927 22.945V22.9452C18.8841 22.7495 18.9415 22.4505 18.8375 22.192C18.7335 21.9337 18.4892 21.769 18.2224 21.7773H18.2226ZM20.4076 23.2294H20.4074C20.2394 23.2347 20.0799 23.3083 19.9628 23.4351L17.4179 26.1106C17.2935 26.2376 17.2229 26.4117 17.2217 26.5937C17.2204 26.7759 17.2886 26.9509 17.4112 27.0798C17.5336 27.2085 17.7003 27.2803 17.8734 27.2789C18.0467 27.2776 18.2123 27.2034 18.3329 27.0728L20.8778 24.3973C21.0691 24.2016 21.1267 23.9026 21.0227 23.6441C20.9186 23.3858 20.6743 23.221 20.4075 23.2294L20.4076 23.2294ZM21.7888 25.5266C21.6207 25.5319 21.4611 25.6058 21.3439 25.7326L19.603 27.5629V27.5627C19.4789 27.6897 19.4085 27.8637 19.4073 28.0456C19.4062 28.2276 19.4744 28.4026 19.5968 28.5313C19.7192 28.66 19.8855 28.7317 20.0587 28.7306C20.2318 28.7293 20.3972 28.6552 20.5179 28.5248L22.2589 26.6945C22.4503 26.499 22.5079 26.1999 22.4039 25.9415C22.2997 25.683 22.0554 25.5185 21.7887 25.5266L21.7888 25.5266Z"
        fill="#1A162E"
      />
    </svg>
  );
};

export const FreshProduce = () => {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.0489 2.92705C17.3483 2.00574 18.6517 2.00574 18.9511 2.92705L21.8167 11.7467C21.9506 12.1587 22.3346 12.4377 22.7678 12.4377H32.0413C33.0101 12.4377 33.4128 13.6773 32.6291 14.2467L25.1267 19.6976C24.7762 19.9522 24.6295 20.4036 24.7634 20.8156L27.6291 29.6353C27.9284 30.5566 26.874 31.3227 26.0902 30.7533L18.5878 25.3024C18.2373 25.0478 17.7627 25.0478 17.4122 25.3024L9.90976 30.7533C9.12605 31.3227 8.07157 30.5566 8.37092 29.6353L11.2366 20.8156C11.3705 20.4036 11.2238 19.9522 10.8733 19.6976L3.37088 14.2467C2.58717 13.6773 2.98994 12.4377 3.95867 12.4377H13.2322C13.6654 12.4377 14.0494 12.1587 14.1833 11.7467L17.0489 2.92705Z"
        fill="#67B044"
      />
      <path
        d="M17.0489 2.92705C17.3483 2.00574 18.6517 2.00574 18.9511 2.92705L21.8167 11.7467C21.9506 12.1587 22.3346 12.4377 22.7678 12.4377H32.0413C33.0101 12.4377 33.4128 13.6773 32.6291 14.2467L25.1267 19.6976C24.7762 19.9522 24.6295 20.4036 24.7634 20.8156L27.6291 29.6353C27.9284 30.5566 26.874 31.3227 26.0902 30.7533L18.5878 25.3024C18.2373 25.0478 17.7627 25.0478 17.4122 25.3024L9.90976 30.7533C9.12605 31.3227 8.07157 30.5566 8.37092 29.6353L11.2366 20.8156C11.3705 20.4036 11.2238 19.9522 10.8733 19.6976L3.37088 14.2467C2.58717 13.6773 2.98994 12.4377 3.95867 12.4377H13.2322C13.6654 12.4377 14.0494 12.1587 14.1833 11.7467L17.0489 2.92705Z"
        fill="white"
        fillOpacity="0.6"
      />
      <path
        d="M23.4857 33.9989C18.9511 33.9989 15.7156 32.7927 14.1224 30.5248C12.7498 28.5464 12.6272 25.9168 13.8039 22.9011C14.5883 20.8503 16.8187 19.4512 19.3434 19.4512C21.2308 19.4512 23.118 20.2233 24.7113 21.6467C25.5202 21.0194 27.4321 19.7408 29.5155 19.7408C31.4274 19.7408 32.947 20.7781 34.0501 22.8048C35.3001 25.145 35.3247 27.5335 34.0746 29.5841C32.3586 32.3826 28.5105 33.9992 23.4857 33.9992L23.4857 33.9989ZM19.3432 20.5609C17.2843 20.5609 15.4705 21.6708 14.8332 23.2872C14.1224 25.1449 13.5831 27.7987 15.0293 29.8976C16.4019 31.8518 19.3187 32.8892 23.4856 32.8892C28.0937 32.8892 31.6234 31.4659 33.1185 29.005C34.148 27.3162 34.1235 25.2897 33.0695 23.3113C32.1871 21.6466 30.9859 20.8264 29.5398 20.8264C27.2848 20.8264 25.1033 22.7565 25.0788 22.7805C24.8582 22.9735 24.5151 22.9735 24.319 22.7565C22.4317 20.9469 20.5689 20.5608 19.3432 20.5608L19.3432 20.5609Z"
        fill="#1A162E"
      />
      <path
        d="M24.7845 20.6841C24.711 20.6841 24.6619 20.6841 24.5884 20.6601C24.3923 20.5877 24.2453 20.4187 24.2208 20.2016C24.1964 19.9845 23.9756 18.0062 24.9806 16.8723C25.3973 16.3898 25.9856 16.1484 26.6964 16.1484H26.7208C29.2699 16.1725 30.9367 17.7408 31.0103 17.8132C31.1819 17.9821 31.2308 18.2473 31.1083 18.4646C30.9857 18.6817 30.7407 18.8023 30.4955 18.73C30.2258 18.6817 29.9318 18.6336 29.6621 18.6336C27.3336 18.6336 25.1766 20.5154 25.1521 20.5154C25.0541 20.6359 24.9071 20.6841 24.7845 20.6841L24.7845 20.6841ZM26.7208 17.2583C26.3286 17.2583 26.059 17.379 25.8384 17.596C25.5197 17.9338 25.3973 18.5129 25.3482 19.0194C26.1327 18.5127 27.3092 17.8614 28.6574 17.6201C28.1181 17.4271 27.4563 17.2583 26.7209 17.2583L26.7208 17.2583Z"
        fill="#1A162E"
      />
      <path
        d="M22.8974 19.4524H22.8239C19.1717 19.0423 17.3334 15.9299 16.9902 15.2787C16.598 14.9409 16.598 14.6272 16.6715 14.4342C16.7206 14.3135 16.8676 14 17.3822 14C17.6274 14 18.1176 14.0483 19.5637 14.5548C23.0691 15.7611 23.4367 18.7286 23.4611 18.8492C23.4856 19.0182 23.4121 19.187 23.2895 19.3077C23.1915 19.4041 23.0445 19.4524 22.8974 19.4524L22.8974 19.4524ZM18.3383 15.3268C18.902 16.1713 20.1766 17.667 22.1376 18.2218C21.8189 17.4257 21.0346 16.2434 19.2207 15.6163C18.8531 15.4715 18.5589 15.3751 18.3383 15.3268V15.3268Z"
        fill="#1A162E"
      />
    </svg>
  );
};

export const Grocery = () => {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="30" height="30" rx="5" fill="#7644E1" />
      <rect width="30" height="30" rx="5" fill="white" fillOpacity="0.4" />
      <path
        d="M14.75 15.25L16.83 15.61L17.793 27.083C17.87 28.02 18.653 28.739 19.593 28.736H30.502C31.399 28.738 32.16 28.078 32.287 27.19L33.236 20.632C33.342 19.899 32.833 19.219 32.101 19.113C32.037 19.104 17.164 19.099 17.164 19.099"
        stroke="#1A162E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.125 22.7949H28.898"
        stroke="#1A162E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.1544 32.2031C19.4554 32.2031 19.6984 32.4471 19.6984 32.7471C19.6984 33.0481 19.4554 33.2921 19.1544 33.2921C18.8534 33.2921 18.6104 33.0481 18.6104 32.7471C18.6104 32.4471 18.8534 32.2031 19.1544 32.2031Z"
        fill="#1A162E"
        stroke="#1A162E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.4346 32.2031C30.7356 32.2031 30.9796 32.4471 30.9796 32.7471C30.9796 33.0481 30.7356 33.2921 30.4346 33.2921C30.1336 33.2921 29.8906 33.0481 29.8906 32.7471C29.8906 32.4471 30.1336 32.2031 30.4346 32.2031Z"
        fill="#1A162E"
        stroke="#1A162E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CardIcon = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
    >
      <path
        d="M0.75 1.25L2.83 1.61L3.793 13.083C3.87 14.02 4.653 14.739 5.593 14.736H16.502C17.399 14.738 18.16 14.078 18.287 13.19L19.236 6.632C19.342 5.899 18.833 5.219 18.101 5.113C18.037 5.104 3.164 5.099 3.164 5.099"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M12.125 8.79492H14.898"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M5.15338 18.2031C5.45438 18.2031 5.69738 18.4471 5.69738 18.7471C5.69738 19.0481 5.45438 19.2921 5.15338 19.2921C4.85238 19.2921 4.60938 19.0481 4.60938 18.7471C4.60938 18.4471 4.85238 18.2031 5.15338 18.2031Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M16.4346 18.2031C16.7356 18.2031 16.9796 18.4471 16.9796 18.7471C16.9796 19.0481 16.7356 19.2921 16.4346 19.2921C16.1336 19.2921 15.8906 19.0481 15.8906 18.7471C15.8906 18.4471 16.1336 18.2031 16.4346 18.2031Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

export const HeartIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 4.69922C16.07 5.04522 16.826 6.00022 16.917 7.12122"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SearchIcon = ({ width = 21, height = 21, className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
      <circle
        cx="9.7659"
        cy="9.7659"
        r="8.98856"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0176 16.4844L19.5416 19.9992"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowDown = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6" fill="none">
      <path
        d="M8.5 1.25L5 4.75L1.5 1.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
