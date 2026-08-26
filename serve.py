"""
Ne Yesem? — gelistirme sunucusu.

Standart `python -m http.server` tarayiciya dosyalari onbellege alma izni
verdigi icin yapilan degisiklikler Ctrl+F5'e ragmen bazen ekrana yansimiyor.
Bu sunucu her yanita "onbellege alma" basligi ekler; boylece her yenilemede
dosyalarin guncel hali gelir.

Kullanim:  python serve.py
Adres:     http://localhost:5173
"""

import http.server

PORT = 5173


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    # Tarayicinin "degismedi mi?" sorusuna her zaman "degisti" de:
    # boylece 304 yerine dosyanin guncel hali dondurulur.
    def send_header(self, keyword, value):
        if keyword.lower() == "last-modified":
            return
        super().send_header(keyword, value)


if __name__ == "__main__":
    # ThreadingHTTPServer: tarayici birden fazla istegi ayni anda actiginda
    # tek is parcacikli sunucunun kilitlenmesini onler.
    http.server.ThreadingHTTPServer.allow_reuse_address = True
    with http.server.ThreadingHTTPServer(("", PORT), NoCacheHandler) as httpd:
        print(f"Ne Yesem? -> http://localhost:{PORT}  (onbellek kapali)")
        print("Durdurmak icin Ctrl+C")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nSunucu durduruldu.")
