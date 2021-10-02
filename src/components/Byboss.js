import React from 'react';
import './Byboss.css'

function Bayboss(){
    return(
        <div id="bayboss" className="bayboss">
            <div className="container-bir">
                <div className="name">
                    BAYBOSS
                </div>
                <div className="text">
                <div>Bayboss toptan ve perakende satış yapan şirketler için üretilmiştir. </div>
                <div>SQL tabanlı ticari programlarla entegre çalışır. Öğrenmesi ve kullanması çok kolay bir programdır.</div>     
                </div>
                <div className="list">
                    <ul>
                        <li><i class="fas fa-check"></i>Online - Offline satış yapabilir</li>
                        <li><i class="fas fa-check"></i>Ürün ekleyebilir</li>
                        <li><i class="fas fa-check"></i>Sipariş geçebilir</li>
                        <li><i class="fas fa-check"></i>Müşteri bilgileri</li>
                        <li><i class="fas fa-check"></i>Ürün bilgileri</li>
                        <li><i class="fas fa-check"></i>Stok bilgileri</li>
                        <li><i class="fas fa-check"></i>Fiyat bilgilerine ulaşabilir</li>
                        <li><i class="fas fa-check"></i>İrsaliye ve fatura kesebilirsiniz</li>
                    </ul>
                </div>
            </div>
            <div className="container-iki">
            <img className="bayboss-logo" src='./images/bayboss.jpg' />
            </div>
        </div>
    )
}

export default Bayboss;