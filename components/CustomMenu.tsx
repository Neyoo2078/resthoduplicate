import React from 'react';
import { useState, useRef, useEffect } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

interface props {
  items: any;
}
const CustomMenu = ({ items }: props) => {
  const [Menuitems, setMenuitems] = useState(false);
  const [Height, setHeight] = useState(0);
  const [defaultHeight, setdefaultHeight] = useState(20);
  const box: React.RefObject<HTMLDivElement> | null = useRef(null);
  const outsideBox: React.RefObject<HTMLDivElement> | null = useRef(null);

  useEffect(() => {
    if (box?.current) {
      setHeight(box?.current?.clientHeight + defaultHeight);
    }
  }, [Menuitems]);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (e.target.id !== `${items.name}`) {
        if (outsideBox.current && !outsideBox.current?.contains(e.target)) {
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
    <motion.div
      ref={outsideBox}
      id={`${items.name}`}
      className="text-white relative flex-col flex gap-3 w-[100px]"
      onMouseEnter={() => {
        setMenuitems(true);
      }}
      onMouseLeave={() => {
        setMenuitems(false);
      }}
    >
      <div className="flex gap-2 w-full">
        <button className="w-full"> {items.name}</button>
        {items.subLInks.length > 0 && (
          <div>
            <KeyboardArrowDownIcon />
          </div>
        )}
      </div>
      <AnimatePresence>
        {Menuitems && items.subLInks.length > 0 && (
          <motion.div
            exit={{ opacity: 1, y: 7, transition: { duration: 0.7 } }}
            ref={box}
            style={{ position: 'absolute', bottom: -Height }}
            onMouseEnter={() => {
              setMenuitems(true);
            }}
            onMouseLeave={() => {
              setMenuitems(false);
            }}
            className={`bg-white w-[150px] cursor-pointer p-3 animate-slideup  rounded-lg flex flex-col gap-2  z-50 `}
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
          </motion.div>
        )}{' '}
      </AnimatePresence>
    </motion.div>
  );
};

export default CustomMenu;
