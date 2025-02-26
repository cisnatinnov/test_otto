# test_otto
git clone https://github.com/cisnatinnov/test_otto.git
## fe
1. execute 'cd greeting-card-generator'
2. execute 'npm install' to install depedencies
3. execute 'npm start' to start the app
4. execute 'npm run test' for unit test
## be
1. execute 'cd be'
2. execute 'npm install' to install depedencies
3. change .env.example into .env and also change the value as you need
4. execute 'npm start' for production
5. execute 'npm run dev' for development, will automatically restart every time there is a code change
6. run 'npm run test' for unit testing

## migration has 2 options
1. (recommended) "sequelize.sync({ force: true }) // Use force: true to drop and recreate tables for migration"
2. execute "npm run migrate"
3. execute "npm run seed" for insert data
4. note: must empty the database before choose another option

## Rate Limit Explanation
windowMs:
This sets the time window for the rate limit. In this case, 1 * 60 * 1000 equals 60,000 milliseconds or 1 minute. Each IP address is monitored within this window.

max:
This sets the maximum number of requests allowed from a single IP address within the windowMs time window. Here, the limit is 10 requests per minute.

message:
This is the response body sent to clients who exceed the rate limit. It indicates that they need to wait before making more requests
