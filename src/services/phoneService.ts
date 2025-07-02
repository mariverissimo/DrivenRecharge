import * as phoneRepository from "../repositories/phoneRepository";
import { Phone } from "../protocols/phone";

export async function createPhone(phone: Omit<Phone, "id">) {
  const count = await phoneRepository.countPhonesByDocument(phone.document);
  if (count >= 3) throw { type: "conflict", message: "Limit reached" };

  const existing = await phoneRepository.findPhoneByNumber(phone.number);
  if (existing) throw { type: "conflict", message: "Number already exists" };

  await phoneRepository.insertPhone(phone);
}

export async function listPhones(document: string) {
  return phoneRepository.findPhonesByDocument(document);
}
