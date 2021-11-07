import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import IconImage from '../../assets/logo.png';
import Avatar from '../../assets/Avatar.png';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>
            <div className='header'>
                <header>
                    <div className="right-header">
                        <Link to="/"><img src={IconImage} alt="logo" /></Link>
                        <ul>
                            <li><Link to="/">خانه</Link></li>
                            <li><Link to="/store">فروشگاه</Link></li>
                            <li><Link to="/blog">وبلاگ</Link></li>
                            <li><Link to="/aboutus">درباره ما</Link></li>
                            <li><Link to="contactus">تماس با ما</Link></li>
                        </ul>
                    </div>
                    <div className="left-header">
                        <span>رضا پورجباری عزیز</span>
                        <img src={Avatar} alt="avatar" />
                    </div>
                </header>
                <div className="menu">
                    <ul>
                        <li><Link to="/skincare">مراقبت پوست</Link></li>
                        <li><Link to="haircare">مراقبت مو</Link></li>
                        <li><Link to="bodycare">مراقبت بدن</Link></li>
                        <li><Link to="makeup">آرایشی</Link></li>
                        <li><Link to="bestseller">پرفروش ترین</Link></li>
                        <li><Link to="newproducts">جدیدترین</Link></li>
                    </ul>
                    <HeaderCartButton />
                </div>
            </div>
        </Fragment>
    )
}
export default Header;