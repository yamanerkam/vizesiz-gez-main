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
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.tPQaTOGQMzuvN95nHqZVlgHaJ4&pid=Api"
          },
          {
            "placeName": "Hazar Denizi kıyıları",
            "description": "Aktau gibi şehirlerde sahil turizmi imkânı.",
            "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.lvcMwjtCwMBfJasK5pKYOQHaEc&pid=Api"
          },
          {
            "placeName": "Almatı – Medeo Buz Pateni Pisti",
            "description": "Dünyanın en yüksek rakımlı açık hava pisti.",
            "imageUrl": "https://tse1.mm.bing.net/th?id=OIP.YyPbNMCNPTtBBZgH3vo1tQHaE8&pid=Api"
          },
          {
            "placeName": "Büyük Almatı Gölü",
            "description": "Dağlarla çevrili kartpostal güzelliğinde bir göl.",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.Y1OWTLJvM9PKO4MgQ7OPugHaE8&pid=Api"
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
            "imageUrl": "https://tse3.mm.bing.net/th?id=OIP.SaDggZQdywwWaTrbvlpT1gHaE8&pid=Api"
          },
          {
            "name": "Kazy (at eti sosisi)",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.7A6jAwW2Z7W9FW9H2ixqOQHaE8&pid=Api"
          },
          {
            "name": "Shubat (deve sütü)",
            "imageUrl": "https://tse4.mm.bing.net/th?id=OIP.gmx53WpMUEGJPrm22WgIzQHaFj&pid=Api"
          },
          {
            "name": "Baursak (kızarmış hamur lokmaları)",
            "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.cT_OhDlsV1mtR72kELchkwHaE8&pid=Api"
          }
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Kosovo_Museum_in_Pristina.jpg"
          },
          {
            "placeName": "Fatih Camii",
            "description": "Osmanlı döneminden kalma, Priştine'nin tarihi sembolü.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/98/Xhamia_e_Madhe_Prishtine.jpg"
          },
          {
            "placeName": "Germia Parkı",
            "description": "Priştine yakınında yeşil alan, yürüyüş ve piknik için ideal.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Germia_Park_in_Pristina.jpg"
          },
          {
            "placeName": "Prizren Eski Şehir",
            "description": "Tarihi köprü, camiler ve kiliselerle ünlü Osmanlı dokulu kent.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/84/Prizren_Old_Town_from_the_Fortress.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/36/Flija_Albanian_traditional_food.jpg"
          },
          {
            "name": "Pite (börek)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Albanian_pite.jpg"
          },
          {
            "name": "Tavë Prizreni (etli güveç)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Tave_prizreni.jpg"
          },
          {
            "name": "Sarma (lahana sarması)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/22/Sarma_Serbia.jpg"
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
          "rate": 1
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/66/Pigeon_Rocks_in_Raouch%C3%A9%2C_Beirut.jpg"
          },
          {
            "placeName": "Byblos Antik Kenti",
            "description": "Dünyanın en eski sürekli yerleşimlerinden biri, Fenike kalıntıları.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bd/ByblosOldPort.jpg"
          },
          {
            "placeName": "Jeita Grotto Mağaraları",
            "description": "Muhteşem yeraltı kireçtaşı oluşumları, tekneyle gezilebiliyor.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Jeita_Grotto.jpg"
          },
          {
            "placeName": "Baalbek",
            "description": "Roma İmparatorluğu'ndan kalma devasa tapınak kalıntıları.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/85/BaalbekTempleOfBacchus.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Lebanese_mezze_2.jpg"
          },
          {
            "name": "Kibbeh (bulgurlu et köftesi)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/58/Kibbeh.jpg"
          },
          {
            "name": "Manakish (baharatlı pide)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Manakish_with_Za%27atar.jpg"
          },
          {
            "name": "Baklava çeşitleri",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Turkish_baklava.jpg"
          }
        ]
      },
      {
        "id": 22,
        "countryName": "Makao",
        "flag": "🇲🇴",
        "currency": {
          "code": "MOP",
          "name": "Macanese Pataca",
          "symbol": "MOP$",
          "rate": 1
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/30/Senado_Square%2C_Macau.jpg"
          },
          {
            "placeName": "Ruins of St. Paul's",
            "description": "Makao'nun sembolik tarihi kilise kalıntıları.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Ruins_of_St._Paul%27s%2C_Macau.jpg"
          },
          {
            "placeName": "Macau Tower",
            "description": "Seyir terası, bungee jumping ve restoranlarıyla ünlü kule.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/91/Macau_Tower_View.jpg"
          },
          {
            "placeName": "Cotai Strip",
            "description": "Dünyaca ünlü kumarhaneler ve lüks oteller bölgesi.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Macau_Cotai_Skyline.jpg"
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
          {
            "name": "Pastel de Nata (Portekiz usulü tart)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Macau_Pastel_de_Nata.jpg"
          },
          {
            "name": "Pork Chop Bun (domuz pirzola sandviçi)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Pork_Chop_Bun_Macau.jpg"
          },
          {
            "name": "Minchi (kıyma ve patatesli yemek)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Minchi_Macau_dish.jpg"
          },
          {
            "name": "Bacalhau (Portekiz usulü tuzlu balık - çeşitli yorumları)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/60/Bacalhau_a_bras.jpg"
          }
        ]
      },
      {
        "id": 23,
        "countryName": "Malezya",
        "flag": "🇲🇾",
        "currency": {
          "code": "MYR",
          "name": "Malaysian Ringgit",
          "symbol": "RM",
          "rate": 1
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Petronas_Twin_Towers_Malaysia.jpg"
          },
          {
            "placeName": "Batu Mağaraları",
            "description": "Hindu tapınakları ve devasa heykeliyle ünlü kaya mağaraları.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/db/Batu_Caves_Malaysia.jpg"
          },
          {
            "placeName": "Langkawi Adası",
            "description": "Plajları ve duty-free alışverişiyle tanınan tatil bölgesi.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Langkawi_Sky_Bridge.jpg"
          },
          {
            "placeName": "Malakka Şehri",
            "description": "Portekiz ve Hollanda izleri taşıyan UNESCO Dünya Mirası tarihi kent.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Melaka_river_with_traditional_shophouses.JPG"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/11/Nasi_Lemak.jpg"
          },
          {
            "name": "Roti Canai (yassı ekmek ve körili sos)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/00/Roti_canai_served_with_teh_tarikk.jpg"
          },
          {
            "name": "Laksa (baharatlı çorba)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Curry_laksa_%28Malaysian_cuisine%29.jpg"
          },
          {
            "name": "Satay (marineli ızgara et şiş)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/da/Malaysian_Satay.jpg"
          }
        ]
      },
      {
        "id": 24,
        "countryName": "Maldivler",
        "flag": "🇲🇻",
        "currency": {
          "code": "MVR",
          "name": "Maldivian Rufiyaa",
          "symbol": "ރ",
          "rate": 1
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/71/Maafushi_Island_Maldives_Aerial.jpg"
          },
          {
            "placeName": "Hulhumalé",
            "description": "Yeni yerleşim bölgesi, plaj ve kafeler. Male'ye feribotla yakın.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Hulhumale_Maldives.jpg"
          },
          {
            "placeName": "Banana Reef",
            "description": "Dünyaca ünlü dalış noktası, renkli mercanlar ve balıklar.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/93/Maldives_coral_reef.jpg"
          },
          {
            "placeName": "Fulhadhoo",
            "description": "Sessiz, el değmemiş beyaz kumlu plajlarıyla tanınan ada.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Fulhadhoo_Beach.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Garudhiya_Maldives.jpg"
          },
          {
            "name": "Mas Huni (rendelenmiş ton balığı, hindistan cevizi ve soğan)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Mas_huni_and_roshi%2C_Maldives.jpg"
          },
          {
            "name": "Rihaakuru (balık ezmesi)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Rihakuru_%28traditional_Maldivian_brown_sauce%29.jpg"
          },
          {
            "name": "Bis Keemiya (börek benzeri atıştırmalık)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Bis_keemiya_Maldives.jpg"
          }
        ]
      },
      {
        "id": 25,
        "countryName": "Moldova",
        "flag": "🇲🇩",
        "currency": {
          "code": "MDL",
          "name": "Moldovan Leu",
          "symbol": "L",
          "rate": 1
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Orheiul_Vechi_Panorama.jpg"
          },
          {
            "placeName": "Şarap Mahzenleri (Cricova, Mileștii Mici)",
            "description": "Dünyanın en büyük şarap koleksiyonlarından bazılarına ev sahipliği yapar.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/68/Cricova_wine_cellars.jpg"
          },
          {
            "placeName": "Kişinev Katedrali Parkı",
            "description": "Merkezde yürüyüş ve dinlenme alanı, Katedrali ile ünlü.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/08/Ci%C8%99migiu_Park_in_Chi%C8%99in%C4%83u.jpg"
          },
          {
            "placeName": "Tipova Manastırı",
            "description": "Kayalıklar içine oyulmuş ortodoks manastır.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Tipova_monastery.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Mamaliga.JPG"
          },
          {
            "name": "Sarmale (lahana veya asma yaprağında dolma)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/49/Sarmale_romania.jpg"
          },
          {
            "name": "Plăcintă (börek benzeri hamur işi)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/45/Placinte_Branza_%C5%9Ei_Verdea%C8%9B%C4%83.JPG"
          },
          {
            "name": "Zeamă (tavuk çorbası)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Zeama_moldoveneasca.jpg"
          }
        ]
      },
      {
        "id": 26,
        "countryName": "Moğolistan",
        "flag": "🇲🇳",
        "currency": {
          "code": "MNT",
          "name": "Mongolian Tögrög",
          "symbol": "₮",
          "rate": 1
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Gobi_Desert.jpg"
          },
          {
            "placeName": "Terelj Milli Parkı",
            "description": "Doğal kaya oluşumları ve çadır (ger) kampları.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/de/Terelj_National_Park.jpg"
          },
          {
            "placeName": "Ulan Batur – Cengiz Han Meydanı",
            "description": "Şehrin ana meydanı, hükümet binaları ve Cengiz Han Anıtı.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/44/Genghis_Khan_Square_%28Ulan_Bator%29_2016-09-30.JPG"
          },
          {
            "placeName": "Khövsgöl Gölü",
            "description": "'Mavi İnci' olarak anılan, temiz suları ve çevresindeki ormanlarıyla ünlü.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/39/Khovsgol_Lake.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Buuz_NOMIN_restaurant.jpg"
          },
          {
            "name": "Khuushuur (kızarmış etli hamur)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/78/Khuushuur.jpg"
          },
          {
            "name": "Boodog (içinde et pişirilen deri çuval yemeği)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Boodog_goat.jpg"
          },
          {
            "name": "Airag (fermente kısrak sütü)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Mongolian_Airag.jpg"
          }
        ]
      },
      {
        "id": 27,
        "countryName": "Karadağ",
        "flag": "🇲🇪",
        "currency": {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€",
          "rate": 1
        },
        "languages": ["Karadağca", "Sırpça", "Boşnakça"],
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
            "description": "UNESCO Dünya Mirası listesinde, Ortaçağ'dan kalma surlar.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/47/Kotor_062.jpg"
          },
          {
            "placeName": "Budva",
            "description": "Sahilleri ve gece hayatıyla ünlü turistik kıyı kenti.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Budva_Montenegro.jpg"
          },
          {
            "placeName": "Sveti Stefan",
            "description": "Lüks tatil köyüne dönüştürülmüş tarihi ada.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Sveti_Stefan_Montenegro.jpg"
          },
          {
            "placeName": "Durmitor Milli Parkı",
            "description": "Dağcılık, rafting ve kanyon gezileri için popüler destinasyon.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8c/DurmitorNationalPark.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/39/%C4%86evapi_iz_%C4%86uprije.jpg"
          },
          {
            "name": "Kacamak (mısır unu lapa)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Kacamak_Montenegro.jpg"
          },
          {
            "name": "Njeguški Pršut (kurutulmuş et)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Njeguski_prsut_1.jpg"
          },
          {
            "name": "Burek (börek)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Burek_traditional.JPG"
          }
        ]
      },
      {
        "id": 28,
        "countryName": "Fas",
        "flag": "🇲🇦",
        "currency": {
          "code": "MAD",
          "name": "Moroccan Dirham",
          "symbol": "د.م.",
          "rate": 1
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Jemaa_el-Fna_in_Marrakech.jpg"
          },
          {
            "placeName": "Fes El Bali",
            "description": "Dünyanın en eski yaya şehirlerinden biri, tarihi medina.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Medina_of_Fes.jpg"
          },
          {
            "placeName": "Şafşavan (Chefchaouen)",
            "description": "Mavi boyalı evleriyle ünlü dağ kasabası.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Blue_city_Chefchaouen.jpg"
          },
          {
            "placeName": "Sahara Çölü (Merzouga)",
            "description": "Çöl kampları, kum tepelerinde deve turları.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Dunes_de_Merzouga_au_Maroc.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Moroccan_Tajine.jpg"
          },
          {
            "name": "Couscous (sebze veya etli irmik)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/08/Moroccan_Couscous.jpg"
          },
          {
            "name": "Harira (geleneksel çorba)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/73/Harira_with_dates.jpg"
          },
          {
            "name": "Pastilla (tatlı-tuzlu börek)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Bastella.jpg"
          }
        ]
      },
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/38/Kathmandu_Durbar_Square.jpg"
          },
          {
            "placeName": "Pokhara",
            "description": "Göl manzarası, Himalaya zirveleri ve doğa sporları merkezi.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Pokhara_Phewa_Lake_View.jpg"
          },
          {
            "placeName": "Chitwan Milli Parkı",
            "description": "Gergedan ve Bengal kaplanı gibi vahşi yaşamı gözlemleme imkânı.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/70/Chitwan_National_Park.jpg"
          },
          {
            "placeName": "Everest Bölgesi (Khumbu)",
            "description": "Dünyanın en yüksek zirvesine açılan yürüyüş rotaları.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/de/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Dal_Bhat_in_Nepal.JPG"
          },
          {
            "name": "Momo (Nepal usulü mantı)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/64/Momo_in_Nepal.jpg"
          },
          {
            "name": "Newari Khaja Set (çeşitli küçük tabaklar)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Newari_khaja_in_Kathmandu.jpg"
          },
          {
            "name": "Choila (baharatlı et yemeği)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/76/Newari_dish_Choila.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/13/Granada_Central_Park%2C_Nicaragua.jpg"
          },
          {
            "placeName": "Ometepe Adası",
            "description": "İki yanardağ tarafından şekillendirilmiş tatlı su adası.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cc/OmetepeConcepcion.jpg"
          },
          {
            "placeName": "León",
            "description": "Tarihi katedrali ve devrim müzeleriyle ünlü kültür şehri.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Catedral_de_Le%C3%B3n%2C_Nicaragua.jpg"
          },
          {
            "placeName": "Masaya Yanardağı",
            "description": "Aktif krateri gözlemleme imkânı sunan ulusal park.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Masaya_Volcano.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Gallo_Pinto.jpg"
          },
          {
            "name": "Nacatamal (mısır hamurlu ve etli yaprak dolması)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/87/Nacatamal.jpg"
          },
          {
            "name": "Vigorón (lahana salatası, kızarmış domuz derisi, yuca)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/13/Vigor%C3%B3n_%281%29.jpg"
          },
          {
            "name": "Quesillo (peynirli tortilla)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/42/Quesillo_Nicarag%C3%BCense.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/db/Stone_Bridge_in_Skopje.jpg"
          },
          {
            "placeName": "Ohri Gölü",
            "description": "UNESCO korumasındaki göl, tarihi kiliseler ve mükemmel doğa.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Ohrid_Gj.jpg"
          },
          {
            "placeName": "Mavrovo Milli Parkı",
            "description": "Dağcılık, kış sporları ve doğal güzellikleriyle ünlü.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mavrovo_national_park.jpg"
          },
          {
            "placeName": "Matka Kanyonu",
            "description": "Tekne turları, mağaralar ve doğa yürüyüşü fırsatı.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/69/Matka_Canyon%2C_Macedonia_%2824164829494%29.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tavche_Gravche.jpg"
          },
          {
            "name": "Shopska Salata (Balkan salatası)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/15/Shopska_salata_Macedonia.jpg"
          },
          {
            "name": "Ajvar (kırmızı biber sosu)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Ajvar_HomeMade.jpg"
          },
          {
            "name": "Burek (börek çeşitleri)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Burek_with_curd.jpg"
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
            "placeName": "Girne Kalesi",
            "description": "Liman manzaralı tarihi kale ve batık gemi müzesi.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/20/Girne_Kalesi_2017.jpg"
          },
          {
            "placeName": "Bellapais Manastırı",
            "description": "Gotik mimarisiyle ünlü tarihi manastır, Girne yakınlarında.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Bellapais_Abbey.JPG"
          },
          {
            "placeName": "Kapalı Maraş (Varosha)",
            "description": "Terk edilmiş sahil kenti, kısmen ziyarete açılmıştır.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Varosha_Famagusta.jpg"
          },
          {
            "placeName": "Karpaz Yarımadası",
            "description": "Bakir plajlar ve eşekleriyle ünlü doğal güzellik.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Karpas_Beach.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/38/%C5%9Eeftali_Kebab%C4%B1_Cyprus.jpg"
          },
          {
            "name": "Hellim (Halloumi) Peyniri",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Halloumi_cheese.jpg"
          },
          {
            "name": "Kıbrıs Köftesi",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6c/Cyprus_Kofta.jpg"
          },
          {
            "name": "Pilavuna (çörek)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/df/Pilavuna_Northern_Cyprus.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Sultan_Qaboos_Grand_Mosque.jpg"
          },
          {
            "placeName": "Mutrah Çarşısı",
            "description": "Tarihi pazar yeri, tütsü ve yerel hediyelikler bulabilirsiniz.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Mutrah_Souq_in_Muscat.jpg"
          },
          {
            "placeName": "Wadi Shab",
            "description": "Doğal yüzme havuzları, yürüyüş rotaları ve şelaleler.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/20/Wadi_shab_in_Oman.jpg"
          },
          {
            "placeName": "Nizwa Kalesi",
            "description": "Tarihi kale ve Cuma günleri kurulan canlı keçi pazarı.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Nizwa_Fort_in_Oman.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Omani_Shura.jpg"
          },
          {
            "name": "Majboos (etli pilav)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/58/Kabsa_chicken_Saudi.jpg"
          },
          {
            "name": "Halwa (Oman helvası)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Omani_Halwa.jpg"
          },
          {
            "name": "Mashuai (ızgara kral balığı)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Grilled_Fish_OMR.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Jerusalem_from_mt_olives.jpg"
          },
          {
            "placeName": "Betlehem – Doğuş Kilisesi",
            "description": "Hz. İsa'nın doğum yeri olduğuna inanılan tarihi kilise.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fa/The_Church_of_the_Nativity_%28Bethlehem%29.jpg"
          },
          {
            "placeName": "El-Halil (Hebron) – İbrahim Camii",
            "description": "Hz. İbrahim'in türbesi, Müslümanlar ve Yahudiler için kutsal mekân.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Ibrahimi_Mosque_Hebron.jpg"
          },
          {
            "placeName": "Ramallah",
            "description": "Filistin'in kültürel ve ekonomik merkezlerinden biri, modern kafe ve restoranlar.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Ramallah_view_2011.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3d/MaqlubaPalestinianDish.jpg"
          },
          {
            "name": "Musakhan (tavuk ve soğanlı ekmek)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Musakhan_Palestine.jpg"
          },
          {
            "name": "Falafel",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Falafel_Israel.jpg"
          },
          {
            "name": "Kanafeh (peynir tatlısı)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/82/Palestinian_Knafeh.jpg"
          }
        ]
      },
      {
        "id": 35,
        "countryName": "Panama",
        "flag": "🇵🇦",
        "currency": {
          "code": "USD",
          "name": "United States Dollar",
          "symbol": "$",
          "rate": 28.5
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/51/Miraflores_Locks.jpg"
          },
          {
            "placeName": "Casco Viejo",
            "description": "Tarihi şehir merkezi, kolonyal binalar ve renkli sokaklar.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Casco_Viejo_-_Panama_City.jpg"
          },
          {
            "placeName": "Bocas del Toro",
            "description": "Karayip Denizi'nde mercan resifleri, dalış ve plaj keyfi.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/96/Bocas_Del_Toro_Islas.jpg"
          },
          {
            "placeName": "San Blas Adaları (Guna Yala)",
            "description": "Guna Yerlilerinin yönettiği ıssız tropik adalar topluluğu.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/07/San_Blas_Islands_-_Kuna_Yala_Region.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Sancocho_de_gallina_panama.jpg"
          },
          {
            "name": "Ropa Vieja (didiklenmiş et yemeği)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Ropa_vieja_Miami.jpg"
          },
          {
            "name": "Patacones (kızarmış muz dilimleri)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/10/Tostones_%28Patacones%29.jpg"
          },
          {
            "name": "Ceviche (limonlu deniz ürünleri)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Ceviche_in_Panama.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/08/Palacio_de_l%C3%B3pez_de_noche.jpg"
          },
          {
            "placeName": "Itaipú Barajı",
            "description": "Dünyanın en büyük hidroelektrik barajlarından biri, Paraguay-Brezilya sınırında.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f0/ItaipuAerea2AAL.jpg"
          },
          {
            "placeName": "Jesuit Misyonları (Trinidad ve Jesús)",
            "description": "UNESCO Dünya Mirası yerleri, tarihi misyon kalıntıları.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/93/Jose_de_trinidad.jpg"
          },
          {
            "placeName": "Encarnación",
            "description": "Karadeniz tipi plajlarıyla da bilinen turistik kıyı kenti.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Encarnaci%C3%B3n_Beach_Paraguay.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Chipa_Paraguay.jpg"
          },
          {
            "name": "Sopa Paraguaya (katı mısır ekmeği)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Sopa_Paraguaya.png"
          },
          {
            "name": "Mandioca (yerel manyok)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/49/Cassava.jpg"
          },
          {
            "name": "Bori Bori (topçuklu çorba)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/14/Boribori_Sopa_Paraguay.jpg"
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
            "placeName": "Souq Waqif",
            "description": "Geleneksel pazar yeri, baharatlar, kıyafetler ve yerel restoranlar.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Souq_Waqif_Street%2C_Doha.jpg"
          },
          {
            "placeName": "İslami Sanat Müzesi",
            "description": "Dünyaca ünlü mimar IM Pei tarafından tasarlanan müze.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/97/Islamic_Art_Museum_in_Doha.jpg"
          },
          {
            "placeName": "The Pearl-Qatar",
            "description": "Lüks yapay ada, alışveriş ve marina alanı.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Pearl_Qatar_Doha.jpg"
          },
          {
            "placeName": "Katara Kültür Köyü",
            "description": "Sanat galerileri, tiyatrolar ve restoranların bulunduğu kültür merkezi.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b7/Katara_Cultural_Village_Buildings_in_Doha.jpg"
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
          {
            "name": "Machbous (baharatlı et veya balık pilavı)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Kabsa_Saudi.jpg"
          },
          {
            "name": "Harees (buğday ve et ezmesi)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Harees_dish.jpg"
          },
          {
            "name": "Balaleet (şekerli erişte, omlet ile)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/00/Balaleet.jpg"
          },
          {
            "name": "Luqaimat (bal şerbetli tatlı topçuklar)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Luqaimat_dubai.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Belgrade_Fortress_view_from_above.jpg"
          },
          {
            "placeName": "Skadarlija",
            "description": "Bohem sokak, geleneksel restoranlar ve kafeler.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/46/Skadarlija_street_Belgrade.jpg"
          },
          {
            "placeName": "Novi Sad – Petrovaradin Kalesi",
            "description": "EXIT Müzik Festivali'nin düzenlendiği ünlü tarihi kale.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/64/Petrovaradin_Citadel_Novi_Sad.jpg"
          },
          {
            "placeName": "Drvengrad (Mecavnik)",
            "description": "Emir Kusturica'nın inşa ettiği geleneksel ahşap köy, kırsal bölgelerde.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Kustendorf_Drvengrad.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0f/%C4%86evap%C4%8Di%C4%87i.jpg"
          },
          {
            "name": "Pljeskavica (Sırp köftesi)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Pljeskavica_%282%29.jpg"
          },
          {
            "name": "Sarma (lahana sarması)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Sarma_Serbia_2.jpg"
          },
          {
            "name": "Kaymak (kremsi süt ürünü)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/03/Kajmak.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Marina_Bay_Sands_in_Singapore_-_20101120.jpg"
          },
          {
            "placeName": "Gardens by the Bay",
            "description": "Dev ağaç heykelleri (Supertree Grove) ve çiçek kubbesi.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Gardens_by_the_Bay%2C_Singapore_-_20120718-02.JPG"
          },
          {
            "placeName": "Sentosa Adası",
            "description": "Plajlar, Universal Studios ve eğlence merkezleri.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Beach_on_Sentosa_Singapore.jpg"
          },
          {
            "placeName": "Chinatown & Little India",
            "description": "Etnik mahallelerde yemek ve kültürel çeşitlilik.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chinatown_Singapore_3%2C_Jan_06.JPG"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/88/Hainanese_Chicken_Rice_in_Singapore.jpg"
          },
          {
            "name": "Chili Crab (biberli yengeç)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Chili_crab_Singapore.jpg"
          },
          {
            "name": "Laksa (Hindistan cevizi sütlü erişte çorbası)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Singapore_Laksa.jpg"
          },
          {
            "name": "Satay (ızgara et şiş)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Satay_Singapore.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e7/View_from_Table_Mountain%2C_Cape_Town.jpg"
          },
          {
            "placeName": "Kruger Ulusal Parkı",
            "description": "Büyük 5'li (aslan, fil, bufalo, leopar, gergedan) safari deneyimi.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Kruger_Park_Landscape.jpg"
          },
          {
            "placeName": "Johannesburg – Apartheid Müzesi",
            "description": "Güney Afrika'nın yakın tarihini anlatan önemli müze.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/46/Apartheid_Museum_entrance.JPG"
          },
          {
            "placeName": "Garden Route",
            "description": "Muhteşem kıyı manzaraları, yürüyüş yolları ve küçük kasabalar.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Garden_Route.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Biltong.jpg"
          },
          {
            "name": "Bobotie (kıyma ve baharatlı fırın yemeği)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Bobotie.jpg"
          },
          {
            "name": "Bunny Chow (ekmek içinde körili et veya sebze)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Bunny_Chow_Durban.jpg"
          },
          {
            "name": "Pap ve Chakalaka (mısır lapası ve sebzeli sos)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Pap_and_chakalaka.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/99/Gyeongbokgung_01.jpg"
          },
          {
            "placeName": "Myeongdong",
            "description": "Popüler alışveriş semti, Kore kozmetiği ve sokak yemeği cenneti.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Myeongdong_street_scenery_2018.jpg"
          },
          {
            "placeName": "Busan – Haeundae Plajı",
            "description": "Ülkenin en ünlü plajı, yaz turizminin gözdesi.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Haeundae_Beach_in_Busan.jpg"
          },
          {
            "placeName": "Jeju Adası",
            "description": "Volkanik doğal güzellikler, plajlar ve Hallasan Dağı.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/73/Jeju_Island_coastline.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/52/Kimchi.jpg"
          },
          {
            "name": "Bibimbap (karışık sebzeli pilav)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Bibimbap_in_Jeonju.jpg"
          },
          {
            "name": "Bulgogi (marineli et)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Bulgogi_kimchi.jpg"
          },
          {
            "name": "Tteokbokki (acı biber soslu pirinç keki)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Tteokbokki1.jpg"
          }
        ]
      },
      {
        "id": 42,
        "countryName": "Sudan",
        "flag": "🇸🇩",
        "currency": {
          "code": "SDG",
          "name": "Sudanese Pound",
          "symbol": "ج.س",
          "rate": 0.018
        },
        "languages": ["Arapça", "İngilizce"],
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
            "description": "Antik Kraliçe ve kral mezarları, Sudan'ın UNESCO mirası.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Meroe_pyramids2.jpg"
          },
          {
            "placeName": "Hartum – Nil Nehirlerinin Birleştiği Yer",
            "description": "Beyaz ve Mavi Nil'in birleştiği noktada şehrin sembolik manzarası.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/29/Confluence_of_the_Blue_and_White_Nile.jpg"
          },
          {
            "placeName": "Sufi Derviş Gösterileri (Omdurman)",
            "description": "Cuma akşamları gerçekleşen renkli zikir törenleri.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/65/Sufi_Worship_in_Sudan.jpg"
          },
          {
            "placeName": "Nubian Çölü",
            "description": "Bozulmamış çöl manzaraları ve yerel kabile kültürü.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Nubian_desert_Sudan.jpg"
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
          {
            "name": "Ful Medames (bakla yemeği)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Ful_medames.jpg"
          },
          {
            "name": "Kisra (ince ekmek)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6c/Kisra_Sudan.jpg"
          },
          {
            "name": "Asida (buğday veya darı lapası)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Asida_Sudan.jpg"
          },
          {
            "name": "Gurasa (kalın gözleme benzeri ekmek)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Gurasa_Sudan.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Taipei_101_2010.jpg"
          },
          {
            "placeName": "Chiang Kai-shek Anıt Salonu",
            "description": "Tarihi ve politik sembol, geniş bir meydan ve bahçeyle çevrili.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Chiang_kai-shek_memorial_amk.jpg"
          },
          {
            "placeName": "Taroko Boğazı",
            "description": "Mermer kanyonlar, dağ geçitleri ve nehirleriyle ünlü milli park.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Taroko_Gorge_Taiwan.jpg"
          },
          {
            "placeName": "Sun Moon Lake",
            "description": "Tayvan'ın en büyük gölü, bisiklet ve tekne turları için popüler.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/01/Sun_Moon_Lake.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Taiwan_beef_noodle_soup.jpg"
          },
          {
            "name": "Xiao Long Bao (sulu Çin mantısı)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/76/Xiaolongbao_in_Taiwan.jpg"
          },
          {
            "name": "Bubble Tea (köpüklü çay)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/af/Tapioca_Bubble_Tea_%28cropped%29.jpg"
          },
          {
            "name": "Oyster Omelet (istiridyeli omlet)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/24/Taiwanese_oyster_omelet.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Pamir_Mountains_Bartang_Valley_Tajikistan.jpg"
          },
          {
            "placeName": "Iskanderkul Gölü",
            "description": "Efsanevi göl, dağ manzaralarıyla ünlü, kamp ve yürüyüş için ideal.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Iskanderkul_2018.jpg"
          },
          {
            "placeName": "Duşanbe – Rudaki Caddesi",
            "description": "Şehrin ana caddesi, parklar ve anıtlarla çevrili.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/07/Dushanbe_Rudaki_Street.jpg"
          },
          {
            "placeName": "Hissar Kalesi",
            "description": "Tarihi kale kalıntıları ve avlu.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/95/Hissar_Fortress_Tajikistan.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/de/Plov_in_Tajikistan.jpg"
          },
          {
            "name": "Qurutob (yoğurtlu ekmek salatası)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/77/Qurutob_Tajikistan.jpg"
          },
          {
            "name": "Laghman (el açması erişte çorbası)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Laghman_Tajikistan.jpg"
          },
          {
            "name": "Shashlik (ızgara et şiş)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/60/Shashlik_in_Dushanbe.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/79/Grand_Palace_Bangkok.jpg"
          },
          {
            "placeName": "Phuket",
            "description": "Plajlar, gece hayatı ve ada turlarıyla ünlü turizm merkezi.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/82/Patong_Beach_Phuket.jpg"
          },
          {
            "placeName": "Chiang Mai",
            "description": "Dağ tapınakları, fil kampları ve geleneksel pazarlar.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Wat_Phra_That_Doi_Suthep_01.jpg"
          },
          {
            "placeName": "Ayutthaya Tarihi Parkı",
            "description": "UNESCO Mirası, antik tapınak kalıntıları ve saraylar.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/79/Wat_Chaiwatthanaram_Ayutthaya.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Pad_Thai_kung_Chang_Khao.jpg"
          },
          {
            "name": "Tom Yum Soup (acı-ekşi çorba)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Tom_yum_kung_mae_nam.jpg"
          },
          {
            "name": "Green/Red Curry (köri yemekleri)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Thai_green_curry_chicken.jpg"
          },
          {
            "name": "Mango Sticky Rice (tatlı pirinç ve mango)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Mango_sticky_rice.JPG"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Carthage_Amphitheatre.jpg"
          },
          {
            "placeName": "Sidi Bou Said",
            "description": "Mavi-beyaz boyalı evleriyle turistik sahil kasabası.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Sidi_Bou_Said_View.jpg"
          },
          {
            "placeName": "Bardo Müzesi",
            "description": "Zengin Roma mozaik koleksiyonuyla bilinen ulusal müze.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/41/Bardo_museum_tunis.JPG"
          },
          {
            "placeName": "Sahara Çölü – Douz",
            "description": "Çöl safarisi ve geleneksel Berberi kültürü deneyimi.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/69/Douz_sahara.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7f/CouscousTunisia.jpg"
          },
          {
            "name": "Brik (yumurtalı ve ton balıklı börek)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Bric.jpg"
          },
          {
            "name": "Shakshuka (domates ve biberli yumurta yemeği)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Shakshouka_Tunisian.jpg"
          },
          {
            "name": "Harissa (acı biber ezmesi)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Harissa_paste.jpg"
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
        "languages": ["Ukraynaca", "Rusça"],
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
            "description": "Şehrin kalbi, Maidan olarak bilinen tarihi meydan.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/53/Independence_Square_in_Kiev.jpg"
          },
          {
            "placeName": "Lviv Eski Şehir",
            "description": "UNESCO Mirası, Avrupa mimarisi ve kafe kültürüyle ünlü.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Lviv_old_town_Rynok_Square.jpg"
          },
          {
            "placeName": "Odessa",
            "description": "Karadeniz kıyısında ünlü liman kenti, Potemkin Merdivenleri.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Odessa_Port.jpg"
          },
          {
            "placeName": "Çernobil Turu",
            "description": "Terk edilmiş Pripyat kenti ve rehberli nükleer felaket bölgesi gezileri.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Pripyat_Sign.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/48/Borsch_ukrainian.jpg"
          },
          {
            "name": "Varenyky (mantı benzeri hamur)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Varenyky_with_sour_cream.jpg"
          },
          {
            "name": "Chicken Kiev (tereyağlı tavuk rulosu)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Chicken_Kiev_Served.jpg"
          },
          {
            "name": "Salo (tuzlanmış domuz yağı)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Salo_with_bread_and_onion.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/42/Ciudad_Vieja_in_Montevideo.jpg"
          },
          {
            "placeName": "Pocitos Plajı",
            "description": "Montevideo şehir içinde kumsal keyfi, yürüyüş yolları.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Playa_Pocitos.JPG"
          },
          {
            "placeName": "Punta del Este",
            "description": "Lüks tatil beldesi, plajlar ve gece hayatı.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Punta_del_Este_Beach.jpg"
          },
          {
            "placeName": "Colonia del Sacramento",
            "description": "Portekiz kolonyal geçmişi, Arnavutkaldırım sokaklarıyla UNESCO Dünya Mirası.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/95/Colonia_del_Sacramento%2C_Uruguay.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Asado_sur.jpg"
          },
          {
            "name": "Chivito (etli sandviç)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/63/Chivito_uruguayo.jpg"
          },
          {
            "name": "Mate (bitki çayı)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Mate_in_uruguay.jpg"
          },
          {
            "name": "Tortas Fritas (kızarmış hamur)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Tortas_fritas_Uruguay.jpg"
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
            "placeName": "Semerkant – Registan Meydanı",
            "description": "İslam mimarisinin zirvesi kabul edilen medreseler.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Registon_Samarqand.jpg"
          },
          {
            "placeName": "Buhara Eski Şehir",
            "description": "UNESCO Mirası, tarihi camiler, türbeler ve çarşılar.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/19/Bukhara_Poi_Kalon_Complex.jpg"
          },
          {
            "placeName": "Hiva (Khiva) – İçan Kale",
            "description": "Tamamen surlarla çevrili, zamana yolculuk hissi veren antik kent.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/20/Ichon_Qala_Khiva.jpg"
          },
          {
            "placeName": "Taşkent – Teleshayakh Kütüphanesi",
            "description": "Dünyanın en eski Kur'an nüshası olduğu düşünülen eserin sergilendiği yer.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Hazrati_Imom_complex_in_Tashkent.jpg"
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
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Plov_Uzbekistan.jpg"
          },
          {
            "name": "Shashlik (ızgara et şiş)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Shashlik_in_Samarkand_Uzbekistan.jpg"
          },
          {
            "name": "Lagman (el açması erişte yemeği)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Lagman_Uzbekistan.jpg"
          },
          {
            "name": "Samsa (fırında börek)",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Samsa_Uzbekistan.jpg"
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
    return `1 ${country.currency.code} = ${country.currency.rate.toFixed(2)} TL`;
  }
}

