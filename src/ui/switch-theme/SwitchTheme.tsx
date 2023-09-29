import * as React from 'react';
import { useStore } from 'effector-react';
import styled from 'styled-components';

import { $currentTheme, ThemedStyledProps, toggleTheme, themeVar } from '@/ui/theming';
import SunIcon from '@/ui/assets/sun.svg'
import MoonIcon from '@/ui/assets/moon.svg'
import { Switch } from '@mui/material'


const ToggleTheme = styled(Switch)`
`
const ToggleWrapper = styled.div<ThemedStyledProps>`
 background: ${themeVar('secondary700')};
 box-shadow:${themeVar('boxShadow')};
    width:20px;
    height: 20px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
`
export default function CustomizedSwitches() {
    const currentTheme = useStore($currentTheme);
    return (
        <div>
            <ToggleTheme
                checked={currentTheme.name === 'dark'}
                checkedIcon={<ToggleWrapper><MoonIcon /></ToggleWrapper>}
                icon={<ToggleWrapper><SunIcon /></ToggleWrapper>}
                onClick={() => toggleTheme()}
                color={'default'}
            />
        </div>
    );
}
