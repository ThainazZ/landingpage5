import * as S from './styles';
import Button from '../../atoms/Button';

const Menu = () => {
    return (
    <S.MenuList>

    <S.ItemList>
        <a href="#">Home</a>
    </S.ItemList>
    <S.ItemList>
        <a href="#">About Us</a>
    </S.ItemList>
    <S.ItemList>
       <a href="#">How it Works</a> 
    </S.ItemList>
    <S.ItemList>
       <a href="#">Services</a> 
    </S.ItemList>
    <S.ItemList>
        <a href="#">Contact</a>
    </S.ItemList>

    </S.MenuList>

    );
};


export default Menu;