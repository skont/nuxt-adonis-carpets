== Setup ==
download from git and run

cd adnCarpets
npm i
npm i mssql --save

cd nxCarpets
npm i

=== .env file ===
modify or create a .env file (rename .env.example and modify the following part to match the connection:

DB_CONNECTION=mssql
DB_HOST="127.0.0.1\sqlexpress"
DB_PORT=3306
DB_USER=sa
DB_PASSWORD=123
DB_DATABASE=CarpetClean

=== Starting up ===

Adonis backend: adonis serve --dev
Nuxt Frontend: npm run dev