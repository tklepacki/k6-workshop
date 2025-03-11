Oto przetłumaczony plik README w formacie Markdown:

```markdown
## Wprowadzenie

Drogi Uczestniku,

Cieszę się, że zdecydowałeś się wziąć udział w warsztatach :)

Aby zweryfikować środowisko programistyczne, upewnij się, że spełniasz poniższe wymagania dotyczące narzędzi (_Wymagania_).

## Wymagania

### Narzędzia

Przygotuj komputer/laptop z systemem operacyjnym Windows (zalecane Windows 10 lub 11) lub MacOS. Zainstaluj następujące narzędzia:

- **Visual Studio Code** - [Pobierz](https://code.visualstudio.com/Download)

- **k6** - [Pobierz](https://dl.k6.io/msi/k6-latest-amd64.msi)

- **Docker** - [Instrukcja instalacji](https://docs.docker.com/docker-for-windows/install/)

- **Przeglądarka Chrome** lub **Firefox** w najnowszej wersji

- **Wtyczka Grafana k6 Browser Recorder:**
  - **Chrome**: [Pobierz](https://chromewebstore.google.com/detail/grafana-k6-browser-record/fbanjfonbcedhifbgikmjelkkckhhidl)
  - **Firefox**: [Pobierz](https://addons.mozilla.org/en-US/firefox/addon/grafana-k6-browser-recorder/)

- **GIT** - [Pobierz](https://git-scm.com/download/win)  
  **UWAGA:** Podczas instalacji, w oknie _"Adjusting your PATH environment"_, wybierz opcję:  
  _"Use Git and optional Unix tools from the Windows Command Prompt"_ (ostatni przycisk radiowy).

### Rejestracja kont

- **Grafana Cloud k6** - załóż darmowe konto w chmurze k6: [Zarejestruj się](https://grafana.com/products/cloud/k6/)

- **Reserved** - utwórz konto w serwisie [Reserved](https://www.reserved.com/gb/en/) (wystarczy podstawowa rejestracja)

### Weryfikacja środowiska

- **k6**
  - Wpisz w konsoli:  
    ```sh
    k6
    ```
  - Upewnij się, że wyświetlają się informacje o dostępnych poleceniach k6.

- **Docker**
  - Wpisz w konsoli:  
    ```sh
    docker -v
    ```
  - Upewnij się, że wyświetla się informacja o zainstalowanej wersji Dockera.

- Pobierz obrazy Dockera za pomocą następujących poleceń:
  ```sh
  docker pull grafana/grafana
  docker pull influxdb:1.8
  ```

- Sklonuj repozytorium:
  ```sh
  git clone https://github.com/tklepacki/k6-workshop.git
  ```
- Przejdź do folderu repozytorium i upewnij się, że projekt został poprawnie pobrany.

- Otwórz Visual Studio Code → _File_ → _Open Folder_ (Wybierz folder pobranego projektu)  
  Upewnij się, że wszystkie pliki projektu są widoczne w eksploratorze plików VSC.

## Notatki

Dokument Google: [Google Docs](https://docs.google.com/document/d/1RqUe1DkDPB2K4awu-X7C8339D3F7fzcSs3kid5S84Uc/edit?usp=sharing)

## W razie problemów

Skontaktuj się ze mną pod adresem e-mail: *t.klepacki@wp.pl*
```

Markdown został zachowany, więc formatowanie będzie wyglądać prawidłowo w edytorach tekstowych oraz na platformach takich jak GitHub czy Notion. 🚀
