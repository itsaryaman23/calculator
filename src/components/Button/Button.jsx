import React,{useContext} from 'react';
import './Button.css';


const Button = (props) =>{
    const handleClick = (e) =>
    {
        let c = e.target.innerText;

        if(c=='C')
        props.setStr('');
        else if(c=='=')
        {
            if(props.str)
            props.setRes(eval(props.str));
            else
            props.setRes("Error");

        }
        else
        {
            props.setRes(0);
            props.setStr(a=>a+c);
        }
    }

    return (
        <button className="btn" onClick={handleClick}>{props.children}</button>
    );
}
export default Button;