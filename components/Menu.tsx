import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion } from 'framer-motion';

export default function BasicMenu({ items }: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className="text-white"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={items?.subLInks?.length > 0 && <KeyboardArrowDownIcon />}
      >
        {items.name}
      </Button>
      <motion.div
        initial={{ y: -800, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 100 }}
      >
        {' '}
        {items?.subLInks?.length > 0 && (
          <Menu
            anchorEl={anchorEl}
            open={open}
            color="#d53838"
            style={{ color: '#d53838' }}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            className={`mt-[25px] text-[#d53838] ${
              anchorEl ? 'animate-slideup' : ' animate-slidedown'
            }`}
          >
            {items?.subLInks?.length > 0 && (
              <motion.div>
                {' '}
                {items.subLInks.map((items: any, i: number) => (
                  <MenuItem onClick={handleClose} key={i}>
                    {items.name}
                  </MenuItem>
                ))}
              </motion.div>
            )}
          </Menu>
        )}{' '}
      </motion.div>
    </div>
  );
}
