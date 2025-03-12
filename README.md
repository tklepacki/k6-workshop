## Wprowadzenie

Drogi Uczestniku,

Cieszę się, że zdecydowałeś się wziąć udział w warsztatach :)

Aby zweryfikować środowisko programistyczne, upewnij się, że spełniasz poniższe wymagania dotyczące narzędzi (_Wymagania_).

## Wymagania
### Narzędzia
Na warsztaty przybądź zaopatrzony w laptopa – najlepiej z systemem Windows. Upewnij się, iż laptop nie jest obwarowany, żadnym blokadami, typu brak uprawnień do instalacji narzędzi, ograniczenia dostępu do sieci (VPN) itp. 

Zainstaluj następujące oprogramowanie:

- **Visual Studio Code** - https://code.visualstudio.com/Download

- **k6** - https://dl.k6.io/msi/k6-latest-amd64.msi
  
- **Docker** - https://docs.docker.com/docker-for-windows/install/

- Przeglądarkę **Chrome** lub **Firefox** w najnowszej wersji


- Wtyczkę **Grafana k6 Browser Recorder**:
  - **Chrome**: https://chromewebstore.google.com/detail/grafana-k6-browser-record/fbanjfonbcedhifbgikmjelkkckhhidl
  lub
  - **FireFox**: https://addons.mozilla.org/en-US/firefox/addon/grafana-k6-browser-recorder/

- **GIT** - https://git-scm.com/download/win
UWAGA: Podczas instalacji, w oknie "Adjusting your PATH environment", wybierz opcję: "Use Git and optional Unix tools from the Windows Command Prompt" (ostatni przycisk).

### Rejestracja kont:

- **Grafana Cloud k6** - utwórz darmowe konto na k6 cloud: https://grafana.com/products/cloud/k6/

- **Reserved** - utwórz konto na Reserved - https://www.reserved.com/gb/en/ (wystarczy podstawowa rejestracja)

### Weryfikacja środowiska
- **k6**
	- Wpisz w konsoli: k6 i upewnij się, że wyświetlają się informacje o dostępnych komendach k6.
- **Docker**
	- Wpisz w konsoli: docker -v i upewnij się, że wyświetlana jest informacja o zainstalowanej wersji Dockera.
	
- **Pobierz obrazy Dockera za pomocą następujących komend:**
	-   docker pull grafana/grafana
	-   docker pull influxdb:1.8
   
 - **Sklonuj repozytorium:**
   - git clone https://github.com/tklepacki/k6-workshop.git
   - Przejdź do folderu repozytorium i upewnij się, że projekt został pobrany.

- **Otwórz Visual Studio Code -> Plik -> Otwórz folder (wybierz sklonowany folder projektu).**
  - Upewnij się, że wszystkie pliki projektu są widoczne w eksploratorze plików VSC.

## Notatki
Google Docs: [https://docs.google.com/document/d/1RqUe1DkDPB2K4awu-X7C8339D3F7fzcSs3kid5S84Uc/edit?usp=sharing](https://docs.google.com/document/d/1seoGdGYMqO7gnHAoMI2hwYhK9yTIo3c4flpdJWXZvag/edit?usp=sharing)

## W razie problemów
Skontaktuj się ze mną pod adresem e-mail: *t.klepacki@wp.pl*
