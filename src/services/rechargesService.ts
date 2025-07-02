import * as rechargesRepository from "../repositories/rechargesRepository";
import * as phonesRepository from "../repositories/phoneRepository";
import { notFoundError, conflictError } from "../utils/errorUtils";
import { RechargeInsertData } from "../protocols/rechargeProtocol";

export async function createRecharge(data: RechargeInsertData) {
  const { phone_id, amount } = data;

  const phone = await phonesRepository.findById(phone_id);
  if (!phone) {
    throw notFoundError("Telefone não encontrado");
  }

  if (amount < 10 || amount > 1000) {
    throw conflictError("Valor inválido, deve estar entre R$10 e R$1000");
  }

  return rechargesRepository.create(data);
}

export async function listRecharges(number: string) {
  return rechargesRepository.findByNumber(number);
}
