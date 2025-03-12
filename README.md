## Wprowadzenie

Drogi Uczestniku,

Cieszę się, że zdecydowałeś się wziąć udział w warsztatach :)

Aby zweryfikować środowisko programistyczne, upewnij się, że spełniasz poniższe wymagania dotyczące narzędzi (_Wymagania_).

## Wymagania
### Narzędzia
Na warsztaty przybądź zaopatrzony w laptopa – najlepiej z systemem Windows. Upewnij się, iż laptop nie jest obwarowany, żadnym blokadami, typu brak uprawnień do instalacji narzędzi, ograniczenia dostępu do sieci (VPN) itp. 

Zainstaluj następujące oprogramowanie:

- **Visual Studio Code** - https://code.visualstudio.com/download

- **k6** - https://dl.k6.io/msi/k6-latest-amd64.msi
  
- **Docker**:
  - https://docs.docker.com/install/linux/docker-ce/ubuntu/ - Linux
  - https://docs.docker.com/docker-for-windows/install/ - Windows
  - https://docs.docker.com/docker-for-mac/install/ - Mac

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
	- Wpisz w konsoli: `docker -v` i upewnij się, że wyświetlana jest informacja o zainstalowanej wersji Dockera.
	
- **Pobierz obrazy Dockera za pomocą następujących komend:**
	-   `docker pull grafana/grafana`
	-   `docker pull influxdb:1.8`
   
 - **Sklonuj repozytorium:**
   - Utwórz fork repozytorium: https://github.com/tklepacki/k6-workshop.git na swoim prywatnym koncie GITHub. Jeśli nie masz konta na GitHub, utwórz go wcześniej.
   - Sklonuj sforkowane repozytorium (ze swojego prywatnego konta)
   - Wejdź do folderu z repozytorium i upewnij się, że projekt został pobrany.

- **Otwórz Visual Studio Code -> Plik -> Otwórz folder (wybierz sklonowany folder projektu).**
  - Upewnij się, że wszystkie pliki projektu są widoczne w eksploratorze plików VSC.

## W razie problemów
W razie jakichkolwiek pytań lub problemów z wykonaniem instrukcji pisz na mój adres e-mail: *t.klepacki@wp.pl*
