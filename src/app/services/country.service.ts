import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

export interface Country {
  id: number;
  countryName: string;
  flag: string;  // emoji flag
  currency: {
    code: string;
    name: string;
    symbol: string;
    rate: number;  // rate to TRY
    lastUpdate?: string;  // Optional field for rate update date
    oneUnitInTRY?: string;  // Make it optional with '?'
  };
  languages: string[];
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
    imageUrl: string; // Add this line
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
  famousDishes: Array<{
    name: string;
    imageUrl: string; // Add this line
  }>;
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private STORAGE_KEY = 'favoriteCountries';
  private countriesData: Country[] = [
    {
      "id": 1,
      "countryName": "Arnavutluk",
      "flag": "🇦🇱",
      "currency": {
        "code": "ALL",
        "name": "Arnavut Leki",
        "symbol": "L",
        "rate": 0.31,
        "oneUnitInTRY": "1 ALL = 0.31 TL",
        "lastUpdate": "2023-04-01"
      },
      "languages": ["Arnavutça"],
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
    "description": "Tiran'ın kalbinde tarihi ve kültürel buluşma noktası.",
    "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.nB-ainpaS_lk7iu0gdTvUwHaE6&pid=Api"
  },
  {
    "placeName": "Et'hem Bey Camii",
    "description": "Osmanlı döneminden kalma ünlü cami ve Tiran'ın simgelerinden biri.",
    "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.w17wWGeApiUFFmWt3tDDQAHaHA&pid=Api"
  },
  {
    "placeName": "Bunk'Art Müzesi",
    "description": "Eski sığınaktan dönüştürülmüş, Arnavutluk'un yakın tarihine ışık tutan bir müze.",
    "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.BG7_CR2aomlptuhacR4sKAHaFX&pid=Api"
  },
  {
    "placeName": "Kruja Kalesi",
    "description": "Skanderbeg'in kalesi olarak bilinen, dağ manzaralı tarihi bir yapı.",
    "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.6jp7ei-cX1pL-W-_lw8GBQHaE8&pid=Api"
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
        "turkishProvidersUsage": "Türk operatörlerin (Turkcell, Vodafone, Türk Telekom) uluslararası dolaşım paketleri Arnavutluk'ta geçerlidir. Telekomünikasyon ücretleri dikkate alınmalıdır."
      },
  "famousDishes": [
  {
    "name": "Tavë Kosi (yoğurtlu kuzu güveç)",
    "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.MszKoznvelIj6VGzo1617wHaLH&pid=Api"
  },
  {
    "name": "Byrek (ince yufkalı börek)",
    "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.UR3qlKB4MyPNa5sj7O_rmQHaEK&pid=Api"
  },
  {
    "name": "Fërgesë (biberli ve peynirli meze)",
    "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.zxCs5xxamTGDYx28cEx3XwHaE8&pid=Api"
  },
  {
    "name": "Qifqi (pirinç köftesi)",
    "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.s1Q8hnSOEOvsVL5N_adYlgHaD4&pid=Api"
  }
]



    },
    {
      "id": 2,
      "countryName": "Azerbaycan",
      "flag": "🇦🇿",
      "currency": {
        "code": "AZN",
        "name": "Azerbaycan Manatı",
        "symbol": "₼",
        "rate": 18.75,
        "oneUnitInTRY": "1 AZN = 18.75 TL",
        "lastUpdate": "2023-04-01"
      },
      "languages": ["Azerice", "Rusça"],
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
      "description": "UNESCO Dünya Mirası listesinde yer alan surlarla çevrili tarihi merkez.",
      "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.BjxCLZjwBSbzottEC5SVPAHaE7&pid=Api"
    },
    {
      "placeName": "Alev Kuleleri",
      "description": "Bakü silüetinin modern ve ikonik yapıları.",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.M8aU67N5aq9YpTTeqFB0sAHaF6&pid=Api"
    },
    {
      "placeName": "Haydar Aliyev Merkezi",
      "description": "Zaha Hadid tasarımı, kültürel etkinliklerin düzenlendiği modern mimari eser.",
      "imageUrl": "https://tse3.mm.bing.net/th?id=OIF.16m4U%2b9CL2DDQ1W%2fgxmJgA&pid=Api"
    },
    {
      "placeName": "Gobustan Milli Parkı",
      "description": "Tarih öncesi kaya resimleri ve çamur volkanlarıyla ünlü doğa ve kültür parkı.",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.qFKpo5zm0O9fg7YmUjI-YAHaEK&pid=Api"
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
        "turkishProvidersUsage": "Turkcell, Vodafone ve Türk Telekom'un kendi hattınızın paketleri geçerli. Yerel SIM almak da kolay. Telekomünikasyon ücretleri göz önünde bulundurulmalıdır."
      },
      "famousDishes": [
    {
      "name": "Plov (pilav)",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.iEDfkEX2IM0u801VbFxr3gHaLH&pid=Api"
    },
    {
      "name": "Kebap (çeşitli et kebapları)",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.5dBLl4MENDZUiFMNtwg7twHaE7&pid=Api"
    },
    {
      "name": "Düşbere (küçük mantı çorbası)",
      "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.wTIAxsc6GhECL3m5oTqrYgHaEo&pid=Api"
    },
    {
      "name": "Bakü Baklavası",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.MzJVpiOGzWL40qvJapLvggHaE8&pid=Api"
    }
  ]
    },
    {
      "id": 3,
      "countryName": "Bahamalar",
      "flag": "🇧🇸",
      "currency": {
        "code": "BSD",
        "name": "Bahama Doları",
        "symbol": "$",
        "rate": 31.85
      },
      "languages": ["İngilizce"],
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
          "description": "Beyaz kumlu sahil ve lüks otellerin bulunduğu popüler turistik bölge.",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.sVh7Ql4CwHjVq-l3VEc7bQHaE8&pid=Api"
        },
        {
          "placeName": "Paradise Island",
          "description": "Atlantis Resort ve eğlence merkezleriyle ünlü ada.",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.m2ELjHUXkxpEjnOsuJ0gdgHaE8&pid=Api"
        },
        {
          "placeName": "Queen's Staircase",
          "description": "Tarihi kayaya oyulmuş merdivenler ve Fort Fincastle yakınları.",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.vrUuEIQ6QdLhbMsI-CJi_QHaE5&pid=Api"
        },
        {
          "placeName": "Blue Lagoon Island",
          "description": "Deniz aslanları ve yunuslarla etkileşim imkanı sunan aile dostu ada.",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.RJFmvAl066RZkJvXxdl2tgHaE8&pid=Api"
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
        "turkishProvidersUsage": "Kendi hattınızın kullanımı oldukça pahalı olabilir. Gideceğiniz operatörden uluslararası paket alın veya yerel SIM kart edinin. Telekomünikasyon ücretleri yüksektir."
      },
      "famousDishes": [
        {
          "name": "Conch Salad (deniz kabuklusu salatası)",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.OESMhP8Xr5XQKqQ9fx7IHwHaE8&pid=Api"
        },
        {
          "name": "Cracked Conch (kızarmış deniz kabuklusu)",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.omwmPpa58f8cuuBxlwKy5gHaDO&pid=Api"
        },
        {
          "name": "Bahamian Stew Fish (balık yahni)",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP._5TkQlMyTeMSVThrP0N8owHaLH&pid=Api"
        },
        {
          "name": "Johnny Cake (mısır ekmeği)",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.G6lxkPvu_xZUG4AoytTZMAHaFs&pid=Api"
        }
      ]
    },    
    {
      "id": 4,
      "countryName": "Barbados",
      "flag": "🇧🇧",
      "currency": {
        "code": "BBD",
        "name": "Barbados Doları",
        "symbol": "$",
        "rate": 15.90
      },
      "languages": ["İngilizce"],
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
          "description": "Şnorkelle dalış ve su sporları için ideal, berrak deniz suyu.",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.eX76CNo2ShkVvBkEzKJqGQAAAA&pid=Api"
        },
        {
          "placeName": "Harrison's Cave",
          "description": "Yeraltı kireçtaşı mağaraları ve muhteşem sarkıtlar, dikitler.",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.9PrFqAva-gJRd6U5vObHbQHaFM&pid=Api"
        },
        {
          "placeName": "Oistins Fish Fry",
          "description": "Cuma akşamları düzenlenen, yerel lezzetleri keşfetme fırsatı sunan sahil etkinliği.",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.gdGBWnFzQ6u1RHeyRYbnfgHaE8&pid=Api"
        },
        {
          "placeName": "St. Nicholas Abbey",
          "description": "17. yüzyıldan kalma şato ve rom damıtımevi.",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.Rd798c6kRuYvh5pNevIv-QHaE9&pid=Api"
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
        "turkishProvidersUsage": "Barbados'ta kendi hattınızın ücretleri yüksek olabilir, yerel SIM önerilir veya global data paketi alın. Telekomünikasyon ücretleri yüksektir."
      },
      "famousDishes": [
        {
          "name": "Flying Fish and Cou-Cou",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.R_V_930QBjjdoB7XEdfSlAHaHa&pid=Api"
        },
        {
          "name": "Macaroni Pie",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.e449UWBJFsSOa9XeYLXZgwHaFi&pid=Api"
        },
        {
          "name": "Pudding and Souse",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.HAQP_u7kG6ivacL0riWPCAHaEK&pid=Api"
        },
        {
          "name": "Cutters (sandviç çeşitleri)",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.D0NfiAvB2ISHe9dg3_mYbQHaDO&pid=Api"
        }
      ]
    },
    {
      "id": 5,
      "countryName": "Beyaz Rusya",
      "flag": "🇧🇾",
      "currency": {
        "code": "BYN",
        "name": "Belarus Rublesi",
        "symbol": "Br",
        "rate": 12.45,
        "lastUpdate": "2024-03-19"
      },
      "languages": ["Belarusça", "Rusça"],
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
          "description": "Tarihi yapıların ve restoranların bulunduğu pitoresk bir bölge.",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.dmPGp4W34I4YTFpT06D18QHaFD&pid=Api"
        },
        {
          "placeName": "Büyük Vatanseverlik Savaşı Müzesi",
          "description": "II. Dünya Savaşı tarihini anlatan önemli bir müze.",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.fWWfytSCCNB_EyLgdtMjnwHaE8&pid=Api"
        },
        {
          "placeName": "Zafer Meydanı",
          "description": "Şehrin ikonik noktası, anıt ve geniş bulvarlarla çevrili.",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.zkLzxBP1hJifU_YiLFO0SQHaE6&pid=Api"
        },
        {
          "placeName": "Nesvizh Kalesi",
          "description": "UNESCO Dünya Mirası olan tarihi saray ve park kompleksi (Minsk'e yaklaşık 120 km).",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.EfD2z4aCoDejAjw0m8K_sQHaEK&pid=Api"
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
        "turkishProvidersUsage": "Kendi hattınızın genellikle aktif, ancak paket almanız önerilir. Yerel SIM daha ekonomik olabilir. Telekomünikasyon ücretleri dikkate alınmalıdır."
      },
      "famousDishes": [
        {
          "name": "Draniki (patatesli krep)",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.VFKmi6bte_CwCD2Q9Qtl9gHaGl&pid=Api"
        },
        {
          "name": "Machanka (et sosu ile servis edilen krep)",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.OQY637rXu3aY_fqQfslbVAHaDO&pid=Api"
        },
        {
          "name": "Kolduny (patates köftesi içinde et)",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.lvtaxbPSR7jYdxmLeCw6hgHaGx&pid=Api"
        },
        {
          "name": "Kvass (ekmek bazlı fermente içecek)",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.y9UVt1Ulqeg3t-ZTf0LhUwHaLH&pid=Api"
        }
      ]
    }
    ,
    {
      "id": 6,
      "countryName": "Bosna Hersek",
      "flag": "🇧🇦",
      "currency": {
        "code": "BAM",
        "name": "Bosna Hersek Markı",
        "symbol": "KM",
        "rate": 17.85,
        "lastUpdate": "2024-03-19"
      },
      "languages": ["Boşnakça", "Hırvatça", "Sırpça"],
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
          "description": "Osmanlı dönemi çarşısı, el sanatları ve geleneksel yemekleriyle ünlü.",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.G6AUWuOMD15Tphfe_7RjpAHaEo&pid=Api"
        },
        {
          "placeName": "Mostar Köprüsü",
          "description": "UNESCO listesindeki tarihi köprü (Mostar şehrinde).",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.uAFh6F11vEwB3NKBQfmJPgHaEx&pid=Api"
        },
        {
          "placeName": "Vrelo Bosne",
          "description": "Bosna Nehri'nin kaynağı çevresinde yeşil doğa parkı.",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.hw46gRJBiIPPl8WANBTv2gHaE6&pid=Api"
        },
        {
          "placeName": "Latin Köprüsü",
          "description": "I. Dünya Savaşı'nın başlamasına neden olan suikastın gerçekleştiği yerin yakınında tarihi köprü.",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.fUxL1FkI--29VfxRN34gZwHaEK&pid=Api"
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
        "turkishProvidersUsage": "Kendi hattınızın genellikle kullanılabilir. Kısa süreli kalışlarda uygun paketlere bakın ya da yerel SIM alabilirsiniz. Telekomünikasyon ücretleri göz önünde bulundurulmalıdır."
      },
      "famousDishes": [
  {
    "name": "Ćevapi (Köfte benzeri ızgara et)",
    "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.w3kbxfxno2cXuVPqEkvbKQHaE7&pid=Api"
  },
  {
    "name": "Burek (etli veya peynirli börek)",
    "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.KABgdDIu-mh3sYCjLmcSswHaFj&pid=Api"
  },
  {
    "name": "Begova Čorba (tavuklu çorba)",
    "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.Ppe1S1n_mr0GUcFpVZ2eMAHaFj&pid=Api"
  },
  {
    "name": "Dolma çeşitleri (Soğan Dolması)",
    "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.9HzgxRIwOnNFrfSlp34oJgHaE7&pid=Api"
  },
  {
    "name": "Klepe (Balkan mantısı)",
    "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.QKf7u3s7bZUc1YyTOj9kHwHaFI&pid=Api"
  }
]

    }
    
    ,
    {
      "id": 7,
      "countryName": "Brezilya",
      "flag": "🇧🇷",
      "currency": {
        "code": "BRL",
        "name": "Brezilya Reali",
        "symbol": "R$",
        "rate": 6.35,
        "lastUpdate": "2024-03-19"
      },
      "languages": ["Portekizce"],
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
    "description": "Dünyaca ünlü plaj ve şehir manzarası.",
    "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.uHTHvHJIxGQJ9ajkv_YhDQHaE8&pid=Api"
  },
  {
    "placeName": "Iguazu Şelaleleri",
    "description": "Brezilya-Arjantin sınırında yer alan görkemli şelale dizisi.",
    "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.YGa74a1-zd-xT_e5_pLrpwHaFj&pid=Api"
  },
  {
    "placeName": "Amazon Yağmur Ormanları",
    "description": "Doğal çeşitlilik ve ekoturizm için önemli bölge.",
    "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.6vFzVaHA4tjdiMhAXFvgbAHaMD&pid=Api"
  },
  {
    "placeName": "Salvador – Pelourinho",
    "description": "Koloniyel mimari, capoeira ve Afrika-Brezilya kültürü.",
    "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.eyf4uXBGplaUhEoPRovJAAHaE8&pid=Api"
  }
]
,
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
        "turkishProvidersUsage": "Kendi hattınızın genellikle aktif, ancak paket almanız önerilir. Yerel SIM daha ekonomik olabilir. Telekomünikasyon ücretleri dikkate alınmalıdır."
      },
      "famousDishes": [
        {
          "name": "Feijoada (fasulyeli et yemeği)",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.Ki5UYvO8hJbYaoxtWpkwtgHaFj&pid=Api"
        },
        {
          "name": "Pão de Queijo (peynirli ekmek)",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.Mps5EvZL2SCbjj5DguNP7gHaE8&pid=Api"
        },
        {
          "name": "Brigadeiro (çikolatalı tatlı)",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.IYiSJUsoICVYG2QHDlbwkwHaEK&pid=Api"
        },
        {
          "name": "Moqueca (balık veya deniz ürünleri güveci)",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.XxrPJa6DCLS8Nj25LGFmxwHaE8&pid=Api"
        }
      ]
    },
    {
      "id": 8,
      "countryName": "Şili",
      "flag": "🇨🇱",
      "currency": {
        "code": "CLP",
        "name": "Şili Pesosu",
        "symbol": "$",
        "rate": 0.032,
        "lastUpdate": "2024-03-19"
      },
      "languages": ["İspanyolca"],
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
          "description": "Santiago'nun panoramik manzarasını sunan park ve heykel alanı.",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.nu0MRyIKXwwUJgw5Sy_UGwHaFj&pid=Api"
        },
        {
          "placeName": "Valparaíso",
          "description": "Renkli evleri ve sanat dolu sokaklarıyla ünlü liman şehri.",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.02-gz77NKwJ_dQsEVLW4sAHaEK&pid=Api"
        },
        {
          "placeName": "Atacama Çölü",
          "description": "Dünyanın en kurak çölü, uzay gözlemevleri ve tuz gölleriyle ünlü.",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.FTZ7Sax-ZVNhYUB6iKm_UgHaIE&pid=Api"
        },
        {
          "placeName": "Torres del Paine Ulusal Parkı",
          "description": "Muhteşem dağ manzaraları, buzullar ve göller.",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.cmeu4gmRcirvhwakGXsZLQHaFS&pid=Api"
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
        {
          "name": "Empanada (etli veya peynirli hamur işi)",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.hxeX4VGO0_Oj0fS0NaqKXQHaHa&pid=Api"
        },
        {
          "name": "Pastel de Choclo (mısır püresiyle yapılan güveç)",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.hxeX4VGO0_Oj0fS0NaqKXQHaHa&pid=Api"
        },
        {
          "name": "Cazuela (sebzeli et çorbası)",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.2TqffDwGbidTZkXbv3_xSwHaE8&pid=Api"
        },
        {
          "name": "Completo (Şili usulü hot dog)",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.4HLh2j_kBJthNFh1P_kisgHaE7&pid=Api"
        }
      ]
    }
    ,
    {
      "id": 9,
      "countryName": "Kolombiya",
      "flag": "🇨🇴",
      "currency": {
        "code": "COP",
        "name": "Kolombiya Pesosu",
        "symbol": "$",
        "rate": 0.008,
        "lastUpdate": "2024-03-19"
      },
      "languages": ["İspanyolca"],
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
          "description": "Bogotá'nın kolonyal dönem mimarisi ve müzeleri.",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.y93D-15C06qnA_N2-zcizgHaHa&pid=Api"
        },
        {
          "placeName": "Cartagena Eski Şehir",
          "description": "Karayip kıyısında renkli, surlarla çevrili kolonyal kent.",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.Y6ae5hcQR4LmKOSvcEzIpQHaFK&pid=Api"
        },
        {
          "placeName": "Medellín",
          "description": "Ebedi Bahar Şehri olarak anılan, modern teleferik sistemleriyle ünlü.",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.z2M_zdGdwmJiNu2xTqychgHaE7&pid=Api"
        },
        {
          "placeName": "Guatapé",
          "description": "Renkli evleri ve El Peñol kayalık manzarasıyla ünlü kasaba.",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.ZC6W8cbY50N9rzCHqcIXMAHaE7&pid=Api"
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
        {
          "name": "Arepa (mısır ekmeği)",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.R95R0vy9w5k_NITgJNOiFgHaE8&pid=Api"
        },
        {
          "name": "Bandeja Paisa (et, fasulye, pirinç, yumurta tabağı)",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.pvyIYEcKJrz1yABZx0CiKQHaE8&pid=Api"
        },
        {
          "name": "Sancocho (et ve sebze çorbası)",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.IODBTHW3tZRCyZsl8EBJEwHaEA&pid=Api"
        },
        {
          "name": "Ajiaco (tavuklu patates çorbası)",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.Mv7ru24dwHN51UmhrG4-rAHaE8&pid=Api"
        }
      ]
    }
    ,













    {
      "id": 10,
      "countryName": "Ekvador",
      "flag": "🇪🇨",
      "currency": {
        "code": "USD",
        "name": "Amerikan Doları",
        "symbol": "$",
        "rate": 31.85,
        "lastUpdate": "2024-03-19"
      },
      "languages": ["İspanyolca"],
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
          "description": "UNESCO Dünya Mirası bölgesi, kolonyal mimari ve kiliselerle dolu.",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.ef1QeKIPjSbxyzrPFLEBjQHaEC&pid=Api"
        },
        {
          "placeName": "Galápagos Adaları",
          "description": "Eşsiz fauna ve flora, Charles Darwin'in keşiflerine ev sahipliği yapan takımadalar.",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.K6wcP5l53hMICkNpqz0MeQHaE6&pid=Api"
        },
        {
          "placeName": "Baños",
          "description": "Doğa sporları, termal kaynaklar ve şelaleleriyle ünlü kasaba.",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.mqPSyW9v810Xw4NwqEn0IAHaE8&pid=Api"
        },
        {
          "placeName": "Otavalo Pazarı",
          "description": "Yerel el sanatları ve tekstil ürünleriyle meşhur geleneksel pazar.",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.93a96Hp74KwMN4bZmmm06AHaD4&pid=Api"
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
        {
          "name": "Ceviche (deniz ürünleri)",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.i9rn31JZDBk4zcdIJlV8gQHaHa&pid=Api"
        },
        {
          "name": "Locro de Papa (patates çorbası)",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.XHkIPnK8Cg1De73gfmH71gHaE8&pid=Api"
        },
        {
          "name": "Llapingachos (patates köftesi)",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.NkdOQoWUm3YhE_Nvsg21EgHaE6&pid=Api"
        },
        {
          "name": "Empanada de Viento (peynirli kızarmış hamur)",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.zRtC0hpW3CT24dP6sLQkBAHaGK&pid=Api"
        }
      ]
    }
    
    
    
    ,
    
    {
      "id": 11,
      "countryName": "El Salvador",
      "flag": "🇸🇻",
      "currency": {
        "code": "USD",
        "name": "Amerikan Doları",
        "symbol": "$",
        "rate": 31.85,
        "lastUpdate": "2024-03-19"
      },
      "languages": ["İspanyolca"],
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
          "description": "Yürüyüş rotaları ve krater gölü manzarası sunan aktif yanardağ.",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.p-s9aiugjn9vQ3A5FKPUQQHaEO&pid=Api"
        },
        {
          "placeName": "Joya de Cerén",
          "description": "UNESCO Dünya Mirası; 'Orta Amerika'nın Pompeisi' olarak adlandırılan Maya kalıntıları.",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.q_h3otmSw9LglrK1nPM0uAHaE7&pid=Api"
        },
        {
          "placeName": "Suchitoto",
          "description": "Kolonyal mimarisi, sanat festivalleri ve göl manzarasıyla ünlü kasaba.",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.RPD49f89k_l7Co8_b46wEgHaE8&pid=Api"
        },
        {
          "placeName": "El Tunco Plajı",
          "description": "Sörfçülerin gözde sahil noktası, renkli gece hayatı.",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.VFzx60sw_3p_94bk7UiIPwHaE8&pid=Api"
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
        {
          "name": "Pupusa (mısır bazlı dolgulu hamur)",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.fY-9HEc60RJqsdLMyHU6_AHaFj&pid=Api"
        },
        {
          "name": "Yuca Frita (kızarmış manyok)",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.GaEjvnMkRTLhkcVrzC1mSgHaFZ&pid=Api"
        },
        {
          "name": "Sopa de Pata (sakatat çorbası)",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.yqUPz9L79mL2351XOrVwpQHaGC&pid=Api"
        },
        {
          "name": "Tamales (mısır hamurlu dolma)",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.XXioLcDHwiwVtbZ07NiBvQHaE7&pid=Api"
        }
      ]
    }
    
      
      ,
      {
        "id": 12,
        "countryName": "Gürcistan",
        "flag": "🇬🇪",
        "currency": {
          "code": "GEL",
          "name": "Gürcistan Larisi",
          "symbol": "₾",
          "rate": 11.95,
          "lastUpdate": "2024-03-19"
        },
        "languages": ["Gürcüce", "Rusça"],
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
            "description": "Dar sokaklar, tarihi kiliseler ve kükürt hamamlarıyla ünlü.",
            "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.TlRDYNTm2DOyC47kn1wqbwHaE8&pid=Api"
          },
          {
            "placeName": "Mtskheta",
            "description": "UNESCO listesindeki antik kent, Gürcü Ortodoks Kilisesi'nin merkezi.",
            "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.sFMKMvGowo16HQsw4snCNwHaE8&pid=Api"
          },
          {
            "placeName": "Kazbegi (Stepantsminda)",
            "description": "Dağ manzaraları ve Gergeti Trinity Kilisesi ile ünlü bölge.",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.NN-7cS99jPX2UPXH0_uKXgHaE6&pid=Api"
          },
          {
            "placeName": "Batum",
            "description": "Karadeniz kıyısında modern mimari ve gece hayatı.",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.4gc34kf1U8HB4dKrFpt44QHaE8&pid=Api"
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
          {
            "name": "Khachapuri (peynirli ekmek)",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.6xDxz6tLSSO_pCGNmS1oLgHaLH&pid=Api"
          },
          {
            "name": "Khinkali (baharatlı et dolu mantı)",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.l5m4EHpI0Qp34PguDAHMuAHaDO&pid=Api"
          },
          {
            "name": "Lobio (fasulye yemeği)",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.q3yDlW_Rw-iqbYh0GL-ORAHaDO&pid=Api"
          },
          {
            "name": "Churchkhela (cevizli üzüm pestili)",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.keXbQ3zI7ew0-31s9d9rtQHaFj&pid=Api"
          }
        ]
      }
      ,


      {
        "id": 13,
        "countryName": "Honduras",
        "flag": "🇭🇳",
        "currency": {
          "code": "HNL",
          "name": "Honduras Lempirası",
          "symbol": "L",
          "rate": 1.29,
          "lastUpdate": "2024-03-19"
        },
        "languages": ["İspanyolca"],
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
            "description": "Maya Medeniyeti'ne ait önemli arkeolojik alan.",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.e287VS8B1LriInzfenJjzAHaHa&pid=Api"
          },
          {
            "placeName": "Roatán Adası",
            "description": "Karayip Denizi'nde dalış ve şnorkelle keşif için popüler ada.",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.Zu-6UB7B1JccCet8eUFc6wHaE7&pid=Api"
          },
          {
            "placeName": "Tela",
            "description": "Plajları ve Punta Sal Milli Parkı'yla ünlü kıyı şehri.",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.D9CaHqA7PgeNpIeYDmD4UgHaEK&pid=Api"
          },
          {
            "placeName": "La Tigra Ulusal Parkı",
            "description": "Yağmur ormanı ve yürüyüş parkurları sunan korunmuş bölge.",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.RaVXkpCbIj3j8nAwSeofoAHaDl&pid=Api"
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
          "internetProviders": ["Tigo", "Claro"],
          "turkishProvidersUsage": "Roaming genelde aktif fakat pahalı olabilir. Turist SIM kartları tercih edilebilir."
        },
        "famousDishes": [
          {
            "name": "Baleada (fasulye ve peynirli tortilla)",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.jnw15pdjyLbULCVD3NyMBAHaE8&pid=Api"
          },
          {
            "name": "Carne Asada (ızgara et)",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.wXWAWEm8DHaisA2rO1_WUAHaHg&pid=Api"
          },
          {
            "name": "Sopa de Caracol (deniz salyangozu çorbası)",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.SpqtWyYhtfDpdhvSpEvyoQHaE6&pid=Api"
          },
          {
            "name": "Tamales (mısır hamurlu dolmalar)",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.FyYLbJserMPDzQLDs3zVtgHaDt&pid=Api"
          }
        ]
      }
      
      
      ,
      {
        "id": 14,
        "countryName": "Hong Kong",
        "flag": "🇭🇰",
        "currency": {
          "code": "HKD",
          "name": "Hong Kong Doları",
          "symbol": "$",
          "rate": 4.05,
          "lastUpdate": "2024-03-19"
        },
        "languages": ["Kantonca", "İngilizce", "Mandarin Çincesi"],
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
            "description": "Hong Kong silüetini yukarıdan görmek için en popüler nokta.",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.GHjxfWjaNsbouMxa7gh1EgHaDl&pid=Api"
          },
          {
            "placeName": "Kowloon – Tsim Sha Tsui",
            "description": "Ünlü cadde Nathan Road, alışveriş ve liman manzarası.",
            "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.eWQQgkKtw8aX4gzT_ip2owHaEw&pid=Api"
          },
          {
            "placeName": "Hong Kong Disneyland",
            "description": "Asya'daki ünlü Disney tema parklarından biri.",
            "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.gOrlpGi0F0UA-WLrDAZQtgHaHa&pid=Api"
          },
          {
            "placeName": "Lantau Adası – Big Buddha",
            "description": "Devasa Buda heykeli ve Po Lin Manastırı.",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.JLanvw4aCeVEOFQSmMQougHaE8&pid=Api"
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
          "internetProviders": ["SmarTone", "CSL", "3 (Three)", "China Mobile"],
          "turkishProvidersUsage": "Roaming kolayca yapılabilir, ancak paket fiyatlarını kontrol edin. Yerel SIM veya eSIM alınabilir."
        },
        "famousDishes": [
          {
            "name": "Dim Sum (küçük porsiyonlu Çin lezzetleri)",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.4J174kYxlxAhvybWQn-t6wHaE8&pid=Api"
          },
          {
            "name": "Char Siu (barbekü domuz eti)",
            "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.wXuuFAwjgUf7hez6s4kAWAHaE7&pid=Api"
          },
          {
            "name": "Wonton Noodle Soup (mantılı çorba)",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.7oY2_9Jp22_Y-Tx55iN-GQDhEs&pid=Api"
          },
          {
            "name": "Egg Tart (yumurtalı tart)",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.ZTY8sYfdRMbVcTUJOg0iZwHaJQ&pid=Api"
          }
        ]
      }
      ,
      {
        "id": 15,
        "countryName": "İran",
        "flag": "🇮🇷",
        "currency": {
          "code": "IRR",
          "name": "İran Riyali",
          "symbol": "﷼",
          "rate": 0.00075,
          "lastUpdate": "2024-03-19"
        },
        "languages": ["Farsça"],
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
            "description": "UNESCO Mirası, mimari açıdan muhteşem camiler ve saraylarla çevrili.",
            "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.WMUzOt8x6-Sjv1FTgrVcUwHaHa&pid=Api"
          },
          {
            "placeName": "Şiraz – Persepolis",
            "description": "Antik Pers başkentinin kalıntıları, tarihe ışık tutuyor.",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.cwVPpp-SE7EHv3Fj7V_z4AHaI-&pid=Api"
          },
          {
            "placeName": "Tahran – Milad Kulesi",
            "description": "Şehrin panoramik manzarasını sunan modern kule.",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.D33xVbz2cBNXEhX4KiG8qQAAAA&pid=Api"
          },
          {
            "placeName": "Kiş Adası",
            "description": "Serbest ticaret bölgesi, plajlar ve alışveriş imkânları.",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.Dr8gcVHHJ9lCeCsDhP-1XgHaEy&pid=Api"
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
          "internetProviders": ["MCI (Hamrahe Aval)", "MTN Irancell", "Rightel"],
          "turkishProvidersUsage": "Resmî roaming mümkündür, ancak internet kısıtlamaları olabilir. Yerel SIM genelde ucuz ve yaygın."
        },
        "famousDishes": [
          {
            "name": "Kebap (çeşitli et kebapları)",
            "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.6fDTDWUAaydOWda7OF77cAHaEK&pid=Api"
          },
          {
            "name": "Ghormeh Sabzi (otlu et yahnisi)",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.wnlk7MaljLPDEj-gzD2P0AHaLH&pid=Api"
          },
          {
            "name": "Fesenjan (cevizli ve nar ekşili yahni)",
            "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.swmtofQou4NTQ5DZh2MeEQHaKT&pid=Api"
          },
          {
            "name": "Tahdig (kızarmış pilav kabuğu)",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.MrqdXuchIHWt9WJE7zdDcgHaLH&pid=Api"
          }
        ]
      }
      

      ,
      {
        "id": 17,
        "countryName": "Japonya",
        "flag": "🇯🇵",
        "currency": {
          "code": "JPY",
          "name": "Japanese Yen",
          "symbol": "¥",
          "rate": 0.065
        },
        "languages": ["Japonca"],
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
            "description": "Dünyanın en yoğun yaya geçitlerinden biri, neon ışıklarıyla ünlü.",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.n3vDaV14obn9d-Yk9WJdhAHgFH&pid=Api"
          },
          {
            "placeName": "Kyoto – Fushimi Inari Tapınağı",
            "description": "Binlerce turuncu Torii kapısıyla ikonik bir Shinto tapınağı.",
            "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.mPyFJk1eVkQwKiKlgmvt1gHaE8&pid=Api"
          },
          {
            "placeName": "Osaka Kalesi",
            "description": "Tarihi kale ve çevresindeki park, özellikle kiraz çiçeği zamanında popüler.",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.Fz0fFB3RGpN0w5J9rUyeAwHaE8&pid=Api"
          },
          {
            "placeName": "Hiroşima – Barış Anıtı Parkı",
            "description": "Atom bombası anısına yapılmış barış parkı ve müze.",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.cUj_9DPrBOB4LHtLbmO84wHaE8&pid=Api"
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
          {
            "name": "Sushi",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.2j5Nsiuwl_jUU9LFJ8JW5gHaHa&pid=Api"
          },
          {
            "name": "Ramen",
            "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.KoxDguzaHlKCWcVvzpZSfQAAAA&pid=Api"
          },
          {
            "name": "Tempura",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.Ql77TcrScvIGsEqhfOUJWQHaFj&pid=Api"
          },
          {
            "name": "Okonomiyaki",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.PjP6y65gxeEv1UjQbdfH5gHaE8&pid=Api"
          }
        ]
      }
      ,
      {
        "id": 18,
        "countryName": "Ürdün",
        "flag": "🇯🇴",
        "currency": {
          "code": "JOD",
          "name": "Ürdün Dinarı",
          "symbol": "د.ا",
          "rate": 44.75,
          "lastUpdate": "2024-03-19"
        },
        "languages": ["Arapça"],
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
            "description": "Kaya içine oyulmuş antik kent ve UNESCO Dünya Mirası.",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.bBXbX7Qd5FiEVeJKVq7o0AHaGy&pid=Api"
          },
          {
            "placeName": "Wadi Rum",
            "description": "Mars benzeri kızıl çöl manzarası, çöl kampları ve safari turları.",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.QaFtdF3APjlhPASMEEbZQwHaFj&pid=Api"
          },
          {
            "placeName": "Ölü Deniz",
            "description": "Dünyanın en alçak noktası, yüksek tuz oranı nedeniyle batmadan yüzebilirsiniz.",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.H0pEa6uGv2F3VZTBaTb9UAHaEd&pid=Api"
          },
          {
            "placeName": "Jerash",
            "description": "Romalılardan kalma antik şehir kalıntıları.",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.fwHXReeyGBFrp0as4DawuQHaFk&pid=Api"
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
          {
            "name": "Mansaf (yoğurtlu kuzu eti ve pilav)",
            "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.INzl8cyNu-iInRMJOgq42QHaEe&pid=Api"
          },
          {
            "name": "Maqluba (ters çevrilmiş pirinç yemeği)",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.KMhmirzHrCNagBNtXeaTuAHaFl&pid=Api"
          },
          {
            "name": "Falafel ve Hummus",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.enxHLRv2l9LhTqzXloMrUAHaE8&pid=Api"
          },
          {
            "name": "Kunafa (tatlı)",
            "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.bZMawBXIGVtF7NGY1OMf9wHaE8&pid=Api"
          }
        ]
      }
      ,


      {
        "id": 19,
        "countryName": "Kazakistan",
        "flag": "🇰🇿",
        "currency": {
          "code": "KZT",
          "name": "Kazakhstani Tenge",
          "symbol": "₸",
          "rate": 0.023
        },
        "languages": ["Kazakça", "Rusça"],
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
            "description": "Şehrin modern simgesi, gözetleme alanı mevcut.",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.f65ncKIfxl8clooMblFmpQHaFH&pid=Api"
          },
          {
            "placeName": "Almatı – Medeo Buz Pateni Pisti",
            "description": "Dünyanın en yüksek rakımlı açık hava pisti.",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.qhVdejH-U2Tom9rEBg5lsgHaE8&pid=Api"
          },
          {
            "placeName": "Büyük Almatı Gölü",
            "description": "Dağlarla çevrili kartpostal güzelliğinde bir göl.",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.3CdPlea4rZu9f45qHCPMaQHaE8&pid=Api"
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
          {
            "name": "Beshbarmak (et ve hamur parçalarıyla yapılan geleneksel yemek)",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.KeBBc3jt-Q350vyk5YbQrgHaFj&pid=Api"
          },
      
        ]
      }
      
      
      ,
      {
        "id": 20,
        "countryName": "Kosova",
        "flag": "🇽🇰",
        "currency": {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€",
          "rate": 28.5
        },
        "languages": ["Arnavutça", "Sırpça"],
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
            "description": "Bölgenin arkeolojik ve etnografik eserlerini barındırır.",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.XOun66HkJXbxliRdqqLhBQHaFj&pid=Api"
          },
          {
            "placeName": "Fatih Camii",
            "description": "Osmanlı döneminden kalma, Priştine'nin tarihi sembolü.",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.AYP4hyYo0TOc2ZrH2u0FPgHaLD&pid=Api"
          },
          {
            "placeName": "Germia Parkı",
            "description": "Priştine yakınında yeşil alan, yürüyüş ve piknik için ideal.",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.k6qc8I94PJmj3k2wKNutnQHaHN&pid=Api"
          },
          {
            "placeName": "Prizren Eski Şehir",
            "description": "Tarihi köprü, camiler ve kiliselerle ünlü Osmanlı dokulu kent.",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.6JsNkujgIxZEsMOwOw_UzwHaEi&pid=Api"
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
          {
            "name": "Flija (katmerli hamur yemeği)",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.3JnDUW8J-j1LM4JFzIHYjwHaEn&pid=Api"
          },
          {
            "name": "Pite (börek)",
            "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.S0y3cXuHoGXEo4FcsFqDWgHaEK&pid=Api"
          },
          {
            "name": "Tavë Prizreni (etli güveç)",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.SCjlTmQEAe6ESa6I_TJluAHaFI&pid=Api"
          },
          {
            "name": "Sarma (lahana sarması)",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.WBlxRt1LjZf6wJ4Rhxn-5AHaE8&pid=Api"
          }
        ]
      }
      
    ,
    {
      "id": 21,
      "countryName": "Lübnan",
      "flag": "🇱🇧",
      "currency": {
        "code": "LBP",
        "name": "Lebanese Pound",
        "symbol": "ل.ل",
        "rate": 0.040
      },
      "languages": ["Arapça", "Fransızca"],
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
          "description": "Beyrut sahilinde ünlü doğal kaya oluşumları.",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.dYOjk0Mot1KFPfFYfixZ6QHaE6&pid=Api"
        },
        {
          "placeName": "Byblos Antik Kenti",
          "description": "Dünyanın en eski sürekli yerleşimlerinden biri, Fenike kalıntıları.",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.EP1TaF-j5COZVvsr9oIr7gHaEY&pid=Api"
        },
        {
          "placeName": "Jeita Grotto Mağaraları",
          "description": "Muhteşem yeraltı kireçtaşı oluşumları, tekneyle gezilebiliyor.",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.EXejmNsAeZ4uz0Sae5-QLAHaEK&pid=Api"
        },
        {
          "placeName": "Baalbek",
          "description": "Roma İmparatorluğu'ndan kalma devasa tapınak kalıntıları.",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.tqzuLywAWODZ3KrLlVGj2AHaE8&pid=Api"
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
        {
          "name": "Mezze (humus, tabbouleh, baba ghanoush vb.)",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.ecA3AIm_QMJNmMbXM7pQbwHaHa&pid=Api"
        },
        {
          "name": "Kibbeh (bulgurlu et köftesi)",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.erBSqGCiUqYcaOV8O6OgJAHaE8&pid=Api"
        },
        {
          "name": "Manakish (baharatlı pide)",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.lPvvsL4uD1p3bk5V3oqilwHaFg&pid=Api"
        },
        {
          "name": "Baklava çeşitleri",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP._lXeCJc_6qXv1ETuYVbPwgHaFA&pid=Api"
        }
      ]
    }
    
    
    ,
    {
      "id": 22,
      "countryName": "Makao",
      "flag": "🇲🇴",
      "currency": {
        "code": "MOP",
        "name": "Macanese Pataca",
        "symbol": "MOP$",
        "rate": 4.3
      },
      "languages": ["Portekizce", "Kantonca", "Mandarin Çincesi"],
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
          "description": "Portekiz etkisinin hissedildiği UNESCO Dünya Mirası tarihi meydan.",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.a3tgkA4tUuU-4bSb-nBOpAHaFj&pid=Api"
        },
        {
          "placeName": "Macau Tower",
          "description": "Seyir terası, bungee jumping ve restoranlarıyla ünlü kule.",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.WrZZE8XmTEHpFTPAAX042QHaLH&pid=Api"
        },
      
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
        {
          "name": "Pastel de Nata (Portekiz usulü tart)",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.02vj3B1Nr2JDQkE-vgmp5QHaE8&pid=Api"
        },
        {
          "name": "Pork Chop Bun (domuz pirzola sandviçi)",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.RjnWZMY9yAGNuHyuyxgySAHaHa&pid=Api"
        },
        {
          "name": "Minchi (kıyma ve patatesli yemek)",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.N5nMFWdvxYfLdkPwIpiuTQHaGS&pid=Api"
        },
        {
          "name": "Bacalhau (Portekiz usulü tuzlu balık - çeşitli yorumları)",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.v-1Y0YWCAwafXn9pjVcnwQHaEV&pid=Api"
        }
      ]
    }
    ,
    {
      "id": 23,
      "countryName": "Malezya",
      "flag": "🇲🇾",
      "currency": {
        "code": "MYR",
        "name": "Malaysian Ringgit",
        "symbol": "RM",
        "rate": 7.89
      },
      "languages": ["Malayca", "İngilizce"],
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
          "description": "Şehrin sembolü, seyir köprüsüyle ünlü gökdelenler.",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.P6-fkD4Km2nb6p4vyv6GeQHaFQ&pid=Api"
        },
        {
          "placeName": "Batu Mağaraları",
          "description": "Hindu tapınakları ve devasa heykeliyle ünlü kaya mağaraları.",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.0WvspVgblH0JtSKABWtSFgHaEo&pid=Api"
        },
        {
          "placeName": "Langkawi Adası",
          "description": "Plajları ve duty-free alışverişiyle tanınan tatil bölgesi.",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.Xnlr7Q-ytKFdo_nHhZo6TQHaE5&pid=Api"
        },
        {
          "placeName": "Malakka Şehri",
          "description": "Portekiz ve Hollanda izleri taşıyan UNESCO Dünya Mirası tarihi kent.",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.pzQQPLzpPrsvc6ZP5HSi3gHaE8&pid=Api"
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
        {
          "name": "Nasi Lemak (hindistan cevizli pilav, acı soslu kahvaltı)",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.dgdgL9MsX9E225Zn_DSe5QHaFj&pid=Api"
        },
        {
          "name": "Roti Canai (yassı ekmek ve körili sos)",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.9Zin3oJlO3ZZfSUf3dIl4QHaHa&pid=Api"
        },
        {
          "name": "Laksa (baharatlı çorba)",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.rE0tuLFufqUQ-2xsXjHtRgHaFy&pid=Api"
        },
        {
          "name": "Satay (marineli ızgara et şiş)",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.HxBZ0fBKIDxX1eojIOKiqwHaFj&pid=Api"
        }
      ]
    }
    ,



    {
      "id": 24,
      "countryName": "Maldivler",
      "flag": "🇲🇻",
      "currency": {
        "code": "MVR",
        "name": "Maldivian Rufiyaa",
        "symbol": "ރ",
        "rate": 15.42
      },
      "languages": ["Dhivehi"],
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
          "description": "Bütçe dostu konaklama seçenekleri ve plajlarıyla ünlü yerel ada.",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.nsKZ4KcfmNYM7TifnyRMyQHaHa&pid=Api"
        },
        {
          "placeName": "Hulhumalé",
          "description": "Yeni yerleşim bölgesi, plaj ve kafeler. Male'ye feribotla yakın.",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.MTEBBfhrCghNAIosMAcPJQHaE8&pid=Api"
        },
        {
          "placeName": "Banana Reef",
          "description": "Dünyaca ünlü dalış noktası, renkli mercanlar ve balıklar.",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.bqMSwtt53ML4bngPpXGYVAHaFj&pid=Api"
        },
        {
          "placeName": "Fulhadhoo",
          "description": "Sessiz, el değmemiş beyaz kumlu plajlarıyla tanınan ada.",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.NpB9k0sSur93rgVOQKjGMwHaE7&pid=Api"
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
        {
          "name": "Garudhiya (balık çorbası)",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.a6D1NYS0B-BOgFDY1_EdFQHaFF&pid=Api"
        },
        {
          "name": "Mas Huni (rendelenmiş ton balığı, hindistan cevizi ve soğan)",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.5DwIsmiVtCbHRCMQWKf_PgHaFj&pid=Api"
        },
        {
          "name": "Rihaakuru (balık ezmesi)",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.QeVeNF04IXV6Cv3QnZdGRAHaE6&pid=Api"
        },
        {
          "name": "Bis Keemiya (börek benzeri atıştırmalık)",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.GNshhL_6iQHAhstp5UWTQAHaE2&pid=Api"
        }
      ]
    }
    
    ,

      
    {
      "id": 25,
      "countryName": "Moldova",
      "flag": "🇲🇩",
      "currency": {
        "code": "MDL",
        "name": "Moldovan Leu",
        "symbol": "L",
        "rate": 1.9173
      },
      "languages": ["Rumence"],
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
          "description": "Tarihi manastır kompleksi, kayaya oyulmuş kiliseler.",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.X3LuXtyNQYCg1mOMZTClWQHaFj&pid=Api"
        },
        {
          "placeName": "Şarap Mahzenleri (Cricova, Mileștii Mici)",
          "description": "Dünyanın en büyük şarap koleksiyonlarından bazılarına ev sahipliği yapar.",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.AZlG-T88Kik1Wzx85cutLAHaEK&pid=Api"
        },
        {
          "placeName": "Kişinev Katedrali Parkı",
          "description": "Merkezde yürüyüş ve dinlenme alanı, Katedrali ile ünlü.",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.LN_5tQvVjZ5VJDU3AzrK4wHaE8&pid=Api"
        },
        {
          "placeName": "Tipova Manastırı",
          "description": "Kayalıklar içine oyulmuş ortodoks manastır.",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.v4C-1vWRvL-7Q6JPXHRukAHaFU&pid=Api"
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
        {
          "name": "Mămăligă (mısır unu lapası)",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.nU0sVBSdyMzDXdtnkF2ppAHaE8&pid=Api"
        },
        {
          "name": "Sarmale (lahana veya asma yaprağında dolma)",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.O1T5yK-8ZpcZypXXP2cjlgHaEK&pid=Api"
        },
        {
          "name": "Plăcintă (börek benzeri hamur işi)",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.pdwxZvnK7OTn3K6EdPgsMgHaE8&pid=Api"
        },
        {
          "name": "Zeamă (tavuk çorbası)",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.CWEFG_Ig7nFB5P5tRvLoYQHaE8&pid=Api"
        }
      ]
    }
    ,




    {
      "id": 26,
      "countryName": "Moğolistan",
      "flag": "🇲🇳",
      "currency": {
        "code": "MNT",
        "name": "Mongolian Tögrög",
        "symbol": "₮",
        "rate": 0.01017
      },
      "languages": ["Moğolca", "Rusça"],
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
          "description": "Eşsiz çöl manzaraları ve deve turlarıyla ünlü bölge.",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.Hd_uywvTtmYQgNlPaff64gHaEe&pid=Api"
        },
        {
          "placeName": "Terelj Milli Parkı",
          "description": "Doğal kaya oluşumları ve çadır (ger) kampları.",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.lvi32mrzkpjLYtfUi2PoLwHaEm&pid=Api"
        },
        {
          "placeName": "Ulan Batur – Cengiz Han Meydanı",
          "description": "Şehrin ana meydanı, hükümet binaları ve Cengiz Han Anıtı.",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.OGmkA1zGEvgF8duRzEn4eQHaE6&pid=Api"
        },
        {
          "placeName": "Khövsgöl Gölü",
          "description": "'Mavi İnci' olarak anılan, temiz suları ve çevresindeki ormanlarıyla ünlü.",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.sN2rC1qMMxH_RNJGDalb4gHaD8&pid=Api"
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
        "turkishProvidersUsage": "Roaming mümkün, ancak pahalı olabilir. Yerel SIM kırsal alanda da faydalı olabilir."
      },
      "famousDishes": [
        {
          "name": "Buuz (etli buharda pişmiş mantı)",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.HoVIECkKkFVT8HMewEa-jwHaE8&pid=Api"
        },
        {
          "name": "Khuushuur (kızarmış etli hamur)",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.GEuPENivLzRuPn3pPE5uNgHaEK&pid=Api"
        },
        {
          "name": "Boodog (içinde et pişirilen deri çuval yemeği)",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.YuqZDSkopJHhTn26Xebl1QHaEW&pid=Api"
        },
        {
          "name": "Airag (fermente kısrak sütü)",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.itTvz58oIcfkpx3ZPN3tNAHaEN&pid=Api"
        }
      ]
    }
    ,



    {
      "id": 27,
      "countryName": "Karadağ",
      "flag": "🇲🇪",
      "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€",
        "rate": 35.73
      },
      "languages": ["Karadağca", "Sırpça", "Boşnakça"],
      "visaType": "Vize Gerekmiyor",
      "maxStay": "90 gün",
      "notes": "6 aylık dönemde 90 gün kalış hakkı.",
      "capital": {
        "name": "Podgorica",
        "symbol": "Kentin armasında Moraça Nehri ve dağ silueti"
      },
      "touristicPlaces": [
        {
          "placeName": "Kotor Eski Şehir",
          "description": "UNESCO Dünya Mirası listesinde, Ortaçağ'dan kalma surlar.",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP._EK3mUS-PPcT0W5u_kxheAHaIh&w=474&h=474&c=7"
        },
        {
          "placeName": "Budva",
          "description": "Sahilleri ve gece hayatıyla ünlü turistik kıyı kenti.",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.9HhRj1BuIhOgnGKhgehZbQHaE7&w=315&h=315&c=7"
        },
        {
          "placeName": "Sveti Stefan",
          "description": "Lüks tatil köyünü dönüştürülmüş tarihi ada.",
          "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.83uIICwSve_EiLaMmOpmdQHaE8&w=316&h=316&c=7"
        },
        {
          "placeName": "Durmitor Milli Parkı",
          "description": "Dağcılık, rafting ve kanyon gezileri için popüler destinasyon.",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.LU9tMZB9zYnl7R77QHYaFAHaE7&w=315&h=315&c=7"
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
        {
          "name": "Ćevapi (köfte benzeri ızgara et)",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.w3kbxfxno2cXuVPqEkvbKQHaE7&pid=Api"
        },
        {
          "name": "Kacamak (mısır unu lapa)",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.evzr-Kat7cLxd86u1gZuJwHaDO&pid=Api"
        },
        {
          "name": "Njeguški Pršut (kurutulmuş et)",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.dHwTDaU9gQ1xFv49XJb2AAHaEc&pid=Api"
        },
        {
          "name": "Burek (börek)",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.w8BAarTzspLuCXZE1d0VYgHaE7&pid=Api"
        }
      ]
    }
    ,



    {
      "id": 28,
      "countryName": "Fas",
      "flag": "🇲🇦",
      "currency": {
        "code": "MAD",
        "name": "Moroccan Dirham",
        "symbol": "د.م.",
        "rate": 3.49
      },
      "languages": ["Arapça", "Fransızca"],
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
          "description": "Pazar alanı, yılan oynatıcıları ve sokak lezzetleri.",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.iXDJ2ex389hT2_BNq_fW7AHaE7&pid=Api"
        },
        {
          "placeName": "Fes El Bali",
          "description": "Dünyanın en eski yaya şehirlerinden biri, tarihi medina.",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.q7aW9PYVLa7CU8AlKal-pwHaE8&pid=Api"
        },
        {
          "placeName": "Şafşavan (Chefchaouen)",
          "description": "Mavi boyalı evleriyle ünlü dağ kasabası.",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.omrYt6gC6dokukim6fG_iwHaE9&pid=Api"
        },
        {
          "placeName": "Sahara Çölü (Merzouga)",
          "description": "Çöl kampları, kum tepelerinde deve turları.",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.2YkYU-YHIVxPy58RHqyCzgHaLJ&pid=Api"
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
        {
          "name": "Tajine (sebze veya et yahnisi)",
          "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.Z8y4E2mJ6W1ZZkcOifBHBAHaE8&pid=Api"
        },
        {
          "name": "Couscous (sebze veya etli irmik)",
          "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.L-PxaJlLn-h6HxiahIUhZAHaEK&pid=Api"
        },
        {
          "name": "Harira (geleneksel çorba)",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.-h7sPbvU-Xl3pM9l6C-v1QHaE8&pid=Api"
        },
        {
          "name": "Pastilla (tatlı-tuzlu börek)",
          "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.9g5sU3AlQY-JEn7R8hSvZAHaKX&pid=Api"
        }
      ]
    }
    ,


      {
        "id": 29,
        "countryName": "Nepal",
        "flag": "🇳🇵",
        "currency": {
          "code": "NPR",
          "name": "Nepalese Rupee",
          "symbol": "₨",
          "rate": 1
        },
        "languages": ["Nepalce", "İngilizce"],
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
      "description": "UNESCO Mirası, kraliyet sarayları ve tarihi tapınaklar.",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.wueAphLAqlhYIHd1NT9sHAHaE7&pid=Api"
    },
    {
      "placeName": "Pokhara",
      "description": "Göl manzarası, Himalaya zirveleri ve doğa sporları merkezi.",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.Mu-Toq43bIYQmB7UfZo0ZAHaEK&pid=Api"
    },
    {
      "placeName": "Chitwan Milli Parkı",
      "description": "Gergedan ve Bengal kaplanı gibi vahşi yaşamı gözlemleme imkânı.",
      "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.2Bwr0Y1Ia4nuVuRw81XMuwHaFC&pid=Api"
    },
    {
      "placeName": "Everest Bölgesi (Khumbu)",
      "description": "Dünyanın en yüksek zirvesine açılan yürüyüş rotaları.",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.K7_UH0jXsKhnkJK9U4QofgHaFJ&pid=Api"
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
    {
      "name": "Dal Bhat (mercimek çorbası ve pirinç)",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.0pcR8lMMIpwleJyLDE0fWwHaFj&pid=Api"
    },
    {
      "name": "Momo (Nepal usulü mantı)",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.5XjFlBCejpmJyz7PZoNXCAHaF7&pid=Api"
    },
    {
      "name": "Newari Khaja Set (çeşitli küçük tabaklar)",
      "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.l8xjpvDKroUGBnwS8qo_zQHaKB&pid=Api"
    },
    {
      "name": "Choila (baharatlı et yemeği)",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.fMBiWV3XltWqC2iHnGXH5AHaHa&pid=Api"
    }
  ]
      },


      {
        "id": 30,
        "countryName": "Nikaragua",
        "flag": "🇳🇮",
        "currency": {
          "code": "NIO",
          "name": "Nikaragua Kordobası",
          "symbol": "C$",
          "rate": 0.027 // Update with real rate
        },
        "languages": ["İspanyolca"],
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
            "description": "Kolonyal mimarisi ve Cocibolca Gölü üzerindeki adacıklarıyla ünlü.",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.5wAg5Z5kxQ5TAcCbDoxVyQHaFj&pid=Api"
          },
          {
            "placeName": "Ometepe Adası",
            "description": "İki yanardağ tarafından şekillendirilmiş tatlı su adası.",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.rhvBrhdCZBRoiyJP2wJEZwHaEK&pid=Api"
          },
          {
            "placeName": "León",
            "description": "Tarihi katedrali ve devrim müzeleriyle ünlü kültür şehri.",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.eg1HcEz5cLr9mvgpPhToXAHaFx&pid=Api"
          },
          {
            "placeName": "Masaya Yanardağı",
            "description": "Aktif krateri gözlemleme imkânı sunan ulusal park.",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.gjcKd_cmYhnwMk2jpOBJdgHaEp&pid=Api"
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
    {
      "name": "Gallo Pinto (fasulye ve pirinç karışımı)",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.clytevbab2VRkvumVBgN5AHaE7&pid=Api"
    },
    {
      "name": "Nacatamal (mısır hamurlu ve etli yaprak dolması)",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.AIg_4L-w0SDcz-_AEe3OmQHaDh&pid=Api"
    },
    {
      "name": "Vigorón (lahana salatası, kızarmış domuz derisi, yuca)",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.2772A6-Nmt-q-kguuWLPEQHaFR&pid=Api"
    },
    {
      "name": "Quesillo (peynirli tortilla)",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.K1lnXvSyRDC7r-clrFVOuQHaLG&pid=Api"
    }
  ]
      },


      {
        "id": 31,
        "countryName": "Kuzey Makedonya",
        "flag": "🇲🇰",
        "currency": {
          "code": "MKD",
          "name": "Macedonian Denar",
          "symbol": "ден",
          "rate": 0.48
        },
        "languages": ["Makedonca", "Arnavutça", "Sırpça"],
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
      "description": "Vardar Nehri üzerindeki tarihi Osmanlı köprüsü.",
      "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.QdLR-cT0U65Z_dfXpQcNDgHaEo&pid=Api"
    },
    {
      "placeName": "Ohri Gölü",
      "description": "UNESCO korumasındaki göl, tarihi kiliseler ve mükemmel doğa.",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.iWBLMl3p9i5KAsb-OvkZQwHaEo&pid=Api"
    },
    {
      "placeName": "Mavrovo Milli Parkı",
      "description": "Dağcılık, kış sporları ve doğal güzellikleriyle ünlü.",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.IBtI2xlU4j3moUYahKLLkwHaFi&pid=Api"
    },
    {
      "placeName": "Matka Kanyonu",
      "description": "Tekne turları, mağaralar ve doğa yürüyüşü fırsatı.",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.Jcx0BFrC9LK-67zEbAFCTAHaDt&pid=Api"
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
          {
            "name": "Tavče Gravče (fırınlanmış fasulye yemeği)",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.M30more8tgPMwP7CJjCk8gHaE8&pid=Api"
          },
          {
            "name": "Shopska Salata (Balkan salatası)",
            "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.uNNPd_gxaRloD2pVJ6T41QHaHM&pid=Api"
          },
          {
            "name": "Ajvar (kırmızı biber sosu)",
            "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.VGBX_uAJ1BvTiVjzUfu1cwHaHa&pid=Api"
          },
          {
            "name": "Burek (börek çeşitleri)",
            "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.w8BAarTzspLuCXZE1d0VYgHaE7&pid=Api"
          }
        ]
      },









      
      {
        "id": 32,
        "countryName": "Kuzey Kıbrıs (KKTC)",
        "flag": "🇹🇷",
        "currency": {
          "code": "TRY",
          "name": "Turkish Lira",
          "symbol": "₺",
          "rate": 1
        },
        "languages": ["Türkçe", "İngilizce"],
        "visaType": "Vize Gerekmiyor",
        "maxStay": "Süre kısıtlaması yok",
        "notes": "Yalnızca Türkiye tarafından tanınır; uluslararası uçuşlar Türkiye aktarmalıdır.",
        "capital": {
          "name": "Lefkoşa (Kuzey)",
          "symbol": "Selimiye Camii (Ayasofya Katedrali) ve Venedik Surları silueti"
        },
        "touristicPlaces": [
          {
            "placeName": "Bellapais Manastırı",
            "description": "Gotik mimarisiyle ünlü tarihi manastır, Girne yakınlarında.",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.5RQWoBRwSWhQ6ZUWuHGLgwHaE7&w=315&h=315&c=7"
          },
          {
            "placeName": "Kapalı Maraş (Varosha)",
            "description": "Terk edilmiş sahil kenti, kısmen ziyarete açılmıştır.",
            "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.S0o0O2WATR5m5SlP_1r_-AHaE9&w=317&h=317&c=7"
          },
          {
            "placeName": "Karpaz Yarımadası",
            "description": "Bakir plajlar ve eşekleriyle ünlü doğal güzellik.",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.6qUGwgrMnJYKROy4Q8xyhAHaEK&w=266&h=266&c=7"
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
    {
      "name": "Şeftali Kebabı",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.fMKpjA-n4OEj8bLsywOA1QHaFj&pid=Api"
    },
    {
      "name": "Hellim (Halloumi) Peyniri",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.xlY-Kkpl0yqUq7_RodbFuAHaHa&pid=Api"
    },
    {
      "name": "Kıbrıs Köftesi",
      "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.qcyKTWdSYM6lJSj7n5TangHaEK&pid=Api"
    },
    {
      "name": "Pilavuna (Çörek)",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.uxR-zExGxtmdgQOQNHpRJwHaJQ&pid=Api"
    },
    {
      "name": "Kolakas Yemeği",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.IYM4u3qg-heKyq5p37lUlAHaEK&pid=Api"
    }
  ]
      },


      {
        "id": 33,
        "countryName": "Umman",
        "flag": "🇴🇲",
        "currency": {
          "code": "OMR",
          "name": "Omani Rial",
          "symbol": "ر.ع.",
          "rate": 70.0
        },
        "languages": ["Arapça", "İngilizce"],
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
            "description": "Maskat'ın simgesi, muhteşem İslam mimarisi ve halısıyla ünlü.",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.ZJOvtNf7DKTtHTzVBH0gWwHaHa&pid=Api"
          },
          {
            "placeName": "Mutrah Çarşısı",
            "description": "Tarihi pazar yeri, tütsü ve yerel hediyelikler bulabilirsiniz.",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.jTcCZ6yeOtlWeOewL41ExQHaEK&pid=Api"
          },
          {
            "placeName": "Wadi Shab",
            "description": "Doğal yüzme havuzları, yürüyüş rotaları ve şelaleler.",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.dmyIowrE-UHDG6tVdVtQswHaKX&pid=Api"
          },
          {
            "placeName": "Nizwa Kalesi",
            "description": "Tarihi kale ve Cuma günleri kurulan canlı keçi pazarı.",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.c6FAk_G8KXaJwGkylA6vbgHaEK&pid=Api"
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
    {
      "name": "Shuwa (gömlekte pişen et yemeği)",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.0XMoG0khL5he-HPva0POeAHaLJ&pid=Api"
    },
    {
      "name": "Majboos (etli pilav)",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.n0bJy8BaTZV1N7ieb3QMpgHaFj&pid=Api"
    },
    {
      "name": "Halwa (Oman helvası)",
      "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.5VW1vRUFE7NMQYVw6ShNhQHaHa&pid=Api"
    },
    {
      "name": "Mashuai (ızgara kral balığı)",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.SI5ItR5ZfP5JA0FI21qZCwHaFj&pid=Api"
    }
  ]
      },


      {
        "id": 34,
        "countryName": "Filistin Bölgeleri",
        "flag": "🇵🇸",
        "currency": {
          "code": "ILS",
          "name": "Israeli Shekel",
          "symbol": "₪",
          "rate": 7.5
        },
        "languages": ["Arapça", "İbranice"],
        "visaType": "Vize Gerekmiyor",
        "maxStay": "İsrail sınır yetkilileri belirliyor",
        "notes": "Giriş ve çıkışlar İsrail kontrolündedir, farklı kısıtlamalar olabilir.",
        "capital": {
          "name": "Resmî başkent Doğu Kudüs (uluslararası statü tartışmalı)",
          "symbol": "Mescid-i Aksa ve Kubbetüs Sahra silueti"
        },
        "touristicPlaces": [
          {
            "placeName": "Kudüs Eski Şehir (Doğu Kudüs)",
            "description": "Tarihi surlar, kutsal mekânlar ve geleneksel pazarlar.",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.LLAcvorfJxKOsIt0Cniq3AAAAA&pid=Api"
          },
          {
            "placeName": "Betlehem – Doğuş Kilisesi",
            "description": "Hz. İsa'nın doğum yeri olduğuna inanılan tarihi kilise.",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.tVbxjLy0_cB3gb6l2AuQxgHaE7&pid=Api"
          },
          {
            "placeName": "El-Halil (Hebron) – İbrahim Camii",
            "description": "Hz. İbrahim'in türbesi, Müslümanlar ve Yahudiler için kutsal mekân.",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.MTEY5tZ115kOrxPxLjMj2gHaEK&pid=Api"
          },
          {
            "placeName": "Ramallah",
            "description": "Filistin'in kültürel ve ekonomik merkezlerinden biri, modern kafe ve restoranlar.",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.OxqXHzwpGpysSMz65SzKIQHaFj&pid=Api"
          }
        ],
        "importantNumbers": {
          "police": "100 (İsrail polisi)",
          "ambulance": "101 (Kızılay/Kızılhaç veya Magen David Adom)",
          "fire": "102",
          "generalEmergency": "101 veya 911 benzeri hatlar (bölgeye göre)"
        },
        "thingsToKnow": {
          "warnings": "Bölgede siyasi gerilim yüksektir, seyahat uyarılarını kontrol edin.",
          "transportation": "Servis taksiler (dolmuş), otobüsler ve özel transferler. İsrail kontrol noktalarını geçerken beklemeler olabilir.",
          "internetProviders": [
            "Jawwal",
            "Wataniya Mobile (Ooredoo)",
            "Bazı bölgelerde İsrail operatörleri"
          ],
          "turkishProvidersUsage": "Roaming genelde İsrail şebekesi üzerinden sağlanır. Filistin SIM kartları daha ekonomik olabilir."
        },
        "famousDishes": [
    {
      "name": "Maklube",
      "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.g7AQYeYHwSkNJlbihpkvrgHaEK&pid=Api"
    },
    {
      "name": "Musakhan (tavuk ve soğanlı ekmek)",
      "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.opwtSfkAasR2AUclqufkBwHaHa&pid=Api"
    },
    {
      "name": "Falafel",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.8jDiY1OnNRJvL7LZrzbNUQHaLH&pid=Api"
    },
    {
      "name": "Kanafeh (peynir tatlısı)",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.s7X0J67-f61Z1auuJjrRwgHaE7&pid=Api"
    }
  ]
      }
      ,


      {
        "id": 35,
        "countryName": "Panama",
        "flag": "🇵🇦",
        "currency": {
          "code": "USD",
          "name": "United States Dollar",
          "symbol": "$",
          "rate": 34
        },
        "languages": ["İspanyolca", "İngilizce"],
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
      "description": "Dünyanın mühendislik harikası kanal sistemi.",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.RDLZS7zgqyz2vycxTaabXQHaFj&pid=Api"
    },
    {
      "placeName": "Casco Viejo",
      "description": "Tarihi şehir merkezi, kolonyal binalar ve renkli sokaklar.",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.W0eWIBZZeaaWCdMJI1NiaQHaE8&pid=Api"
    },
    {
      "placeName": "Bocas del Toro",
      "description": "Karayip Denizi'nde mercan resifleri, dalış ve plaj keyfi.",
      "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.SGYwmGY1di9c9Na3N4RWPQHaE2&pid=Api"
    },
    {
      "placeName": "San Blas Adaları (Guna Yala)",
      "description": "Guna Yerlilerinin yönettiği ıssız tropik adalar topluluğu.",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.Ji9pMmRLTKNQuimEjXEl-wAAAA&pid=Api"
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
    {
      "name": "Sancocho de Gallina (tavuk çorbası)",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.AhrwnV_057QrWfA4hIT9lwHaEK&pid=Api"
    },
    {
      "name": "Ropa Vieja (didiklenmiş et yemeği)",
      "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.LCep37HFahDujrssNzpZuAHaE8&pid=Api"
    },
    {
      "name": "Patacones (kızarmış muz dilimleri)",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.YALgM-TmJq_iIowh4AEg5AHaGL&pid=Api"
    },
    {
      "name": "Ceviche (limonlu deniz ürünleri)",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.sdJShXwpvgUSDPh5PHwXNAHaE6&pid=Api"
    }
  ]
      },


      {
        "id": 36,
        "countryName": "Paraguay",
        "flag": "🇵🇾",
        "currency": {
          "code": "PYG",
          "name": "Paraguayan Guarani",
          "symbol": "₲",
          "rate": 0.0039
        },
        "languages": ["İspanyolca", "Guarani"],
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
      "description": "Kolonyal binalar, Palacio de López ve Ulusal Kahramanlar Panteonu.",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.RDLZS7zgqyz2vycxTaabXQHaFj&pid=Api"
    },
    {
      "placeName": "Itaipú Barajı",
      "description": "Dünyanın en büyük hidroelektrik barajlarından biri, Paraguay-Brezilya sınırında.",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.Ji9pMmRLTKNQuimEjXEl-wAAAA&pid=Api"
    },
    {
      "placeName": "Jesuit Misyonları (Trinidad ve Jesús)",
      "description": "UNESCO Dünya Mirası yerleri, tarihi misyon kalıntıları.",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.SGYwmGY1di9c9Na3N4RWPQHaE2&pid=Api"
    },
    {
      "placeName": "Encarnación",
      "description": "Karadeniz tipi plajlarıyla da bilinen turistik kıyı kenti.",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.W0eWIBZZeaaWCdMJI1NiaQHaE8&pid=Api"
    }
  ],
        "importantNumbers": {
          "police": "911",
          "ambulance": "141",
          "fire": "104",
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
    {
      "name": "Chipa (peynirli ekmek)",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.AaPsULi6tkOiEgyIR5aOXgHaEK&pid=Api"
    },
    {
      "name": "Sopa Paraguaya (katı mısır ekmeği)",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.GZU-lyj_vTKKv8Vd2foyxAHaE6&pid=Api"
    },
    {
      "name": "Mandioca (yerel manyok)",
      "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.B9BNd6GtJx7Gl2V_zdYC_gHaJB&pid=Api"
    },
    {
      "name": "Bori Bori (topçuklu çorba)",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.1F8R-N6uZt_BjcM9JHJnzQHaE8&pid=Api"
    }
  ]
      },


      {
        "id": 37,
        "countryName": "Katar",
        "flag": "🇶🇦",
        "currency": {
          "code": "QAR",
          "name": "Qatari Rial",
          "symbol": "ر.ق",
          "rate": 7.5
        },
        "languages": ["Arapça", "İngilizce"],
        "visaType": "Vize on Arrival",
        "maxStay": "30 gün",
        "notes": "30 gün daha uzatılabilir. Pasaport en az 6 ay geçerli olmalı.",
        "capital": {
          "name": "Doha",
          "symbol": "Doha silüetinde gökdelenler ve yelkenli (dhow) botu sembolü"
        },
        "touristicPlaces": [
    {
      "placeName": "İslami Sanat Müzesi",
      "description": "Dünyaca ünlü mimar IM Pei tarafından tasarlanan müze.",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.00lXXVU58kPcDT-lgs6EuwHaE9&pid=Api"
    },
    {
      "placeName": "The Pearl-Qatar",
      "description": "Lüks yapay ada, alışveriş ve marina alanı.",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.EV9D5Jx285nklM5dDbfviwHaFs&pid=Api"
    },
    {
      "placeName": "Katara Kültür Köyü",
      "description": "Sanat galerileri, tiyatrolar ve restoranların bulunduğu kültür merkezi.",
      "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.KKSicies-tyjs8kDdFg4mgHaE7&pid=Api"
    }
  ]
        ,
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
          {
            "name": "Machbous (baharatlı et veya balık pilavı)",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.QhKlw6JPcoh7Iq7v_rhezwHaHa&w=474&h=474&c=7"
          },
          {
            "name": "Harees (buğday ve et ezmesi)",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.cAfelHUggZAirUr_Bc0nWAHaGG&w=390&h=390&c=7"
          },
          {
            "name": "Balaleet (şekerli erişte, omlet ile)",
            "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.294qF8N5vnVPUbk4VY2tuQHaEK&w=266&h=266&c=7"
          },
          {
            "name": "Luqaimat (bal şerbetli tatlı topçuklar)",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.jfZkG3H3fyNJLFjQOflFXQHaE8&w=316&h=316&c=7"
          }
        ]
      },


      {
        "id": 38,
        "countryName": "Sırbistan",
        "flag": "🇷🇸",
        "currency": {
          "code": "RSD",
          "name": "Serbian Dinar",
          "symbol": "дин.",
          "rate": 0.24
        },
        "languages": ["Sırpça", "İngilizce", "Hırvatça"],
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
            "description": "Tarihi kale ve park, Tuna ve Sava nehirlerinin birleştiği nokta.",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.f-hfYbE-s3QJMU_TwFzIkAHaE8&w=316&h=316&c=7"
          },
          {
            "placeName": "Skadarlija",
            "description": "Bohem sokak, geleneksel restoranlar ve kafeler.",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.Xf72C4-1S4X07A7Uha90dQHaHa&w=474&h=474&c=7"
          },
          {
            "placeName": "Novi Sad – Petrovaradin Kalesi",
            "description": "EXIT Müzik Festivali'nin düzenlendiği ünlü tarihi kale.",
            "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.VoQIWfh39j561a_3tyZkHgHaEK&w=266&h=266&c=7"
          },
          {
            "placeName": "Drvengrad (Mecavnik)",
            "description": "Emir Kusturica'nın inşa ettiği geleneksel ahşap köy, kırsal bölgelerde.",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.BxWZABI384KaMxOp4oYCGAHaFj&w=355&h=355&c=7"
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
    {
      "name": "Ćevapi (köfte benzeri et)",
      "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.VDB8T7BaDGRHSf97pTLkfwHaE8&pid=Api"
    },
    {
      "name": "Pljeskavica (Sırp köftesi)",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.0MS9fSa_WPdgpfNHNM8wTwHaE8&pid=Api"
    },
    {
      "name": "Sarma (lahana sarması)",
      "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.fL4GxrR2VIIYaach3OyNpAHaFR&pid=Api"
    },
    {
      "name": "Kaymak (kremsi süt ürünü)",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.zXk1YjohSWzgknaYbytdEAHaHa&pid=Api"
    }
  ]
      },


      {
        "id": 39,
        "countryName": "Singapur",
        "flag": "🇸🇬",
        "currency": {
          "code": "SGD",
          "name": "Singapore Dollar",
          "symbol": "$",
          "rate": 20.5
        },
        "languages": ["İngilizce", "Çince", "Malayca", "Tamil"],
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
      "description": "Ünlü otel, gökdelen, gökyüzü havuzu ve alışveriş merkezi.",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.SUueW52avB5vGQpT9xrUcwHaEd&pid=Api"
    },
    {
      "placeName": "Gardens by the Bay",
      "description": "Dev ağaç heykelleri (Supertree Grove) ve çiçek kubbesi.",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.ibKcYAoNb6P62JQrcRwr9gHaFj&pid=Api"
    },
    {
      "placeName": "Sentosa Adası",
      "description": "Plajlar, Universal Studios ve eğlence merkezleri.",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.i2YQP3Bt2uECn0sZIfh2BAHaEf&pid=Api"
    },
    {
      "placeName": "Chinatown & Little India",
      "description": "Etnik mahallelerde yemek ve kültürel çeşitlilik.",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.oARfLk5qeRi34xBY44C64gHaEL&pid=Api"
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
    {
      "name": "Hainanese Chicken Rice (tavuk ve pilav)",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.qpwyFVWk8JIP1atj8yi_XAHaFj&pid=Api"
    },
    {
      "name": "Chili Crab (biberli yengeç)",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.cAfelHUggZAirUr_Bc0nWAHaGG&pid=Api"
    },
    {
      "name": "Laksa (Hindistan cevizi sütlü erişte çorbası)",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.294qF8N5vnVPUbk4VY2tuQHaEK&pid=Api"
    },
    {
      "name": "Satay (ızgara et şiş)",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.jfZkG3H3fyNJLFjQOflFXQHaE8&pid=Api"
    }
  ]
      },


      {
        "id": 40,
        "countryName": "Güney Afrika",
        "flag": "🇿🇦",
        "currency": {
          "code": "ZAR",
          "name": "South African Rand",
          "symbol": "R",
          "rate": 1.5
        },
        "languages": [
          "Afrikaanca", "İngilizce", "Zulu", "Xhosa", "Sotho",
          "Tsonga", "Swati", "Venda", "Ndebele"
        ],
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
            "description": "Teleferikle çıkılabilen ikonik dağ ve panoramik manzara.",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.OT2GBXH_UxeKrPlJkhdnYwHaE8&pid=Api"
          },
          {
            "placeName": "Kruger Ulusal Parkı",
            "description": "Büyük 5'li (aslan, fil, bufalo, leopar, gergedan) safari deneyimi.",
            "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.BUcHk6qFyQ0LUkAokpgGKwHaE8&pid=Api"
          },
          {
            "placeName": "Johannesburg – Apartheid Müzesi",
            "description": "Güney Afrika'nın yakın tarihini anlatan önemli müze.",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.qoGGeT5Ey1fFOXYAWK7qBwHaEo&pid=Api"
          },
          {
            "placeName": "Garden Route",
            "description": "Muhteşem kıyı manzaraları, yürüyüş yolları ve küçük kasabalar.",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.xenKuWaeWMjt8et38qT1xgHaEJ&pid=Api"
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
    {
      "name": "Biltong (kurutulmuş et)",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.ziv94qcgkA2z1OyiqcgrDAHaHa&pid=Api"
    },
    {
      "name": "Bobotie (kıyma ve baharatlı fırın yemeği)",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.Zhe0Jzinifl37H5mSu_DkwHaE7&pid=Api"
    },
    {
      "name": "Bunny Chow (ekmek içinde körili et veya sebze)",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.0sQoFy3RCcMkLCeUDYjZgwHaFc&pid=Api"
    },
    {
      "name": "Pap ve Chakalaka (mısır lapası ve sebzeli sos)",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.JJT7_9vKCLItQR5XCBZJtAHaLH&pid=Api"
    }
  ]
      },


      {
        "id": 41,
        "countryName": "Güney Kore",
        "flag": "🇰🇷",
        "currency": {
          "code": "KRW",
          "name": "South Korean Won",
          "symbol": "₩",
          "rate": 0.021
        },
        "languages": ["Korece"],
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
      "description": "Joseon Hanedanlığı döneminden kalma, en büyük saray komplekslerinden biri.",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.5wQKUgvML-W_vOi78esA3AHaE7&pid=Api"
    },
    {
      "placeName": "Myeongdong",
      "description": "Popüler alışveriş semti, Kore kozmetiği ve sokak yemeği cenneti.",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.U_2JswIAxZb8tdyoEU1pkAHaE7&pid=Api"
    },
    {
      "placeName": "Busan – Haeundae Plajı",
      "description": "Ülkenin en ünlü plajı, yaz turizminin gözdesi.",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.7kJ-AWv6DkYk_CK5EEFTDQHaE8&pid=Api"
    },
    {
      "placeName": "Jeju Adası",
      "description": "Volkanik doğal güzellikler, plajlar ve Hallasan Dağı.",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.ttoDN_NdDDEXazaRR9J4KwHaE9&pid=Api"
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
    {
      "name": "Kimchi",
      "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.CdRnzy-FW8tEQTWrbUhL_QHaE8&pid=Api"
    },
    {
      "name": "Bibimbap (karışık sebzeli pilav)",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.XQIww0eJrl8VSqLyJUCWeAHaE8&pid=Api"
    },
    {
      "name": "Bulgogi (marineli et)",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.VuBttYZK5fmzHGeDoejD7QHaHa&pid=Api"
    },
    {
      "name": "Tteokbokki (acı biber soslu pirinç keki)",
      "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.GmEmKX48df7Otjn1GofOdgHaHa&pid=Api"
    }
  ]
      },


      


      {
        "id": 43,
        "countryName": "Tayvan",
        "flag": "🇹🇼",
        "currency": {
          "code": "TWD",
          "name": "New Taiwan Dollar",
          "symbol": "NT$",
          "rate": 0.9
        },
        "languages": ["Çince", "İngilizce"],
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
      "description": "Bir zamanlar dünyanın en yüksek binası, gözlem katı bulunur.",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.5wQKUgvML-W_vOi78esA3AHaE7&pid=Api"
    },
    {
      "placeName": "Chiang Kai-shek Anıt Salonu",
      "description": "Tarihi ve politik sembol, geniş bir meydan ve bahçeyle çevrili.",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.U_2JswIAxZb8tdyoEU1pkAHaE7&pid=Api"
    },
    {
      "placeName": "Taroko Boğazı",
      "description": "Mermer kanyonlar, dağ geçitleri ve nehirleriyle ünlü milli park.",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.7kJ-AWv6DkYk_CK5EEFTDQHaE8&pid=Api"
    },
    {
      "placeName": "Sun Moon Lake",
      "description": "Tayvan'ın en büyük gölü, bisiklet ve tekne turları için popüler.",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.ttoDN_NdDDEXazaRR9J4KwHaE9&pid=Api"
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
          "transportation": "MRT (metro), otobüs ve U-Bike kiralama oldukça kolay. Hızlı tren (HSR) şehirlerarası seyahatte hızlı.",
          "internetProviders": [
            "Chunghwa Telecom",
            "Taiwan Mobile",
            "FarEasTone"
          ],
          "turkishProvidersUsage": "Roaming mümkün, ama pahalı olabilir. Turist SIM veya eSIM yaygın ve ucuz."
        },
       "famousDishes": [
    {
      "name": "Beef Noodle Soup (etli erişte çorbası)",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.IGzXTV6RuKThCo9LwZd5kwHaHa&pid=Api"
    },
    {
      "name": "Xiao Long Bao (sulu Çin mantısı)",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.Sy2yceQ-CzjGE5kgzTgdAQHaEK&pid=Api"
    },
    {
      "name": "Gua Bao (yumuşak buharda pişirilmiş etli ekmek)",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.ciZYdNuoxlkBx4b9YxXhrAHaLH&pid=Api"
    },
    {
      "name": "Stinky Tofu (kokuşmuş tofu)",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.BEhmkjMC5tO4D-o_OB220AHaE8&pid=Api"
    },
    {
      "name": "Bubble Tea (köpüklü çay)",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.vJQm4xWFXw9edsWl8NFBSgHaJ4&pid=Api"
    }
  ]
      },


      {
        "id": 44,
        "countryName": "Tacikistan",
        "flag": "🇹🇯",
        "currency": {
          "code": "TJS",
          "name": "Tacikistan Somonisi",
          "symbol": "ЅM",
          "rate": 2.91,
          "lastUpdate": "2024-03-19"
        },
        "languages": ["Tacikçe", "Rusça"],
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
      "description": "Dağcılık, trekking ve nefes kesici doğal güzellikler.",
      "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.tTLPaeISy06e98MZDLKHoQHaE5&pid=Api"
    },
    {
      "placeName": "Iskanderkul Gölü",
      "description": "Efsanevi göl, dağ manzaralarıyla ünlü, kamp ve yürüyüş için ideal.",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.SMJJbkthCkqBOKXbtlcyzAHaF7&pid=Api"
    },
    {
      "placeName": "Duşanbe – Rudaki Caddesi",
      "description": "Şehrin ana caddesi, parklar ve anıtlarla çevrili.",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.Ha_2hmf-oV2aMxWIcBk5gAHaFj&pid=Api"
    },
    {
      "placeName": "Hissar Kalesi",
      "description": "Tarihi kale kalıntıları ve avlu.",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.Z6M0HqK1s4XaKx8rpLfOaQHaEK&pid=Api"
    }
  ],
        "importantNumbers": {
          "police": "02",
          "ambulance": "03",
          "fire": "01",
          "generalEmergency": "112"
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
    {
      "name": "Plov (pilav ve et)",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.MZ_kQS6SLmf6v-QLLSHmlQHaHa&pid=Api"
    },
    {
      "name": "Qurutob (yoğurtlu ekmek salatası)",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.Rx1VU14bZd34ARlFdAOrigHaFQ&pid=Api"
    },
    {
      "name": "Laghman (el açması erişte çorbası)",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.6vncZixX8uYU9n_T3PR3UgHaE8&pid=Api"
    },
    {
      "name": "Shashlik (ızgara et şiş)",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.SWy2LWYVgxdhIFnGug8CJQHaE7&pid=Api"
    },
    {
      "name": "Helva",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.V-pYxb25h1HjY0i_CK78mwHaEK&pid=Api"
    }
  ]
      },


      {
        "id": 45,
        "countryName": "Tayland",
        "flag": "🇹🇭",
        "currency": {
          "code": "THB",
          "name": "Tayland Bahtı",
          "symbol": "฿",
          "rate": 0.89
        },
        "languages": ["Tayca"],
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
      "description": "Tarihi saray ve Zümrüt Buda Tapınağı ile ünlü kompleks.",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.7O876Qe8wCYoiOcY1CB92AHaE8&pid=Api"
    },
    {
      "placeName": "Phuket",
      "description": "Plajlar, gece hayatı ve ada turlarıyla ünlü turizm merkezi.",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.VR_N-Kb332mH9G5RmqbcXgHaE8&pid=Api"
    },
    {
      "placeName": "Chiang Mai",
      "description": "Dağ tapınakları, fil kampları ve geleneksel pazarlar.",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.Eu6uJaENmBBpUGNuk0qRugHaE-&pid=Api"
    },
    {
      "placeName": "Ayutthaya Tarihi Parkı",
      "description": "UNESCO Mirası, antik tapınak kalıntıları ve saraylar.",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.acVu7AnuBDuyvdq59iErBgHaFj&pid=Api"
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
          {
            "name": "Pad Thai (erişte yemeği)",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.Gy061FuHUwxhzEt_W54xrgHaLH&pid=Api"
          },
          {
            "name": "Tom Yum Soup (acı-ekşi çorba)",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.PBnIvvr9K6mM8NbXsfqD3gHaKX&pid=Api"
          },
          {
            "name": "Green Curry (köri yemekleri)",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.kVklKgRjhATw1cq4U4d5EgHaHh&pid=Api"
          },
          {
            "name": "Red Curry (köri yemekleri)",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.Ac18SAQyC_keIwcX0EsynAHaE9&pid=Api"
          },
          {
            "name": "Mango Sticky Rice (tatlı pirinç ve mango)",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.hISlHZYtpBtLDqzAxSv9vwHaJ4&pid=Api"
          }
        ]
      },


      {
        "id": 46,
        "countryName": "Tunus",
        "flag": "🇹🇳",
        "currency": {
          "code": "TND",
          "name": "Tunus Dinarı",
          "symbol": "د.ت",
          "rate": 10.25
        },
        "languages": ["Arapça", "Fransızca"],
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
            "description": "Fenike ve Roma kalıntılarıyla ünlü tarihi bölge.",
            "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.cbIWHgVG-6e_ECwPFDgeDAHaEo&pid=Api"
          },
          {
            "placeName": "Sidi Bou Said",
            "description": "Mavi-beyaz boyalı evleriyle turistik sahil kasabası.",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.sp01MBBx3LL9n_gsuKuSIQHaEK&pid=Api"
          },
          {
            "placeName": "Bardo Müzesi",
            "description": "Zengin Roma mozaik koleksiyonuyla bilinen ulusal müze.",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.QRDX0kMBJwbl-CklmwNsGQHaE8&pid=Api"
          },
          {
            "placeName": "Sahara Çölü – Douz",
            "description": "Çöl safarisi ve geleneksel Berberi kültürü deneyimi.",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.sCEBc9O1kQmTxFP74ice5QHaE8&pid=Api"
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
    {
      "name": "Couscous (sebzeli veya etli)",
      "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.9sWkf0nFGdYggwDRzogQCQHaE8&pid=Api"
    },
    {
      "name": "Brik (yumurtalı ve ton balıklı börek)",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.cyKwZ9w6cijix0zB9qA37wHaFj&pid=Api"
    },
    {
      "name": "Shakshuka (domates ve biberli yumurta yemeği)",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.jDX2ZAJ_mhhzJK2N3zEAcgHaFj&pid=Api"
    },
    {
      "name": "Harissa (acı biber ezmesi)",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.6XYbR0r8Gu8mMMXmqOGI4gHaLH&pid=Api"
    }
  ]
      },


      {
        "id": 47,
        "countryName": "Ukrayna",
        "flag": "🇺🇦",
        "currency": {
          "code": "UAH",
          "name": "Ukrayna Grivnası",
          "symbol": "₴",
          "rate": 0.85
        },
        "languages": ["Ukraynaca"],
        "visaType": "Vize Gerekmiyor",
        "maxStay": "90 gün",
        "notes": "180 günlük süre içinde 90 gün. Son durumu güncel koşullara göre takip edin.",
        "capital": {
          "name": "Kyiv",
          "symbol": "Kiev Pechersk Lavra (Altın Kubbeli Manastır) ve Altın Kapı sembolleri"
        },
        "touristicPlaces": [
    {
      "placeName": "Kiev – Kreschatik Caddesi ve Bağımsızlık Meydanı",
      "description": "Şehrin kalbi, Maidan olarak bilinen tarihi meydan.",
      "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.l3z7MEBebZHVph4XMcoHAAHaE7&pid=Api"
    },
    {
      "placeName": "Lviv Eski Şehir",
      "description": "UNESCO Mirası, Avrupa mimarisi ve kafe kültürüyle ünlü.",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.cs72nj5MBU2GpPDLwcu6GAHaE8&pid=Api"
    },
    {
      "placeName": "Odessa – Potemkin Merdivenleri",
      "description": "Karadeniz kıyısında ünlü liman kenti, Potemkin Merdivenleri.",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.Y68oMBNFG6j6pXRGypuJtQHaE8&pid=Api"
    },
    {
      "placeName": "Çernobil Turu – Pripyat Kenti",
      "description": "Terk edilmiş Pripyat kenti ve rehberli nükleer felaket bölgesi gezileri.",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.Jfe1NAlgRhmTbjoDIpFr4gHaEK&pid=Api"
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
    {
      "name": "Borsch (pancar çorbası)",
      "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.W2QkLRLSqBJUQfub7EiBuQHaLH&pid=Api"
    },
    {
      "name": "Varenyky (mantı benzeri hamur)",
      "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.Sv8KfZ8OoFd6PNAmtqNEkgHaGL&pid=Api"
    },
    {
      "name": "Chicken Kyiv (tereyağlı tavuk rulosu)",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.ypFECjqz29Aqp08p4H_t1QHaHa&pid=Api"
    }
  ]
          
        
      },


      {
        "id": 48,
        "countryName": "Uruguay",
        "flag": "🇺🇾",
        "currency": {
          "code": "UYU",
          "name": "Uruguay Pesosu",
          "symbol": "$",
          "rate": 0.82
        },
        "languages": ["İspanyolca"],
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
            "description": "Kolonyal mimari, restoranlar ve tarihi binalar.",
            "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.LtDE8ZGB5IRkTCWDNwNd5wHaJ4&pid=Api"
          },
          {
            "placeName": "Pocitos Plajı",
            "description": "Montevideo şehir içinde kumsal keyfi, yürüyüş yolları.",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.hqHUBlUibImEJQ_UF_WjnQHaEp&pid=Api"
          },
          {
            "placeName": "Punta del Este",
            "description": "Lüks tatil beldesi, plajlar ve gece hayatı.",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.nXRLbOBghhmlZJ5BwlG35gHaE7&pid=Api"
          },
          {
            "placeName": "Colonia del Sacramento",
            "description": "Portekiz kolonyal geçmişi, Arnavutkaldırım sokaklarıyla UNESCO Dünya Mirası.",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.Dpag0gbGxKc4cFBH3IodWAHaE8&pid=Api"
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
          {
            "name": "Asado (mangalda et)",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.4HLh2j_kBJthNFh1P_kisgHaE7&pid=Api"
          },
          {
            "name": "Chivito (etli sandviç)",
            "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.0d-lUElmNLmFpQiLJndbbAHaFj&pid=Api"
          }
        ]
      },


      {
        "id": 49,
        "countryName": "Özbekistan",
        "flag": "🇺🇿",
        "currency": {
          "code": "UZS",
          "name": "Özbek Somu",
          "symbol": "so'm",
          "rate": 0.0026
        },
        "languages": ["Özbekçe", "Rusça"],
        "visaType": "Vize Gerekmiyor",
        "maxStay": "30 gün",
        "notes": "Türk vatandaşları için vizesiz rejim geçerli.",
        "capital": {
          "name": "Taşkent",
          "symbol": "Taşkent Kulesi ve Timurlenk heykeli"
        },
        "touristicPlaces": [
          {
            "placeName": "Semerkand – Registan Meydanı",
            "description": "İslam mimarisinin zirvesi kabul edilen medreseler.",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.bkXnF0F1E-Lwwf8CdYkX5wHaE7&pid=Api"
          },
          {
            "placeName": "Buhara Eski Şehir",
            "description": "UNESCO Mirası, tarihi camiler, türbeler ve çarşılar.",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.qK5ZST-vFk7gMFd9kEswpgHaEo&pid=Api"
          },
          {
            "placeName": "Hiva (Khiva) – İçan Kale",
            "description": "Tamamen surlarla çevrili, zamana yolculuk hissi veren antik kent.",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.-hBtUUts1VZodSVOZELj3AHaDt&pid=Api"
          },
          {
            "placeName": "Taşkent – Teleshayakh Kütüphanesi",
            "description": "Dünyanın en eski Kur'an nüshası olduğu düşünülen eserin sergilendiği yer.",
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.kS_53OfkBAzR8AYgkJXlwQHaG2&pid=Api"
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
          "transportation": "Şehirlerarası tren (Afrosiyob hızlı treni) konforlu. Taksiler yaygın.",
          "internetProviders": [
            "Uztelecom",
            "Ucell",
            "Beeline Uzbekistan",
            "Mobiuz"
          ],
          "turkishProvidersUsage": "Roaming kullanılabilir. Yerel SIM kartlar data için uygun olabilir."
        },
        "famousDishes": [
    {
      "name": "Plov (Özbek pilavı)",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.FXesPxqEg2KcRMtIWxjcPAHaE7&pid=Api"
    },
    {
      "name": "Shashlik (ızgara et şiş)",
      "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.Dw_bgQHODmYQctRvx7ZZ-gHaHa&pid=Api"
    },
    {
      "name": "Lagman (el açması erişte yemeği)",
      "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.sJUL9pbrdaAO7CGOOuM11QHaLH&pid=Api"
    },
    {
      "name": "Samsa (fırında börek)",
      "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.52WePTZ_QBV2fnDW1RC6MgHaHa&pid=Api"
    }
  ]
      }
    
    
  ]
  

  private favoritesSubject = new BehaviorSubject<Set<string>>(new Set<string>());
  favorites$ = this.favoritesSubject.asObservable();

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
    const storedFavorites = await this.storage.get(this.STORAGE_KEY);
    if (storedFavorites) {
      this.favoritesSubject.next(new Set(storedFavorites));
    }
  }

  getCountries(): Country[] {
    return this.countriesData;
  }

  async toggleFavorite(countryName: string) {
    const currentFavorites = this.favoritesSubject.value;
    if (currentFavorites.has(countryName)) {
      currentFavorites.delete(countryName);
    } else {
      currentFavorites.add(countryName);
    }
    this.favoritesSubject.next(new Set(currentFavorites));
    await this.storage.set(this.STORAGE_KEY, Array.from(currentFavorites));
  }

  isFavorite(countryName: string): boolean {
    return this.favoritesSubject.value.has(countryName);
  }

  private formatCurrencyInfo(code: string, rate: number): string {
    return `1 ${code} = ${rate.toFixed(2)} TL`;
  }

  getCurrencyInfo(country: Country): string {
    return `1 ${country.currency.code} = ${country.currency.rate} TL`;
  }
}

