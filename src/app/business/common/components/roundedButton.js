import styled from '@emotion/styled';
import {blueGrey, ice, slate, iceBlue} from '../../../../../assets/css/variables/colors';
import {spacingNormal} from '../../../../../assets/css/variables/spacing';

const Button = styled.button`
    color: ${slate};
    height: 30px;
    line-height: 28px;
    border-radius: 15px;
    border: 1px solid ${ice};
    padding: 0 ${spacingNormal};
    background: ${iceBlue};
    cursor: pointer;
    
    &:not(:disabled):hover {
        background-color: ${ice};
        transition: background-color 200ms ease-out;
    }
    
    &:disabled {
        color: ${blueGrey}
    }
`;

export default Button;
