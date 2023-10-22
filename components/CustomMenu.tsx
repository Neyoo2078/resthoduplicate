import React from 'react';
import { useState, useRef, useEffect } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion } from 'framer-motion';

interface props {
  items: any;
}
const CustomMenu = ({ items }: props) => {
  const [Menuitems, setMenuitems] = useState(false);
  const [Height, setHeight] = useState(0);
  const [defaultHeight, setdefaultHeight] = useState(20);
  const box = useRef(null);
  const outsideBox = useRef(null);

  useEffect(() => {
    if (box.current) {
      setHeight(box.current?.clientHeight + defaultHeight);
    }
  }, [Menuitems]);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (e.target.id !== `${items.name}`) {
        if (outsideBox.current && !outsideBox.current.contains(e.target)) {
          setMenuitems(false);
        }
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={outsideBox}
      id={`${items.name}`}
      className="text-white relative flex-col flex gap-3 w-[100px]"
    >
      <div
        onClick={() => {
          setMenuitems(!Menuitems);
        }}
        className="flex gap-2 w-full"
      >
        <button className="w-full"> {items.name}</button>
        {items.subLInks.length > 0 && (
          <div>
            <KeyboardArrowDownIcon />
          </div>
        )}
      </div>
      <div>
        {Menuitems && items.subLInks.length > 0 && (
          <div
            ref={box}
            style={{ position: 'absolute', bottom: -Height }}
            className={`bg-white w-[150px] cursor-pointer p-3  rounded-lg flex flex-col gap-2  z-50 `}
          >
            {items.subLInks.map((items: any, i: number) => (
              <div
                key={i}
                className="text-black cursor-pointer"
                onClick={() => {
                  setMenuitems(false);
                }}
              >
                {items.name}
              </div>
            ))}
          </div>
        )}{' '}
      </div>
    </div>
  );
};

export default CustomMenu;
