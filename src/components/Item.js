import React from 'react'
import Button from './Button'
import './Item.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const Item = ({first,title,desc,backgroundimg,leftBtnTxt,leftBtnLink,rightBtnText,rightBtnLink, twoButtons,}) => {
    return (
        <div className="item" style={{backgroundImage:`url(${backgroundimg})`}}>
            <div class="item_container">
                <div class="item_text">
                    <p>{title}</p>
                    <div class="item_textDec">
                        <p>{desc}</p>
                    </div>
                </div>
                <div class="item_lowerThird">
                    <div class="item_buttons">
                        <Button imp="primary" text={leftBtnTxt}link={leftBtnLink}/>
                        {twoButtons &&(<Button imp="secondary" text={rightBtnText}link={rightBtnLink}/>)}
                    </div>
                    {first &&(
                        <div class="item_expand">
                                <ExpandMoreIcon/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Item
