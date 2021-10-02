import { Swiper ,SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import './components/SwiperBayboss.css'

SwiperCore.use([Navigation ,Pagination]);


export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides
      navigation
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="bayboss-text-container">
            <div className="bayboss-header">Bayboss Nedir ?</div>
            <div className="bayboss-text">
            Bayboss toptan ve perakende satış yapan şirketler için üretilmiştir. SQL tabanlı ticari programlarla entegre çalışır. Öğrenmesi ve kullanması çok kolay bir programdır. 
Sistem, mağazalarda ticari kayıtların hızlı ve hatasız olarak tutulmasını temin eder. Hesapların işlenmesi, satış, cari hesap ekstresi, stok ekstresi ve daha önce el ile yapılan bir çok işlemin otomatik olarak süratle yapılmasına imkan sağlar. Personel verimliliği ve zamandan tasarruf açısından da büyük yararlar sağlayan "Bayboss Programı", malların raflardaki dağılımını kolayca takip ederek ihtiyaçların zamanında sipariş verilmesine yardımcı olur. Fiyat ayarlamalarında ve satış elemanlarının fiyat ezberlemesinin önüne geçmesi yanında, yanlış işlem yapmak gibi büyük sıkıntılar doğuran durumları ortadan kaldırır. 
Sistem, bilgisayarlı el terminalleri vasıtasıyla mağazanızdaki satışların deponuzdaki stok ve cari hesap hareketlerinizin ana makinedeki muhasebe kayıtlarına hızlı ve hatasız eklenmesini sağlamaktadır. Böylece sipariş ve satış esnasında not tutma, bir başkasına bilgi verme vs gibi aracı faaliyetleri ortadan kaldırmaktadır. 
Bayboss programı online sistemle çalıştığından stok, cari gibi bilgilerinizin devamlı güncel kalması sağlanmaktadır. Ayrıca uzak mesafedeki diğer şube ve depolardan da online takip edilebilmektedir. Örneğin; Tahtakale`deki şubeden el terminali ile İstoç merkezdeki stoklar görülebilmekte, ayrıca her iki şubedeki yazıcılara yazı gönderilebilmektedir. 
Bayboss programıyla, işletmenizin, ofisinizin veya işinizin yapısına uygun yazılım çözümleri sunmaktayız. Çünkü, Bayboss programı standart hazırlanmış bir program olmayıp isteklere göre değişebilen esnekliğe sahiptir. Diğer bir deyişle yetkili elemanlarımız "tamamen sizin istekleriniz" doğrultusunda bir Bayboss projesi hazırlamakta ve bu proje tarafınızdan onaylandıktan sonra, size özel bir sistem oluşturulmaktadır. Bu süreç içinde fikirleriniz ve istekleriniz ön planda tutulmaktadır. Böylece proje ihtiyaçlarınız doğrultusunda tamamlanarak, otomasyonun ticari programınıza entegrasyonu gerçekleştirme işlemi başlatılır. Şirket elamanlarınıza sistemin kullanım eğitimi verilir. Kullanım herkesin anlayacağı şekilde basit ve kolaydır. 
Hazırladığımız çözümler tek veya çok kullanıcılı olarak da planlanabilmektedir. Ayrıca Bayboss programı, ticari programınızdaki kayıtlardan veri analizlerinin yapılması ve gerekli raporların hazırlanmasına da imkan sağlamaktadır.
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bayboss-text-container">
          <div className="bayboss-header">Özellikleri</div>
            <div className="bayboss-text">
            Bayboss, Baykom barkodlu otomatik satış sistemi, işletmenin stok ve cari sistemini kontrol altına alarak maddi zararları ve işgücü kayıplarını aza indirgemektedir. Sipariş girişi, terminaller vasıtasıyla, kalem kullanmadan ve not tutmadan, otomatik ve direkt gerçekleştirildiği için herhangi bir yanlış bilgi girişine müsaade edilmemektedir. Bu, bir yandan yanlış sevkıyat ve hatalı faturalamayı önlediği gibi, diğer yandan da personel ve işgücü tasarrufunu da beraberinde getirmektedir. Aynı zamanda satış işlemini de hızlandırmaktadır. 
Bunların dışında bilgisayarlı el terminalini kullanan satış sorumlusu el terminalinden müşterinin talep ettiği malın stok durumunu anında görebilmektedir. Bundan dolayı, eğer stokta yeterli mal yoksa veya azalmışsa anında farkına vararak müşteriyi uyarabilmekte veya başka bir seçeneğe yönlendirebilmektedir. 
Yine bu sistemde, başka bir görevli veya aracıya gereksinim duymaksızın, satış görevlisi el terminalinde bir tuşa basarak müşterinin o anki ekstresini görebilmekte, müşteri ile mutabakat sağlamaktadır. Eğer gerekirse, ekstreyi yazıcıdan çıkarabilmektedir. Bu da hızın yanında, personel ve iş gücü tasarrufunu beraberinde getirmektedir. Böylece, bir satış görevlisi hem satış için sipariş alabilmekte ve hem de müşterinin muhasebe kayıtlarını gözden geçirebilmektedir. Bu da birkaç kişinin yapması gereken işi bir kişiye indirgemektedir. 
Aynı durum, satışa hazır stoklarda da söz konusudur. Bu sistemin devreye girmesiyle stok hareketleri anında el terminalinden görülmektedir. Bu diğer bir deyişle, satışa hazır stokun, hareketleri, alım ve satış rakamları, satıştaki malın en son hangi fiyattan satıldığı, ortalama satış fiyatı, tanımlı satış fiyatları anında görülmektedir. Bu da yanlış fiyatla ürün satılmasını engellemektedir. Eğer istenirse, sistemdeki ayarlarla, bir ürünün alış fiyatından daha aşağı fiyata satılması da önlenebilmektedir. 
Bütün bunlar kablosuz küçük el terminaliyle gerçekleştiği için gerek satış elemanı ve gerekse depo sorumlusu çok rahat çalışmaktadır. Kalem ve not defteri kullanmadığı için de işinden keyif almaktadır. Öte yandan müşteri karşısında modern cihazlarla çalışan şirketin prestiji de yükselmektedir. 
Program basit bir menüyle karmaşık işlemleri yapabildiğinden her tahsil seviyesindeki görevli el terminallerinin kullanımına çok kısa sürede öğrenebilmektedir. 
Ayrıca proje kapsamında "özel raporlama" sistemi eklenerek mevcut ticari programda alınamayan raporlar oluşturularak stratejik kararların alınmasına yardımcı olması sağlanabilir. Mesela satılan ürünler ile ilgili maliyet analiz raporu ya da kar-zarar tablosu v.b. istenilen formatta alınabilir. 
Projede bahse konu olan otomasyon sistemi yazılımının altyapısı gelişmeye açık bir şekilde tasarlanmaktadır. Diğer bir deyişle, işletmenin ihtiyaçları arttıkça, programı modüller vasıtasıyla geliştirmek mümkün olmaktadır.
              </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bayboss-text-container">
          <div className="bayboss-header">Avantajları</div>
              <div className="bayboss-text">
              Bayboss, Baykom Barkodlu Otomatik Satış Sistemi gelişmiş bir muhasebe programıyla entegre çalışan bir programdır. En büyük avantajı online sistem ile çalışmasıdır. 
Çünkü, online sistem, offline sistemlere göre çok üstün özelliklere sahiptir. Çünkü: 
Online sistemde, el terminali, ana bilgisayar ile direkt çalışır. Böylece, el terminalinden girilen bilgi anında ana bilgisayara kaydolur. Bu yüzden, el terminalindeki akü bitmesi ve diğer aksaklıklar sebebiyle, müşterinin sipariş bilgilerinin kaybolma ihtimali yoktur. Offline sistemde ise el terminali, ana bilgisayar ile direkt çalışmaz. Bu sebeple, el terminalinden girilen bilgileri ayrıca ana bilgisayara yüklemek gereklidir. Bundan dolayı, el terminalindeki herhangi bir arıza, henüz ana bilgisayara yüklenmemiş bilgilerin kaybolmasına yol açabilir. 
Online sistemde, ana bilgisayarda kayıtlı fiyat ve stok bilgilerindeki ani değişiklikler anında el terminaline yansır. Böylece, sipariş bilgilerinde hata oranı her zaman sıfırdır. Offline sistemde ise, zamanında yapılmayan güncellemeler sebebiyle, ani değişiklikler el terminalinde gözükmeyebilir. Bu da, hatalı bilgilerle, sipariş kabulüne yol açabilir. 
Online sistemde, el terminalinin hafızası azami verimle çalışır. Çünkü, ana bilgisayar ile direkt bağlantı halinde çalıştığı için, hafızasına bilgi yüklemek zorunlu değildir. Offline sistemde ise, el terminali hafızası verimli çalışmaz. Çünkü, el terminalinin hafızasına, ana bilgisayardaki cari kart, stok ve fiyat gibi sipariş kabulü için gerekli bilgileri önceden kaydetmek zorunludur. Bu da el terminalinin sınırlı hafızasının büyük bir bölümünü işgal eder. Hatta, eğer, firmanın müşteri sayısı çok yüksekse ve ürün sayısı çok çeşitliyse, el terminalinin hafızasının dolmasına, dolayısıyla sistemin felç olmasına yol açabilir. 
Online sistemde, sınırsız sayıda el terminali ile çalışılabilir. Offline sistemde, belli sayıda el terminali ile çalışılabilir. 
Online sistemde, birden fazla el terminali ile her zaman sorunsuz çalışılabilir. Offline sistemde, birden fazla el terminali her zaman sorunsuz çalışılamaz. Özellikle, sınırlı stoklarda, bilgi güncellemeleri yapılmadığı takdirde, bir başka el terminalinin eksilttiği stoklardan, diğer el terminalinin haberi olmamasına, bundan dolayı da, olmayan stoklar için müşteriden sipariş kabul edilmesine yol açabilir.
                </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};



