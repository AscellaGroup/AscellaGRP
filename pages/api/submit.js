// // pages/api/submit.js


import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      personName, phone, email, businessName, industry, address,
      cyberSecurity, offensiveSecurity, defensiveSecurity, grcAudits,
      softwareDevelopment, web2Development, web3Development, gameDevelopment,
      cloudServices, staffing, hrOperations, payrollManagement, rpo,
      fullTimeHiring, contractualHiring, engage, businessDevelopmentOutsourcing,
      businessProcessOutsourcing, salesEnablement, forge, clientAcquisition,
      growthConsulting, digitalMarketing
    } = req.body;

    const data = {
      PersonName: personName,
      Phone: phone,
      Email: email,
      BusinessName: businessName,
      Industry: industry,
      Address: address,
      Cyber_Security: cyberSecurity,
      Offensive_Security: offensiveSecurity,
      Defensive_Security: defensiveSecurity,
      GRC_Audits: grcAudits,
      Software_Development: softwareDevelopment,
      Web2_Development: web2Development,
      Web3_Development: web3Development,
      Game_Development: gameDevelopment,
      Cloud_Services: cloudServices,
      Staffing: staffing,
      HR_Operations: hrOperations,
      Payroll_Management: payrollManagement,
      RPO: rpo,
      Full_Time_Hiring: fullTimeHiring,
      Contractual_Hiring: contractualHiring,
      Engage: engage,
      Business_Development_Outsourcing: businessDevelopmentOutsourcing,
      Business_Process_Outsourcing: businessProcessOutsourcing,
      Sales_Enablement: salesEnablement,
      Forge: forge,
      Client_Acquisition: clientAcquisition,
      Growth_Consulting: growthConsulting,
      Digital_Marketing: digitalMarketing,
    };

    try {
      // Google Apps Script deployment URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwOiKuxyfef1gs8FGeuM0K4GA7nFXAvNxJ2okajtWPi0zuFVQLc1kq8P1aeuGdE1id2/exec';

      const response = await axios.post(scriptURL, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      res.status(200).json(response.data);
    } catch (error) {
      console.error('Error submitting data to Google Sheets:', error.response ? error.response.data : error.message);
      res.status(500).json({ error: 'Error submitting data to Google Sheets' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}




// import axios from 'axios';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const {
//       personName, phone, email, businessName, industry, address,
//       cyberSecurity, offensiveSecurity, defensiveSecurity, grcAudits,
//       softwareDevelopment, web2Development, web3Development, gameDevelopment,
//       cloudServices, staffing, hrOperations, payrollManagement, rpo,
//       fullTimeHiring, contractualHiring, engage, businessDevelopmentOutsourcing,
//       businessProcessOutsourcing, salesEnablement, forge, clientAcquisition,
//       growthConsulting, digitalMarketing
//     } = req.body;

//     const data = {
//       data: [
//         {
//           Company: businessName,
//           First_Name: personName.split(' ')[0],
//           Last_Name: personName.split(' ')[1] || '',
//           Email: email,
//           Phone: phone,
//           Industry: industry,
//           Address: address,
//           Cyber_Security: cyberSecurity,
//           Offensive_Security: offensiveSecurity,
//           Defensive_Security: defensiveSecurity,
//           GRC_Audits: grcAudits,
//           Software_Development: softwareDevelopment,
//           Web2_Development: web2Development,
//           Web3_Development: web3Development,
//           Game_Development: gameDevelopment,
//           Cloud_Services: cloudServices,
//           Staffing: staffing,
//           HR_Operations: hrOperations,
//           Payroll_Management: payrollManagement,
//           RPO: rpo,
//           Full_Time_Hiring: fullTimeHiring,
//           Contractual_Hiring: contractualHiring,
//           Engage: engage,
//           Business_Development_Outsourcing: businessDevelopmentOutsourcing,
//           Business_Process_Outsourcing: businessProcessOutsourcing,
//           Sales_Enablement: salesEnablement,
//           Forge: forge,
//           Client_Acquisition: clientAcquisition,
//           Growth_Consulting: growthConsulting,
//           Digital_Marketing: digitalMarketing,
//         }
//       ],
//       trigger: ['approval', 'workflow', 'blueprint']
//     };

//     try {
//       const response = await axios.post('https://www.zohoapis.com/crm/v2/Leads', data, {
//         headers: {
//           'Authorization': `Zoho-oauthtoken ${process.env.ZOHO_AUTH_TOKEN}`,
//           'Content-Type': 'application/json'
//         }
//       });
//       res.status(200).json(response.data);
//     } catch (error) {
//       console.log(error)
//       console.error('Error creating lead in Zoho CRM:', error.response ? error.response.data : error.message);
//       res.status(500).json({ error: 'Error creating lead in Zoho CRM' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }


