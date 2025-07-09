import { db } from "../database/db";
import { Phone, PhoneInput } from "../protocols/phone";

export async function insertPhone(phone: PhoneInput): Promise<Phone> {
  const { number, name, description, document, carrier_id } = phone;

  const result = await db.query<Phone>(
    `
    INSERT INTO phones (number, name, description, document, carrier_id) 
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    `,
    [number, name, description, document, carrier_id]
  );

  return result.rows[0];
}

export async function findPhonesByDocument(document: string): Promise<Phone[]> {
  const result = await db.query<Phone>(
    `SELECT * FROM phones WHERE document = $1;`,
    [document]
  );

  return result.rows;
}

export async function findPhoneByNumber(number: string): Promise<Phone | null> {
  const result = await db.query<Phone>(
    `SELECT * FROM phones WHERE number = $1;`,
    [number]
  );

  return result.rows[0] || null;
}

export async function countPhonesByDocument(document: string): Promise<number> {
  const result = await db.query<{ count: string }>(
    `SELECT COUNT(*) FROM phones WHERE document = $1;`,
    [document]
  );

  return Number(result.rows[0].count);
}

export async function findById(id: number): Promise<Phone | null> {
  const result = await db.query<Phone>(
    `SELECT * FROM phones WHERE id = $1;`,
    [id]
  );

  return result.rows[0] || null;
}
