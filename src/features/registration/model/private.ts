import { d } from "./domain";
import { RegistrationFxPayload } from "./types";

export const registrationFx = d.createEffect<RegistrationFxPayload, void, Error>()