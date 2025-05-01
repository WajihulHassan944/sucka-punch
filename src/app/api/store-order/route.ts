import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { NextResponse } from 'next/server';

// Create service account credentials
const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const doc = new GoogleSpreadsheet(
  process.env.GOOGLE_SHEET_ID,
  serviceAccountAuth
);

export async function POST(request: Request) {
  try {
    const { orderData, email } = await request.json();

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    // Add row to spreadsheet
    await sheet.addRow({
      'Order Number': orderData.orderNumber,
      'Date': new Date().toLocaleString(),
      'Customer Email': email,
      'Quantity': orderData.cartData.quantity,
      'Delivery Method': orderData.deliveryMethod.method,
      'Total Amount': `$${(parseFloat(orderData.cartData.total) + orderData.deliveryMethod.price).toFixed(2)}`,
      'Status': 'New'
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to store order:', error);
    return NextResponse.json({ error: 'Failed to store order' }, { status: 500 });
  }
} 