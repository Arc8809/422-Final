Welcome to the cvs to Json parser app!

To start this file one can run the build.sh file which will create a docker container and starts the program 

*If you wish to start on your local machine:*

cd 422-final
run npm install 
then run node src/service.js

This app is very simple just input any csv files into the inbound directory and it will automatically create a json file that matches the csv format
this json file can be found in the output directory
after the file is processed the file can be found in processed

The jason is created using the csv header creating a key value pair. The header can have any name to create the key.
Please make sure the file is a csv file


Tests

To use tests run npm test