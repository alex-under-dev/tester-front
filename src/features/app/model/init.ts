import { loadUserTokenFx } from "@/features/login/model";
import { $appState } from "./public";

$appState
    .on(loadUserTokenFx.finally, () => 'ready')