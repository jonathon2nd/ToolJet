import React from 'react';

const Datasource = ({ style = {}, fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg width={width} height={width} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.5 9.19219V18.7891C22.5 20.9982 20.7091 22.7891 18.5 22.7891H6.5C4.29086 22.7891 2.5 20.9982 2.5 18.7891V9.19219C2.5 8.97221 2.51813 8.75381 2.55367 8.53906H22.4463C22.4819 8.75381 22.5 8.97221 22.5 9.19219ZM21.8711 7.03906C21.795 6.91999 21.7124 6.80458 21.6235 6.69341L19.701 4.29028C18.9419 3.34142 17.7926 2.78906 16.5775 2.78906H8.4225C7.20736 2.78906 6.05811 3.34142 5.29902 4.29028L3.37652 6.69341C3.28758 6.80458 3.20499 6.91999 3.12893 7.03906H21.8711ZM16.5 19.0391C16.0858 19.0391 15.75 19.3748 15.75 19.7891C15.75 20.2033 16.0858 20.5391 16.5 20.5391H19.5C19.9142 20.5391 20.25 20.2033 20.25 19.7891C20.25 19.3748 19.9142 19.0391 19.5 19.0391H16.5ZM15.75 16.7891C15.75 16.3748 16.0858 16.0391 16.5 16.0391H19.5C19.9142 16.0391 20.25 16.3748 20.25 16.7891C20.25 17.2033 19.9142 17.5391 19.5 17.5391H16.5C16.0858 17.5391 15.75 17.2033 15.75 16.7891Z"
      fill={fill}
    />
  </svg>
);

export default Datasource;