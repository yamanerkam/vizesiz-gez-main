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
        "countryName": "Albania",
        "visaType": "Visa Not Required",
        "maxStay": "90 days",
        "notes": "90 days within a 180-day period."
      },
      {
        "id": 2,
        "countryName": "Azerbaijan",
        "visaType": "eVisa or Visa on Arrival",
        "maxStay": "30 days",
        "notes": "Turkish citizens can apply online for an ASAN eVisa or obtain a visa on arrival at certain entry points."
      },
      {
        "id": 3,
        "countryName": "Bahamas",
        "visaType": "Visa Not Required",
        "maxStay": "90 days",
        "notes": "May require proof of onward/return ticket and sufficient funds."
      },
      {
        "id": 4,
        "countryName": "Barbados",
        "visaType": "Visa Not Required",
        "maxStay": "90 days",
        "notes": "Immigration officers may require proof of accommodation and sufficient funds."
      },
      {
        "id": 5,
        "countryName": "Belarus",
        "visaType": "Visa Not Required (with conditions)",
        "maxStay": "30 days",
        "notes": "Visa-free entry typically via Minsk National Airport only, with certain conditions (e.g., proof of travel insurance). Check official sources."
      },
      {
        "id": 6,
        "countryName": "Bosnia and Herzegovina",
        "visaType": "Visa Not Required",
        "maxStay": "90 days",
        "notes": "Stay of 90 days within a 180-day period."
      },
      {
        "id": 7,
        "countryName": "Brazil",
        "visaType": "Visa Not Required",
        "maxStay": "90 days",
        "notes": "Possible to extend once for an additional 90 days (total 180 days/year)."
      },
      {
        "id": 8,
        "countryName": "Chile",
        "visaType": "Visa Not Required",
        "maxStay": "90 days",
        "notes": "Passport validity of 6 months is recommended."
      },
      {
        "id": 9,
        "countryName": "Colombia",
        "visaType": "Visa Not Required",
        "maxStay": "90 days",
        "notes": "Can be extended for a total of 180 days per calendar year."
      },
      {
        "id": 10,
        "countryName": "Ecuador",
        "visaType": "Visa Not Required",
        "maxStay": "90 days",
        "notes": "Stay can sometimes be extended; check with local immigration for details."
      },
      {
        "id": 11,
        "countryName": "El Salvador",
        "visaType": "Visa Not Required",
        "maxStay": "90 days",
        "notes": "Part of the CA-4 Agreement (Guatemala, Honduras, Nicaragua, El Salvador). Stay counts collectively across these countries."
      },
      {
        "id": 12,
        "countryName": "Georgia",
        "visaType": "Visa Not Required",
        "maxStay": "1 year",
        "notes": "One of the most generous visa-free stays for Turkish citizens."
      },
      {
        "id": 13,
        "countryName": "Honduras",
        "visaType": "Visa Not Required",
        "maxStay": "90 days",
        "notes": "Part of the CA-4 Agreement; time spent in Guatemala, El Salvador, and Nicaragua counts toward the total."
      },
      {
        "id": 14,
        "countryName": "Hong Kong (SAR China)",
        "visaType": "Visa Not Required",
        "maxStay": "90 days",
        "notes": "Might need proof of onward ticket; different from Mainland China, which requires a visa."
      },
      {
        "id": 15,
        "countryName": "Iran",
        "visaType": "Visa on Arrival or eVisa",
        "maxStay": "30 days",
        "notes": "Available at major airports. Extension possible for tourist stays."
      },
      {
        "id": 16,
        "countryName": "Iraq (Some Regions)",
        "visaType": "Visa on Arrival in KRI (Kurdistan Region)",
        "maxStay": "30 days",
        "notes": "VoA typically granted only for Iraqi Kurdistan Region. For other regions of Iraq, a visa may be required beforehand."
      },
      {
        "id": 17,
        "countryName": "Japan",
        "visaType": "Visa Not Required (may vary)",
        "maxStay": "Up to 90 days",
        "notes": "Historically visa-free for Turkish citizens on short visits, but Japan introduced eVisa for some passports. Check most recent regulations."
      },
      {
        "id": 18,
        "countryName": "Jordan",
        "visaType": "Visa on Arrival",
        "maxStay": "30 days",
        "notes": "Fee required on arrival. Jordan Pass can waive the visa fee if purchased online before travel."
      },
      {
        "id": 19,
        "countryName": "Kazakhstan",
        "visaType": "Visa Not Required",
        "maxStay": "30 days",
        "notes": "Must have proof of onward travel and sufficient funds."
      },
      {
        "id": 20,
        "countryName": "Kosovo",
        "visaType": "Visa Not Required",
        "maxStay": "90 days",
        "notes": "Stay of 90 days within a 180-day period."
      },
      {
        "id": 21,
        "countryName": "Lebanon",
        "visaType": "Visa on Arrival",
        "maxStay": "90 days",
        "notes": "Free VoA for Turkish citizens at Beirut Airport, subject to conditions (e.g., no Israeli entry stamp)."
      },
      {
        "id": 22,
        "countryName": "Macau (SAR China)",
        "visaType": "Visa on Arrival",
        "maxStay": "30 days",
        "notes": "Check with local authorities or your airline for the latest rules."
      },
      {
        "id": 23,
        "countryName": "Malaysia",
        "visaType": "Visa Not Required",
        "maxStay": "90 days",
        "notes": "No visa needed for stays up to 90 days."
      },
      {
        "id": 24,
        "countryName": "Maldives",
        "visaType": "Visa on Arrival",
        "maxStay": "30 days",
        "notes": "Must have a confirmed hotel booking and sufficient funds."
      },
      {
        "id": 25,
        "countryName": "Moldova",
        "visaType": "Visa Not Required",
        "maxStay": "90 days",
        "notes": "90 days within any 180-day period."
      },
      {
        "id": 26,
        "countryName": "Mongolia",
        "visaType": "Visa Not Required",
        "maxStay": "30 days",
        "notes": "Stays longer than 30 days require registration with immigration."
      },
      {
        "id": 27,
        "countryName": "Montenegro",
        "visaType": "Visa Not Required",
        "maxStay": "90 days",
        "notes": "Stay of 90 days within a 6-month period."
      },
      {
        "id": 28,
        "countryName": "Morocco",
        "visaType": "Visa Not Required",
        "maxStay": "90 days",
        "notes": "Passport must be valid for at least 6 months on arrival."
      },
      {
        "id": 29,
        "countryName": "Nepal",
        "visaType": "Visa on Arrival",
        "maxStay": "15/30/90 days (depending on fee)",
        "notes": "Visa fees vary based on desired length of stay."
      },
      {
        "id": 30,
        "countryName": "Nicaragua",
        "visaType": "Visa Not Required",
        "maxStay": "90 days",
        "notes": "Part of the CA-4 region. Time in Guatemala, El Salvador, and Honduras is combined."
      },
      {
        "id": 31,
        "countryName": "North Macedonia",
        "visaType": "Visa Not Required",
        "maxStay": "90 days",
        "notes": "90 days within a 180-day period."
      },
      {
        "id": 32,
        "countryName": "Northern Cyprus (TRNC)",
        "visaType": "Visa Not Required",
        "maxStay": "No set limit",
        "notes": "Recognized only by Türkiye. Turkish citizens have unrestricted access; international flights must connect via Türkiye."
      },
      {
        "id": 33,
        "countryName": "Oman",
        "visaType": "Visa on Arrival or eVisa",
        "maxStay": "10 days (VoA) / 30 days (eVisa)",
        "notes": "Check current rules, as Oman frequently updates eVisa policy."
      },
      {
        "id": 34,
        "countryName": "Palestinian Territories",
        "visaType": "Visa Not Required",
        "maxStay": "Determined by Israeli border authorities",
        "notes": "Entry is controlled by Israel; restrictions may vary."
      },
      {
        "id": 35,
        "countryName": "Panama",
        "visaType": "Visa Not Required",
        "maxStay": "90 days",
        "notes": "Proof of onward travel and sufficient funds required."
      },
      {
        "id": 36,
        "countryName": "Paraguay",
        "visaType": "Visa Not Required",
        "maxStay": "90 days",
        "notes": "Passport validity of 6 months recommended."
      },
      {
        "id": 37,
        "countryName": "Qatar",
        "visaType": "Visa on Arrival",
        "maxStay": "30 days",
        "notes": "Extendable for an additional 30 days. Passport must be valid for at least 6 months."
      },
      {
        "id": 38,
        "countryName": "Serbia",
        "visaType": "Visa Not Required",
        "maxStay": "90 days",
        "notes": "Stay of 90 days within a 6-month period."
      },
      {
        "id": 39,
        "countryName": "Singapore",
        "visaType": "Visa Not Required (with conditions)",
        "maxStay": "30 days",
        "notes": "Check ‘Visa-Free Transit Facility’ rules if transiting. Strict entry requirements."
      },
      {
        "id": 40,
        "countryName": "South Africa",
        "visaType": "Visa on Arrival (Visa Exemption)",
        "maxStay": "30 days",
        "notes": "Passport must have at least 1 blank page for entry stamp."
      },
      {
        "id": 41,
        "countryName": "South Korea",
        "visaType": "Visa Not Required (K-ETA may apply)",
        "maxStay": "90 days",
        "notes": "Turkish citizens may need a K-ETA (electronic travel authorization) before boarding. Check latest rules."
      },
      {
        "id": 42,
        "countryName": "Sudan",
        "visaType": "Visa on Arrival",
        "maxStay": "30 days",
        "notes": "Not always guaranteed; best to check ahead. Travel restrictions apply in certain areas."
      },
      {
        "id": 43,
        "countryName": "Taiwan",
        "visaType": "eVisa (some categories) or Visa on Arrival",
        "maxStay": "14 days (VoA)",
        "notes": "Rules can be strict—confirm details before travel."
      },
      {
        "id": 44,
        "countryName": "Tajikistan",
        "visaType": "eVisa or Visa on Arrival",
        "maxStay": "45 days",
        "notes": "GBAO permit needed if traveling in certain restricted areas (e.g., Pamir region)."
      },
      {
        "id": 45,
        "countryName": "Thailand",
        "visaType": "Visa on Arrival",
        "maxStay": "15 days",
        "notes": "VoA fee and documentation required. Check official site for updates."
      },
      {
        "id": 46,
        "countryName": "Tunisia",
        "visaType": "Visa Not Required",
        "maxStay": "90 days",
        "notes": "Proof of accommodation may be required. Passport validity of 6 months recommended."
      },
      {
        "id": 47,
        "countryName": "Ukraine",
        "visaType": "Visa Not Required",
        "maxStay": "90 days",
        "notes": "Within a 180-day period. May be subject to change due to ongoing conditions."
      },
      {
        "id": 48,
        "countryName": "Uruguay",
        "visaType": "Visa Not Required",
        "maxStay": "90 days",
        "notes": "Passport validity of 6 months recommended. Stay can sometimes be extended."
      },
      {
        "id": 49,
        "countryName": "Uzbekistan",
        "visaType": "Visa Not Required",
        "maxStay": "30 days",
        "notes": "Introduced visa-free regime for Turkish citizens. Must have valid passport."
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

