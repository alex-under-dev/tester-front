import { sample } from "effector";

import { clearingProgress, clearingProgressFx } from "./private";
import * as dal from '../../../dal'



sample({
    clock: clearingProgress,
    target: clearingProgressFx
})


clearingProgressFx.use(dal.clearPgogress)