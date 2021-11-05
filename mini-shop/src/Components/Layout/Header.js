import React, { Fragment } from 'react';
import IconImage from '../../assets/logo.png';
import Avatar from '../../assets/Avatar.png';


const Header = () => {
    return (
        <Fragment>
            <div className='header'>
                <header>
                    <div className="right-header">
                        <img src={IconImage} alt="logo" />
                        <ul>
                            <li><a href="#">خانه</a></li>
                            <li><a href="#">فروشگاه</a></li>
                            <li><a href="#">وبلاگ</a></li>
                            <li><a href="#">درباره ما</a></li>
                            <li><a href="#">تماس با ما</a></li>
                        </ul>
                    </div>
                    <div className="left-header">
                        <span>رضا پورجباری عزیز</span>
                        <img src={Avatar} alt="avatar" />
                    </div>
                </header>
                <div className="menu">
                    <ul>
                        <li><a href="#">مراقبت پوست</a></li>
                        <li><a href="#">مراقبت مو</a></li>
                        <li><a href="#">مراقبت بدن</a></li>
                        <li><a href="#">آرایشی</a></li>
                        <li><a href="#">پرفروش ترین</a></li>
                        <li><a href="#">جدیدترین</a></li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}
export default Header;