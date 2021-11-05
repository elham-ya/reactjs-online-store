import React from 'react';
import WhiteLogo from '../../assets/logo-white.png';
import Phone from '../../assets/phone-volume-solid.png';
import Twitter from '../../assets/Twitter.png';
import FaceBook from '../../assets/Facebook.png';
import Youtube from '../../assets/Youtube.png';
import Instagram from '../../assets/Intagram.png';
import Envelope from '../../assets/envelope-regular.png';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="upper-footer">
                    <div className="right-footer-section">
                        <div>مرکز پشتیبانی بازاریابان </div>
                        <div className="phone">
                            021 88 88 88 88
                            <img src={Phone} alt="phone" />
                        </div>
                        <div className="mail">
                            <a href="mailto:sellersupport@liateam.com">sellersupport@liateam.com</a>
                            <img src={Envelope} alt="email" />
                        </div>
                    </div>
                    <div className="left-footer-section">
                        <div>Good Time Good News</div>
                        <div>Lia Virtual Office</div>
                        <img src={WhiteLogo} alt="" />
                    </div>
                </div>
                <div className="lower-footer">
                    <div className="right-footer-section">
                        <span>هفت روز هفته ، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم</span>
                        <ul>
                            <li><a href="/"><img src={Twitter} alt="Twitter" /></a></li>
                            <li><a href="/"><img src={Youtube} alt="Youtube" /></a></li>
                            <li><a href="/"><img src={Instagram} alt="Instagram" /></a></li>
                            <li><a href="/"><img src={FaceBook} alt="FaceBook" /></a></li>
                        </ul>
                    </div>
                    <div className="left-footer-section">
                        <div>© تمام حقوق این وب سایت متعلق به شرکت آرمان تدبیر اطلس 1398-۱۳۹7 می باشد</div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;