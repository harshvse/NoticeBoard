# About
Blog like notice board for providing latest information tot he students.

# Installation

### How to install
```
git clone https://github.com/harshvse/NoticeBoard
```
Move to the cloned directory and you will find two folders
laravelcrud and reactfrontend

```
cd NoticeBoard
```
First we move to reactfrontend folder
```
cd reactfrontend
npm install
npm start
```
then open another terminal and move to laravelcrud folder
```
cd ../laravelcrud/
composer install
```

**Create a file named .env and copy the contents of .env.example into .env file.Now fill the Database name and password for phpmyadmin**

Generate the php application key :
```
php artisan key:generate
php artisan migrate
```

Now run
```
php artisan serve
```

Make sure mysql server is running and you will have both frontend and backend running
