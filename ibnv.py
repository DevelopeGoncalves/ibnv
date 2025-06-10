import os
import shutil
import zipfile

def baixar_site(url, pasta_destino='site'):
    print(f"Baixando o site de: {url}")

    # Cria a pasta destino
    if not os.path.exists(pasta_destino):
        os.makedirs(pasta_destino)

    # Usa wget para baixar o site completo
    os.system(f"wget --mirror --convert-links --adjust-extension --page-requisites --no-parent {url} -P {pasta_destino}")

    print("Download concluído.")

def compactar_em_zip(pasta_origem, nome_arquivo_zip='site.zip'):
    print("Compactando os arquivos...")
    shutil.make_archive(nome_arquivo_zip.replace('.zip', ''), 'zip', pasta_origem)
    print(f"Arquivo ZIP criado: {nome_arquivo_zip}")

if __name__ == "__main__":
    URL = "https://thesanctuarychurch.com"
    PASTA_DESTINO = "site"

    baixar_site(URL, PASTA_DESTINO)
    compactar_em_zip(PASTA_DESTINO)
