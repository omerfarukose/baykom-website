import React from 'react';
import './Footer.css';

function Footer(){
    return(
        <div id="footer" className="footer">
            <div className="footer-container">
                <div className="location-container">
                    <div className="adress">
                    <i class="fas fa-map-marker-alt"></i>İstoç C Plaza 1.Kat No:8 Mahmutbey, 34218 Bağcılar/İstanbul
                    </div>
                    <div className="map">
                        <a  href="https://www.google.com/maps/place/Baykom+Bilgisayar+Yazılım+Hizmetleri/@41.0518715,28.8167061,17z/data=!3m1!4b1!4m5!3m4!1s0x14caa53dc96026e3:0xb463c133db9a79a5!8m2!3d41.0518715!4d28.8188948" target="_blank"> <img className="map-img" src='./images/mapbaykom.png' /> </a> 
                    </div>
                </div>
                <div className="divider"></div>
                <div className="contact-container">
                    <div className="contact-items">
                        <div className="contact-header">İLETİŞİM </div>
                        <div className="contact-item"><i class="fas fa-phone-square-alt"></i>Telefon : (212) 659 00 86 </div>
                        <div className="contact-item"><i class="fas fa-phone-square-alt"></i>Telefon : (212) 659 00 87</div>
                        <div className="contact-item"><i class="fas fa-mobile"></i>Telefon : (546) 659 00 86 </div>
                        <div className="contact-item"><i class="fas fa-at"></i>E-mail : info@baykom.com.tr</div>
                    </div>
                </div>
            </div>
            <div className="copyright-container">
                Copyright © 2015 Baykom Yazılım
            </div>
        </div>
    )
}



export default Footer;




