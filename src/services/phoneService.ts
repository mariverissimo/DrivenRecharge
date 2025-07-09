import * as phoneRepository from "../repositories/phoneRepository";
import { Phone } from "../protocols/phone";

export async function createPhone(phone: Omit<Phone, "id">): Promise<Phone> {
  const count = await phoneRepository.countPhonesByDocument(phone.document);
  if (count >= 3) {
    throw {
      type: "conflict",
      message: "Limit reached: a user can only register up to 3 phones",
    };
  }

  const existing = await phoneRepository.findPhoneByNumber(phone.number);
  if (existing) {
    throw {
      type: "conflict",
      message: "Phone number already registered",
    };
  }

  const createdPhone = await phoneRepository.insertPhone(phone);
  return createdPhone;
}

export async function listAllPhones(): Promise<Phone[]> {
  return phoneRepository.findAllPhones();
}

export async function listPhones(document: string): Promise<Phone[]> {
  return phoneRepository.findPhonesByDocument(document);
}
