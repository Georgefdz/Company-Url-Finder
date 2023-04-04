const axios = require('axios');
const XLSX = require('xlsx');

async function getWebsiteUrl(companyName) {
  try {
    const response = await axios.get(
      `https://autocomplete.clearbit.com/v1/companies/suggest?query=${encodeURIComponent(
        companyName
      )}`
    );
    const data = response.data;
    if (data.length > 0) {
      return data[0].domain;
    } else {
      return `No domain found for ${companyName}`;
    }
  } catch (error) {
    console.error(`Error fetching data for ${companyName}:`, error);
    return null;
  }
}

async function processExcelFile(inputFile, outputFile) {
  const workbook = XLSX.readFile(inputFile);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(worksheet);

  for (let row of jsonData) {
    const companyName = row['Company'];
    if (companyName) {
      const domain = await getWebsiteUrl(companyName);
      row['Domain'] = domain;
      console.log(`${companyName}: ${domain}`);
    }
  }

  const newWorksheet = XLSX.utils.json_to_sheet(jsonData);
  const newWorkbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, sheetName);
  XLSX.writeFile(newWorkbook, outputFile);
}

const inputFile = 'input.xlsx';
const outputFile = 'output.xlsx';
processExcelFile(inputFile, outputFile);
