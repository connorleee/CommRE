# CommRE Instructions

**Note: Node.js is required to be installed prior to running this application

## Steps to run demo
1. Clone repo to local machine entering terminal command: `git clone https://github.com/connorleee/CommRE.git` once in the directory you would like to clone into.
2. Change directory to the cloned CommRE repo.
3. Enter command `npm install` to install all required npm packages.
4. Enter command `npm run demo` which will start up the server on port 3001 and run the React app in development mode to demo.
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Additional Notes and Disclaimers
- An express server is utilized to serve data from the source data csv file. The server contains the 3 required API endpoints: /agents, /property-types, and /property-sales.
- If database architecture was an option, I would probably have separated the incoming csv data into multiple tables (agents and property-sales) to allow easier/faster querying and formatting on the front end.
- Since there was only one table to pull data from without modifying the source data file, the front end fetching endpoints all retrieve the same data and manipulate the data on the front end as needed.
