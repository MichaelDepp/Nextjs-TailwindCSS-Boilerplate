import { useState } from 'react';
import { useTheme } from 'next-themes';
import Hamburger from 'hamburger-react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

const HeaderBar = () => {
    const [isOpen, setOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    const onSwitchTheme = (mode) => setTheme(mode);

    return (
        <div className="flex items-center justify-between flex-wrap bg-theme-primary dark:bg-black-100">
            <Hamburger
                color={theme === 'light' ? 'black' : 'white'}
                size={18}
                toggled={isOpen}
                toggle={setOpen}
            />
            <div className="px-2">
                {theme === 'light' ? (
                    <RiMoonFill size={18} onClick={() => onSwitchTheme('dark')} />
                ) : (
                    <RiSunFill size={18} onClick={() => onSwitchTheme('light')} />
                )}
            </div>
        </div>
    );
};

export default HeaderBar;
