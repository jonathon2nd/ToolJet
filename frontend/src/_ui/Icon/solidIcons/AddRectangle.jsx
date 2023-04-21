import React from 'react';

const AddRectangle = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.5 2.78906H18.5C20.7091 2.78906 22.5 4.57992 22.5 6.78906V18.7891C22.5 20.9982 20.7091 22.7891 18.5 22.7891H6.5C4.29086 22.7891 2.5 20.9982 2.5 18.7891V6.78906C2.5 4.57992 4.29086 2.78906 6.5 2.78906ZM12.5 8.03906C12.9142 8.03906 13.25 8.37485 13.25 8.78906V12.0391H16.5C16.9142 12.0391 17.25 12.3748 17.25 12.7891C17.25 13.2033 16.9142 13.5391 16.5 13.5391H13.25V16.7891C13.25 17.2033 12.9142 17.5391 12.5 17.5391C12.0858 17.5391 11.75 17.2033 11.75 16.7891V13.5391H8.5C8.08579 13.5391 7.75 13.2033 7.75 12.7891C7.75 12.3748 8.08579 12.0391 8.5 12.0391H11.75V8.78906C11.75 8.37485 12.0858 8.03906 12.5 8.03906Z"
      fill={fill}
    />
  </svg>
);

export default AddRectangle;
