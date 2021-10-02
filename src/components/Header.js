import React from 'react';
import './Header.css'

function Header(){
    return(
        <div className="header">
            <div className="header-container">
                <div className="header-item">
                    <i class="fas fa-barcode"></i>
                    <div className="item-text">
                        Bayboss, Baykom barkodlu otomatik satış sistemi, işletmenin stok ve cari sistemini kontrol altına alarak maddi zararları ve işgücü kayıplarını aza indirgemektedir.
                    </div>
                    
                </div>
                <div className="header-item right">
                    <i class="fas fa-check-circle big"></i>
                    <div className="item-text">
                        Baykom Yazılım, kurumların ihtiyaç duydukları yazılımların hazırlanması konusunda da hizmet vermektedir. Baykom Yazılım, nitelikli yazılımcıları ve tecrübeli danışmanları ile firmanız için en iyi yazılımları üretmektedir.
                    </div>
                </div>
                <div className="header-item">
                    <i class="fas fa-laptop-code"></i>
                    <div className="item-text">
                        Size özel web tasarımlarımızla, ihtiyaçlarınızı karşılayacak en iyi hizmeti sunmaktayız. Kontrol Paneli bulunan siteler yapılmaktadır. Tüm tasarımlarımızda sınırsız destek ve güncelleme hizmetleride vermekteyiz.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;