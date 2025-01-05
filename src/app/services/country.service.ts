import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Country {
  id:number;
  countryName: string;
  visaType: string;
  maxStay: string;
  notes: string;
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
        "notes": "180 günlük süre içinde 90 gün kalış."
    },
    {
        "id": 2,
        "countryName": "Azerbaycan",
        "visaType": "e-Vize veya Vizesiz",
        "maxStay": "30 gün",
        "notes": "Türk vatandaşları ASAN e-Vize başvurusu yapabilir veya belirli giriş noktalarında vize alabilir."
    },
    {
        "id": 3,
        "countryName": "Bahamalar",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "90 gün",
        "notes": "Dönüş bileti ve yeterli maddi kaynak kanıtı gerekebilir."
    },
    {
        "id": 4,
        "countryName": "Barbados",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "90 gün",
        "notes": "Göçmenlik memurları konaklama kanıtı ve yeterli maddi kaynak talep edebilir."
    },
    {
        "id": 5,
        "countryName": "Belarus",
        "visaType": "Vize Gerekmiyor (şartlı)",
        "maxStay": "30 gün",
        "notes": "Vizesiz giriş genellikle sadece Minsk Ulusal Havalimanı üzerinden, belirli şartlarla (örn. seyahat sigortası kanıtı). Resmi kaynaklara danışın."
    },
    {
        "id": 6,
        "countryName": "Bosna Hersek",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "90 gün",
        "notes": "180 günlük süre içinde 90 gün kalış."
    },
    {
        "id": 7,
        "countryName": "Brezilya",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "90 gün",
        "notes": "Bir kez 90 gün daha uzatılabilir (yılda toplam 180 gün)."
    },
    {
        "id": 8,
        "countryName": "Şili",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "90 gün",
        "notes": "6 aylık pasaport geçerliliği önerilir."
    },
    {
        "id": 9,
        "countryName": "Kolombiya",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "90 gün",
        "notes": "Takvim yılı başına toplam 180 güne kadar uzatılabilir."
    },
    {
        "id": 10,
        "countryName": "Ekvador",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "90 gün",
        "notes": "Kalış süresi bazen uzatılabilir; yerel göçmenlik ofisiyle görüşün."
    },
    {
        "id": 11,
        "countryName": "El Salvador",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "90 gün",
        "notes": "CA-4 Anlaşması'nın parçası (Guatemala, Honduras, Nikaragua, El Salvador). Kalış süreleri bu ülkeler arasında toplu olarak sayılır."
    },
    {
        "id": 12,
        "countryName": "Gürcistan",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "1 yıl",
        "notes": "Türk vatandaşları için en cömert vizesiz kalış sürelerinden biri."
    },
    {
        "id": 13,
        "countryName": "Honduras",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "90 gün",
        "notes": "CA-4 Anlaşması'nın parçası; Guatemala, El Salvador ve Nikaragua'da geçirilen süreler toplama dahildir."
    },
    {
        "id": 14,
        "countryName": "Hong Kong (Çin SAR)",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "90 gün",
        "notes": "Dönüş bileti kanıtı gerekebilir; Çin anakarasından farklı olarak vize gerektirmez."
    },
    {
        "id": 15,
        "countryName": "İran",
        "visaType": "Varışta Vize veya e-Vize",
        "maxStay": "30 gün",
        "notes": "Büyük havalimanlarında mevcut. Turist kalışları için uzatma mümkün."
    },
    {
        "id": 16,
        "countryName": "Irak (Bazı Bölgeler)",
        "visaType": "IKBY'de Varışta Vize (Kürdistan Bölgesi)",
        "maxStay": "30 gün",
        "notes": "Varışta vize genellikle sadece Irak Kürdistan Bölgesi'nde verilir. Irak'ın diğer bölgeleri için önceden vize gerekebilir."
    },
    {
        "id": 17,
        "countryName": "Japonya",
        "visaType": "Vize Gerekmiyor (değişebilir)",
        "maxStay": "90 güne kadar",
        "notes": "Türk vatandaşları için kısa ziyaretlerde geleneksel olarak vizesiz, ancak Japonya bazı pasaportlar için e-Vize uygulaması başlattı. En güncel düzenlemeleri kontrol edin."
    },
    {
        "id": 18,
        "countryName": "Ürdün",
        "visaType": "Varışta Vize",
        "maxStay": "30 gün",
        "notes": "Varışta ücret gerekli. Seyahat öncesi online Jordan Pass alınırsa vize ücreti muaf tutulabilir."
    },
    {
        "id": 19,
        "countryName": "Kazakistan",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "30 gün",
        "notes": "İleri seyahat kanıtı ve yeterli maddi kaynak gerekli."
    },
    {
        "id": 20,
        "countryName": "Kosova",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "90 gün",
        "notes": "180 günlük süre içinde 90 gün kalış."
    },
    {
        "id": 21,
        "countryName": "Lübnan",
        "visaType": "Varışta Vize",
        "maxStay": "90 gün",
        "notes": "Beyrut Havalimanı'nda Türk vatandaşlarına ücretsiz vize (İsrail giriş damgası olmaması şartıyla)."
    },
    {
        "id": 22,
        "countryName": "Makao (Çin SAR)",
        "visaType": "Varışta Vize",
        "maxStay": "30 gün",
        "notes": "Güncel kurallar için yerel yetkililer veya havayolunuza danışın."
    },
    {
        "id": 23,
        "countryName": "Malezya",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "90 gün",
        "notes": "90 güne kadar olan kalışlarda vize gerekmiyor."
    },
    {
        "id": 24,
        "countryName": "Maldivler",
        "visaType": "Varışta Vize",
        "maxStay": "30 gün",
        "notes": "Onaylı otel rezervasyonu ve yeterli maddi kaynak gerekli."
    },
    {
        "id": 25,
        "countryName": "Moldova",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "90 gün",
        "notes": "180 günlük süre içinde 90 gün kalış."
    },
    {
        "id": 26,
        "countryName": "Mongolia",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "30 gün",
        "notes": "Stays longer than 30 days require registration with immigration."
    },
    {
        "id": 27,
        "countryName": "Montenegro",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "90 gün",
        "notes": "Stay of 90 days within a 6-month period."
    },
    {
        "id": 28,
        "countryName": "Morocco",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "90 gün",
        "notes": "Passport must be valid for at least 6 months on arrival."
    },
    {
        "id": 29,
        "countryName": "Nepal",
        "visaType": "Vize on Arrival",
        "maxStay": "15/30/90 days (depending on fee)",
        "notes": "Visa fees vary based on desired length of stay."
    },
    {
        "id": 30,
        "countryName": "Nicaragua",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "90 gün",
        "notes": "Part of the CA-4 region. Time in Guatemala, El Salvador, and Honduras is combined."
    },
    {
        "id": 31,
        "countryName": "North Macedonia",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "90 gün",
        "notes": "90 days within a 180-day period."
    },
    {
        "id": 32,
        "countryName": "Northern Cyprus (TRNC)",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "No set limit",
        "notes": "Recognized only by Türkiye. Turkish citizens have unrestricted access; international flights must connect via Türkiye."
    },
    {
        "id": 33,
        "countryName": "Oman",
        "visaType": "Vize on Arrival veya e-Vize",
        "maxStay": "10 gün (VoA) / 30 gün (e-Vize)",
        "notes": "Check current rules, as Oman frequently updates eVisa policy."
    },
    {
        "id": 34,
        "countryName": "Palestinian Territories",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "Determined by Israeli border authorities",
        "notes": "Entry is controlled by Israel; restrictions may vary."
    },
    {
        "id": 35,
        "countryName": "Panama",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "90 gün",
        "notes": "Proof of onward travel and sufficient funds required."
    },
    {
        "id": 36,
        "countryName": "Paraguay",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "90 gün",
        "notes": "Passport validity of 6 months recommended."
    },
    {
        "id": 37,
        "countryName": "Qatar",
        "visaType": "Vize on Arrival",
        "maxStay": "30 gün",
        "notes": "Extendable for an additional 30 days. Passport must be valid for at least 6 months."
    },
    {
        "id": 38,
        "countryName": "Serbia",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "90 gün",
        "notes": "Stay of 90 days within a 6-month period."
    },
    {
        "id": 39,
        "countryName": "Singapore",
        "visaType": "Vize Gerekmiyor (with conditions)",
        "maxStay": "30 gün",
        "notes": "Check 'Visa-Free Transit Facility' rules if transiting. Strict entry requirements."
    },
    {
        "id": 40,
        "countryName": "South Africa",
        "visaType": "Vize on Arrival (Visa Exemption)",
        "maxStay": "30 gün",
        "notes": "Passport must have at least 1 blank page for entry stamp."
    },
    {
        "id": 41,
        "countryName": "South Korea",
        "visaType": "Vize Gerekmiyor (K-ETA may apply)",
        "maxStay": "90 gün",
        "notes": "Turkish citizens may need a K-ETA (electronic travel authorization) before boarding. Check latest rules."
    },
    {
        "id": 42,
        "countryName": "Sudan",
        "visaType": "Vize on Arrival",
        "maxStay": "30 gün",
        "notes": "Not always guaranteed; best to check ahead. Travel restrictions apply in certain areas."
    },
    {
        "id": 43,
        "countryName": "Taiwan",
        "visaType": "e-Vize (some categories) veya Vize on Arrival",
        "maxStay": "14 gün (VoA)",
        "notes": "Rules can be strict—confirm details before travel."
    },
    {
        "id": 44,
        "countryName": "Tajikistan",
        "visaType": "e-Vize veya Vize on Arrival",
        "maxStay": "45 gün",
        "notes": "GBAO permit needed if traveling in certain restricted areas (e.g., Pamir region)."
    },
    {
        "id": 45,
        "countryName": "Thailand",
        "visaType": "Vize on Arrival",
        "maxStay": "15 gün",
        "notes": "VoA fee and documentation required. Check official site for updates."
    },
    {
        "id": 46,
        "countryName": "Tunisia",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "90 gün",
        "notes": "Proof of accommodation may be required. Passport validity of 6 months recommended."
    },
    {
        "id": 47,
        "countryName": "Ukraine",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "90 gün",
        "notes": "Within a 180-day period. May be subject to change due to ongoing conditions."
    },
    {
        "id": 48,
        "countryName": "Uruguay",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "90 gün",
        "notes": "Passport validity of 6 months recommended. Stay can sometimes be extended."
    },
    {
        "id": 49,
        "countryName": "Özbekistan",
        "visaType": "Vize Gerekmiyor",
        "maxStay": "30 gün",
        "notes": "Türk vatandaşları için vizesiz rejim. Geçerli pasaport gerekli."
    }
  ];

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

