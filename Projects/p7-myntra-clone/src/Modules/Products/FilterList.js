import "../App.css";
import Categories from './Categories';
import Brand from './Brand';
import Price from './Price';
import Color from './Color';

function FilterList(){
    return(
        <div className='FilterList'>
            <Categories></Categories>
            <Brand></Brand>
            <Price></Price>
            <Color></Color>
        </div>
    );    
}

export default FilterList;