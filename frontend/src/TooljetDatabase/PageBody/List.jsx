import React, { useState, useEffect, useContext } from 'react';
import cx from 'classnames';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { toast } from 'react-hot-toast';
import { TooljetDatabaseContext } from '../index';
import { tooljetDatabaseService } from '@/_services';

const ListItem = ({ active, onClick, text = '' }) => {
  const handleDelete = () => {
    const { error } = tooljetDatabaseService.deleteTable(text);

    if (error) {
      toast.error(`Failed to delete table "${text}"`);
      return;
    }

    toast.success(`${text} deleted successfully`);
  };

  const popover = (
    <Popover id="popover-contained">
      <Popover.Content>
        <div className="row cursor-pointer">
          <div className="col-auto">
            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.41257 12.0293H2.02923L9.3459 4.69595L8.71257 4.07928L1.41257 11.396V12.0293ZM11.6126 3.99595L9.42923 1.81262L10.0959 1.14595C10.307 0.934838 10.5653 0.83206 10.8709 0.837616C11.1765 0.843172 11.4403 0.951505 11.6626 1.16262L12.2959 1.77928C12.5181 2.00151 12.6209 2.26262 12.6042 2.56262C12.5876 2.86262 12.4737 3.11817 12.2626 3.32928L11.6126 3.99595ZM0.962565 13.1293C0.773676 13.1293 0.615343 13.0654 0.487565 12.9376C0.359787 12.8098 0.295898 12.6515 0.295898 12.4626V11.2293C0.295898 11.1404 0.312565 11.0571 0.345898 10.9793C0.379232 10.9015 0.429232 10.8293 0.495898 10.7626L8.72923 2.51262L10.9126 4.67928L2.67923 12.9293C2.61257 12.9959 2.53757 13.046 2.45423 13.0793C2.3709 13.1126 2.28479 13.1293 2.1959 13.1293H0.962565ZM9.0459 4.37928L8.71257 4.07928L9.3459 4.69595L9.0459 4.37928Z"
                fill="#9BA3AF"
              />
            </svg>
          </div>
          <div className="col text-truncate">Edit</div>
        </div>
        <div className="row mt-3">
          <div className="col-auto">
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.59571 12.7332C4.22904 12.7332 3.91515 12.6026 3.65404 12.3415C3.39293 12.0804 3.26238 11.7665 3.26238 11.3998V2.23317C3.26238 1.87761 3.39293 1.56928 3.65404 1.30817C3.91515 1.04706 4.22904 0.916504 4.59571 0.916504H11.7624C12.1179 0.916504 12.4263 1.04706 12.6874 1.30817C12.9485 1.56928 13.079 1.87761 13.079 2.23317V11.3998C13.079 11.7665 12.9485 12.0804 12.6874 12.3415C12.4263 12.6026 12.1179 12.7332 11.7624 12.7332H4.59571ZM4.59571 11.3998H11.7624V2.23317H4.59571V11.3998ZM2.26238 15.0498C1.90682 15.0498 1.59849 14.9193 1.33738 14.6582C1.07626 14.3971 0.945709 14.0887 0.945709 13.7332V4.4165C0.945709 4.23873 1.0096 4.08595 1.13738 3.95817C1.26515 3.83039 1.42349 3.7665 1.61238 3.7665C1.80126 3.7665 1.95682 3.83039 2.07904 3.95817C2.20126 4.08595 2.26238 4.23873 2.26238 4.4165V13.7332H9.42904C9.60682 13.7332 9.7596 13.7971 9.88738 13.9248C10.0152 14.0526 10.079 14.2109 10.079 14.3998C10.079 14.5887 10.0152 14.7443 9.88738 14.8665C9.7596 14.9887 9.60682 15.0498 9.42904 15.0498H2.26238ZM4.59571 2.23317V11.3998V2.23317Z"
                fill="#9BA3AF"
              />
            </svg>
          </div>
          <div className="col text-truncate">Duplicate</div>
        </div>
        <div className="row mt-3">
          <div className="col-auto">
            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.61247 13.2459C2.25691 13.2459 1.94858 13.1154 1.68747 12.8543C1.42636 12.5932 1.2958 12.2848 1.2958 11.9293V2.59595H1.11247C0.923579 2.59595 0.765245 2.53206 0.637467 2.40428C0.50969 2.2765 0.445801 2.11817 0.445801 1.92928C0.445801 1.74039 0.50969 1.58206 0.637467 1.45428C0.765245 1.3265 0.923579 1.26261 1.11247 1.26261H3.9958C3.9958 1.07373 4.05969 0.915392 4.18747 0.787614C4.31524 0.659836 4.47358 0.595947 4.66247 0.595947H8.02913C8.21802 0.595947 8.37913 0.662614 8.51247 0.795947C8.6458 0.929281 8.71247 1.08484 8.71247 1.26261H11.5791C11.768 1.26261 11.9264 1.3265 12.0541 1.45428C12.1819 1.58206 12.2458 1.74039 12.2458 1.92928C12.2458 2.11817 12.1819 2.2765 12.0541 2.40428C11.9264 2.53206 11.768 2.59595 11.5791 2.59595H11.3958V11.9293C11.3958 12.2848 11.2652 12.5932 11.0041 12.8543C10.743 13.1154 10.4347 13.2459 10.0791 13.2459H2.61247ZM2.61247 2.59595V11.9293H10.0791V2.59595H2.61247ZM4.3458 9.99595C4.3458 10.1515 4.40136 10.2848 4.51247 10.3959C4.62358 10.5071 4.75691 10.5626 4.91247 10.5626C5.07913 10.5626 5.21802 10.5071 5.32913 10.3959C5.44025 10.2848 5.4958 10.1515 5.4958 9.99595V4.51261C5.4958 4.34595 5.43747 4.20428 5.3208 4.08761C5.20413 3.97095 5.06802 3.91261 4.91247 3.91261C4.7458 3.91261 4.60969 3.97095 4.50413 4.08761C4.39858 4.20428 4.3458 4.34595 4.3458 4.51261V9.99595ZM7.1958 9.99595C7.1958 10.1515 7.25413 10.2848 7.3708 10.3959C7.48747 10.5071 7.62358 10.5626 7.77913 10.5626C7.9458 10.5626 8.08469 10.5071 8.1958 10.3959C8.30691 10.2848 8.36247 10.1515 8.36247 9.99595V4.51261C8.36247 4.34595 8.30413 4.20428 8.18747 4.08761C8.0708 3.97095 7.93469 3.91261 7.77913 3.91261C7.61247 3.91261 7.47358 3.97095 7.36247 4.08761C7.25136 4.20428 7.1958 4.34595 7.1958 4.51261V9.99595ZM2.61247 2.59595V11.9293V2.59595Z"
                fill="#EB1414"
              />
            </svg>
          </div>
          <div className="col text-truncate" onClick={handleDelete}>
            Delete table
          </div>
        </div>
      </Popover.Content>
    </Popover>
  );

  return (
    <div
      className={cx('list-group-item cursor-pointer list-group-item-action text-capitalize', { active })}
      onClick={onClick}
    >
      {text}
      <div className="float-right cursor-pointer">
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <svg width="2" height="12" viewBox="0 0 2 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.00001 11.65C0.755562 11.65 0.544451 11.5612 0.366673 11.3834C0.188895 11.2056 0.100006 10.9945 0.100006 10.75C0.100006 10.5056 0.188895 10.2917 0.366673 10.1084C0.544451 9.92504 0.755562 9.83337 1.00001 9.83337C1.25556 9.83337 1.46945 9.92504 1.64167 10.1084C1.8139 10.2917 1.90001 10.5056 1.90001 10.75C1.90001 10.9945 1.8139 11.2056 1.64167 11.3834C1.46945 11.5612 1.25556 11.65 1.00001 11.65ZM1.00001 6.90004C0.755562 6.90004 0.544451 6.81115 0.366673 6.63337C0.188895 6.4556 0.100006 6.24449 0.100006 6.00004C0.100006 5.74449 0.188895 5.5306 0.366673 5.35837C0.544451 5.18615 0.755562 5.10004 1.00001 5.10004C1.25556 5.10004 1.46945 5.18615 1.64167 5.35837C1.8139 5.5306 1.90001 5.74449 1.90001 6.00004C1.90001 6.24449 1.8139 6.4556 1.64167 6.63337C1.46945 6.81115 1.25556 6.90004 1.00001 6.90004ZM1.00001 2.16671C0.755562 2.16671 0.544451 2.07782 0.366673 1.90004C0.188895 1.72226 0.100006 1.5056 0.100006 1.25004C0.100006 0.994485 0.188895 0.777819 0.366673 0.600041C0.544451 0.422263 0.755562 0.333374 1.00001 0.333374C1.25556 0.333374 1.46945 0.422263 1.64167 0.600041C1.8139 0.777819 1.90001 0.994485 1.90001 1.25004C1.90001 1.5056 1.8139 1.72226 1.64167 1.90004C1.46945 2.07782 1.25556 2.16671 1.00001 2.16671Z"
              fill="#576574"
            />
          </svg>
        </OverlayTrigger>
      </div>
    </div>
  );
};

const List = ({ setSelectedTable }) => {
  const { tables, setTables } = useContext(TooljetDatabaseContext);
  const [activeTable, setActiveTable] = useState(0);

  useEffect(() => {
    tooljetDatabaseService.findAll().then(({ data = [] }) => {
      if (Array.isArray(data?.result) && data.result.length > 0) {
        setTables(data.result || []);
        setSelectedTable(data.result[0].table_name);
      }
    });
  }, []);

  return (
    <>
      <div className="subheader mb-2">All tables ({tables.length})</div>
      <div className="list-group list-group-transparent mb-3">
        {tables.map(({ table_name }, index) => (
          <ListItem
            key={index}
            active={activeTable === index}
            text={table_name}
            onClick={() => {
              setSelectedTable(table_name);
              setActiveTable(index);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default List;
