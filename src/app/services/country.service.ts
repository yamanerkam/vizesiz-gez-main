import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Country {
  id: number;
  countryName: string;
  visaType: string;
  maxStay: string;
  notes: string;
  capital: {
    name: string;
    symbol: string;
  };
  touristicPlaces: Array<{
    placeName: string;
    description: string;
  }>;
  importantNumbers: {
    police: string;
    ambulance: string;
    fire: string;
    generalEmergency: string;
  };
  thingsToKnow: {
    warnings: string;
    transportation: string;
    internetProviders: string[];
    turkishProvidersUsage: string;
  };
  famousDishes: string[];
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private countriesData: Country[] = [
    {
      "id": 1,
      "countryName": "Arnavutluk",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "90 gün",
      "notes": "180 günlük süre içinde 90 gün kalış.",
      "capital": {
        "name": "Tiran",
        "symbol": "Tiran'ın şehir amblemi (çoğunlukla Kartal sembolü ve Skanderbeg Heykeli)"
      },
      "touristicPlaces": [
        {
          "placeName": "Skanderbeg Meydanı",
          "description": "Tiran'ın kalbinde tarihi ve kültürel buluşma noktası."
        },
        {
          "placeName": "Et'hem Bey Camii",
          "description": "Osmanlı döneminden kalma ünlü cami ve Tiran'ın simgelerinden biri."
        },
        {
          "placeName": "Bunk'Art Müzesi",
          "description": "Eski sığınaktan dönüştürülmüş, Arnavutluk'un yakın tarihine ışık tutan bir müze."
        },
        {
          "placeName": "Kruja Kalesi",
          "description": "Skanderbeg'in kalesi olarak bilinen, dağ manzaralı tarihi bir yapı."
        }
      ],
      "importantNumbers": {
        "police": "129",
        "ambulance": "127",
        "fire": "128",
        "generalEmergency": "112"
      },
      "thingsToKnow": {
        "warnings": "Şehir merkezlerinde yankesicilik olabilir, değerli eşyaları güvende tutun.",
        "transportation": "Otobüs ağı yaygın, taksiler genellikle uygun fiyatlı. Araç kiralamak da mümkün.",
        "internetProviders": [
          "Vodafone Albania",
          "ONE Telecommunications",
          "Albtelecom"
        ],
        "turkishProvidersUsage": "Türk operatörlerin (Turkcell, Vodafone, Türk Telekom) uluslararası dolaşım paketleri Arnavutluk'ta geçerlidir."
      },
      "famousDishes": [
        "Tavë Kosi (yoğurtlu kuzu güveç)",
        "Byrek (ince yufkalı börek)",
        "Fërgesë (biberli ve peynirli meze)",
        "Qifqi (pirinç köftesi)"
      ]
    },
    {
      "id": 2,
      "countryName": "Azerbaycan",
      "visaType": "e-Vize veya Vizesiz",
      "maxStay": "30 gün",
      "notes": "Türk vatandaşları ASAN e-Vize başvurusu yapabilir veya belirli giriş noktalarında vize alabilir.",
      "capital": {
        "name": "Bakü",
        "symbol": "Bakü'nün alev kuleleri simgesi ve tarihi sur amblemi"
      },
      "touristicPlaces": [
        {
          "placeName": "İçerişehir (Eski Şehir)",
          "description": "UNESCO Dünya Mirası listesinde yer alan surlarla çevrili tarihi merkez."
        },
        {
          "placeName": "Alev Kuleleri",
          "description": "Bakü silüetinin modern ve ikonik yapıları."
        },
        {
          "placeName": "Haydar Aliyev Merkezi",
          "description": "Zaha Hadid tasarımı, kültürel etkinliklerin düzenlendiği modern mimari eser."
        },
        {
          "placeName": "Gobustan Milli Parkı",
          "description": "Tarih öncesi kaya resimleri ve çamur volkanlarıyla ünlü doğa ve kültür parkı."
        }
      ],
      "importantNumbers": {
        "police": "102",
        "ambulance": "103",
        "fire": "101",
        "generalEmergency": "112"
      },
      "thingsToKnow": {
        "warnings": "Pasaportunuzun ve ASAN vizenizin kopyalarını taşıyın. Trafik yoğun olabilir.",
        "transportation": "Bakü'de metro, otobüs ve taksiler mevcuttur. Kartlı sistem (BakıKart) yaygın.",
        "internetProviders": [
          "Azercell",
          "Bakcell",
          "Nar"
        ],
        "turkishProvidersUsage": "Turkcell, Vodafone ve Türk Telekom'un roaming paketleri geçerli. Yerel SIM almak da kolay."
      },
      "famousDishes": [
        "Plov (pilav)",
        "Kebap (çeşitli et kebapları)",
        "Düşbere (küçük mantı çorbası)",
        "Bakü Baklavası"
      ]
    },
    {
      "id": 3,
      "countryName": "Bahamalar",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "90 gün",
      "notes": "Dönüş bileti ve yeterli maddi kaynak kanıtı gerekebilir.",
      "capital": {
        "name": "Nassau",
        "symbol": "Tropik ada simgesi ve Bayrak rengi ile ana liman sembolü"
      },
      "touristicPlaces": [
        {
          "placeName": "Cable Beach",
          "description": "Beyaz kumlu sahil ve lüks otellerin bulunduğu popüler turistik bölge."
        },
        {
          "placeName": "Paradise Island",
          "description": "Atlantis Resort ve eğlence merkezleriyle ünlü ada."
        },
        {
          "placeName": "Queen's Staircase",
          "description": "Tarihi kayaya oyulmuş merdivenler ve Fort Fincastle yakınları."
        },
        {
          "placeName": "Blue Lagoon Island",
          "description": "Deniz aslanları ve yunuslarla etkileşim imkanı sunan aile dostu ada."
        }
      ],
      "importantNumbers": {
        "police": "919",
        "ambulance": "911",
        "fire": "919",
        "generalEmergency": "911"
      },
      "thingsToKnow": {
        "warnings": "Turistik bölgelerde dolandırıcılıklara karşı dikkatli olun.",
        "transportation": "Taksiler, minibüsler (jitney) ve tekne transferleri sık kullanılır.",
        "internetProviders": [
          "BTC (Bahamas Telecommunications Company)",
          "ALIV"
        ],
        "turkishProvidersUsage": "Roaming oldukça pahalı olabilir. Gideceğiniz operatörden uluslararası paket alın veya yerel SIM kart edinin."
      },
      "famousDishes": [
        "Conch Salad (deniz kabuklusu salatası)",
        "Cracked Conch (kızarmış deniz kabuklusu)",
        "Bahamian Stew Fish (balık yahni)",
        "Johnny Cake (mısır ekmeği)"
      ]
    },
    {
      "id": 4,
      "countryName": "Barbados",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "90 gün",
      "notes": "Göçmenlik memurları konaklama kanıtı ve yeterli maddi kaynak talep edebilir.",
      "capital": {
        "name": "Bridgetown",
        "symbol": "Ulusal çapa sembolü ve mavi-sarı bayrak renkleri"
      },
      "touristicPlaces": [
        {
          "placeName": "Carlisle Bay",
          "description": "Şnorkelle dalış ve su sporları için ideal, berrak deniz suyu."
        },
        {
          "placeName": "Harrison's Cave",
          "description": "Yeraltı kireçtaşı mağaraları ve muhteşem sarkıtlar, dikitler."
        },
        {
          "placeName": "Oistins Fish Fry",
          "description": "Cuma akşamları düzenlenen, yerel lezzetleri keşfetme fırsatı sunan sahil etkinliği."
        },
        {
          "placeName": "St. Nicholas Abbey",
          "description": "17. yüzyıldan kalma şato ve rom damıtımevi."
        }
      ],
      "importantNumbers": {
        "police": "211",
        "ambulance": "511",
        "fire": "311",
        "generalEmergency": "911"
      },
      "thingsToKnow": {
        "warnings": "Tropik iklim nedeniyle güneş kremi ve bol su tüketimi önemli.",
        "transportation": "Otobüsler ve minibüsler (ZR vans) ucuz. Taksiler pazarlığa açık.",
        "internetProviders": [
          "Flow",
          "Digicel"
        ],
        "turkishProvidersUsage": "Barbados'ta roaming ücretleri yüksek olabilir, yerel SIM önerilir veya global data paketi alın."
      },
      "famousDishes": [
        "Flying Fish and Cou-Cou",
        "Macaroni Pie",
        "Pudding and Souse",
        "Cutters (sandviç çeşitleri)"
      ]
    },
    {
      "id": 5,
      "countryName": "Belarus",
      "visaType": "Vize Gerekmiyor (şartlı)",
      "maxStay": "30 gün",
      "notes": "Vizesiz giriş genellikle sadece Minsk Ulusal Havalimanı üzerinden. Resmi kaynaklara danışın.",
      "capital": {
        "name": "Minsk",
        "symbol": "Minsk şehir armasında kalkan ve melek figürü"
      },
      "touristicPlaces": [
        {
          "placeName": "Minsk Eski Şehir (Troitskoye Predmestye)",
          "description": "Tarihi yapıların ve restoranların bulunduğu pitoresk bir bölge."
        },
        {
          "placeName": "Büyük Vatanseverlik Savaşı Müzesi",
          "description": "II. Dünya Savaşı tarihini anlatan önemli bir müze."
        },
        {
          "placeName": "Zafer Meydanı",
          "description": "Şehrin ikonik noktası, anıt ve geniş bulvarlarla çevrili."
        },
        {
          "placeName": "Nesvizh Kalesi",
          "description": "UNESCO Dünya Mirası olan tarihi saray ve park kompleksi (Minsk'e yaklaşık 120 km)."
        }
      ],
      "importantNumbers": {
        "police": "102",
        "ambulance": "103",
        "fire": "101",
        "generalEmergency": "112"
      },
      "thingsToKnow": {
        "warnings": "Seyahat sigortası zorunlu olabilir. Yanınızda nakit ruble bulundurun.",
        "transportation": "Minsk'te metro, otobüs ve troleybüs yaygın. Taksi de uygun fiyatlı.",
        "internetProviders": [
          "A1 (eski adıyla Velcom)",
          "MTS",
          "life:)",
          "Beltelecom (Wi-Fi)"
        ],
        "turkishProvidersUsage": "Roaming genellikle aktif, ancak paket almanız önerilir. Yerel SIM daha ekonomik olabilir."
      },
      "famousDishes": [
        "Draniki (patatesli krep)",
        "Machanka (et sosu ile servis edilen krep)",
        "Kolduny (patates köftesi içinde et)",
        "Kvass (ekmek bazlı fermente içecek)"
      ]
    },
    {
      "id": 6,
      "countryName": "Bosna Hersek",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "90 gün",
      "notes": "180 günlük süre içinde 90 gün kalış.",
      "capital": {
        "name": "Saraybosna",
        "symbol": "Saraybosna'nın tarihi köprü ve Osmanlı mimarisi sembolü"
      },
      "touristicPlaces": [
        {
          "placeName": "Başçarşı",
          "description": "Osmanlı dönemi çarşısı, el sanatları ve geleneksel yemekleriyle ünlü."
        },
        {
          "placeName": "Mostar Köprüsü",
          "description": "UNESCO listesindeki tarihi köprü (Mostar şehrinde)."
        },
        {
          "placeName": "Vrelo Bosne",
          "description": "Bosna Nehri'nin kaynağı çevresinde yeşil doğa parkı."
        },
        {
          "placeName": "Latin Köprüsü",
          "description": "I. Dünya Savaşı'nın başlamasına neden olan suikastın gerçekleştiği yerin yakınında tarihi köprü."
        }
      ],
      "importantNumbers": {
        "police": "122",
        "ambulance": "124",
        "fire": "123",
        "generalEmergency": "112"
      },
      "thingsToKnow": {
        "warnings": "Tarihi savaş kalıntıları ve mayınlı bölgeler hakkında bilgilere dikkat edin.",
        "transportation": "Şehirlerarası otobüs yaygın, tren hattı kısıtlı. Saraybosna içinde tramvay mevcut.",
        "internetProviders": [
          "BH Telecom",
          "m:tel",
          "Eronet"
        ],
        "turkishProvidersUsage": "Roaming genellikle kullanılabilir. Kısa süreli kalışlarda uygun paketlere bakın ya da yerel SIM alabilirsiniz."
      },
      "famousDishes": [
        "Ćevapi (Köfte benzeri ızgara et)",
        "Burek (etli veya peynirli börek)",
        "Begova Čorba (tavuklu çorba)",
        "Dolma çeşitleri"
      ]
    },
    {
      "id": 7,
      "countryName": "Brezilya",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "90 gün",
      "notes": "Bir kez 90 gün daha uzatılabilir (yılda toplam 180 gün).",
      "capital": {
        "name": "Brasília",
        "symbol": "Modern mimarisiyle ünlü Palácio do Planalto ve Ulusal Kongre Binası sembolleri"
      },
      "touristicPlaces": [
        {
          "placeName": "Rio de Janeiro – Copacabana",
          "description": "Dünyaca ünlü plaj ve şehir manzarası."
        },
        {
          "placeName": "Iguazu Şelaleleri",
          "description": "Brezilya-Arjantin sınırında yer alan görkemli şelale dizisi."
        },
        {
          "placeName": "Amazon Yağmur Ormanları",
          "description": "Doğal çeşitlilik ve ekoturizm için önemli bölge."
        },
        {
          "placeName": "Salvador – Pelourinho",
          "description": "Koloniyel mimari, capoeira ve Afrika-Brezilya kültürü."
        }
      ],
      "importantNumbers": {
        "police": "190",
        "ambulance": "192",
        "fire": "193",
        "generalEmergency": "190"
      },
      "thingsToKnow": {
        "warnings": "Büyük şehirlerde yankesiciliğe ve soygunlara dikkat edin.",
        "transportation": "Uçakla şehirlerarası ulaşım yaygın. Büyük şehirlerde metro ve otobüs kullanımı mümkün.",
        "internetProviders": [
          "Vivo",
          "Claro",
          "TIM",
          "Oi"
        ],
        "turkishProvidersUsage": "Roaming paketleri pahalı olabilir, Brezilya'da yerel SIM almak daha ekonomiktir."
      },
      "famousDishes": [
        "Feijoada (fasulyeli et yemeği)",
        "Pão de Queijo (peynirli ekmek)",
        "Brigadeiro (çikolatalı tatlı)",
        "Moqueca (balık veya deniz ürünleri güveci)"
      ]
    },
    {
      "id": 8,
      "countryName": "Şili",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "90 gün",
      "notes": "6 aylık pasaport geçerliliği önerilir.",
      "capital": {
        "name": "Santiago",
        "symbol": "Şehir armasında dağlar ve palmiye ağaçları"
      },
      "touristicPlaces": [
        {
          "placeName": "San Cristóbal Tepesi",
          "description": "Santiago'nun panoramik manzarasını sunan park ve heykel alanı."
        },
        {
          "placeName": "Valparaíso",
          "description": "Renkli evleri ve sanat dolu sokaklarıyla ünlü liman şehri."
        },
        {
          "placeName": "Atacama Çölü",
          "description": "Dünyanın en kurak çölü, uzay gözlemevleri ve tuz gölleriyle ünlü."
        },
        {
          "placeName": "Torres del Paine Ulusal Parkı",
          "description": "Muhteşem dağ manzaraları, buzullar ve göller."
        }
      ],
      "importantNumbers": {
        "police": "133",
        "ambulance": "131",
        "fire": "132",
        "generalEmergency": "133"
      },
      "thingsToKnow": {
        "warnings": "Deprem bölgesinde yer aldığı için acil durum prosedürlerini öğrenmek faydalı.",
        "transportation": "Santiago'da metro ve otobüsler gelişmiş. Şehirlerarası yolculuklar otobüsle veya uçakla yapılabilir.",
        "internetProviders": [
          "Entel",
          "Movistar",
          "Claro",
          "WOM"
        ],
        "turkishProvidersUsage": "Roaming kullanılabilir, ancak maliyetli olabilir. Yerel SIM kartlar daha uygun."
      },
      "famousDishes": [
        "Empanada (etli veya peynirli hamur işi)",
        "Pastel de Choclo (mısır püresiyle yapılan güveç)",
        "Cazuela (sebzeli et çorbası)",
        "Completo (Şili usulü hot dog)"
      ]
    },
    {
      "id": 9,
      "countryName": "Kolombiya",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "90 gün",
      "notes": "Takvim yılı başına toplam 180 güne kadar uzatılabilir.",
      "capital": {
        "name": "Bogotá",
        "symbol": "Bogotá armasında altın renkli kartal ve zambak çiçeği"
      },
      "touristicPlaces": [
        {
          "placeName": "La Candelaria (Tarihi Merkez)",
          "description": "Bogotá'nın kolonyal dönem mimarisi ve müzeleri."
        },
        {
          "placeName": "Cartagena Eski Şehir",
          "description": "Karayip kıyısında renkli, surlarla çevrili kolonyal kent."
        },
        {
          "placeName": "Medellín",
          "description": "Ebedi Bahar Şehri olarak anılan, modern teleferik sistemleriyle ünlü."
        },
        {
          "placeName": "Guatapé",
          "description": "Renkli evleri ve El Peñol kayalık manzarasıyla ünlü kasaba."
        }
      ],
      "importantNumbers": {
        "police": "123",
        "ambulance": "125",
        "fire": "119",
        "generalEmergency": "123"
      },
      "thingsToKnow": {
        "warnings": "Bazı bölgelerde güvenlik sorunları olabilir. Seyahat planından önce güncel durumu kontrol edin.",
        "transportation": "Büyük şehirlerde otobüs ve taksi yaygın. Şehirlerarası uçuşlar ve otobüsler kullanılır.",
        "internetProviders": [
          "Claro",
          "Movistar",
          "Tigo",
          "Avantel"
        ],
        "turkishProvidersUsage": "Türk operatörlerin roaming hizmetleri aktif, ancak pahalı olabilir. Yerel ön ödemeli SIM yaygın."
      },
      "famousDishes": [
        "Arepa (mısır ekmeği)",
        "Bandeja Paisa (et, fasulye, pirinç, yumurta tabağı)",
        "Sancocho (et ve sebze çorbası)",
        "Ajiaco (tavuklu patates çorbası)"
      ]
    },
    {
      "id": 10,
      "countryName": "Ekvador",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "90 gün",
      "notes": "Kalış süresi bazen uzatılabilir; yerel göçmenlik ofisiyle görüşün.",
      "capital": {
        "name": "Quito",
        "symbol": "Quito'nun merkezinde yer alan kanatlı Bakire heykeli (Panecillo)"
      },
      "touristicPlaces": [
        {
          "placeName": "Tarihi Quito",
          "description": "UNESCO Dünya Mirası bölgesi, koloniyel mimari ve kiliselerle dolu."
        },
        {
          "placeName": "Galápagos Adaları",
          "description": "Eşsiz fauna ve flora, Charles Darwin'in keşiflerine ev sahipliği yapan takımadalar."
        },
        {
          "placeName": "Baños",
          "description": "Doğa sporları, termal kaynaklar ve şelaleleriyle ünlü kasaba."
        },
        {
          "placeName": "Otavalo Pazarı",
          "description": "Yerel el sanatları ve tekstil ürünleriyle meşhur geleneksel pazar."
        }
      ],
      "importantNumbers": {
        "police": "101",
        "ambulance": "911",
        "fire": "102",
        "generalEmergency": "911"
      },
      "thingsToKnow": {
        "warnings": "Yüksek rakımda nefes darlığı olabilir. Ulaşım sırasında eşyalarınıza dikkat edin.",
        "transportation": "Otobüsle şehirlerarası ulaşım yaygın ve uygun fiyatlı. Taksilerde taksimetre kullanmaya dikkat edin.",
        "internetProviders": [
          "Claro",
          "Movistar",
          "CNT"
        ],
        "turkishProvidersUsage": "Roaming aktif, ancak veri ücretleri yüksek olabilir. Yerel SIM genellikle daha uygun."
      },
      "famousDishes": [
        "Ceviche (deniz ürünleri)",
        "Locro de Papa (patates çorbası)",
        "Llapingachos (patates köftesi)",
        "Empanada de Viento (peynirli kızarmış hamur)"
      ]
    },
    {
      "id": 11,
      "countryName": "El Salvador",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "90 gün",
      "notes": "CA-4 Anlaşması'nın parçası (Guatemala, Honduras, Nikaragua, El Salvador).",
      "capital": {
        "name": "San Salvador",
        "symbol": "San Salvador armasında volkan ve beş köşeli yıldız"
      },
      "touristicPlaces": [
        {
          "placeName": "Santa Ana Yanardağı",
          "description": "Yürüyüş rotaları ve krater gölü manzarası sunan aktif yanardağ."
        },
        {
          "placeName": "Joya de Cerén",
          "description": "UNESCO Dünya Mirası; 'Orta Amerika'nın Pompeisi' olarak adlandırılan Maya kalıntıları."
        },
        {
          "placeName": "Suchitoto",
          "description": "Kolonyal mimarisi, sanat festivalleri ve göl manzarasıyla ünlü kasaba."
        },
        {
          "placeName": "El Tunco Plajı",
          "description": "Sörfçülerin gözde sahil noktası, renkli gece hayatı."
        }
      ],
      "importantNumbers": {
        "police": "911",
        "ambulance": "132",
        "fire": "913",
        "generalEmergency": "911"
      },
      "thingsToKnow": {
        "warnings": "Bazı bölgelerde çete faaliyetleri mevcut, rehber eşliğinde seyahat önerilir.",
        "transportation": "Otobüsler yaygın ancak kalabalık. Güvenlik için resmi taksileri tercih edin.",
        "internetProviders": [
          "Tigo",
          "Claro",
          "Movistar"
        ],
        "turkishProvidersUsage": "Roaming kullanılabilir, ancak yerel SIM almak daha ekonomik olabilir."
      },
      "famousDishes": [
        "Pupusa (mısır bazlı dolgulu hamur)",
        "Yuca Frita (kızarmış manyok)",
        "Sopa de Pata (sakatat çorbası)",
        "Tamales (mısır hamurlu dolma)"
      ]
    },
    {
      "id": 12,
      "countryName": "Gürcistan",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "1 yıl",
      "notes": "Türk vatandaşları için en cömert vizesiz kalış sürelerinden biri.",
      "capital": {
        "name": "Tiflis",
        "symbol": "Tiflis'in kükürt hamamları ve Narikala Kalesi sembolleri"
      },
      "touristicPlaces": [
        {
          "placeName": "Tiflis Eski Şehir",
          "description": "Dar sokaklar, tarihi kiliseler ve kükürt hamamlarıyla ünlü."
        },
        {
          "placeName": "Mtskheta",
          "description": "UNESCO listesindeki antik kent, Gürcü Ortodoks Kilisesi'nin merkezi."
        },
        {
          "placeName": "Kazbegi (Stepantsminda)",
          "description": "Dağ manzaraları ve Gergeti Trinity Kilisesi ile ünlü bölge."
        },
        {
          "placeName": "Batum",
          "description": "Karadeniz kıyısında modern mimari ve gece hayatı."
        }
      ],
      "importantNumbers": {
        "police": "112",
        "ambulance": "112",
        "fire": "112",
        "generalEmergency": "112"
      },
      "thingsToKnow": {
        "warnings": "Tiflis geceleri güvenli olsa da çantalara dikkat etmekte fayda var.",
        "transportation": "Metro, otobüs ve taksiler mevcut. Uygulama tabanlı taksiler de yaygın.",
        "internetProviders": [
          "Magti",
          "Geocell (Silknet)",
          "Beeline"
        ],
        "turkishProvidersUsage": "Türk SIM kartları Gürcistan'da sorunsuz çalışır, ancak roaming fiyatlarını kontrol edin. Yerel SIM çok hesaplı."
      },
      "famousDishes": [
        "Khachapuri (peynirli ekmek)",
        "Khinkali (baharatlı et dolu mantı)",
        "Lobio (fasulye yemeği)",
        "Churchkhela (cevizli üzüm pestili)"
      ]
    },
    {
      "id": 13,
      "countryName": "Honduras",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "90 gün",
      "notes": "CA-4 Anlaşması kapsamında, Guatemala, El Salvador ve Nikaragua süreleriyle ortak.",
      "capital": {
        "name": "Tegucigalpa",
        "symbol": "Tegucigalpa armasında dağ silueti ve madencilik sembolleri"
      },
      "touristicPlaces": [
        {
          "placeName": "Copán Harabeleri",
          "description": "Maya Medeniyeti'ne ait önemli arkeolojik alan."
        },
        {
          "placeName": "Roatán Adası",
          "description": "Karayip Denizi'nde dalış ve şnorkelle keşif için popüler ada."
        },
        {
          "placeName": "Tela",
          "description": "Plajları ve Punta Sal Milli Parkı'yla ünlü kıyı şehri."
        },
        {
          "placeName": "La Tigra Ulusal Parkı",
          "description": "Yağmur ormanı ve yürüyüş parkurları sunan korunmuş bölge."
        }
      ],
      "importantNumbers": {
        "police": "911",
        "ambulance": "195",
        "fire": "198",
        "generalEmergency": "911"
      },
      "thingsToKnow": {
        "warnings": "Çete ve asayiş sorunları bazı bölgelerde olabilir. Rehberli turlar önerilir.",
        "transportation": "Şehirlerarası otobüsler sık kullanılır. Güvenlik nedeniyle taksi ve otobüslerde dikkatli olun.",
        "internetProviders": [
          "Tigo",
          "Claro"
        ],
        "turkishProvidersUsage": "Roaming genellikle aktif fakat pahalı olabilir. Turist SIM kartları tercih edilebilir."
      },
      "famousDishes": [
        "Baleada (fasulye ve peynirli tortilla)",
        "Carne Asada (ızgara et)",
        "Sopa de Caracol (deniz salyangozu çorbası)",
        "Tamales (mısır hamurlu dolmalar)"
      ]
    },
    {
      "id": 14,
      "countryName": "Hong Kong (Çin SAR)",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "90 gün",
      "notes": "Çin anakarasından farklı olarak vize gerekmiyor.",
      "capital": {
        "name": "Hong Kong (özel idari bölge, resmî 'başkent' yok)",
        "symbol": "Bölgesel amblemde beş yapraklı Bauhinia çiçeği"
      },
      "touristicPlaces": [
        {
          "placeName": "Victoria Zirvesi (The Peak)",
          "description": "Hong Kong silüetini yukarıdan görmek için en popüler nokta."
        },
        {
          "placeName": "Kowloon – Tsim Sha Tsui",
          "description": "Ünlü cadde Nathan Road, alışveriş ve liman manzarası."
        },
        {
          "placeName": "Hong Kong Disneyland",
          "description": "Asya'daki ünlü Disney tema parklarından biri."
        },
        {
          "placeName": "Lantau Adası – Big Buddha",
          "description": "Devasa Buda heykeli ve Po Lin Manastırı."
        }
      ],
      "importantNumbers": {
        "police": "999",
        "ambulance": "999",
        "fire": "999",
        "generalEmergency": "999"
      },
      "thingsToKnow": {
        "warnings": "Genel olarak güvenli, ancak kalabalık bölgelerde yankesiciliğe karşı dikkatli olun.",
        "transportation": "MTR (metro), otobüsler, tramvaylar ve feribotlar gelişmiş ve güvenilirdir.",
        "internetProviders": [
          "SmarTone",
          "CSL",
          "3 (Three)",
          "China Mobile"
        ],
        "turkishProvidersUsage": "Roaming kolayca yapılabilir, ancak paket fiyatlarını kontrol edin. Yerel SIM veya eSIM alınabilir."
      },
      "famousDishes": [
        "Dim Sum (küçük porsiyonlu Çin lezzetleri)",
        "Char Siu (barbekü domuz eti)",
        "Wonton Noodle Soup (mantılı çorba)",
        "Egg Tart (yumurtalı tart)"
      ]
    },
    {
      "id": 15,
      "countryName": "İran",
      "visaType": "Varışta Vize veya e-Vize",
      "maxStay": "30 gün",
      "notes": "Büyük havalimanlarında mevcut. Uzatma mümkün.",
      "capital": {
        "name": "Tahran",
        "symbol": "Tahran'ın aslan ve güneş temalı eski armasına benzer simgeler"
      },
      "touristicPlaces": [
        {
          "placeName": "İsfahan – Nakş-ı Cihan Meydanı",
          "description": "UNESCO Mirası, mimari açıdan muhteşem camiler ve saraylarla çevrili."
        },
        {
          "placeName": "Şiraz – Persepolis",
          "description": "Antik Pers başkentinin kalıntıları, tarihe ışık tutuyor."
        },
        {
          "placeName": "Tahran – Milad Kulesi",
          "description": "Şehrin panoramik manzarasını sunan modern kule."
        },
        {
          "placeName": "Kiş Adası",
          "description": "Serbest ticaret bölgesi, plajlar ve alışveriş imkânları."
        }
      ],
      "importantNumbers": {
        "police": "110",
        "ambulance": "115",
        "fire": "125",
        "generalEmergency": "112 (bazı bölgelerde)"
      },
      "thingsToKnow": {
        "warnings": "Başörtüsü ve kıyafet kuralları, yerel yasalara uymayı gerektirir. Alkol kullanımı yasaktır.",
        "transportation": "Şehir içi ulaşım için taksi, metro ve otobüs var. Fiyatlar uygun.",
        "internetProviders": [
          "MCI (Hamrahe Aval)",
          "MTN Irancell",
          "Rightel"
        ],
        "turkishProvidersUsage": "Resmî roaming mümkündür, ancak internet kısıtlamaları olabilir. Yerel SIM genelde ucuz ve yaygın."
      },
      "famousDishes": [
        "Kebap (Çeşitli et kebapları)",
        "Ghormeh Sabzi (otlu et yahnisi)",
        "Fesenjan (cevizli ve nar ekşili yahni)",
        "Tahdig (kızarmış pilav kabuğu)"
      ]
    },
    {
      "id": 16,
      "countryName": "Irak (Bazı Bölgeler)",
      "visaType": "IKBY'de Varışta Vize (Kürdistan Bölgesi)",
      "maxStay": "30 gün",
      "notes": "Irak Kürdistan Bölgesi'nde varışta vize; diğer bölgeler için önceden vize gerekebilir.",
      "capital": {
        "name": "Bağdat (resmî), Erbil (IKBY'nin yönetim merkezi)",
        "symbol": "Bağdat'ın Abbasi döneminden kalan sembolleri, Erbil Kalesi silueti"
      },
      "touristicPlaces": [
        {
          "placeName": "Erbil Kalesi",
          "description": "Dünyanın en eski sürekli yerleşim yerlerinden biri kabul edilen tarihi kale."
        },
        {
          "placeName": "Süleymaniye Dağları",
          "description": "Doğa yürüyüşleri ve serin yaylalarıyla tanınan bölge."
        },
        {
          "placeName": "Bağdat – Mutanabbi Caddesi",
          "description": "Kitapçılar sokağı ve kültürel etkinliklerin merkezi."
        },
        {
          "placeName": "Zigarlar ve Antik Kentler",
          "description": "Mezopotamya uygarlıklarına ait kalıntılar (ör: Ur)."
        }
      ],
      "importantNumbers": {
        "police": "104",
        "ambulance": "122",
        "fire": "115",
        "generalEmergency": "911 (bazı bölgelerde)"
      },
      "thingsToKnow": {
        "warnings": "Güvenlik durumu değişken. Seyahat öncesi güncel tavsiyeleri mutlaka kontrol edin.",
        "transportation": "IKBY bölgesinde taksi ve özel araç yaygın. Bağdat'ta da taksiler kullanılır, ancak güvenlik önlemi şart.",
        "internetProviders": [
          "Zain Iraq",
          "Asiacell",
          "Korek Telecom"
        ],
        "turkishProvidersUsage": "Roaming genelde aktif, ancak yüksek maliyetli olabilir. IKBY'de yerel SIM almak daha kolay."
      },
      "famousDishes": [
        "Masgouf (ızgara balık)",
        "Kubba (içli köfte çeşitleri)",
        "Dolma (yaprak sarması türleri)",
        "Biryani (etli pilav)"
      ]
    },
    {
      "id": 17,
      "countryName": "Japonya",
      "visaType": "Vize Gerekmiyor (değişebilir)",
      "maxStay": "90 güne kadar",
      "notes": "Japonya bazı pasaportlar için e-Vize uygulaması başlattı. En güncel düzenlemeleri kontrol edin.",
      "capital": {
        "name": "Tokyo",
        "symbol": "Tokyo Metropolü amblemi, yeşil Gingko yaprağı tasviri"
      },
      "touristicPlaces": [
        {
          "placeName": "Tokyo – Shibuya Crossing",
          "description": "Dünyanın en yoğun yaya geçitlerinden biri, neon ışıklarıyla ünlü."
        },
        {
          "placeName": "Kyoto – Fushimi Inari Tapınağı",
          "description": "Binlerce turuncu Torii kapısıyla ikonik bir Shinto tapınağı."
        },
        {
          "placeName": "Osaka Kalesi",
          "description": "Tarihi kale ve çevresindeki park, özellikle kiraz çiçeği zamanında popüler."
        },
        {
          "placeName": "Hiroşima – Barış Anıtı Parkı",
          "description": "Atom bombası anısına yapılmış barış parkı ve müze."
        }
      ],
      "importantNumbers": {
        "police": "110",
        "ambulance": "119",
        "fire": "119",
        "generalEmergency": "119"
      },
      "thingsToKnow": {
        "warnings": "Çok güvenli bir ülke, ancak kurallara uymaya ve toplumsal nezakete dikkat edin.",
        "transportation": "Japonya'da tren ve metro ağı çok gelişmiş. JR Pass turiste avantaj sağlar.",
        "internetProviders": [
          "NTT Docomo",
          "SoftBank",
          "au (KDDI)"
        ],
        "turkishProvidersUsage": "Roaming kullanılabilir fakat pahalı olabilir. Turist eSIM veya cep Wi-Fi cihazları çok yaygın."
      },
      "famousDishes": [
        "Sushi",
        "Ramen",
        "Tempura",
        "Okonomiyaki"
      ]
    },
    {
      "id": 18,
      "countryName": "Ürdün",
      "visaType": "Varışta Vize",
      "maxStay": "30 gün",
      "notes": "Varışta ücret gerekli. Jordan Pass alınırsa vize ücreti muaf tutulabilir.",
      "capital": {
        "name": "Amman",
        "symbol": "Amman'ın Roma Tiyatrosu ve kalenin sembolik görüntüsü"
      },
      "touristicPlaces": [
        {
          "placeName": "Petra",
          "description": "Kaya içine oyulmuş antik kent ve UNESCO Dünya Mirası."
        },
        {
          "placeName": "Wadi Rum",
          "description": "Mars benzeri kızıl çöl manzarası, çöl kampları ve safari turları."
        },
        {
          "placeName": "Ölü Deniz",
          "description": "Dünyanın en alçak noktası, yüksek tuz oranı nedeniyle batmadan yüzebilirsiniz."
        },
        {
          "placeName": "Jerash",
          "description": "Romalılardan kalma antik şehir kalıntıları."
        }
      ],
      "importantNumbers": {
        "police": "911",
        "ambulance": "911",
        "fire": "911",
        "generalEmergency": "911"
      },
      "thingsToKnow": {
        "warnings": "Genel olarak güvenli, fakat dini ve kültürel hassasiyetlere saygı gösterin.",
        "transportation": "Otobüsler ve servis araçları var, taksiler yaygın. Uber/Careem gibi uygulamalar da kullanılabiliyor.",
        "internetProviders": [
          "Zain",
          "Orange",
          "Umniah"
        ],
        "turkishProvidersUsage": "Roaming aktif, ama yüksek ücretli olabilir. Jordan Pass avantajları için kontrol edin."
      },
      "famousDishes": [
        "Mansaf (yoğurtlu kuzu eti ve pilav)",
        "Maqluba (ters çevrilmiş pirinç yemeği)",
        "Falafel ve Hummus",
        "Kunafa (tatlı)"
      ]
    },
    {
      "id": 19,
      "countryName": "Kazakistan",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "30 gün",
      "notes": "İleri seyahat kanıtı ve yeterli maddi kaynak gerekli.",
      "capital": {
        "name": "Astana (Nur-Sultan olarak da bilinir)",
        "symbol": "Baiterek Kulesi, şehrin modern sembolü"
      },
      "touristicPlaces": [
        {
          "placeName": "Astana Baiterek Kulesi",
          "description": "Şehrin modern simgesi, gözetleme alanı mevcut."
        },
        {
          "placeName": "Hazar Denizi kıyıları",
          "description": "Aktau gibi şehirlerde sahil turizmi imkânı."
        },
        {
          "placeName": "Almatı – Medeo Buz Pateni Pisti",
          "description": "Dünyanın en yüksek rakımlı açık hava pisti."
        },
        {
          "placeName": "Büyük Almatı Gölü",
          "description": "Dağlarla çevrili kartpostal güzelliğinde bir göl."
        }
      ],
      "importantNumbers": {
        "police": "102",
        "ambulance": "103",
        "fire": "101",
        "generalEmergency": "112"
      },
      "thingsToKnow": {
        "warnings": "Kış aylarında hava çok soğuk olabilir, uygun kıyafet getirin.",
        "transportation": "Büyük şehirlerde taksi ve otobüs yaygın, trenle şehirlerarası yolculuk yapılabilir.",
        "internetProviders": [
          "Kcell",
          "Beeline",
          "Tele2",
          "Altel"
        ],
        "turkishProvidersUsage": "Roaming kullanılabilir, yerel SIM alarak daha uygun tarifelerden yararlanabilirsiniz."
      },
      "famousDishes": [
        "Beshbarmak (et ve hamur parçalarıyla yapılan geleneksel yemek)",
        "Kazy (at eti sosisi)",
        "Shubat (deve sütü)",
        "Baursak (kızarmış hamur lokmaları)"
      ]
    },
    {
      "id": 20,
      "countryName": "Kosova",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "90 gün",
      "notes": "180 günlük süre içinde 90 gün kalış.",
      "capital": {
        "name": "Priştine",
        "symbol": "Priştine şehir arması, çift başlı kartal ve minare silueti"
      },
      "touristicPlaces": [
        {
          "placeName": "Kosova Müzesi",
          "description": "Bölgenin arkeolojik ve etnografik eserlerini barındırır."
        },
        {
          "placeName": "Fatih Camii",
          "description": "Osmanlı döneminden kalma, Priştine'nin tarihi sembolü."
        },
        {
          "placeName": "Germia Parkı",
          "description": "Priştine yakınında yeşil alan, yürüyüş ve piknik için ideal."
        },
        {
          "placeName": "Prizren Eski Şehir",
          "description": "Tarihi köprü, camiler ve kiliselerle ünlü Osmanlı dokulu kent."
        }
      ],
      "importantNumbers": {
        "police": "192",
        "ambulance": "194",
        "fire": "193",
        "generalEmergency": "112"
      },
      "thingsToKnow": {
        "warnings": "Genel olarak güvenli olsa da gece geç saatlerde dikkatli olmak önerilir.",
        "transportation": "Otobüs ağı iyi, taksiler de makul fiyatlı. Şehirlerarası seyahat pratik.",
        "internetProviders": [
          "IPKO",
          "Vala",
          "Z-Mobile"
        ],
        "turkishProvidersUsage": "Kosova'da roaming paketleri mevcuttur. Uygun fiyata yerel SIM almak da mümkündür."
      },
      "famousDishes": [
        "Flija (katmerli hamur yemeği)",
        "Pite (börek)",
        "Tavë Prizreni (etli güveç)",
        "Sarma (lahana sarması)"
      ]
    },
    {
      "id": 21,
      "countryName": "Lübnan",
      "visaType": "Varışta Vize",
      "maxStay": "90 gün",
      "notes": "Beyrut Havalimanı'nda Türk vatandaşlarına ücretsiz vize (İsrail damgası olmamalı).",
      "capital": {
        "name": "Beyrut",
        "symbol": "Beyrut'un güvercin kayalıkları ve sedir ağacı sembolü"
      },
      "touristicPlaces": [
        {
          "placeName": "Baldık Kayaları (Pigeon Rocks)",
          "description": "Beyrut sahilinde ünlü doğal kaya oluşumları."
        },
        {
          "placeName": "Byblos Antik Kenti",
          "description": "Dünyanın en eski sürekli yerleşimlerinden biri, Fenike kalıntıları."
        },
        {
          "placeName": "Jeita Grotto Mağaraları",
          "description": "Muhteşem yeraltı kireçtaşı oluşumları, tekneyle gezilebiliyor."
        },
        {
          "placeName": "Baalbek",
          "description": "Roma İmparatorluğu'ndan kalma devasa tapınak kalıntıları."
        }
      ],
      "importantNumbers": {
        "police": "112",
        "ambulance": "140",
        "fire": "175",
        "generalEmergency": "112"
      },
      "thingsToKnow": {
        "warnings": "Ekonomik durum ve siyasi gerilimler nedeniyle güncel haberleri takip edin.",
        "transportation": "Paylaşımlı dolmuşlar (servees), taksiler ve otobüsler. Trafik yoğun olabilir.",
        "internetProviders": [
          "Alfa",
          "Touch"
        ],
        "turkishProvidersUsage": "Roaming mevcuttur, ancak pahalı olabilir. Kısa süreli gezilerde paket araştırmak faydalı."
      },
      "famousDishes": [
        "Mezze (humus, tabbouleh, baba ghanoush vb.)",
        "Kibbeh (bulgurlu et köftesi)",
        "Manakish (baharatlı pide)",
        "Baklava çeşitleri"
      ]
    },
    {
      "id": 22,
      "countryName": "Makao (Çin SAR)",
      "visaType": "Varışta Vize",
      "maxStay": "30 gün",
      "notes": "Güncel kurallar için yerel yetkililer veya havayoluna danışın.",
      "capital": {
        "name": "Makao (özel idari bölge, resmî 'başkent' yok)",
        "symbol": "Lotus çiçeği sembolü, Makao bayrağının da simgesi"
      },
      "touristicPlaces": [
        {
          "placeName": "Senado Meydanı",
          "description": "Portekiz etkisinin hissedildiği UNESCO Dünya Mirası tarihi meydan."
        },
        {
          "placeName": "Ruins of St. Paul's",
          "description": "Makao'nun sembolik tarihi kilise kalıntıları."
        },
        {
          "placeName": "Macau Tower",
          "description": "Seyir terası, bungee jumping ve restoranlarıyla ünlü kule."
        },
        {
          "placeName": "Cotai Strip",
          "description": "Dünyaca ünlü kumarhaneler ve lüks oteller bölgesi."
        }
      ],
      "importantNumbers": {
        "police": "999",
        "ambulance": "999",
        "fire": "999",
        "generalEmergency": "999"
      },
      "thingsToKnow": {
        "warnings": "Yasal yaş sınırlarına ve kumar kurallarına dikkat edin.",
        "transportation": "Otobüs ve taksi yaygın. Kumarhanelerin ücretsiz shuttle hizmetleri de var.",
        "internetProviders": [
          "CTM",
          "3 (Three)",
          "China Telecom"
        ],
        "turkishProvidersUsage": "Hong Kong ve Makao'da roaming genelde farklı tarifelerle işler. Yerel SIM veya eSIM daha avantajlı olabilir."
      },
      "famousDishes": [
        "Pastel de Nata (Portekiz usulü tart)",
        "Pork Chop Bun (domuz pirzola sandviçi)",
        "Minchi (kıyma ve patatesli yemek)",
        "Bacalhau (Portekiz usulü tuzlu balık - çeşitli yorumları)"
      ]
    },
    {
      "id": 23,
      "countryName": "Malezya",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "90 gün",
      "notes": "90 güne kadar olan kalışlarda vize gerekmiyor.",
      "capital": {
        "name": "Kuala Lumpur",
        "symbol": "İkiz Kuleler (Petronas Towers) şehrin simgesi"
      },
      "touristicPlaces": [
        {
          "placeName": "Petronas İkiz Kuleleri",
          "description": "Şehrin sembolü, seyir köprüsüyle ünlü gökdelenler."
        },
        {
          "placeName": "Batu Mağaraları",
          "description": "Hindu tapınakları ve devasa heykeliyle ünlü kaya mağaraları."
        },
        {
          "placeName": "Langkawi Adası",
          "description": "Plajları ve duty-free alışverişiyle tanınan tatil bölgesi."
        },
        {
          "placeName": "Malakka Şehri",
          "description": "Portekiz ve Hollanda izleri taşıyan UNESCO Dünya Mirası tarihi kent."
        }
      ],
      "importantNumbers": {
        "police": "999",
        "ambulance": "999",
        "fire": "999",
        "generalEmergency": "999"
      },
      "thingsToKnow": {
        "warnings": "Sağanak yağmurlar ve muson dönemlerine dikkat. Mütevazı giyim önerilir (özellikle camilerde).",
        "transportation": "Kuala Lumpur'da metro, monoray ve otobüs yaygın. Grab gibi uygulamalar ucuz ve pratik.",
        "internetProviders": [
          "Maxis",
          "Celcom",
          "Digi",
          "U Mobile"
        ],
        "turkishProvidersUsage": "Roaming yapılabilir, ancak pahalı olabilir. Yerel SIM almak çok kolay ve uygun fiyatlı."
      },
      "famousDishes": [
        "Nasi Lemak (hindistan cevizli pilav, acı soslu kahvaltı)",
        "Roti Canai (yassı ekmek ve körili sos)",
        "Laksa (baharatlı çorba)",
        "Satay (marineli ızgara et şiş)"
      ]
    },
    {
      "id": 24,
      "countryName": "Maldivler",
      "visaType": "Varışta Vize",
      "maxStay": "30 gün",
      "notes": "Onaylı otel rezervasyonu ve yeterli maddi kaynak gerekli.",
      "capital": {
        "name": "Male",
        "symbol": "Male için tipik simge, adalar ve turkuaz deniz görseli"
      },
      "touristicPlaces": [
        {
          "placeName": "Maafushi",
          "description": "Bütçe dostu konaklama seçenekleri ve plajlarıyla ünlü yerel ada."
        },
        {
          "placeName": "Hulhumalé",
          "description": "Yeni yerleşim bölgesi, plaj ve kafeler. Male'ye feribotla yakın."
        },
        {
          "placeName": "Banana Reef",
          "description": "Dünyaca ünlü dalış noktası, renkli mercanlar ve balıklar."
        },
        {
          "placeName": "Fulhadhoo",
          "description": "Sessiz, el değmemiş beyaz kumlu plajlarıyla tanınan ada."
        }
      ],
      "importantNumbers": {
        "police": "+960 333 2080",
        "ambulance": "102",
        "fire": "118",
        "generalEmergency": "119"
      },
      "thingsToKnow": {
        "warnings": "Her adada içki satışı olmayabilir (turist adaları dışında alkol yasak).",
        "transportation": "Sürat tekneleri veya deniz uçakları adalar arası ulaşımı sağlar.",
        "internetProviders": [
          "Dhiraagu",
          "Ooredoo"
        ],
        "turkishProvidersUsage": "Roaming çok pahalı olabilir. Çoğu tatil köyünde Wi-Fi mevcut. Yerel SIM alınabilir ama genelde tatil beldelerinde gerek kalmaz."
      },
      "famousDishes": [
        "Garudhiya (balık çorbası)",
        "Mas Huni (rendelenmiş ton balığı, hindistan cevizi ve soğan)",
        "Rihaakuru (balık ezmesi)",
        "Bis Keemiya (börek benzeri atıştırmalık)"
      ]
    },
    {
      "id": 25,
      "countryName": "Moldova",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "90 gün",
      "notes": "180 günlük süre içinde 90 gün kalış.",
      "capital": {
        "name": "Kişinev (Chișinău)",
        "symbol": "Şehir armasında kalkan ve üzüm asması"
      },
      "touristicPlaces": [
        {
          "placeName": "Orheiul Vechi",
          "description": "Tarihi manastır kompleksi, kayaya oyulmuş kiliseler."
        },
        {
          "placeName": "Şarap Mahzenleri (Cricova, Mileștii Mici)",
          "description": "Dünyanın en büyük şarap koleksiyonlarından bazılarına ev sahipliği yapar."
        },
        {
          "placeName": "Kişinev Katedrali Parkı",
          "description": "Merkezde yürüyüş ve dinlenme alanı, Katedrali ile ünlü."
        },
        {
          "placeName": "Tipova Manastırı",
          "description": "Kayalıklar içine oyulmuş ortodoks manastır."
        }
      ],
      "importantNumbers": {
        "police": "902",
        "ambulance": "903",
        "fire": "901",
        "generalEmergency": "112"
      },
      "thingsToKnow": {
        "warnings": "Turistik bölgeler güvenli, ancak yankesicilik olabileceği için dikkatli olun.",
        "transportation": "Trolebüs, otobüs ve taksiler yaygın. Şehirlerarası minibüsler (marshrutka) mevcut.",
        "internetProviders": [
          "Moldcell",
          "Orange Moldova",
          "Unite"
        ],
        "turkishProvidersUsage": "Roaming kullanılabilir, ama yerel SIM daha uyguna gelebilir."
      },
      "famousDishes": [
        "Mămăligă (mısır unu lapası)",
        "Sarmale (lahana veya asma yaprağında dolma)",
        "Plăcintă (börek benzeri hamur işi)",
        "Zeamă (tavuk çorbası)"
      ]
    },
    {
      "id": 26,
      "countryName": "Mongolia",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "30 gün",
      "notes": "30 günden uzun kalışlarda göçmenlik kaydı gerekli.",
      "capital": {
        "name": "Ulan Batur",
        "symbol": "Cengiz Han heykeli ve bozkır simgesi"
      },
      "touristicPlaces": [
        {
          "placeName": "Gobi Çölü",
          "description": "Eşsiz çöl manzaraları ve deve turlarıyla ünlü bölge."
        },
        {
          "placeName": "Terelj Milli Parkı",
          "description": "Doğal kaya oluşumları ve çadır (ger) kampları."
        },
        {
          "placeName": "Ulan Batur – Cengiz Han Meydanı",
          "description": "Şehrin ana meydanı, hükümet binaları ve Cengiz Han Anıtı."
        },
        {
          "placeName": "Khövsgöl Gölü",
          "description": "Temiz suları ve çevresindeki ormanlarla 'Mavi İnci' olarak anılır."
        }
      ],
      "importantNumbers": {
        "police": "102",
        "ambulance": "103",
        "fire": "101",
        "generalEmergency": "105"
      },
      "thingsToKnow": {
        "warnings": "Kışlar çok sert ve soğuk geçer. Seyahat planlaması yaparken iklimi göz önüne alın.",
        "transportation": "Otobüs ve taksi var, ama kırsal bölgelerde ulaşım zorlukları olabilir.",
        "internetProviders": [
          "Mobicom",
          "Unitel",
          "G-Mobile",
          "Skytel"
        ],
        "turkishProvidersUsage": "Roaming mümkün, ancak pahalı olabilir. Yerel SIM kırsal alanda da kullanımda faydalı olabilir."
      },
      "famousDishes": [
        "Buuz (etli buharda pişmiş mantı)",
        "Khuushuur (kızarmış etli hamur)",
        "Boodog (içinde et pişirilen deri çuval yemeği)",
        "Airag (fermente kısrak sütü)"
      ]
    },
    {
      "id": 27,
      "countryName": "Montenegro",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "90 gün",
      "notes": "6 aylık dönemde 90 gün kalış hakkı.",
      "capital": {
        "name": "Podgorica",
        "symbol": "Kentin armasında Morača Nehri ve dağ silueti"
      },
      "touristicPlaces": [
        {
          "placeName": "Kotor Eski Şehir",
          "description": "UNESCO Dünya Mirası listesinde, Ortaçağ'dan kalma surlar."
        },
        {
          "placeName": "Budva",
          "description": "Sahilleri ve gece hayatıyla ünlü turistik kıyı kenti."
        },
        {
          "placeName": "Sveti Stefan",
          "description": "Lüks tatil köyüne dönüştürülmüş tarihi ada."
        },
        {
          "placeName": "Durmitor Milli Parkı",
          "description": "Dağcılık, rafting ve kanyon gezileri için popüler destinasyon."
        }
      ],
      "importantNumbers": {
        "police": "122",
        "ambulance": "124",
        "fire": "123",
        "generalEmergency": "112"
      },
      "thingsToKnow": {
        "warnings": "Turistik bölgelerde fiyatlar yüksek olabilir. Yaz sezonu kalabalık geçer.",
        "transportation": "Otobüs ağı iyi, trenler kısıtlı bölgede var. Araç kiralama da yaygın.",
        "internetProviders": [
          "T-Mobile",
          "M:tel",
          "Telekom"
        ],
        "turkishProvidersUsage": "Roaming kullanılabilir. Kısa seyahatlerde paket almak veya yerel SIM tercih edilebilir."
      },
      "famousDishes": [
        "Ćevapi (köfte benzeri ızgara et)",
        "Kacamak (mısır unu lapa)",
        "Njeguški Pršut (kurutulmuş et)",
        "Burek (börek)"
      ]
    },
    {
      "id": 28,
      "countryName": "Morocco",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "90 gün",
      "notes": "Pasaport en az 6 ay geçerli olmalı.",
      "capital": {
        "name": "Rabat",
        "symbol": "Kentin armasında kale ve kraliyet sembolleri"
      },
      "touristicPlaces": [
        {
          "placeName": "Marakeş – Jemaa el-Fnaa",
          "description": "Pazar alanı, yılan oynatıcıları ve sokak lezzetleri."
        },
        {
          "placeName": "Fes El Bali",
          "description": "Dünyanın en eski yaya şehirlerinden biri, tarihi medina."
        },
        {
          "placeName": "Şafşavan (Chefchaouen)",
          "description": "Mavi boyalı evleriyle ünlü dağ kasabası."
        },
        {
          "placeName": "Sahara Çölü (Merzouga)",
          "description": "Çöl kampları, kum tepelerinde deve turları."
        }
      ],
      "importantNumbers": {
        "police": "190",
        "ambulance": "150",
        "fire": "150",
        "generalEmergency": "190/112"
      },
      "thingsToKnow": {
        "warnings": "Ticaret ve pazarlıklarda fiyatları mutlaka önceden konuşun.",
        "transportation": "Tren, otobüs ve grand taxi sistemi var. Şehirlerarası tren seyahati rahattır.",
        "internetProviders": [
          "Maroc Telecom",
          "Orange Maroc",
          "Inwi"
        ],
        "turkishProvidersUsage": "Roaming var, fakat pahalı olabilir. Yerel SIM almak mantıklı ve kolay."
      },
      "famousDishes": [
        "Tajine (sebze veya et yahnisi)",
        "Couscous (sebze veya etli irmik)",
        "Harira (geleneksel çorba)",
        "Pastilla (tatlı-tuzlu börek)"
      ]
    },
    {
      "id": 29,
      "countryName": "Nepal",
      "visaType": "Vize on Arrival",
      "maxStay": "15/30/90 gün (ücrete göre)",
      "notes": "Vize ücreti kalış süresine göre değişir.",
      "capital": {
        "name": "Kathmandu",
        "symbol": "Kathmandu Vadisi, tapınak ve dağ silueti sembolleri"
      },
      "touristicPlaces": [
        {
          "placeName": "Kathmandu Durbar Meydanı",
          "description": "UNESCO Mirası, kraliyet sarayları ve tarihi tapınaklar."
        },
        {
          "placeName": "Pokhara",
          "description": "Göl manzarası, Himalaya zirveleri ve doğa sporları merkezi."
        },
        {
          "placeName": "Chitwan Milli Parkı",
          "description": "Gergedan ve Bengal kaplanı gibi vahşi yaşamı gözlemleme imkânı."
        },
        {
          "placeName": "Everest Bölgesi (Khumbu)",
          "description": "Dünyanın en yüksek zirvesine açılan yürüyüş rotaları."
        }
      ],
      "importantNumbers": {
        "police": "100",
        "ambulance": "102",
        "fire": "101",
        "generalEmergency": "100"
      },
      "thingsToKnow": {
        "warnings": "Yüksek irtifa hastalığına dikkat etmek gerekiyor. Tapınaklarda saygılı giyim önemli.",
        "transportation": "Şehir içinde taksi ve minibüsler var. Dağlık bölgelerde iç hat uçuşları yaygın.",
        "internetProviders": [
          "Nepal Telecom",
          "Ncell"
        ],
        "turkishProvidersUsage": "Roaming genelde mevcut ancak pahalı olabilir. Yerel SIM ise ucuz ve yaygın."
      },
      "famousDishes": [
        "Dal Bhat (mercimek çorbası ve pirinç)",
        "Momo (Nepal usulü mantı)",
        "Newari Khaja Set (çeşitli küçük tabaklar)",
        "Choila (baharatlı et yemeği)"
      ]
    },
    {
      "id": 30,
      "countryName": "Nicaragua",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "90 gün",
      "notes": "CA-4 bölgesi kapsamında (Guatemala, El Salvador, Honduras).",
      "capital": {
        "name": "Managua",
        "symbol": "Managua armasında stilize yanardağ ve göl"
      },
      "touristicPlaces": [
        {
          "placeName": "Granada",
          "description": "Kolonyal mimarisi ve Cocibolca Gölü üzerindeki adacıklarıyla ünlü."
        },
        {
          "placeName": "Ometepe Adası",
          "description": "İki yanardağ tarafından şekillendirilmiş tatlı su adası."
        },
        {
          "placeName": "León",
          "description": "Tarihi katedrali ve devrim müzeleriyle ünlü kültür şehri."
        },
        {
          "placeName": "Masaya Yanardağı",
          "description": "Aktif krateri gözlemleme imkânı sunan ulusal park."
        }
      ],
      "importantNumbers": {
        "police": "118",
        "ambulance": "128",
        "fire": "115",
        "generalEmergency": "911 (yeni uygulama aşaması)"
      },
      "thingsToKnow": {
        "warnings": "Siyasi protestolar ve güvenlik durumunu takip etmek önemli.",
        "transportation": "Chicken bus denilen eski Amerikan okul otobüsleri uygun fiyatlı. Taksi pazarlık usulü.",
        "internetProviders": [
          "Claro",
          "Tigo"
        ],
        "turkishProvidersUsage": "Roaming mevcut, ama pahalı olabilir. Yerel SIM edinmek mümkün."
      },
      "famousDishes": [
        "Gallo Pinto (fasulye ve pirinç karışımı)",
        "Nacatamal (mısır hamurlu ve etli yaprak dolması)",
        "Vigorón (lahana salatası, kızarmış domuz derisi, yuca)",
        "Quesillo (peynirli tortilla)"
      ]
    },
    {
      "id": 31,
      "countryName": "North Macedonia",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "90 gün",
      "notes": "180 günlük süre içinde 90 gün kalış.",
      "capital": {
        "name": "Üsküp (Skopje)",
        "symbol": "Taş Köprü ve Matka Kanyonu sembolü"
      },
      "touristicPlaces": [
        {
          "placeName": "Üsküp – Taş Köprü",
          "description": "Vardar Nehri üzerindeki tarihi Osmanlı köprüsü."
        },
        {
          "placeName": "Ohri Gölü",
          "description": "UNESCO korumasındaki göl, tarihi kiliseler ve mükemmel doğa."
        },
        {
          "placeName": "Mavrovo Milli Parkı",
          "description": "Dağcılık, kış sporları ve doğal güzellikleriyle ünlü."
        },
        {
          "placeName": "Matka Kanyonu",
          "description": "Tekne turları, mağaralar ve doğa yürüyüşü fırsatı."
        }
      ],
      "importantNumbers": {
        "police": "192",
        "ambulance": "194",
        "fire": "193",
        "generalEmergency": "112"
      },
      "thingsToKnow": {
        "warnings": "Turistik yerler genelde güvenli. Gümrük limitlerine dikkat edin.",
        "transportation": "Şehirlerarası otobüsler iyi, Üsküp'te otobüs ve taksiler mevcut.",
        "internetProviders": [
          "A1",
          "T-Mobile",
          "Lycamobile"
        ],
        "turkishProvidersUsage": "Roaming var, kısa ziyaretler için paket almak daha uygun olabilir."
      },
      "famousDishes": [
        "Tavče Gravče (fırınlanmış fasulye yemeği)",
        "Shopska Salata (Balkan salatası)",
        "Ajvar (kırmızı biber sosu)",
        "Burek (börek çeşitleri)"
      ]
    },
    {
      "id": 32,
      "countryName": "Northern Cyprus (TRNC)",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "Süre kısıtlaması yok",
      "notes": "Yalnızca Türkiye tarafından tanınır; uluslararası uçuşlar Türkiye aktarmalıdır.",
      "capital": {
        "name": "Lefkoşa (Kuzey)",
        "symbol": "Selimiye Camii (Ayasofya Katedrali) ve Venedik Surları silueti"
      },
      "touristicPlaces": [
        {
          "placeName": "Girne Kalesi",
          "description": "Liman manzaralı tarihi kale ve batık gemi müzesi."
        },
        {
          "placeName": "Bellapais Manastırı",
          "description": "Gotik mimarisiyle ünlü tarihi manastır, Girne yakınlarında."
        },
        {
          "placeName": "Kapalı Maraş (Varosha)",
          "description": "Terk edilmiş sahil kenti, kısmen ziyarete açılmıştır."
        },
        {
          "placeName": "Karpaz Yarımadası",
          "description": "Bakir plajlar ve eşekleriyle ünlü doğal güzellik."
        }
      ],
      "importantNumbers": {
        "police": "155",
        "ambulance": "112",
        "fire": "199",
        "generalEmergency": "112"
      },
      "thingsToKnow": {
        "warnings": "Yalnızca Türkiye tarafından tanınması nedeniyle uluslararası uçuşlar sınırlı.",
        "transportation": "Otobüs ve dolmuşlar var, ancak en iyisi araç kiralamak. Trafik soldan akar.",
        "internetProviders": [
          "KKTC Telsim (Vodafone)",
          "KKTC Turkcell"
        ],
        "turkishProvidersUsage": "Türk hatları Kuzey Kıbrıs'ta da çalışır; genelde yurt içi tarifesi geçerli (operatör sözleşmesine göre değişir)."
      },
      "famousDishes": [
        "Şeftali Kebabı",
        "Hellim (Halloumi) Peyniri",
        "Kıbrıs Köftesi",
        "Pilavuna (çörek)"
      ]
    },
    {
      "id": 33,
      "countryName": "Oman",
      "visaType": "Vize on Arrival veya e-Vize",
      "maxStay": "10 gün (VoA) / 30 gün (e-Vize)",
      "notes": "Politikalar sık güncelleniyor, resmi kaynakları kontrol edin.",
      "capital": {
        "name": "Maskat",
        "symbol": "Büyük Camii ve Omani hançer (khanjar) sembolü"
      },
      "touristicPlaces": [
        {
          "placeName": "Sultan Qaboos Büyük Camii",
          "description": "Maskat'ın simgesi, muhteşem İslam mimarisi ve halısıyla ünlü."
        },
        {
          "placeName": "Mutrah Çarşısı",
          "description": "Tarihi bir pazar yeri, tütsü ve yerel hediyelikler bulabilirsiniz."
        },
        {
          "placeName": "Wadi Shab",
          "description": "Doğal yüzme havuzları, yürüyüş rotaları ve şelaleler."
        },
        {
          "placeName": "Nizwa Kalesi",
          "description": "Tarihi kale ve Cuma günleri kurulan canlı keçi pazarı."
        }
      ],
      "importantNumbers": {
        "police": "9999",
        "ambulance": "9999",
        "fire": "9999",
        "generalEmergency": "9999"
      },
      "thingsToKnow": {
        "warnings": "Kıyafet konusunda muhafazakâr giyinmek saygı açısından önemli.",
        "transportation": "Araç kiralama yaygın, toplu taşıma sınırlı. Taksi ücretleri yüksek olabilir.",
        "internetProviders": [
          "Omantel",
          "Ooredoo Oman",
          "Vodafone (yeni giriş)"
        ],
        "turkishProvidersUsage": "Roaming mevcut, ancak pahalı. Yerel SIM alınabilir veya eSIM seçenekleri var."
      },
      "famousDishes": [
        "Shuwa (gömlekte pişen et yemeği)",
        "Majboos (etli pilav)",
        "Halwa (Oman helvası)",
        "Mashuai (ızgara kral balığı)"
      ]
    },
    {
      "id": 34,
      "countryName": "Palestinian Territories",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "İsrail sınır yetkilileri belirliyor",
      "notes": "Giriş ve çıkışlar İsrail kontrolündedir, farklı kısıtlamalar olabilir.",
      "capital": {
        "name": "Resmî başkent Doğu Kudüs olarak kabul edilir (uluslararası statü tartışmalı)",
        "symbol": "Mescid-i Aksa ve Kubbetüs Sahra silueti"
      },
      "touristicPlaces": [
        {
          "placeName": "Kudüs Eski Şehir (Doğu Kudüs)",
          "description": "Tarihi surlar, kutsal mekanlar ve geleneksel pazarlar."
        },
        {
          "placeName": "Betlehem – Doğuş Kilisesi",
          "description": "Hz. İsa'nın doğum yeri olduğuna inanılan tarihi kilise."
        },
        {
          "placeName": "El-Halil (Hebron) – İbrahim Camii",
          "description": "Hz. İbrahim'in türbesinin bulunduğu, Müslümanlar ve Yahudiler için kutsal mekân."
        },
        {
          "placeName": "Ramallah",
          "description": "Filistin'in kültürel ve ekonomik merkezlerinden biri, modern kafe ve restoranlar."
        }
      ],
      "importantNumbers": {
        "police": "100 (İsrail polisi)",
        "ambulance": "101 (Kızılay/Kızılhaç veya Magen David Adom)",
        "fire": "102",
        "generalEmergency": "101 veya 911 benzeri hatlar (bölgeye göre değişir)"
      },
      "thingsToKnow": {
        "warnings": "Bölgede siyasi gerilim yüksektir, seyahat uyarılarını kontrol edin.",
        "transportation": "Servis taksiler (dolmuş), otobüsler ve özel transferler. İsrail kontrol noktalarını geçerken beklemeler olabilir.",
        "internetProviders": [
          "Jawwal",
          "Wataniya Mobile (Ooredoo)",
          "Bazı bölgelerde İsrail operatörleri de çekebilir"
        ],
        "turkishProvidersUsage": "Roaming genelde İsrail şebekesi üzerinden sağlanır. Filistin SIM kartları daha ekonomik olabilir."
      },
      "famousDishes": [
        "Maklube",
        "Musakhan (tavuk ve soğanlı ekmek)",
        "Falafel",
        "Kanafeh (peynir tatlısı)"
      ]
    },
    {
      "id": 35,
      "countryName": "Panama",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "90 gün",
      "notes": "Gidiş-dönüş bileti ve yeterli para kanıtı gerekebilir.",
      "capital": {
        "name": "Panama City",
        "symbol": "Şehrin armasında Panama Kanalı ve gemi sembolü"
      },
      "touristicPlaces": [
        {
          "placeName": "Panama Kanalı – Miraflores Locks",
          "description": "Dünyanın mühendislik harikası kanal sistemi."
        },
        {
          "placeName": "Casco Viejo",
          "description": "Tarihi şehir merkezi, kolonyal binalar ve renkli sokaklar."
        },
        {
          "placeName": "Bocas del Toro",
          "description": "Karayip Denizi'nde mercan resifleri, dalış ve plaj keyfi."
        },
        {
          "placeName": "San Blas Adaları (Guna Yala)",
          "description": "Guna Yerlilerinin yönettiği ıssız tropik adalar topluluğu."
        }
      ],
      "importantNumbers": {
        "police": "104",
        "ambulance": "911",
        "fire": "103",
        "generalEmergency": "911"
      },
      "thingsToKnow": {
        "warnings": "Şehir merkezleri güvenli, ancak gece tek başınıza ıssız bölgelerde bulunmaktan kaçının.",
        "transportation": "Metro (Panama City'de) ve otobüs kullanımı yaygın, taksi veya Uber de mevcut.",
        "internetProviders": [
          "Cable & Wireless",
          "Movistar",
          "Claro",
          "Digicel"
        ],
        "turkishProvidersUsage": "Roaming kullanılabilir, ancak yerel hat almayı düşünebilirsiniz."
      },
      "famousDishes": [
        "Sancocho de Gallina (tavuk çorbası)",
        "Ropa Vieja (didiklenmiş et yemeği)",
        "Patacones (kızarmış muz dilimleri)",
        "Ceviche (limonlu deniz ürünleri)"
      ]
    },
    {
      "id": 36,
      "countryName": "Paraguay",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "90 gün",
      "notes": "Pasaport geçerliliği 6 ay önerilir.",
      "capital": {
        "name": "Asunción",
        "symbol": "Kentin armasında palmiye ağacı ve yıldız sembolü"
      },
      "touristicPlaces": [
        {
          "placeName": "Asunción Tarihi Merkez",
          "description": "Kolonyal binalar, Palacio de López ve Ulusal Kahramanlar Panteonu."
        },
        {
          "placeName": "Itaipú Barajı",
          "description": "Dünyanın en büyük hidroelektrik barajlarından biri, Paraguay-Brezilya sınırında."
        },
        {
          "placeName": "Jesuit Misyonları (Trinidad ve Jesús)",
          "description": "UNESCO Dünya Mirası yerleri, tarihi misyon kalıntıları."
        },
        {
          "placeName": "Encarnación",
          "description": "Karadeniz tipi plajlarıyla da bilinen turistik kıyı kenti."
        }
      ],
      "importantNumbers": {
        "police": "911",
        "ambulance": "141",
        "fire": "131",
        "generalEmergency": "911"
      },
      "thingsToKnow": {
        "warnings": "Büyük şehirlerde yankesiciliğe dikkat edilmesi önerilir.",
        "transportation": "Otobüsler yaygın, taksi ve araç kiralama seçenekleri mevcut.",
        "internetProviders": [
          "Tigo",
          "Claro",
          "Personal",
          "Vox"
        ],
        "turkishProvidersUsage": "Roaming yapılabilir, maliyetli olabileceğinden yerel SIM'i düşünün."
      },
      "famousDishes": [
        "Chipa (peynirli ekmek)",
        "Sopa Paraguaya (katı mısır ekmeği)",
        "Mandioca (yerel manyok)",
        "Bori Bori (topçuklu çorba)"
      ]
    },
    {
      "id": 37,
      "countryName": "Qatar",
      "visaType": "Vize on Arrival",
      "maxStay": "30 gün",
      "notes": "30 gün daha uzatılabilir. Pasaport en az 6 ay geçerli olmalı.",
      "capital": {
        "name": "Doha",
        "symbol": "Doha silüetinde gökdelenler ve yelkenli (dhow) botu sembolü"
      },
      "touristicPlaces": [
        {
          "placeName": "Souq Waqif",
          "description": "Geleneksel pazar yeri, baharatlar, kıyafetler ve yerel restoranlar."
        },
        {
          "placeName": "İslami Sanat Müzesi",
          "description": "Dünyaca ünlü mimar IM Pei tarafından tasarlanan müze."
        },
        {
          "placeName": "The Pearl-Qatar",
          "description": "Lüks yapay ada, alışveriş ve marina alanı."
        },
        {
          "placeName": "Katara Kültür Köyü",
          "description": "Sanat galerileri, tiyatrolar ve restoranların bulunduğu kültür merkezi."
        }
      ],
      "importantNumbers": {
        "police": "999",
        "ambulance": "999",
        "fire": "999",
        "generalEmergency": "999"
      },
      "thingsToKnow": {
        "warnings": "Kıyafet kurallarına dikkat edin. Halk arasında alkol tüketimi kısıtlıdır.",
        "transportation": "Metro ve otobüs sistemi gelişiyor. Taksiler (Karwa) ve Uber kullanılabiliyor.",
        "internetProviders": [
          "Ooredoo",
          "Vodafone Qatar"
        ],
        "turkishProvidersUsage": "Roaming mümkündür, ancak pahalı olabilir. Kısa süreli yerel data paketleri de var."
      },
      "famousDishes": [
        "Machbous (baharatlı et veya balık pilavı)",
        "Harees (buğday ve et ezmesi)",
        "Balaleet (şekerli erişte, omlet ile)",
        "Luqaimat (bal şerbetli tatlı topçuklar)"
      ]
    },
    {
      "id": 38,
      "countryName": "Serbia",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "90 gün",
      "notes": "6 aylık dönemde 90 gün kalış hakkı.",
      "capital": {
        "name": "Belgrad",
        "symbol": "Belgrad Kalesi ve Tuna-Sava Nehir kavşağı"
      },
      "touristicPlaces": [
        {
          "placeName": "Kalemegdan",
          "description": "Tarihi kale ve park, Tuna ve Sava nehirlerinin birleştiği nokta."
        },
        {
          "placeName": "Skadarlija",
          "description": "Bohem sokak, geleneksel restoranlar ve kafeler."
        },
        {
          "placeName": "Novi Sad – Petrovaradin Kalesi",
          "description": "EXIT Müzik Festivali'nin düzenlendiği ünlü tarihi kale."
        },
        {
          "placeName": "Drvengrad (Mecavnik)",
          "description": "Emir Kusturica'nın inşa ettiği geleneksel ahşap köy, Sırbistan'ın kırsal bölgelerinde."
        }
      ],
      "importantNumbers": {
        "police": "192",
        "ambulance": "194",
        "fire": "193",
        "generalEmergency": "112"
      },
      "thingsToKnow": {
        "warnings": "Genelde güvenli, ama gece kulüpleri çıkışında dikkatli olun.",
        "transportation": "Otobüs ve tren yaygın. Şehir içi otobüs ve tramvay bulunur. Taksiye binmeden önce fiyat sormak iyi olur.",
        "internetProviders": [
          "Telenor",
          "MTS",
          "VIP Mobile (A1)"
        ],
        "turkishProvidersUsage": "Roaming kullanılabilir, ancak yerel SIM paketleri daha ekonomik olabilir."
      },
      "famousDishes": [
        "Ćevapi (köfte benzeri et)",
        "Pljeskavica (Sırp köftesi)",
        "Sarma (lahana sarması)",
        "Kaymak (kremsi süt ürünü)"
      ]
    },
    {
      "id": 39,
      "countryName": "Singapore",
      "visaType": "Vize Gerekmiyor (with conditions)",
      "maxStay": "30 gün",
      "notes": "Sıkı giriş kuralları var. 'Visa-Free Transit Facility' koşullarını kontrol edin.",
      "capital": {
        "name": "Singapur Şehri-Devleti",
        "symbol": "Aslan balık heykeli (Merlion) kentin simgesi"
      },
      "touristicPlaces": [
        {
          "placeName": "Marina Bay Sands",
          "description": "Ünlü otel, gökdelen, gökyüzü havuzu ve alışveriş merkezi."
        },
        {
          "placeName": "Gardens by the Bay",
          "description": "Dev ağaç heykelleri (Supertree Grove) ve çiçek kubbesi."
        },
        {
          "placeName": "Sentosa Adası",
          "description": "Plajlar, Universal Studios ve eğlence merkezleri."
        },
        {
          "placeName": "Chinatown & Little India",
          "description": "Etnik mahallelerde yemek ve kültürel çeşitlilik."
        }
      ],
      "importantNumbers": {
        "police": "999",
        "ambulance": "995",
        "fire": "995",
        "generalEmergency": "999"
      },
      "thingsToKnow": {
        "warnings": "Çok sıkı cezalar var (çevre kirliliği, sakız çiğneme, vb.).",
        "transportation": "MRT (metro) ve otobüs ağı çok gelişmiş. Taksi ve Grab kullanımı da kolay.",
        "internetProviders": [
          "Singtel",
          "StarHub",
          "M1",
          "TPG"
        ],
        "turkishProvidersUsage": "Roaming pahalı olabilir, yerel SIM veya turist eSIM'ler uygun fiyatlı."
      },
      "famousDishes": [
        "Hainanese Chicken Rice (tavuk ve pilav)",
        "Chili Crab (biberli yengeç)",
        "Laksa (Hindistan cevizi sütlü erişte çorbası)",
        "Satay (ızgara et şiş)"
      ]
    },
    {
      "id": 40,
      "countryName": "South Africa",
      "visaType": "Vize on Arrival (Visa Exemption)",
      "maxStay": "30 gün",
      "notes": "Pasaportta en az 1 boş sayfa olmalı.",
      "capital": {
        "name": "Pretoria (idari), Cape Town (yasama), Bloemfontein (yargı)",
        "symbol": "Cape Town için Masa Dağı, Pretoria için Birlik Binaları"
      },
      "touristicPlaces": [
        {
          "placeName": "Cape Town – Table Mountain",
          "description": "Teleferikle çıkılabilen ikonik dağ ve panoramik manzara."
        },
        {
          "placeName": "Kruger Ulusal Parkı",
          "description": "Büyük 5'li (aslan, fil, bufalo, leopar, gergedan) safari deneyimi."
        },
        {
          "placeName": "Johannesburg – Apartheid Müzesi",
          "description": "Güney Afrika'nın yakın tarihini anlatan önemli müze."
        },
        {
          "placeName": "Garden Route",
          "description": "Muhteşem kıyı manzaraları, yürüyüş yolları ve küçük kasabalar."
        }
      ],
      "importantNumbers": {
        "police": "10111",
        "ambulance": "10177",
        "fire": "10177",
        "generalEmergency": "112"
      },
      "thingsToKnow": {
        "warnings": "Büyük şehirlerde suç oranı yüksektir. Güvenlik önlemlerine dikkat edin.",
        "transportation": "Araç kiralama yaygın, otobüs ve taksiler şehirlerde var. Uber güvenilir bir seçenek.",
        "internetProviders": [
          "Vodacom",
          "MTN",
          "Cell C",
          "Telkom"
        ],
        "turkishProvidersUsage": "Roaming mevcut, ancak pahalı olabilir. Yerel SIM ile daha uygun internet erişimi sağlanabilir."
      },
      "famousDishes": [
        "Biltong (kurutulmuş et)",
        "Bobotie (kıyma ve baharatlı fırın yemeği)",
        "Bunny Chow (ekmek içinde körili et veya sebze)",
        "Pap ve Chakalaka (mısır lapası ve sebzeli sos)"
      ]
    },
    {
      "id": 41,
      "countryName": "South Korea",
      "visaType": "Vize Gerekmiyor (K-ETA uygulanabilir)",
      "maxStay": "90 gün",
      "notes": "K-ETA elektronik seyahat izni gerekebilir; güncel kuralları kontrol edin.",
      "capital": {
        "name": "Seul",
        "symbol": "Seul Kulesi (Namsan Kulesi) ve Han Nehri simgesi"
      },
      "touristicPlaces": [
        {
          "placeName": "Gyeongbokgung Sarayı",
          "description": "Joseon Hanedanlığı döneminden kalma, en büyük saray komplekslerinden biri."
        },
        {
          "placeName": "Myeongdong",
          "description": "Popüler alışveriş semti, Kore kozmetiği ve sokak yemeği cenneti."
        },
        {
          "placeName": "Busan – Haeundae Plajı",
          "description": "Ülkenin en ünlü plajı, yaz turizminin gözdesi."
        },
        {
          "placeName": "Jeju Adası",
          "description": "Volkanik doğal güzellikler, plajlar ve Hallasan Dağı."
        }
      ],
      "importantNumbers": {
        "police": "112",
        "ambulance": "119",
        "fire": "119",
        "generalEmergency": "119"
      },
      "thingsToKnow": {
        "warnings": "Genel olarak güvenli, ancak kalabalık bölgelerde dikkatli olun.",
        "transportation": "Metro ağı çok geniş, T-money kartla otobüs ve metro kullanımı yaygın.",
        "internetProviders": [
          "SK Telecom",
          "KT (Olleh)",
          "LG U+"
        ],
        "turkishProvidersUsage": "K-ETA gerekli olabilir. Roaming fiyatları yüksek, yerel SIM veya Wi-Fi router kiralama popüler."
      },
      "famousDishes": [
        "Kimchi",
        "Bibimbap (karışık sebzeli pilav)",
        "Bulgogi (marineli et)",
        "Tteokbokki (acı biber soslu pirinç keki)"
      ]
    },
    {
      "id": 42,
      "countryName": "Sudan",
      "visaType": "Vize on Arrival",
      "maxStay": "30 gün",
      "notes": "Her zaman garanti değil; önceden vize daha güvenli olabilir.",
      "capital": {
        "name": "Hartum",
        "symbol": "Nil Nehri birleşme noktası ve Antik Nubia sembolleri"
      },
      "touristicPlaces": [
        {
          "placeName": "Meroe Piramitleri",
          "description": "Antik Kraliçe ve kral mezarları, Sudan'ın UNESCO mirası."
        },
        {
          "placeName": "Hartum – Nil Nehirlerinin Birleştiği Yer",
          "description": "Beyaz ve Mavi Nil'in birleştiği noktada şehrin sembolik manzarası."
        },
        {
          "placeName": "Sufi Derviş Gösterileri (Omdurman)",
          "description": "Cuma akşamları gerçekleşen renkli zikir törenleri."
        },
        {
          "placeName": "Nubian Çölü",
          "description": "Bozulmamış çöl manzaraları ve yerel kabile kültürü."
        }
      ],
      "importantNumbers": {
        "police": "999",
        "ambulance": "333",
        "fire": "998",
        "generalEmergency": "999"
      },
      "thingsToKnow": {
        "warnings": "Siyasi istikrarsızlık ve çatışmalar olabilir, güncel uyarıları takip edin. Fotoğraf çekiminde izin almak önemli.",
        "transportation": "Otobüs ve minibüs yaygın, ancak altyapı sınırlı. Şehirlerarası seyahat zorlu olabilir.",
        "internetProviders": [
          "Zain Sudan",
          "MTN Sudan",
          "Sudani"
        ],
        "turkishProvidersUsage": "Roaming sınırlı olabilir. Yerel SIM daha ucuz ve genelde daha güvenilir."
      },
      "famousDishes": [
        "Ful Medames (bakla yemeği)",
        "Kisra (ince ekmek)",
        "Asida (buğday veya darı lapası)",
        "Gurasa (kalın gözleme benzeri ekmek)"
      ]
    },
    {
      "id": 43,
      "countryName": "Taiwan",
      "visaType": "e-Vize (bazı kategoriler) veya Vize on Arrival",
      "maxStay": "14 gün (VoA)",
      "notes": "Kurallar değişebildiğinden seyahat öncesi teyit edin.",
      "capital": {
        "name": "Taipei",
        "symbol": "Taipei 101 gökdeleni"
      },
      "touristicPlaces": [
        {
          "placeName": "Taipei 101",
          "description": "Bir zamanlar dünyanın en yüksek binası, gözlem katı bulunur."
        },
        {
          "placeName": "Chiang Kai-shek Anıt Salonu",
          "description": "Tarihi ve politik sembol, geniş bir meydan ve bahçeyle çevrili."
        },
        {
          "placeName": "Taroko Boğazı",
          "description": "Mermer kanyonlar, dağ geçitleri ve nehirleriyle ünlü milli park."
        },
        {
          "placeName": "Sun Moon Lake",
          "description": "Tayvan'ın en büyük gölü, bisiklet ve tekne turları için popüler."
        }
      ],
      "importantNumbers": {
        "police": "110",
        "ambulance": "119",
        "fire": "119",
        "generalEmergency": "119"
      },
      "thingsToKnow": {
        "warnings": "Tayvan genel olarak güvenlidir, ancak tayfun dönemlerinde hava durumunu takip edin.",
        "transportation": "MRT (metro), otobüs ve U-Bike kiralama oldukça kolay. Hızlı tren (HSR) şehirlerarası seyahatte çok hızlı.",
        "internetProviders": [
          "Chunghwa Telecom",
          "Taiwan Mobile",
          "FarEasTone"
        ],
        "turkishProvidersUsage": "Roaming mümkün, ama pahalı olabilir. Turist SIM veya eSIM yaygın ve ucuz."
      },
      "famousDishes": [
        "Beef Noodle Soup (etli erişte çorbası)",
        "Xiao Long Bao (sulu Çin mantısı)",
        "Bubble Tea (köpüklü çay)",
        "Oyster Omelet (istiridyeli omlet)"
      ]
    },
    {
      "id": 44,
      "countryName": "Tajikistan",
      "visaType": "e-Vize veya Vize on Arrival",
      "maxStay": "45 gün",
      "notes": "GBAO izni, Pamir bölgesine seyahat için gerekli olabilir.",
      "capital": {
        "name": "Duşanbe",
        "symbol": "Duşanbe'nin bayrak direği ve ulusal semboller"
      },
      "touristicPlaces": [
        {
          "placeName": "Pamir Dağları",
          "description": "Dağcılık, trekking ve nefes kesici doğal güzellikler."
        },
        {
          "placeName": "Iskanderkul Gölü",
          "description": "Efsanevi göl, dağ manzaralarıyla ünlü, kamp ve yürüyüş için ideal."
        },
        {
          "placeName": "Duşanbe – Rudaki Caddesi",
          "description": "Şehrin ana caddesi, parklar ve anıtlarla çevrili."
        },
        {
          "placeName": "Hissar Kalesi",
          "description": "Tarihi kale kalıntıları ve avlu."
        }
      ],
      "importantNumbers": {
        "police": "02",
        "ambulance": "03",
        "fire": "01",
        "generalEmergency": "112 (yeni sistem)"
      },
      "thingsToKnow": {
        "warnings": "Kırsal bölgelerde altyapı zayıf, yollarda dikkatli olun. Sınır bölgeleri için izin gerekebilir.",
        "transportation": "Şehirlerarası ulaşım genelde shared taxi veya minibüsle yapılır. Dağ yolları zorlu olabilir.",
        "internetProviders": [
          "Tcell",
          "Babilon-M",
          "Megafon Tajikistan",
          "Beeline"
        ],
        "turkishProvidersUsage": "Roaming mevcut, ama sınırlı. Yerel SIM daha uygun fiyatlı olabilir."
      },
      "famousDishes": [
        "Plov (pilav ve et)",
        "Qurutob (yoğurtlu ekmek salatası)",
        "Laghman (el açması erişte çorbası)",
        "Shashlik (ızgara et şiş)"
      ]
    },
    {
      "id": 45,
      "countryName": "Thailand",
      "visaType": "Vize on Arrival",
      "maxStay": "15 gün",
      "notes": "VoA ücreti ve belgeler gerekli olabilir.",
      "capital": {
        "name": "Bangkok",
        "symbol": "Tayland'ın fil sembolü ve Wat Arun silueti"
      },
      "touristicPlaces": [
        {
          "placeName": "Bangkok – Grand Palace",
          "description": "Tarihi saray ve Zümrüt Buda Tapınağı ile ünlü kompleks."
        },
        {
          "placeName": "Phuket",
          "description": "Plajlar, gece hayatı ve ada turlarıyla ünlü turizm merkezi."
        },
        {
          "placeName": "Chiang Mai",
          "description": "Dağ tapınakları, fil kampları ve geleneksel pazarlar."
        },
        {
          "placeName": "Ayutthaya Tarihi Parkı",
          "description": "UNESCO Mirası, antik tapınak kalıntıları ve saraylar."
        }
      ],
      "importantNumbers": {
        "police": "191",
        "ambulance": "1669",
        "fire": "199",
        "generalEmergency": "191"
      },
      "thingsToKnow": {
        "warnings": "Dolandırıcılıklara karşı dikkatli olun. Tapınaklarda saygılı giyim zorunlu.",
        "transportation": "Tuk-tuk, taksi ve BTS Skytrain (Bangkok). Şehirlerarası otobüs ve tren yaygın.",
        "internetProviders": [
          "AIS",
          "DTAC",
          "TrueMove H"
        ],
        "turkishProvidersUsage": "Roaming ücretli. Turist SIM kartlar havalimanlarında kolayca edinilebilir."
      },
      "famousDishes": [
        "Pad Thai (erişte yemeği)",
        "Tom Yum Soup (acı-ekşi çorba)",
        "Green/Red Curry (köri yemekleri)",
        "Mango Sticky Rice (tatlı pirinç ve mango)"
      ]
    },
    {
      "id": 46,
      "countryName": "Tunisia",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "90 gün",
      "notes": "Konaklama kanıtı talep edilebilir. Pasaport 6 ay geçerli olmalı.",
      "capital": {
        "name": "Tunus",
        "symbol": "Zeytin ağacı ve minare silueti içeren şehir amblemi"
      },
      "touristicPlaces": [
        {
          "placeName": "Kartaca Antik Kenti",
          "description": "Fenike ve Roma kalıntılarıyla ünlü tarihi bölge."
        },
        {
          "placeName": "Sidi Bou Said",
          "description": "Mavi-beyaz boyalı evleriyle turistik sahil kasabası."
        },
        {
          "placeName": "Bardo Müzesi",
          "description": "Zengin Roma mozaik koleksiyonuyla bilinen ulusal müze."
        },
        {
          "placeName": "Sahara Çölü – Douz",
          "description": "Çöl safarisi ve geleneksel Berberi kültürü deneyimi."
        }
      ],
      "importantNumbers": {
        "police": "197",
        "ambulance": "190",
        "fire": "198",
        "generalEmergency": "112"
      },
      "thingsToKnow": {
        "warnings": "Bazı bölgelerde terör tehdidi olabilir, seyahat uyarılarını kontrol edin.",
        "transportation": "Taksi, louage (paylaşımlı minibüs) ve tren seçenekleri var. Pazarlık yapmak gerekebilir.",
        "internetProviders": [
          "Tunisie Telecom",
          "Ooredoo",
          "Orange"
        ],
        "turkishProvidersUsage": "Roaming mümkün, ancak pahalı. Yerel SIM kart ile daha uygun internet paketleri edinilebilir."
      },
      "famousDishes": [
        "Couscous (sebzeli veya etli)",
        "Brik (yumurtalı ve ton balıklı börek)",
        "Shakshuka (domates ve biberli yumurta yemeği)",
        "Harissa (acı biber ezmesi)"
      ]
    },
    {
      "id": 47,
      "countryName": "Ukraine",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "90 gün",
      "notes": "180 günlük süre içinde 90 gün. Son durumu güncel koşullara göre takip edin.",
      "capital": {
        "name": "Kiev (Kyiv)",
        "symbol": "Kiev Pechersk Lavra (Altın Kubbeli Manastır) ve Altın Kapı sembolleri"
      },
      "touristicPlaces": [
        {
          "placeName": "Kiev – Kreschatik Caddesi ve Bağımsızlık Meydanı",
          "description": "Şehrin kalbi, Maidan olarak bilinen tarihi meydan."
        },
        {
          "placeName": "Lviv Eski Şehir",
          "description": "UNESCO Mirası, Avrupa mimarisi ve kafe kültürüyle ünlü."
        },
        {
          "placeName": "Odessa",
          "description": "Karadeniz kıyısında ünlü liman kenti, Potemkin Merdivenleri.",
        },
        {
          "placeName": "Çernobil Turu",
          "description": "Terk edilmiş Pripyat kenti ve rehberli nükleer felaket bölgesi gezileri."
        }
      ],
      "importantNumbers": {
        "police": "102",
        "ambulance": "103",
        "fire": "101",
        "generalEmergency": "112"
      },
      "thingsToKnow": {
        "warnings": "Ülkenin doğu bölgelerinde çatışma riski var, güncel durum takibi önemli.",
        "transportation": "Şehirlerde metro (Kiev, Harkiv), otobüs ve troleybüs mevcut. Trenle şehirlerarası ulaşım yaygın.",
        "internetProviders": [
          "Kyivstar",
          "Vodafone Ukraine",
          "lifecell"
        ],
        "turkishProvidersUsage": "Roaming genellikle aktif. Yerel SIM verileri daha ucuz sağlayabilir."
      },
      "famousDishes": [
        "Borsch (pancar çorbası)",
        "Varenyky (mantı benzeri hamur)",
        "Chicken Kiev (tereyağlı tavuk rulosu)",
        "Salo (tuzlanmış domuz yağı)"
      ]
    },
    {
      "id": 48,
      "countryName": "Uruguay",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "90 gün",
      "notes": "Pasaport 6 ay geçerli olmalı. Kalış uzatması bazen mümkün.",
      "capital": {
        "name": "Montevideo",
        "symbol": "Şehrin armasında kale ve güneş sembolü"
      },
      "touristicPlaces": [
        {
          "placeName": "Ciudad Vieja (Eski Şehir)",
          "description": "Kolonyal mimari, restoranlar ve tarihi binalar."
        },
        {
          "placeName": "Pocitos Plajı",
          "description": "Montevideo şehir içinde kumsal keyfi, yürüyüş yolları."
        },
        {
          "placeName": "Punta del Este",
          "description": "Lüks tatil beldesi, plajlar ve gece hayatı."
        },
        {
          "placeName": "Colonia del Sacramento",
          "description": "Portekiz kolonyal geçmişi, Arnavutkaldırım sokaklarıyla UNESCO Dünya Mirası."
        }
      ],
      "importantNumbers": {
        "police": "911",
        "ambulance": "105",
        "fire": "104",
        "generalEmergency": "911"
      },
      "thingsToKnow": {
        "warnings": "Genel olarak güvenli, büyük şehirlerde yankesiciliğe karşı dikkatli olun.",
        "transportation": "Şehir içi otobüs ağları iyi, taksiler de mevcut. Şehirlerarası otobüs konforlu ve yaygın.",
        "internetProviders": [
          "Antel",
          "Movistar",
          "Claro"
        ],
        "turkishProvidersUsage": "Roaming aktif olabilir, ama pahalı. Yerel SIM almak kolay."
      },
      "famousDishes": [
        "Asado (mangalda et)",
        "Chivito (etli sandviç)",
        "Mate (bitki çayı)",
        "Tortas Fritas (kızarmış hamur)"
      ]
    },
    {
      "id": 49,
      "countryName": "Özbekistan",
      "visaType": "Vize Gerekmiyor",
      "maxStay": "30 gün",
      "notes": "Türk vatandaşları için vizesiz rejim geçerli.",
      "capital": {
        "name": "Taşkent",
        "symbol": "Taşkent Kulesi ve Timurlenk heykeli"
      },
      "touristicPlaces": [
        {
          "placeName": "Semerkant – Registan Meydanı",
          "description": "İslam mimarisinin zirvesi kabul edilen medreseler."
        },
        {
          "placeName": "Buhara Eski Şehir",
          "description": "UNESCO Mirası, tarihi camiler, türbeler ve çarşılar."
        },
        {
          "placeName": "Hiva (Khiva) – İçan Kale",
          "description": "Tamamen surlarla çevrili, zamana yolculuk hissi veren antik kent."
        },
        {
          "placeName": "Taşkent – Teleshayakh Kütüphanesi",
          "description": "Dünyanın en eski Kur'an nüshası olduğu düşünülen eserin sergilendiği yer."
        }
      ],
      "importantNumbers": {
        "police": "102",
        "ambulance": "103",
        "fire": "101",
        "generalEmergency": "112"
      },
      "thingsToKnow": {
        "warnings": "Para birimi (Som) nakit kullanımı yaygındır, döviz bozdururken lisanslı büroları tercih edin.",
        "transportation": "Şehirlerarası tren (Afrosiyob hızlı treni) çok konforlu. Taksiler yaygın.",
        "internetProviders": [
          "Uztelecom",
          "Ucell",
          "Beeline Uzbekistan",
          "Mobiuz"
        ],
        "turkishProvidersUsage": "Roaming kullanılabilir. Yerel SIM kartlar data için uygun olabilir."
      },
      "famousDishes": [
        "Plov (Özbek pilavı)",
        "Shashlik (ızgara et şiş)",
        "Lagman (el açması erişte yemeği)",
        "Samsa (fırında börek)"
      ]
    }
  ]
  

  private favoritesSubject = new BehaviorSubject<Set<string>>(new Set<string>());
  favorites$ = this.favoritesSubject.asObservable();

  constructor() {}

  getCountries(): Country[] {
    return this.countriesData;
  }

  toggleFavorite(countryName: string) {
    const currentFavorites = this.favoritesSubject.value;
    if (currentFavorites.has(countryName)) {
      currentFavorites.delete(countryName);
    } else {
      currentFavorites.add(countryName);
    }
    this.favoritesSubject.next(new Set(currentFavorites));
  }

  isFavorite(countryName: string): boolean {
    return this.favoritesSubject.value.has(countryName);
  }
}

