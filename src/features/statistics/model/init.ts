import * as dal from '@/dal'
import { sample } from "effector";

import { $statistics, loadStatisticsFx } from "./private";
import { loadStatistics } from "./public";

$statistics
    .on(loadStatisticsFx.doneData, (_, statistics) => statistics)

sample({
    clock: loadStatistics,
    target: loadStatisticsFx
})

loadStatisticsFx.use(dal.getStatixtics)