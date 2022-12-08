import { SectionAuthStyle } from '../styled-components';
import { useTheme } from 'styled-components';
const SectionAuth = ({ children }) => {
    const theme = useTheme();

    return (
        <SectionAuthStyle theme={theme.backgroundBody}>
            {children}
        </SectionAuthStyle>
    );
}

export default SectionAuth;
