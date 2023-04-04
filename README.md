# Company Domain Lookup

This Node.js script reads company names from an Excel file, fetches their domain names using the Clearbit API, and writes the results to a new Excel file. This guide assumes you have basic knowledge of using the command line or terminal.

## Prerequisites

Before you begin, make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/): Download and install the appropriate version for your operating system.

## Setting Up the Project

1. Open a terminal or command prompt and navigate to the folder where you want to create your project.

2. Run the following commands to create a new folder and navigate into it:


Initialize a new Node.js project by running:


npm init -y


Install the required packages:


npm install axios xlsx

Create an input Excel file with a column named 'Company' containing the company names you want to look up. Save the file in the project folder with a name like input.xlsx. You can use any name you like, just make sure to update the inputFile variable in the script accordingly.

In the terminal or command prompt, run the script with:


node getWebsiteUrl.js


The script will read the company names from the input Excel file, fetch their domains using the Clearbit API, and write the results to a new Excel file named output.xlsx (or the name you specified for the outputFile variable in the script).